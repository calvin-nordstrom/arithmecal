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
      key: 'diagonal',
      label: 'Diagonal Length',
      unitOptions: lengthUnits,
      defaultUnit: 'm',
      conversionBase: 'm',
    },
    {
      type: 'error',
    },
    {
      type: 'field',
      key: 'area',
      label: 'Area',
      unitOptions: areaUnits,
      defaultUnit: 'm^2',
      conversionBase: 'm^2',
      isOutput: true,
    },
  ],
  formula: (inputs) => {
    const { diagonal } = inputs;
    const area = diagonal > 0 ? (diagonal ** 2) / 2 : 0;
    return { diagonal, area };
  },
  validate: (inputs, raw) => {
    const errors: string[] = [];
    if (raw.diagonal.trim() !== '' && inputs.diagonal <= 0) {
      errors.push('Diagonal length must be positive');
    }
    return errors.length ? errors : null;
  },
};

export default function SquareAreaGivenDiagonalCalculator() {
  return <Calculator config={config} />;
}
