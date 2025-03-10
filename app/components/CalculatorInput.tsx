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
    <div className='calculator-input-container'>
      <label className='calculator-input-label'>{label}</label>
      <div className='calculator-input-controls'>
        <input
          type='number'
          value={value}
          onChange={(e) => onValueChange(e.target.value)}
          className='calculator-input'
          autoComplete='off'
        />
        {unitOptions.length > 0 && (
          <select
            value={unit}
            onChange={(e) => onUnitChange(e.target.value)}
            className='calculator-select'
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
