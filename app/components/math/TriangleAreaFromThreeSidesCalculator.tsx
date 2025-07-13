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
      label: 'Side a',
      unitOptions: lengthUnits,
      defaultUnit: 'm',
      conversionBase: 'm'
    },
    {
      type: 'field',
      key: 'b',
      label: 'Side b',
      unitOptions: lengthUnits,
      defaultUnit: 'm',
      conversionBase: 'm'
    },
    {
      type: 'field',
      key: 'c',
      label: 'Side c',
      unitOptions: lengthUnits,
      defaultUnit: 'm',
      conversionBase: 'm'
    },
    { type: 'error' },
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
    const { a, b, c } = inputs;
    if (a <= 0 || b <= 0 || c <= 0) return { a, b, c, area: 0 };
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return { a, b, c, area: isNaN(area) ? 0 : area };
  },
  validate: (inputs, raw) => {
    const errors: string[] = [];
    if (inputs.a <= 0) errors.push('Side a must be positive');
    if (inputs.b <= 0) errors.push('Side b must be positive');
    if (inputs.c <= 0) errors.push('Side c must be positive');
    if (inputs.a + inputs.b <= inputs.c ||
        inputs.a + inputs.c <= inputs.b ||
        inputs.b + inputs.c <= inputs.a) {
      errors.push('The provided sides do not form a valid triangle');
    }
    return errors.length ? errors : null;
  }
};

export default function TriangleAreaFromThreeSidesCalculator() {
  return <Calculator config={config} />;
}
