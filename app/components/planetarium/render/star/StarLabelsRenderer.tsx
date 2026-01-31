'use client';

import { useMemo, useRef } from 'react';
import { Html } from '@react-three/drei';
import { PerspectiveCamera, Vector3 } from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { LabelRenderPolicy } from '../LabelRenderPolicy';

const starLabelRenderPolicy: LabelRenderPolicy = {
  maxMagnitude: (fov) => {
    const fovMin = 1;
    const fovMax = 90;

    const magMin = 1.0;
    const magMax = 6.5;

    const t = Math.min(
      1,
      Math.max(0, (fovMax - fov) / (fovMax - fovMin))
    );

    const eased = Math.pow(t, 2);

    return magMin + eased * (magMax - magMin);
  },
};

export interface RenderStarLabel {
  direction: Vector3;
  magnitude: number;
  label?: string;
}

export default function StarLabelsRenderer({
  stars
}: { stars: RenderStarLabel[] }) {
  const { camera } = useThree();
  const pCamera = camera as PerspectiveCamera;
  
  const cameraForward = useMemo(() => new Vector3(), []);
  const labelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useFrame(() => {
    camera.getWorldDirection(cameraForward);
    const fov = pCamera.fov;

    stars.forEach((star, i) => {
      const el = labelRefs.current[i];
      if (!el || !star.label) {
        return;
      }

      const dot = cameraForward.dot(star.direction);

      const v = star.direction.clone().project(camera);
      const inFrustum =
        v.z >= -1 && v.z <= 1 &&
        v.x >= -1 && v.x <= 1 &&
        v.y >= -1 && v.y <= 1;

      if (dot <= 0 || !inFrustum) {
        el.style.visibility = 'hidden';
        return;
      }

      const maxMag = starLabelRenderPolicy.maxMagnitude(fov);
      const eligible = star.magnitude <= maxMag;

      if (eligible) {
        el.style.visibility = 'visible';
        requestAnimationFrame(() => {
          el.style.opacity = '1';
        });
      } else {
        requestAnimationFrame(() => {
          el.style.opacity = '0';
        });
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
            ref={el => { labelRefs.current[i] = el; }}
            key={i}
            position={s.direction}
            style={{
              transform: 'translate(-50%, -150%)',
              fontSize: '16px',
            }}
          >
            {s.label}
          </Html>
        );
      })}
    </>
  );
}
