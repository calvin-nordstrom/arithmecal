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
      key: 'radius',
      label: 'Radius',
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
    const { radius } = inputs;
    const area = radius > 0 ? Math.PI * radius * radius : 0;
    return { radius, area };
  },
  validate: (inputs, raw) => {
    const errors: string[] = [];
    if (raw.radius.trim() !== '' && inputs.radius <= 0) {
      errors.push('Radius must be positive');
    }
    return errors.length ? errors : null;
  }
};

export default function CircleAreaCalculator() {
  return <Calculator config={config} />;
}
