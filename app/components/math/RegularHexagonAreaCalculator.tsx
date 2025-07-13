'use client';

import React from 'react';
import Calculator, { CalculatorConfig } from '@/app/components/Calculator';
import { getUnitsByDimension } from '@/cnconvert/cnconvert';

const lengthUnits = getUnitsByDimension('length');
const areaUnits = getUnitsByDimension('area');

const n = 6;

const config: CalculatorConfig = {
  fields: [
    {
      type: 'field',
      key: 'side',
      label: 'Side Length',
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
    const { side } = inputs;
    const area = side > 0
      ? (n * side * side) / (4 * Math.tan(Math.PI / n))
      : 0;
    return { side, area };
  },
  validate: (inputs) => {
    const errors: string[] = [];
    if (inputs.side <= 0) errors.push('Side length must be positive');
    return errors.length ? errors : null;
  }
};

export default function RegularHexagonAreaCalculator() {
  return <Calculator config={config} />;
}
