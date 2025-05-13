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
      key: 'm',
      label: 'Mass (m)',
      unitOptions: massUnits,
      defaultUnit: 'kg',
      conversionBase: 'kg'
    },
    {
      type: 'field',
      key: 'v',
      label: 'Velocity (v)',
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
    const { KE, m } = inputs;
    let v: number | undefined = undefined;

    if (KE > 0 && m > 0) {
      v = Math.sqrt((2 * KE) / m);
    }

    return {
      ...inputs,
      v: v ?? inputs.v,
    };
  },
  validate: (inputs, rawInputs) => {
    const errors: string[] = [];
    if (rawInputs.KE.trim() !== '' && inputs.KE <= 0) {
      errors.push('Kinetic Energy must be positive');
    }
    if (rawInputs.m.trim() !== '' && inputs.m <= 0) {
      errors.push('Mass must be positive');
    }
    return errors.length > 0 ? errors : null;
  },
};

export default function KineticEnergyVelocityCalculator() {
  return <Calculator config={config} />;
}
