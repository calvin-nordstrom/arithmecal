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
    <div style={{ marginBottom: '1rem' }}>
      <label>
        <b>{label}</b>:
      </label>
      <span> {value}</span>
      <select
        value={unit}
        onChange={(e) => onUnitChange(e.target.value)}
        style={{ marginLeft: '0.5rem' }}
      >
        {unitOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
