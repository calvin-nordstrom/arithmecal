'use client';

import React from 'react';
import Calculator, { CalculatorConfig } from '@/app/components/Calculator';
import { getUnitsByDimension } from '@/cnconvert/cnconvert';

const speedUnits = getUnitsByDimension('speed');
const timeUnits = getUnitsByDimension('time');
const accelerationUnits = getUnitsByDimension('acceleration');

const config: CalculatorConfig = {
  fields: [
    {
      type: 'field',
      key: 'vi',
      label: 'Initial Speed',
      unitOptions: speedUnits,
      defaultUnit: 'm/s',
      conversionBase: 'm/s',
    },
    {
      type: 'field',
      key: 'vf',
      label: 'Final Speed',
      unitOptions: speedUnits,
      defaultUnit: 'm/s',
      conversionBase: 'm/s',
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
      key: 'a',
      label: 'Acceleration',
      unitOptions: accelerationUnits,
      defaultUnit: 'm/s^2',
      conversionBase: 'm/s^2',
      isOutput: true,
    },
    { type: 'error' },
  ],
  formula: (inputs, changedField) => {
    const { vf, vi, t } = inputs;
    let a: number | undefined = undefined;

    if (t > 0) {
      a = (vf - vi) / t;
    }

    return {
      ...inputs,
      a: a ?? inputs['a'],
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

export default function AccelerationFromSpeedDifferenceCalculator() {
  return <Calculator config={config} />;
}
