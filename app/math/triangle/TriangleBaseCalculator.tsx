'use client';

import React from 'react';
import SingleOutputCalculator, { CalculatorConfig } from '@/app/components/SingleOutputCalculator';
import { lengthUnits, areaUnits } from '@/app/constants/units';

const config: CalculatorConfig = {
  inputFields: [
    {
      key: 'height',
      label: 'Height',
      unitOptions: lengthUnits,
      defaultUnit: 'cm',
      conversionBase: 'cm',
    },
    {
      key: 'area',
      label: 'Area',
      unitOptions: areaUnits,
      defaultUnit: 'cm2',
      conversionBase: 'cm2',
    },
  ],
  outputField: {
    key: 'base',
    label: 'Base',
    unitOptions: lengthUnits,
    defaultUnit: 'cm',
    conversionBase: 'cm',
  },
  formula: (inputs) => {
    if (inputs.height === 0) {
      return 0;
    }
    return (2 * inputs.area) / inputs.height;
  },
  validate: (inputs, rawInputs) => {
    const errors: string[] = [];
    if (rawInputs.height.trim() !== '' && inputs.height <= 0) {
      errors.push('Invalid input: height should be positive');
    }
    if (rawInputs.area.trim() !== '' && inputs.area <= 0) {
      errors.push('Invalid input: area should be positive');
    }
    return errors.length > 0 ? errors : null;
  },
};

export default function TriangleBaseCalculator() {
  return <SingleOutputCalculator config={config} />;
}
