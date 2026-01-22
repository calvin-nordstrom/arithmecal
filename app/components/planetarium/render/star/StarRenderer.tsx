'use client';

import { useMemo } from 'react';
import { useThree } from '@react-three/fiber';
import { Vector3, ShaderMaterial, BufferGeometry, BufferAttribute } from 'three';

const MIN_MAG = -1.5;
const MAX_MAG = 6.5;

function magnitudeToSize(mag: number) {
  const t = 1 - (mag - MIN_MAG) / (MAX_MAG - MIN_MAG);
  return Math.max(2, Math.min(10.0, t * 10.0));
}

export interface RenderStar {
  direction: Vector3;
  magnitude: number;
  label?: string;
}

export default function StarRenderer({
  stars
}: { stars: RenderStar[] }) {
  const { viewport } = useThree();

  const geometry = useMemo(() => {
    const g = new BufferGeometry();

    const positions = new Float32Array(stars.length * 3);
    const sizes = new Float32Array(stars.length);

    stars.forEach((star, i) => {
      const { x, y, z } = star.direction;
      positions[i * 3 + 0] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      sizes[i] = magnitudeToSize(star.magnitude);
    });

    g.setAttribute('position', new BufferAttribute(positions, 3));
    g.setAttribute('size', new BufferAttribute(sizes, 1));

    return g;
  }, [stars]);

  const material = useMemo(
    () =>
      new ShaderMaterial({
        transparent: true,
        depthWrite: false,
        depthTest: false,
        uniforms: {
          uPixelRatio: { value: viewport.dpr }
        },
        vertexShader: `
          attribute float size;
          uniform float uPixelRatio;

          void main() {
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = size * uPixelRatio;
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          void main() {
            float d = length(gl_PointCoord - vec2(0.5));
            if (d > 0.5) discard;
            gl_FragColor = vec4(1.0);
          }
        `
      }),
    [viewport.dpr]
  );

  return (
    <points geometry={geometry} material={material} />
  );
}
