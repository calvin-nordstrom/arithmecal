import { Html } from '@react-three/drei';
import { Vector3 } from 'three';
import { useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { altAzToVector } from '../coordinateUtils';

const directions = [
  { label: 'N', az: 0 },
  { label: 'NE', az: 45 },
  { label: 'E', az: 90 },
  { label: 'SE', az: 135 },
  { label: 'S', az: 180 },
  { label: 'SW', az: 225 },
  { label: 'W', az: 270 },
  { label: 'NW', az: 315 },
];

export default function CardinalLabelRenderer() {
  const { camera } = useThree();
  const [visible, setVisible] = useState<boolean[]>(() =>
    directions.map(() => false)
  );

  const cameraForward = new Vector3();

  useFrame(() => {
    camera.getWorldDirection(cameraForward);

    setVisible(() =>
      directions.map((d) => {
        const pos = altAzToVector(0, d.az);
        return pos.dot(cameraForward) > 0;
      })
    );
  });

  return (
    <>
      {directions.map((d, i) => {
        if (!visible[i]) {
          return null;
        }

        const pos = altAzToVector(0, d.az);

        return (
          <Html
            className='cardinal-label'
            key={d.label}
            position={pos}
            center
            style={{
              fontSize: d.label.length === 1 ? '32px' : '20px',
              fontWeight: d.label.length === 1 ? 400 : 300,
            }}
          >
            {d.label}
          </Html>
        );
      })}
    </>
  );
}
