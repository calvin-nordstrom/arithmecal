'use client';

import React from 'react';

export interface CalculatorInputProps {
  label: string;
  value: string;
  onValueChange: (value: string) => void;
  unit: string;
  onUnitChange: (unit: string) => void;
  unitOptions: string[];
}

export default function CalculatorInput({
  label,
  value,
  onValueChange,
  unit,
  onUnitChange,
  unitOptions,
}: CalculatorInputProps) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label>
        {label}:
        <br />
        <input
          type="number"
          value={value}
          onChange={(e) => onValueChange(e.target.value)}
          style={{ marginTop: '0.5rem' }}
          autoComplete="off"
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
