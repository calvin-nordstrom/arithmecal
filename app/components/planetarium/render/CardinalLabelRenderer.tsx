import { Text } from '@react-three/drei';
import { altAzToVector } from '../coordinateUtils';

const directions = [
  { label: 'N', az: 0 },
  { label: 'E', az: 90 },
  { label: 'S', az: 180 },
  { label: 'W', az: 270 },
];

export default function CardinalLabelRenderer() {
  return (
    <>
      {directions.map((d) => {
        const pos = altAzToVector(0, d.az);
        return (
          <Text
            key={d.label}
            position={pos.clone().multiplyScalar(1.2)}
            fontSize={0.05}
            color={0xFFFFFF}
            anchorX='center'
            anchorY='bottom'
            rotation={[0, d.az / -90 * Math.PI / 2, 0]}
          >
            {d.label}
          </Text>
        );
      })}
    </>
  );
}
