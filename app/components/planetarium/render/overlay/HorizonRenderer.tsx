import { Line } from '@react-three/drei';
import { Vector3 } from 'three';

export default function HorizonRenderer() {
  const points: Vector3[] = [];

  const segments = 3;
  for (let i = 0; i <= segments; i++) {
    const az = (i / segments) * Math.PI * 2;
    const x = Math.sin(az);
    const z = -Math.cos(az);
    points.push(new Vector3(x, 0, z));
  }

  return (
    <Line
      points={points}
      dashed={true}
      gapSize={0}
      transparent={true}
      lineWidth={2}
      color={0xFF0000}
      opacity={0.3}
    />
  );
}
