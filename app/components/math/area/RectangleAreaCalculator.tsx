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
      key: 'length',
      label: 'Length',
      unitOptions: lengthUnits,
      defaultUnit: 'm',
      conversionBase: 'm'
    },
    {
      type: 'field',
      key: 'width',
      label: 'Width',
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
    const { length, width } = inputs;
    const area = (length > 0 && width > 0) ? length * width : 0;
    return { length, width, area };
  },
  validate: (inputs, raw) => {
    const errors: string[] = [];
    if (raw.length.trim() !== '' && inputs.length <= 0) {
      errors.push('Length must be positive');
    }
    if (raw.width.trim() !== '' && inputs.width <= 0) {
      errors.push('Width must be positive');
    }
    return errors.length ? errors : null;
  }
};

export default function RectangleAreaCalculator() {
  return <Calculator config={config} />;
}
