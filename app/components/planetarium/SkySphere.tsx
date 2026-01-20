import { useRef } from 'react';
import { Mesh } from 'three';
import { useFrame } from '@react-three/fiber';

export default function SkySphere() {
  const meshRef = useRef<Mesh>(null!);

  // Keep the sky sphere centered on the camera every frame
  useFrame(({ camera }) => {
    meshRef.current.position.copy(camera.position);
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1000, 64, 64]} />
      <meshBasicMaterial
        color='black'
        side={2}
      />
    </mesh>
  );
}
