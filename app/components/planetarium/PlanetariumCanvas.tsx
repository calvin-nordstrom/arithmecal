'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useMemo, useRef, useState, type MutableRefObject } from 'react';
import SkySphere from './SkySphere';
import { usePlanetariumControls } from './usePlanetariumControls';
import { Observer } from './Observer';
import { Star } from './data/Star';
import { fetchHipStars } from './data/hipStarApi';
import { buildStarDirections } from './util/coordinateUtil';
import { formatTime, todayISODate } from './util/timeUtil';
import StarRenderer, { RenderStar } from './render/star/StarRenderer';
import HorizonRenderer from './render/horizon/HorizonRenderer';
import CardinalLabelsRenderer, { cardinalDirections } from './render/horizon/CardinalLabelsRenderer';
import EquatorialCoordinatesRenderer from './render/coordinate/EquatorialCoordinatesRenderer';
import HorizontalCoordinatesRenderer from './render/coordinate/HorizontalCoordinatesRenderer';
import StarLabelsRenderer, { RenderStarLabel } from './render/star/StarLabelsRenderer';

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
  const starLabelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardinalLabelRefs = useRef<(HTMLDivElement | null)[]>([]);

  const starDirections = useMemo(
    () => buildStarDirections(stars, observer),
    [stars, observer]
  );
  const renderStars: RenderStar[] = useMemo(
    () => starDirections.map((direction, i) => ({
      direction,
      magnitude: stars[i].magnitude ?? 0,
    })),
    [starDirections, stars]
  );
  const renderStarLabels: RenderStarLabel[] = useMemo(
    () => starDirections.map((direction, i) => ({
      direction,
      magnitude: stars[i].magnitude ?? 0,
      label: stars[i].label ?? '',
    })),
    [starDirections, stars]
  );

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

      <div className='planetarium-canvas'>
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
              renderStars={renderStars}
              renderStarLabels={renderStarLabels}
              starLabelRefs={starLabelRefs}
              cardinalLabelRefs={cardinalLabelRefs}
              showHorizon={showHorizon}
              showCardinalLabels={showCardinalLabels}
              showEquatorial={showEquatorial}
              showHorizontal={showHorizontal}
              showStarLabels={showStarLabels}
            />
          </Suspense>
        </Canvas>
        <div className='planetarium-label-overlay' aria-hidden='true'>
          {showCardinalLabels && cardinalDirections.map((direction, i) => (
            <div
              className='cardinal-label'
              ref={el => { cardinalLabelRefs.current[i] = el; }}
              key={direction.label}
              style={{
                fontSize: direction.label.length === 1 ? '32px' : '20px',
                fontWeight: direction.label.length === 1 ? 400 : 300,
              }}
            >
              {direction.label}
            </div>
          ))}
          {showStarLabels && renderStarLabels.map((star, i) => star.label && (
            <div
              className='star-label'
              ref={el => { starLabelRefs.current[i] = el; }}
              key={i}
            >
              {star.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

type SceneProps = {
  observer: Observer;
  renderStars: RenderStar[];
  renderStarLabels: RenderStarLabel[];
  starLabelRefs: MutableRefObject<(HTMLDivElement | null)[]>;
  cardinalLabelRefs: MutableRefObject<(HTMLDivElement | null)[]>;
  showHorizon: boolean;
  showCardinalLabels: boolean;
  showEquatorial: boolean;
  showHorizontal: boolean;
  showStarLabels: boolean;
};

function Scene({
  observer,
  renderStars,
  renderStarLabels,
  starLabelRefs,
  cardinalLabelRefs,
  showHorizon,
  showCardinalLabels,
  showEquatorial, 
  showHorizontal,
  showStarLabels
}: SceneProps) {
  usePlanetariumControls();

  return (
    <>
      <SkySphere />
      <StarRenderer stars={renderStars} />
      {showHorizon && <HorizonRenderer />}
      {showCardinalLabels && <CardinalLabelsRenderer labelRefs={cardinalLabelRefs} />}
      {showEquatorial && <EquatorialCoordinatesRenderer observer={observer} />}
      {showHorizontal && <HorizontalCoordinatesRenderer />}
      {showStarLabels && <StarLabelsRenderer stars={renderStarLabels} labelRefs={starLabelRefs} />}
    </>
  );
}
