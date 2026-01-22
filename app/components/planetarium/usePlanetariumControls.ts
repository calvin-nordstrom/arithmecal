'use client';

import { useEffect, useRef } from 'react';
import { Euler, MathUtils, PerspectiveCamera } from 'three';
import { useThree, useFrame } from '@react-three/fiber';
import { distance, ray, rotationBetweenVectors } from './util/coordinateUtil';

const DEG2RAD = Math.PI / 180;
const MAX_PITCH = 89.9 * DEG2RAD;

const MIN_FOV = 1;
const MAX_FOV = 90;

export function usePlanetariumControls() {
  const { camera, gl } = useThree();
  const pCamera = camera as PerspectiveCamera;

  // Drag state
  const isDragging = useRef(false);
  const dragStartNDC = useRef({ x: 0, y: 0 });

  // Camera orientation
  const yaw = useRef(0);
  const pitch = useRef(0);

  // Multi-touch state
  const pointers = useRef<Map<number, { x: number; y: number }>>(new Map());
  const lastPinchDistance = useRef<number | null>(null);
  const wasPinching = useRef(false); // prevents snap after pinch

  useEffect(() => {
    const canvas = gl.domElement;

    /** --- POINTER EVENTS --- **/

    function onPointerDown(e: PointerEvent) {
      e.preventDefault();
      e.stopPropagation();

      canvas.setPointerCapture(e.pointerId);
      pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

      isDragging.current = pointers.current.size === 1 && !wasPinching.current;
      lastPinchDistance.current = null;

      // Initialize drag anchor only if starting a single-finger drag
      if (isDragging.current) {
        const rect = canvas.getBoundingClientRect();
        dragStartNDC.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        dragStartNDC.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      }
    }

    function onPointerMove(e: PointerEvent) {
      if (!pointers.current.has(e.pointerId)) {
        return;
      }
      pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

      const rect = canvas.getBoundingClientRect();

      // --- PINCH ZOOM ---
      if (pointers.current.size === 2) {
        e.preventDefault();

        const [a, b] = Array.from(pointers.current.values());
        const pinchDist = distance(a, b);

        if (lastPinchDistance.current !== null) {
          const delta = pinchDist - lastPinchDistance.current;
          const zoomFactor = Math.exp(-delta * 0.002);

          // Midpoint in NDC
          const midX = (a.x + b.x) / 2;
          const midY = (a.y + b.y) / 2;
          const ndcX = ((midX - rect.left) / rect.width) * 2 - 1;
          const ndcY = -((midY - rect.top) / rect.height) * 2 + 1;

          // Ray before zoom
          const before = ray(ndcX, ndcY, pCamera);

          // Apply zoom
          pCamera.fov = MathUtils.clamp(pCamera.fov * zoomFactor, MIN_FOV, MAX_FOV);
          pCamera.updateProjectionMatrix();

          // Ray after zoom
          const after = ray(ndcX, ndcY, pCamera);
          const q = rotationBetweenVectors(before, after);
          pCamera.quaternion.premultiply(q);

          // Sync yaw/pitch
          const euler = new Euler().setFromQuaternion(pCamera.quaternion, 'YXZ');
          yaw.current = euler.y;
          pitch.current = Math.max(-MAX_PITCH, Math.min(MAX_PITCH, euler.x));
        }

        lastPinchDistance.current = pinchDist;
        wasPinching.current = true;
        isDragging.current = false; // suspend single-finger drag during pinch
        return;
      }

      // --- SINGLE-FINGER DRAG ---
      if (!isDragging.current) {
        return; // either pinch just happened, or not enough pointers
      }
      e.preventDefault();

      const pointer = pointers.current.get(e.pointerId)!;
      const ndcX = ((pointer.x - rect.left) / rect.width) * 2 - 1;
      const ndcY = -((pointer.y - rect.top) / rect.height) * 2 + 1;

      const before = ray(dragStartNDC.current.x, dragStartNDC.current.y, pCamera);
      const after = ray(ndcX, ndcY, pCamera);

      const q = rotationBetweenVectors(before, after);
      pCamera.quaternion.premultiply(q);

      const euler = new Euler().setFromQuaternion(pCamera.quaternion, 'YXZ');
      yaw.current = euler.y;
      pitch.current = Math.max(-MAX_PITCH, Math.min(MAX_PITCH, euler.x));

      dragStartNDC.current.x = ndcX;
      dragStartNDC.current.y = ndcY;
    }

    function onPointerUp(e: PointerEvent) {
      pointers.current.delete(e.pointerId);
      canvas.releasePointerCapture(e.pointerId);

      if (pointers.current.size === 0) {
        // all fingers lifted: reset pinch flag
        wasPinching.current = false;
        isDragging.current = false;
        lastPinchDistance.current = null;
      } else if (pointers.current.size === 1) {
        // get the remaining pointer safely
        const iterator = pointers.current.values();
        const remainingPointer = iterator.next().value;
        
        if (remainingPointer) {
          const rect = canvas.getBoundingClientRect();
          dragStartNDC.current.x = ((remainingPointer.x - rect.left) / rect.width) * 2 - 1;
          dragStartNDC.current.y = -((remainingPointer.y - rect.top) / rect.height) * 2 + 1;
          isDragging.current = true;
        }
      }
    }

    function onWheel(e: WheelEvent) {
      e.preventDefault();
      e.stopPropagation();

      const rect = canvas.getBoundingClientRect();
      const ndcX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ndcY = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      const before = ray(ndcX, ndcY, pCamera);

      const zoomFactor = Math.exp(e.deltaY * 0.001);
      pCamera.fov = MathUtils.clamp(pCamera.fov * zoomFactor, MIN_FOV, MAX_FOV);
      pCamera.updateProjectionMatrix();

      const after = ray(ndcX, ndcY, pCamera);
      const q = rotationBetweenVectors(before, after);
      pCamera.quaternion.premultiply(q);

      const euler = new Euler().setFromQuaternion(pCamera.quaternion, 'YXZ');
      yaw.current = euler.y;
      pitch.current = Math.max(-MAX_PITCH, Math.min(MAX_PITCH, euler.x));
    }

    // --- Event listeners ---
    const listenerOpts = { passive: false };
    canvas.addEventListener('pointerdown', onPointerDown, listenerOpts);
    canvas.addEventListener('pointermove', onPointerMove, listenerOpts);
    canvas.addEventListener('pointerup', onPointerUp, listenerOpts);
    canvas.addEventListener('pointerleave', onPointerUp, listenerOpts);
    canvas.addEventListener('pointercancel', onPointerUp, listenerOpts);
    canvas.addEventListener('wheel', onWheel, listenerOpts);

    return () => {
      canvas.removeEventListener('pointerdown', onPointerDown);
      canvas.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('pointerup', onPointerUp);
      canvas.removeEventListener('pointerleave', onPointerUp);
      canvas.removeEventListener('pointercancel', onPointerUp);
      canvas.removeEventListener('wheel', onWheel);
    };
  }, [gl]);

  /** --- Sync camera quaternion each frame --- **/
  useFrame(() => {
    const euler = new Euler(pitch.current, yaw.current, 0, 'YXZ');
    camera.quaternion.setFromEuler(euler);
  });
}
