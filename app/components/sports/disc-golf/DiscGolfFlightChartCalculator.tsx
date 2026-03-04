'use client';

import { map } from '@/utils/mathUtils';
import { useEffect, useRef, useState } from 'react';

const GRID_COLUMNS = 6;
const GRID_ROWS = 5;
const ASPECT_RATIO = 1.4;

const drawGrid = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number
) => {
  ctx.lineWidth = 1;
  ctx.strokeStyle = '#BFBFBF';
  for (let i = 0; i <= GRID_ROWS; i++) {
    const x = (width / GRID_COLUMNS) * i;
    const y = (height / GRID_ROWS) * i;

    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }

  ctx.strokeStyle = '#7F7F7F';
  ctx.beginPath();
  ctx.moveTo(width / 2, 0);
  ctx.lineTo(width / 2, height);
  ctx.stroke();
}

const inputsValid = (
  speed: number,
  glide: number,
  turn: number,
  fade: number
) => {
  return (
    !Number.isNaN(speed) &&
    !Number.isNaN(glide) &&
    !Number.isNaN(turn) &&
    !Number.isNaN(fade)
  );
}

const drawFlight = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  speed: number,
  glide: number,
  turn: number,
  fade: number,
  power: number,
  throwHand: 'Right' | 'Left',
  throwType: 'Backhand' | 'Forehand'
) => {
  if (!inputsValid(speed, glide, turn, fade)) {
    return;
  }

  ctx.clearRect(0, 0, width, height);
  drawGrid(ctx, width, height);

  ctx.strokeStyle = '#0040ff';
  ctx.lineWidth = 5;
  ctx.beginPath();

  const startX = width / 2;
  const startY = height;
  ctx.moveTo(startX, startY);

  const direction =
    (throwHand === 'Right' ? -1 : 1) *
    (throwType === 'Backhand' ? 1 : -1);

  const powerScaler = power / 100;
  const speedScaler = map(speed, 1, 14, 0.3, 1);
  const glideScaler = map(glide, 1, 7, 0.8, 1.2);
  const turnScaler1 = map(turn, -5, 1, height / 2 + height / 4, height / 2);
  const turnScaler2 = map(turn, -5, 1, height / 2, height / 2 + height / 4);
  const turnScalerX = map(turn, -5, 1, 100, 0);
  const fadeScalerX = map(fade, 0, 5, 0, 100);
  const fadeScalerY = map(fade, 0, 5, 100, 20);
  const fadeDecayX =
    20 *
    map(powerScaler, 0.6, 1.2, -1, 0) *
    map(fade, 0, 5, 0.5, 1) *
    -direction;
  const scaler = powerScaler * speedScaler * glideScaler;

  const cp1X = startX;
  const cp1Y = startY - scaler * turnScaler1;
  const cp2X = startX - scaler * turnScalerX * direction + fadeDecayX;
  const cp2Y = startY - scaler * turnScaler2 - 20;
  const endX = cp2X + scaler * fadeScalerX * direction + fadeDecayX / 2;
  const endY = cp2Y - scaler * fadeScalerY - 20;

  ctx.bezierCurveTo(cp1X, cp1Y, cp2X, cp2Y, endX, endY);
  ctx.stroke();
};

export default function DiscGolfFlightChartCalculator() {
  const [speed, setSpeedInput] = useState('7');
  const [glide, setGlideInput] = useState('5');
  const [turn, setTurnInput] = useState('0');
  const [fade, setFadeInput] = useState('2');
  const [power, setPower] = useState(100);
  const [throwHand, setThrowHand] = useState<'Right' | 'Left'>('Right');
  const [throwType, setThrowType] = useState<'Backhand' | 'Forehand'>('Backhand');

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const drawCurrent = () => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    drawFlight(
      ctx,
      canvas.clientWidth,
      canvas.clientHeight,
      Number(speed),
      Number(glide),
      Number(turn),
      Number(fade),
      power,
      throwHand,
      throwType
    );
  };

  // Effect for drawing
  useEffect(() => {
    drawCurrent();
  }, [speed, glide, turn, fade, power, throwHand, throwType]);

  // Effect for resize listening
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) {
        return;
      }

      const { width } = parent.getBoundingClientRect();
      const height = width * ASPECT_RATIO;
      const dpr = window.devicePixelRatio || 1;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        return;
      }

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      drawCurrent();
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => window.removeEventListener('resize', resizeCanvas);
  }, [speed, glide, turn, fade, power, throwHand, throwType]);
  
  return (
    <div className='calculator'>
      <div className='disc-golf-flight-chart-container'>
        <canvas ref={canvasRef} className='disc-golf-flight-chart' />
      </div>
      <div className='disc-golf-flight-form'>
        <div className='disc-golf-flight-input-container'>
          <div className='disc-golf-flight-input'>
            <label>Speed</label>
            <input
              type='number'
              value={speed}
              min={1}
              max={14}
              onChange={(e) => setSpeedInput(e.target.value)}
            />
          </div>

          <div className='disc-golf-flight-input'>
            <label>Glide</label>
            <input
              type='number'
              value={glide}
              min={1}
              max={7}
              onChange={(e) => setGlideInput(e.target.value)}
            />
          </div>

          <div className='disc-golf-flight-input'>
            <label>Turn</label>
            <input
              type='number'
              value={turn}
              min={-5}
              max={1}
              onChange={(e) => setTurnInput(e.target.value)}
            />
          </div>

          <div className='disc-golf-flight-input'>
            <label>Fade</label>
            <input
              type='number'
              value={fade}
              min={0}
              max={5}
              onChange={(e) => setFadeInput(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label>
            Power: {power}%
          </label>
          <input
            type='range'
            min={60}
            max={120}
            value={power}
            onChange={(e) => setPower(Number(e.target.value))}
            style={{width: '100%', padding: '0'}}
          />
        </div>

        <div className='disc-golf-throw-type-container'>
          <div className='disc-golf-throw-type-input'>
            <label>Throw Hand</label>
            <select
              value={throwHand}
              onChange={(e) => setThrowHand(e.target.value as 'Right' | 'Left')}
            >
              <option value='Right'>Right</option>
              <option value='Left'>Left</option>
            </select>
          </div>
          <div className='disc-golf-throw-type-input'>
            <label>Throw Type</label>
            <select
              value={throwType}
              onChange={(e) =>setThrowType(e.target.value as 'Backhand' | 'Forehand')}
            >
              <option value='Backhand'>Backhand</option>
              <option value='Forehand'>Forehand</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
