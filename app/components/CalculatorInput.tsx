'use client';

import React from 'react';

export interface CalculatorInputProps {
  label: string;
  value: string;
  onValueChange: (value: string) => void;
  unit: string;
  onUnitChange: (unit: string) => void;
  unitOptions: string[];
  precision?: number;
}

export default function CalculatorInput({
  label,
  value,
  onValueChange,
  unit,
  onUnitChange,
  unitOptions,
  precision,
}: CalculatorInputProps) {
  let displayValue = value;
  if (value !== '') {
    const num = parseFloat(value);
    if (!isNaN(num) && precision !== undefined) {
      displayValue = num.toFixed(precision);
    }
  }

  return (
    <div style={{ marginBottom: '1rem' }}>
      <label>
        {label}:
        <br />
        <input
          type="number"
          value={displayValue}
          onChange={(e) => onValueChange(e.target.value)}
          style={{ marginTop: '0.5rem' }}
        />
      </label>
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
