'use client';

import React from 'react';
import Calculator, { CalculatorConfig } from '@/app/components/Calculator';
import { getUnitsByDimension } from '@/cnconvert/cnconvert';

const speedUnits = getUnitsByDimension('speed');
const timeUnits = getUnitsByDimension('time');
const distanceUnits = getUnitsByDimension('length');

const config: CalculatorConfig = {
  fields: [
    {
      type: 'field',
      key: 'd',
      label: 'Distance',
      unitOptions: distanceUnits,
      defaultUnit: 'm',
      conversionBase: 'm',
    },
    {
      type: 'field',
      key: 't',
      label: 'Time',
      unitOptions: timeUnits,
      defaultUnit: 's',
      conversionBase: 's',
    },
    {
      type: 'field',
      key: 'v',
      label: 'Velocity',
      unitOptions: speedUnits,
      defaultUnit: 'm/s',
      conversionBase: 'm/s',
      isOutput: true,
    },
    { type: 'error' },
  ],
  formula: (inputs, changedField) => {
    const { d, t } = inputs;
    let v: number | undefined = undefined;

    if (t > 0) {
      v = d / t;
    }

    return {
      ...inputs,
      v: v ?? inputs['v'],
    };
  },
  validate: (inputs, rawInputs) => {
    const errors: string[] = [];
    if (rawInputs.t.trim() !== '' && inputs.t <= 0) {
      errors.push('Time must be positive');
    }
    return errors.length > 0 ? errors : null;
  },
};

export default function VelocityFromDistanceTraveledCalculator() {
  return <Calculator config={config} />;
}
