'use client';

import { useEffect, useRef } from 'react';
import { Euler, MathUtils, PerspectiveCamera } from 'three';
import { useThree, useFrame } from '@react-three/fiber';
import { ray, rotationBetweenVectors } from './util/coordinateUtil';

const DEG2RAD = Math.PI / 180;
const MAX_PITCH = 89.9 * DEG2RAD;

const SENSITIVITY = 0.0015;

const MIN_FOV = 1;
const MAX_FOV = 120;

export function usePlanetariumControls() {
  const { camera, gl } = useThree();

  const pCamera = camera as PerspectiveCamera;

  const isDragging = useRef(false);
  const lastX = useRef(0);
  const lastY = useRef(0);

  const yaw = useRef(0);
  const pitch = useRef(0);

  useEffect(() => {
    const canvas = gl.domElement;

    function onPointerDown(e: PointerEvent) {
      isDragging.current = true;
      lastX.current = e.clientX;
      lastY.current = e.clientY;
      canvas.setPointerCapture(e.pointerId);
    }

    function onPointerMove(e: PointerEvent) {
      if (!isDragging.current) {
        return;
      }

      const dx = e.clientX - lastX.current;
      const dy = e.clientY - lastY.current;
      lastX.current = e.clientX;
      lastY.current = e.clientY;

      yaw.current += dx * SENSITIVITY * pCamera.fov / 50;
      pitch.current += dy * SENSITIVITY * pCamera.fov / 50;

      pitch.current = Math.max(-MAX_PITCH, Math.min(MAX_PITCH, pitch.current));
    }

    function onPointerUp(e: PointerEvent) {
      isDragging.current = false;
      canvas.releasePointerCapture(e.pointerId);
    }

    function onWheel(e: WheelEvent) {
      e.preventDefault();

      const rect = canvas.getBoundingClientRect();
      const ndcX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ndcY = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      // Ray BEFORE zoom
      const before = ray(ndcX, ndcY, pCamera);

      // Apply zoom
      const zoomFactor = Math.exp(e.deltaY * 0.001);
      pCamera.fov = MathUtils.clamp(
        pCamera.fov * zoomFactor,
        MIN_FOV,
        MAX_FOV
      );
      pCamera.updateProjectionMatrix();

      // Ray AFTER zoom
      const after = ray(ndcX, ndcY, pCamera);

      // Rotate camera to compensate
      const q = rotationBetweenVectors(before, after);
      pCamera.quaternion.premultiply(q);

      // Sync yaw/pitch from quaternion
      const euler = new Euler().setFromQuaternion(pCamera.quaternion, 'YXZ');

      yaw.current = euler.y;
      pitch.current = Math.max(-MAX_PITCH, Math.min(MAX_PITCH, euler.x));
    }

    canvas.addEventListener('pointerdown', onPointerDown);
    canvas.addEventListener('pointermove', onPointerMove);
    canvas.addEventListener('pointerup', onPointerUp);
    canvas.addEventListener('pointerleave', onPointerUp);
    canvas.addEventListener('wheel', onWheel);

    return () => {
      canvas.removeEventListener('pointerdown', onPointerDown);
      canvas.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('pointerup', onPointerUp);
      canvas.removeEventListener('pointerleave', onPointerUp);
      canvas.removeEventListener('wheel', onWheel);
    };
  }, [gl]);

  useFrame(() => {
    const euler = new Euler(pitch.current, yaw.current, 0, 'YXZ');
    camera.quaternion.setFromEuler(euler);
  });
}
