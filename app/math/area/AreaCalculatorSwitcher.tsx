'use client';

import React, { useState } from 'react';
import CircleCalculatorClient from './CircleAreaCalculatorClient';
import TriangleCalculatorClient from './TriangleAreaCalculatorClient';

export type ShapeType = 'circle' | 'triangle';

export default function AreaCalculatorSwitcher() {
  const [selectedShape, setSelectedShape] = useState<ShapeType>('circle');

  const handleShapeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedShape(e.target.value as ShapeType);
  };

  return (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        <label>
          Select Shape:
          <select
            value={selectedShape}
            onChange={handleShapeChange}
            style={{ marginLeft: '0.5rem' }}
          >
            <option value="circle">Circle</option>
            <option value="triangle">Triangle</option>
          </select>
        </label>
      </div>
      <div>
        {selectedShape === 'circle' && <CircleCalculatorClient />}
        {selectedShape === 'triangle' && <TriangleCalculatorClient />}
      </div>
    </div>
  );
}
