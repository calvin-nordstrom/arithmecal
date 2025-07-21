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
      key: 'n',
      label: 'Number of Sides (n)',
      defaultUnit: '',
      conversionBase: '',
    },
    {
      type: 'field',
      key: 'side',
      label: 'Side Length',
      unitOptions: lengthUnits,
      defaultUnit: 'm',
      conversionBase: 'm',
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
      isOutput: true,
    }
  ],
  formula: (inputs) => {
    const { n, side } = inputs;
    if (n < 3 || side <= 0) return { n, side, area: 0 };
    const area = (n * side * side) / (4 * Math.tan(Math.PI / n));
    return { n, side, area };
  },
  validate: (inputs, raw) => {
    const errors: string[] = [];
    if (!isNaN(inputs.n) &&!Number.isInteger(inputs.n)) {
      errors.push('Number of sides must be an integer');
    }
    if (!isNaN(inputs.n) && (inputs.n < 3 || !Number.isFinite(inputs.n))) {
      errors.push('Number of sides must be an integer greater than 3');
    }
    if (inputs.side <= 0) {
      errors.push('Side length must be positive');
    }
    return errors.length ? errors : null;
  }
};

export default function RegularNgonAreaCalculator() {
  return <Calculator config={config} />;
}
