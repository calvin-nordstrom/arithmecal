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
      key: 'outer',
      label: 'Outer Radius (R)',
      unitOptions: lengthUnits,
      defaultUnit: 'm',
      conversionBase: 'm',
    },
    {
      type: 'field',
      key: 'inner',
      label: 'Inner Radius (r)',
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
    const { outer, inner } = inputs;
    let area = 0;
    if (outer > inner && inner >= 0) {
      area = Math.PI * (outer ** 2 - inner ** 2);
    }
    return { outer, inner, area };
  },
  validate: (inputs) => {
    const errors: string[] = [];
    if (inputs.outer <= 0) errors.push('Outer radius must be positive');
    if (inputs.inner < 0) errors.push('Inner radius cannot be negative');
    if (inputs.inner >= inputs.outer) errors.push('Inner radius must be smaller than outer radius');
    return errors.length ? errors : null;
  }
};

export default function AnnulusAreaCalculator() {
  return <Calculator config={config} />;
}
