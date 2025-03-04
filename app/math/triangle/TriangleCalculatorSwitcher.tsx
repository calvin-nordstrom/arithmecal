'use client';

import React, { useState } from 'react';
import TriangleAreaCalculator from './TriangleAreaCalculator';
import TriangleBaseCalculator from './TriangleBaseCalculator';

export type CalculatorType = 'area' | 'base' | 'height' | 'side (a)' | 'side (b)' | 'gamma' | 'perimeter';

export default function TriangleCalculatorSwitcher() {
  const [calculatorType, setcalculatorType] = useState<CalculatorType>('area');

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setcalculatorType(e.target.value as CalculatorType);
  };

  return (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        <label>
          Solve for
          <select
            value={calculatorType}
            onChange={handleTypeChange}
            style={{ marginLeft: '0.5rem' }}
          >
            <option value="area">area</option>
            <option value="base">base</option>
            <option value="height">height</option>
            <option value="side (a)">side (a)</option>
            <option value="arside (b)a">side (b)</option>
            <option value="gamma">gamma</option>
            <option value="perimeter">perimeter</option>
          </select>
        </label>
      </div>
      <div>
        {calculatorType === 'area' && <TriangleAreaCalculator />}
        {calculatorType === 'base' && <TriangleBaseCalculator />}
      </div>
    </div>
  );
}
