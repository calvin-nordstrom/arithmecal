'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense, useMemo, useState } from 'react';
import SkySphere from './SkySphere';
import { Observer } from './Observer';
import { usePlanetariumControls } from './usePlanetariumControls';
import { buildStarDirections } from './coordinateUtils';
import { formatTime, todayISODate } from './timeUtils';
import { minimalStars } from './render/star/minimalStars';
import StarRenderer from './render/star/StarRenderer';
import HorizonRenderer from './render/HorizonRenderer';
import CardinalLabelRenderer from './render/CardinalLabelRenderer';
import EquatorialCoordinatesRenderer from './render/EquatorialCoordinatesRenderer';
import HorizontalCoordinatesRenderer from './render/HorizontalCoordinatesRenderer';

export default function PlanetariumCanvas() {
  const [showEquatorial, setShowEquatorial] = useState(false);
  const [showHorizontal, setShowHorizontal] = useState(false);

  const [date, setDate] = useState(todayISODate());
  const [timeMinutes, setTimeMinutes] = useState(20 * 60);

  const observer: Observer = useMemo(() => {
    const d = new Date(`${date}T00:00:00`);
    d.setMinutes(timeMinutes);

    return {
      latitude: 42.2628,
      longitude: -71.8025,
      elevation: 0,
      date: d,
    };
  }, [date, timeMinutes]);

  return (
    <div className='planetarium'>
      <div className='planetarium-controls'>
        <button onClick={() => setShowEquatorial(v => !v)}>
          {showEquatorial ? 'Hide' : 'Show'} Equatorial Coordinates
        </button>

        <button onClick={() => setShowHorizontal(v => !v)}>
          {showHorizontal ? 'Hide' : 'Show'} Horizontal Coordinates
        </button>

        <label>
          Date:
          <input
            type='date'
            value={date}
            onKeyDown={e => {
              e.preventDefault()
            }}
            onChange={e => {
              const value = e.target.value;
              try {
                setDate(value === '' || value === null ? todayISODate() : value);
              } catch (error) {
                setDate(todayISODate);
              }
            }}
          />
        </label>

        <label>
          <span>Time: {formatTime(timeMinutes)}</span>
          <input
            type='range'
            min={0}
            max={1439}
            step={1}
            value={timeMinutes}
            onChange={e => setTimeMinutes(Number(e.target.value))}
          />
        </label>
      </div>

      <Canvas
        camera={{
          fov: 60,
          near: 0.1,
          far: 10000,
          position: [0, 0, 0.001],
        }}
        gl={{ antialias: true, alpha: false }}
        dpr={[1, 2]}
      >
        <color attach='background' args={['#000000']} />

        <Suspense fallback={null}>
          <Scene
            observer={observer}
            showEquatorial={showEquatorial}
            showHorizontal={showHorizontal}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

type SceneProps = {
  observer: Observer;
  showEquatorial: boolean;
  showHorizontal: boolean;
};

function Scene({
  observer,
  showEquatorial, 
  showHorizontal
}: SceneProps) {
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
      {showEquatorial && <EquatorialCoordinatesRenderer observer={observer} />}
      {showHorizontal && <HorizontalCoordinatesRenderer />}
    </>
  );
}
