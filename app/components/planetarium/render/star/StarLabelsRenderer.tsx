'use client';

import { useMemo, useRef } from 'react';
import { Html } from '@react-three/drei';
import { Vector3 } from 'three';
import { useFrame, useThree } from '@react-three/fiber';

const MIN_MAG = -1.5;
const MAX_MAG = 6.5;

const MIN_FONT = 8;
const MAX_FONT = 20;

function magnitudeToSize(mag: number) {
  const m = Math.min(MAX_MAG, Math.max(MIN_MAG, mag));
  const t = 1 - (m - MIN_MAG) / (MAX_MAG - MIN_MAG);
  const eased = Math.pow(t, 0.5);
  return MIN_FONT + eased * (MAX_FONT - MIN_FONT);
}

export interface RenderStarLabel {
  direction: Vector3;
  magnitude: number;
  label?: string;
}

export default function StarLabelsRenderer({
  stars
}: { stars: RenderStarLabel[] }) {
  const { camera } = useThree();
  
  const cameraForward = useMemo(() => new Vector3(), []);
  const labelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useFrame(() => {
    camera.getWorldDirection(cameraForward);

    stars.forEach((star, i) => {
      const el = labelRefs.current[i];
      if (!el || !star.label) {
        return;
      }
    });
  });

  return (
    <>
      {stars.map((s, i) => {
        if (!s.label) {
          return null;
        }

        return (
          <Html
            className='star-label'
            key={i}
            position={s.direction}
            center
            style={{
              fontSize: `${magnitudeToSize(s.magnitude)}px`,
              transform: 'translate(-50%, -150%)',
            }}
          >
            {s.label}
          </Html>
        );
      })}
    </>
  );
}
