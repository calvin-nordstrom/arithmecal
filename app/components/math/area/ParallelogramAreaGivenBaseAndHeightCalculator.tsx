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
      key: 'base',
      label: 'Base',
      unitOptions: lengthUnits,
      defaultUnit: 'm',
      conversionBase: 'm'
    },
    {
      type: 'field',
      key: 'height',
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
    const { base, height } = inputs;
    const area = base > 0 && height > 0 ? base * height : 0;
    return { base, height, area };
  },
  validate: (inputs, raw) => {
    const errors: string[] = [];
    if (inputs.base <= 0) errors.push('Base must be positive');
    if (inputs.height <= 0) errors.push('Height must be positive');
    return errors.length ? errors : null;
  }
};

export default function ParallelogramAreaGivenBaseAndHeightCalculator() {
  return <Calculator config={config} />;
}
