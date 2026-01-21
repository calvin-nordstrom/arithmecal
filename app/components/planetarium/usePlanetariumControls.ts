'use client';

import { useEffect, useRef } from 'react';
import { Euler } from 'three';
import { useThree, useFrame } from '@react-three/fiber';

const DEG2RAD = Math.PI / 180;
const MAX_PITCH = 89.9 * DEG2RAD;

const SENSITIVITY = 0.0015;

export function usePlanetariumControls() {
  const { camera, gl } = useThree();

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

      yaw.current += dx * SENSITIVITY;
      pitch.current += dy * SENSITIVITY;

      pitch.current = Math.max(-MAX_PITCH, Math.min(MAX_PITCH, pitch.current));
    }

    function onPointerUp(e: PointerEvent) {
      isDragging.current = false;
      canvas.releasePointerCapture(e.pointerId);
    }

    canvas.addEventListener('pointerdown', onPointerDown);
    canvas.addEventListener('pointermove', onPointerMove);
    canvas.addEventListener('pointerup', onPointerUp);
    canvas.addEventListener('pointerleave', onPointerUp);

    return () => {
      canvas.removeEventListener('pointerdown', onPointerDown);
      canvas.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('pointerup', onPointerUp);
      canvas.removeEventListener('pointerleave', onPointerUp);
    };
  }, [gl]);

  useFrame(() => {
    const euler = new Euler(pitch.current, yaw.current, 0, 'YXZ');
    camera.quaternion.setFromEuler(euler);
  });
}
