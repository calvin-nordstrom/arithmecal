'use client';

import React from 'react';
import Calculator, { CalculatorConfig } from '@/app/components/Calculator';
import { getUnitsByDimension } from '@/cnconvert/cnconvert';

const massUnits = getUnitsByDimension('mass');
const forceUnits = getUnitsByDimension('force');
const accelerationUnits = getUnitsByDimension('acceleration');

const config: CalculatorConfig = {
  fields: [
    {
      type: 'field',
      key: 'm',
      label: 'Mass',
      unitOptions: massUnits,
      defaultUnit: 'kg',
      conversionBase: 'kg',
    },
    {
      type: 'field',
      key: 'F',
      label: 'Force',
      unitOptions: forceUnits,
      defaultUnit: 'N',
      conversionBase: 'N',
    },
    {
      type: 'field',
      key: 'a',
      label: 'Acceleration',
      unitOptions: accelerationUnits,
      defaultUnit: 'm/s2',
      conversionBase: 'm/s2',
      isOutput: true,
    },
    {
      type: 'error',
    },
  ],
  formula: (inputs, changedField) => {
    const { F, m } = inputs;
    let a: number | undefined = undefined;

    if (m > 0) {
      a = F / m;
    }

    return {
      ...inputs,
      a: a ?? inputs['a'],
    };
  },
  validate: (inputs, rawInputs) => {
    const errors: string[] = [];
    if (rawInputs.m.trim() !== '' && inputs.m <= 0) {
      errors.push('Mass must be positive');
    }
    return errors.length > 0 ? errors : null;
  },
};

export default function AccelerationFromMassAndForceCalculator() {
  return <Calculator config={config} />;
}
