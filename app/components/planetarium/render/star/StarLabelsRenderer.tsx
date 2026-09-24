'use client';

import { useMemo, type MutableRefObject } from 'react';
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
  stars,
  labelRefs,
}: {
  stars: RenderStarLabel[];
  labelRefs: MutableRefObject<(HTMLDivElement | null)[]>;
}) {
  const { camera, size } = useThree();
  const pCamera = camera as PerspectiveCamera;
  
  const cameraForward = useMemo(() => new Vector3(), []);
  const projectedPosition = useMemo(() => new Vector3(), []);

  useFrame(() => {
    camera.getWorldDirection(cameraForward);
    const fov = pCamera.fov;

    stars.forEach((star, i) => {
      const el = labelRefs.current[i];
      if (!el || !star.label) {
        return;
      }

      const dot = cameraForward.dot(star.direction);

      const v = projectedPosition.copy(star.direction).project(camera);
      const inFrustum =
        v.z >= -1 && v.z <= 1 &&
        v.x >= -1 && v.x <= 1 &&
        v.y >= -1 && v.y <= 1;

      const maxMag = starLabelRenderPolicy.maxMagnitude(fov);
      const isVisible =
        dot > 0 &&
        inFrustum &&
        star.magnitude <= maxMag;

      el.style.visibility = isVisible ? 'visible' : 'hidden';
      el.style.opacity = isVisible ? '1' : '0';
      el.style.transform = `translate3d(${(v.x + 1) * size.width * 0.5}px, ${(1 - v.y) * size.height * 0.5}px, 0) translate(-50%, -150%)`;
    });
  });

  return null;
}
