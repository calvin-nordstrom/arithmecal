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
      key: 'd1',
      label: 'Diagonal 1',
      unitOptions: lengthUnits,
      defaultUnit: 'm',
      conversionBase: 'm'
    },
    {
      type: 'field',
      key: 'd2',
      label: 'Diagonal 2',
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
    const { d1, d2 } = inputs;
    const area = d1 > 0 && d2 > 0 ? 0.5 * d1 * d2 : 0;
    return { d1, d2, area };
  },
  validate: (inputs) => {
    const errors: string[] = [];
    if (inputs.d1 <= 0) errors.push('Diagonal 1 must be positive');
    if (inputs.d2 <= 0) errors.push('Diagonal 2 must be positive');
    return errors.length ? errors : null;
  }
};

export default function RhombusAreaGivenDiagonalsCalculator() {
  return <Calculator config={config} />;
}
