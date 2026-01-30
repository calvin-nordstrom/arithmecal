'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useMemo, useState } from 'react';
import SkySphere from './SkySphere';
import { usePlanetariumControls } from './usePlanetariumControls';
import { Observer } from './Observer';
import { Star } from './render/star/Star';
import { fetchHipStars } from './data/hipStarApi';
import { buildStarDirections } from './util/coordinateUtil';
import { formatTime, todayISODate } from './util/timeUtil';
import StarRenderer from './render/star/StarRenderer';
import HorizonRenderer from './render/horizon/HorizonRenderer';
import CardinalLabelsRenderer from './render/horizon/CardinalLabelsRenderer';
import EquatorialCoordinatesRenderer from './render/coordinate/EquatorialCoordinatesRenderer';
import HorizontalCoordinatesRenderer from './render/coordinate/HorizontalCoordinatesRenderer';
import StarLabelsRenderer from './render/star/StarLabelsRenderer';

export default function PlanetariumCanvas() {
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

  const [stars, setStars] = useState<Star[]>([]);
  useEffect(() => {
    fetchHipStars('/planetarium/stars_6_5.json')
      .then(setStars)
      .catch(console.error);
  }, []);

  const [showHorizon, setShowHorizon] = useState(true);
  const [showCardinalLabels, setShowCardinalLabels] = useState(true);
  const [showEquatorial, setShowEquatorial] = useState(false);
  const [showHorizontal, setShowHorizontal] = useState(false);
  const [showStarLabels, setShowStarLabels] = useState(true);

  return (
    <div className='planetarium'>
      <div className='planetarium-controls'>
        <div className='planetarium-control'>
          <button onClick={() => setShowHorizon(v => !v)}>
            {showHorizon ? 'Hide' : 'Show'} Horizon
          </button>
        </div>
        
        <div className='planetarium-control'>
          <button onClick={() => setShowCardinalLabels(v => !v)}>
            {showCardinalLabels ? 'Hide' : 'Show'} Cardinal Labels
          </button>
        </div>

        <div className='planetarium-control'>
          <button onClick={() => setShowEquatorial(v => !v)}>
            {showEquatorial ? 'Hide' : 'Show'} Equatorial Coordinates
          </button>
        </div>
        
        <div className='planetarium-control'>
          <button onClick={() => setShowHorizontal(v => !v)}>
            {showHorizontal ? 'Hide' : 'Show'} Horizontal Coordinates
          </button>
        </div>

        <div className='planetarium-control'>
          <button onClick={() => setShowStarLabels(v => !v)}>
            {showStarLabels ? 'Hide' : 'Show'} Star Labels
          </button>
        </div>

        <div className='planetarium-control'>
          <label>Date:</label>
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
        </div>

        <div className='planetarium-control'>
          <label>Time: {formatTime(timeMinutes)}</label>
          <input
            className='time-input'
            type='range'
            min={0}
            max={1439}
            step={1}
            value={timeMinutes}
            onChange={e => setTimeMinutes(Number(e.target.value))}
          />
        </div>
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
            stars={stars}
            showHorizon={showHorizon}
            showCardinalLabels={showCardinalLabels}
            showEquatorial={showEquatorial}
            showHorizontal={showHorizontal}
            showStarLabels={showStarLabels}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

type SceneProps = {
  observer: Observer;
  stars: Star[];
  showHorizon: boolean;
  showCardinalLabels: boolean;
  showEquatorial: boolean;
  showHorizontal: boolean;
  showStarLabels: boolean;
};

function Scene({
  observer,
  stars,
  showHorizon,
  showCardinalLabels,
  showEquatorial, 
  showHorizontal,
  showStarLabels
}: SceneProps) {
  usePlanetariumControls();

  const starDirections = useMemo(
    () => buildStarDirections(stars, observer),
    [observer]
  );

  return (
    <>
      <SkySphere />
      <StarRenderer 
        stars={starDirections.map((dir, i) => ({
          direction: dir,
          magnitude: stars[i].magnitude ?? 0,
        }))}
      />
      {showHorizon && <HorizonRenderer />}
      {showCardinalLabels && <CardinalLabelsRenderer />}
      {showEquatorial && <EquatorialCoordinatesRenderer observer={observer} />}
      {showHorizontal && <HorizontalCoordinatesRenderer />}
      {showStarLabels && <StarLabelsRenderer
        stars={starDirections.map((dir, i) => ({
          direction: dir,
          magnitude: stars[i].magnitude ?? 0,
          label: stars[i].label ?? '',
        }))}
      />}
    </>
  );
}
