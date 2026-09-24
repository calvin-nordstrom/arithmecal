import { useMemo, type MutableRefObject } from 'react';
import { Vector3 } from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { altAzToVector } from '../../util/coordinateUtil';

export const cardinalDirections = [
  { label: 'N', az: 0 },
  { label: 'NE', az: 45 },
  { label: 'E', az: 90 },
  { label: 'SE', az: 135 },
  { label: 'S', az: 180 },
  { label: 'SW', az: 225 },
  { label: 'W', az: 270 },
  { label: 'NW', az: 315 },
];

export default function CardinalLabelsRenderer({
  labelRefs,
}: {
  labelRefs: MutableRefObject<(HTMLDivElement | null)[]>;
}) {
  const { camera, size } = useThree();
  const cameraForward = useMemo(() => new Vector3(), []);
  const projectedPosition = useMemo(() => new Vector3(), []);
  const positions = useMemo(
    () => cardinalDirections.map((direction) => altAzToVector(0, direction.az)),
    []
  );

  useFrame(() => {
    camera.getWorldDirection(cameraForward);

    positions.forEach((position, i) => {
      const el = labelRefs.current[i];
      if (!el) {
        return;
      }

      const projected = projectedPosition.copy(position).project(camera);
      const isVisible =
        position.dot(cameraForward) > 0 &&
        projected.z >= -1 && projected.z <= 1 &&
        projected.x >= -1 && projected.x <= 1 &&
        projected.y >= -1 && projected.y <= 1;

      el.style.visibility = isVisible ? 'visible' : 'hidden';
      el.style.transform = `translate3d(${(projected.x + 1) * size.width * 0.5}px, ${(1 - projected.y) * size.height * 0.5}px, 0) translate(-50%, -50%)`;
    });
  });

  return null;
}
