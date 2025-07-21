'use client';

import React from 'react';
import Calculator, { CalculatorConfig } from '@/app/components/Calculator';
import { getUnitsByDimension } from '@/cnconvert/cnconvert';

const lengthUnits = getUnitsByDimension('length');
const areaUnits = getUnitsByDimension('area');

const config: CalculatorConfig = {
  fields: [
    {
      type: 'field',
      key: 'a',
      label: 'Base a',
      unitOptions: lengthUnits,
      defaultUnit: 'm',
      conversionBase: 'm'
    },
    {
      type: 'field',
      key: 'b',
      label: 'Base b',
      unitOptions: lengthUnits,
      defaultUnit: 'm',
      conversionBase: 'm'
    },
    {
      type: 'field',
      key: 'h',
      label: 'Height',
      unitOptions: lengthUnits,
      defaultUnit: 'm',
      conversionBase: 'm'
    },
    {
      type: 'error'
    },
    {
      type: 'field',
      key: 'area',
      label: 'Area',
      unitOptions: areaUnits,
      defaultUnit: 'm^2',
      conversionBase: 'm^2',
      isOutput: true
    }
  ],
  formula: (inputs) => {
    const { a, b, h } = inputs;
    const area = a > 0 && b > 0 && h > 0 ? 0.5 * (a + b) * h : 0;
    return { a, b, h, area };
  },
  validate: (inputs) => {
    const errors: string[] = [];
    if (inputs.a <= 0) errors.push('Base a must be positive');
    if (inputs.b <= 0) errors.push('Base b must be positive');
    if (inputs.h <= 0) errors.push('Height must be positive');
    return errors.length ? errors : null;
  }
};

export default function TrapezoidAreaCalculator() {
  return <Calculator config={config} />;
}
