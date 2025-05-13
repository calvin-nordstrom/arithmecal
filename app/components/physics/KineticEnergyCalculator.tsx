'use client';

import React from 'react';
import Calculator, { CalculatorConfig } from '@/app/components/Calculator';
import { getUnitsByDimension } from '@/cnconvert/cnconvert';

const massUnits = getUnitsByDimension('mass');
const speedUnits = getUnitsByDimension('speed');
const energyUnits = getUnitsByDimension('energy');

const config: CalculatorConfig = {
  fields: [
    {
      type: 'field',
      key: 'm',
      label: 'Mass',
      unitOptions: massUnits,
      defaultUnit: 'kg',
      conversionBase: 'kg'
    },
    {
      type: 'field',
      key: 'v',
      label: 'Velocity',
      unitOptions: speedUnits,
      defaultUnit: 'm/s',
      conversionBase: 'm/s'
    },
    {
      type: 'field',
      key: 'KE',
      label: 'Kinetic Energy',
      unitOptions: energyUnits,
      defaultUnit: 'J',
      conversionBase: 'J',
      isOutput: true,
    },
    {
      type: 'error',
    },
  ],
  formula: (inputs, changedField) => {
    const { m, v } = inputs;
    let KE: number | undefined = undefined;

    if (m > 0 && v != null) {
      KE = 0.5 * m * v * v;
    }

    return {
      ...inputs,
      KE: KE ?? inputs.KE,
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

export default function KineticEnergyCalculator() {
  return <Calculator config={config} />;
}
