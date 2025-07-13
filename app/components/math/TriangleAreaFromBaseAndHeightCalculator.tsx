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
    const base = inputs.base;
    const height = inputs.height;

    if (base <= 0 || height <= 0) {
      return { base, height, area: 0 };
    }

    const area = 0.5 * base * height;
    return { base, height, area };
  },
  validate: (inputs, rawInputs) => {
    const errors: string[] = [];
    if (rawInputs.base.trim() !== '' && inputs.base <= 0) {
      errors.push('Base must be positive');
    }
    if (rawInputs.height.trim() !== '' && inputs.height <= 0) {
      errors.push('Height must be positive');
    }
    return errors.length > 0 ? errors : null;
  }
};

export default function TriangleAreaFromBaseAndHeightCalculator() {
  return <Calculator config={config} />;
}
