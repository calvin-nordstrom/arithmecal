'use client';

import React from 'react';
import Calculator, { CalculatorConfig } from '@/app/components/Calculator';

const config: CalculatorConfig = {
  fields: [
    {
      type: 'field',
      key: 'initialValue',
      label: 'Initial value',
    },
    {
      type: 'field',
      key: 'finalValue',
      label: 'Final value',
    },
    { type: 'error' },
    {
      type: 'field',
      key: 'percentChange',
      label: 'Percent change',
      isOutput: true
    },
  ],
  formula: (inputs, changedField) => {
    const initialValue = inputs.initialValue;
    const finalValue = inputs.finalValue;
    let percentChange = (finalValue - initialValue) / Math.abs(initialValue) * 100;

    if (isNaN(percentChange) || initialValue === 0) {
      percentChange = 0;
    }

    return { initialValue, finalValue, percentChange };
  },
  validate: (inputs, rawInputs) => {
    const errors: string[] = [];
    if (rawInputs.initialValue.trim() !== '' && inputs.initialValue === 0) {
      errors.push('Initial value must be nonzero');
    }
    return errors.length > 0 ? errors : null;
  },
};

export default function PercentChangeCalculator() {
  return <Calculator config={config} />;
}
