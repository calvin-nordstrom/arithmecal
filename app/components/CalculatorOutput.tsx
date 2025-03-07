'use client';

import React from 'react';

export interface CalculatorOutputProps {
  label: string;
  value: string;
  unit: string;
  onUnitChange: (unit: string) => void;
  unitOptions: string[];
  precision?: number;
}

export default function CalculatorOutput({
  label,
  value,
  unit,
  onUnitChange,
  unitOptions,
  precision,
}: CalculatorOutputProps) {
  let displayValue = value;
  if (value !== '' && precision !== undefined) {
    const num = parseFloat(value);
    if (!isNaN(num)) {
      displayValue = String(parseFloat(num.toFixed(precision)));
    }
  }

  return (
    <div style={{ marginBottom: '1rem' }}>
      <label>
        <b>{label}</b>:
      </label>
      <span> {displayValue}</span>
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
