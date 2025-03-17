'use client';

import React from 'react';

export interface CalculatorOutputProps {
  label: string;
  value: string;
  unit: string;
  onUnitChange: (unit: string) => void;
  unitOptions: string[];
}

export default function CalculatorOutput({
  label,
  value,
  unit,
  onUnitChange,
  unitOptions,
}: CalculatorOutputProps) {
  return (
    <div className='calculator-output-container'>
      <label className='calculator-output-label'>{label}</label>
      <div className='calculator-output-controls'>
        <span className='calculator-output'>{value}</span>
        {unitOptions.length > 0 && (
          <select
            value={unit}
            onChange={(e) => onUnitChange(e.target.value)}
          >
            {unitOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
}
