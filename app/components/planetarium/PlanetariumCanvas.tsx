'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense, useMemo } from 'react';
import SkySphere from './SkySphere';
import { usePlanetariumControls } from './usePlanetariumControls';
import { buildStarDirections } from './coordinateUtils';
import { minimalStars } from './render/star/minimalStars';
import StarRenderer from './render/star/StarRenderer';
import HorizonRenderer from './render/HorizonRenderer';
import CardinalLabelRenderer from './render/CardinalLabelRenderer';
import EquatorialCoordinatesRenderer from './render/EquatorialCoordinatesRenderer';
import HorizontalCoordinatesRenderer from './render/HorizontalCoordinatesRenderer';

export default function PlanetariumCanvas() {
  return (
    <Canvas
      camera={{
        fov: 60,
        near: 0.1,
        far: 10000,
        position: [0, 0, 0.001],
      }}
      gl={{
        antialias: true,
        alpha: false,
      }}
      dpr={[1, 2]}
    >
      <color attach='background' args={['#000000']} />

      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}

const observer = {
  // Boston area
  latitude: 42.2628,
  longitude: -71.8025,

  // Sacramento area
  // latitude: 38.5781,
  // longitude: -121.4944,

  // date: new Date(),
  // date: new Date('2025-01-19T18:00:00'),
  date: new Date('2025-01-19T21:00:00'),
};

function Scene() {
  usePlanetariumControls();

  const starDirections = useMemo(
    () => buildStarDirections(minimalStars, observer),
    [observer]
  );

  return (
    <>
      <SkySphere />
      <StarRenderer stars={starDirections.map((dir, i) => ({
          direction: dir,
          magnitude: minimalStars[i].magnitude ?? 0,
          label: minimalStars[i].label ?? '',
        }))}
      />
      <HorizonRenderer />
      <CardinalLabelRenderer />
      <EquatorialCoordinatesRenderer observer={observer} />
      {/* <HorizontalCoordinatesRenderer /> */}
    </>
  );
}
