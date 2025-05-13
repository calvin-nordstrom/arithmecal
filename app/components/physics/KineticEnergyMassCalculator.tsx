'use client';

import React from 'react';
import Calculator, { CalculatorConfig } from '@/app/components/Calculator';
import { getUnitsByDimension } from '@/cnconvert/cnconvert';

const energyUnits = getUnitsByDimension('energy');
const massUnits = getUnitsByDimension('mass');
const speedUnits = getUnitsByDimension('speed');

const config: CalculatorConfig = {
  fields: [
    {
      type: 'field',
      key: 'KE',
      label: 'Kinetic Energy (KE)',
      unitOptions: energyUnits,
      defaultUnit: 'J',
      conversionBase: 'J'
    },
    {
      type: 'field',
      key: 'v',
      label: 'Velocity (v)',
      unitOptions: speedUnits,
      defaultUnit: 'm/s',
      conversionBase: 'm/s'
    },
    {
      type: 'field',
      key: 'm',
      label: 'Mass (m)',
      unitOptions: massUnits,
      defaultUnit: 'kg',
      conversionBase: 'kg',
      isOutput: true,
    },
    {
      type: 'error',
    },
  ],
  formula: (inputs, changedField) => {
    const { KE, v } = inputs;
    let m: number | undefined = undefined;

    if (KE > 0 && v !== 0) {
      m = (2 * KE) / (v * v);
    }

    return {
      ...inputs,
      m: m ?? inputs.m,
    };
  },
  validate: (inputs, rawInputs) => {
    const errors: string[] = [];
    if (rawInputs.KE.trim() !== '' && inputs.KE <= 0) {
      errors.push('Kinetic Energy must be positive');
    }
    if (rawInputs.v.trim() !== '' && inputs.v === 0) {
      errors.push('Velocity should be non-zero');
    }
    return errors.length > 0 ? errors : null;
  },
};

export default function KineticEnergyMassCalculator() {
  return <Calculator config={config} />;
}
