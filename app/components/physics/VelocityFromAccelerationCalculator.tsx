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
      label: 'Initial Velocity',
      unitOptions: speedUnits,
      defaultUnit: 'm/s',
      conversionBase: 'm/s',
    },
    {
      type: 'field',
      key: 'a',
      label: 'Acceleration',
      unitOptions: accelerationUnits,
      defaultUnit: 'm/s^2',
      conversionBase: 'm/s^2',
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
      label: 'Final Velocity',
      unitOptions: speedUnits,
      defaultUnit: 'm/s',
      conversionBase: 'm/s',
      isOutput: true,
    },
    {
      type: 'error',
    },
  ],
  formula: (inputs, changedField) => {
    const { vi, a, t } = inputs;
    let v: number | undefined = undefined;

    v = vi + a * t;

    return {
      ...inputs,
      v: v ?? inputs['v'],
    };
  },
  validate: (inputs, rawInputs) => {
    const errors: string[] = [];
    if (rawInputs.t.trim() !== '' && inputs.t < 0) {
      errors.push('Time cannot be negative');
    }
    return errors.length > 0 ? errors : null;
  },
};

export default function VelocityFromAccelerationCalculator() {
  return <Calculator config={config} />;
}
