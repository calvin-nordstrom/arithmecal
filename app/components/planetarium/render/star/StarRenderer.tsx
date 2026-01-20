'use client';

import { useMemo } from 'react';
import { Points, PointMaterial } from '@react-three/drei';
import { Vector3 } from 'three';

export interface RenderStar {
  direction: Vector3;
  magnitude: number;
  label?: string;
}

type StarRendererProps = {
  stars: RenderStar[];
};

export default function StarRenderer({ stars }: StarRendererProps) {
  const positions = useMemo(() => {
    const buffer = new Float32Array(stars.length * 3);

    stars.forEach((star, i) => {
      const { x, y, z } = star.direction;
      buffer[i * 3 + 0] = x;
      buffer[i * 3 + 1] = y;
      buffer[i * 3 + 2] = z;
    });

    return buffer;
  }, [stars]);

  return (
    <Points positions={positions} stride={3}>
      <PointMaterial
        transparent
        color='white'
        size={8.0}
        sizeAttenuation={false}
        depthWrite={false}
        depthTest={false}
      />
    </Points>
  );
}
