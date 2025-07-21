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
      label: 'Semi-major Axis (a)',
      unitOptions: lengthUnits,
      defaultUnit: 'm',
      conversionBase: 'm'
    },
    {
      type: 'field',
      key: 'b',
      label: 'Semi-minor Axis (b)',
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
    const { a, b } = inputs;
    const area = a > 0 && b > 0 ? Math.PI * a * b : 0;
    return { a, b, area };
  },
  validate: (inputs, raw) => {
    const errors: string[] = [];
    if (raw.a.trim() !== '' && inputs.a <= 0) {
      errors.push('Semi-major axis (a) must be positive');
    }
    if (raw.b.trim() !== '' && inputs.b <= 0) {
      errors.push('Semi-minor axis (b) must be positive');
    }
    return errors.length ? errors : null;
  }
};

export default function EllipseAreaCalculator() {
  return <Calculator config={config} />;
}
