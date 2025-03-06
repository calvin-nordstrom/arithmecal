'use client';

import React from 'react';
import SingleOutputCalculator, { CalculatorConfig } from '@/app/components/SingleOutputCalculator';
import { lengthUnits, areaUnits } from '@/app/constants/units';

const config: CalculatorConfig = {
  inputFields: [
    {
      key: 'base',
      label: 'Base',
      unitOptions: lengthUnits,
      defaultUnit: 'cm',
      conversionBase: 'cm'
    },
    {
      key: 'height',
      label: 'Height',
      unitOptions: lengthUnits,
      defaultUnit: 'cm',
      conversionBase: 'cm'
    },
  ],
  outputField: {
    key: 'area',
    label: 'Area',
    unitOptions: areaUnits,
    defaultUnit: 'cm2',
    conversionBase: 'cm2'
  },
  formula: (inputs) => {
    return 0.5 * inputs.base * inputs.height
  },
  validate: (inputs, rawInputs) => {
    const errors: string[] = [];
    if (rawInputs.base.trim() !== '' && inputs.base <= 0) {
      errors.push('Invalid input: base should be positive');
    }
    if (rawInputs.height.trim() !== '' && inputs.height <= 0) {
      errors.push('Invalid input: height should be positive');
    }
    return errors.length > 0 ? errors : null;
  },
};

export default function Calculator() {
  return <SingleOutputCalculator config={config} />;
}
