'use client';

import React from 'react';
import Calculator, { CalculatorConfig } from '@/app/components/Calculator';
import { getUnitsByDimension } from '@/cnconvert/cnconvert';

const massUnits = getUnitsByDimension('mass');
const lengthUnits = getUnitsByDimension('length');
const energyUnits = getUnitsByDimension('energy');
const accelerationUnits = getUnitsByDimension('acceleration');

const config: CalculatorConfig = {
  fields: [
    {
      type: 'field',
      key: 'g',
      label: 'Gravitational acceleration (g)',
      defaultValue: 9.80665,
      unitOptions: accelerationUnits,
      defaultUnit: 'm/s^2',
      conversionBase: 'm/s^2',
    },
    {
      type: 'field',
      key: 'h',
      label: 'Height (h)',
      unitOptions: lengthUnits,
      defaultUnit: 'm',
      conversionBase: 'm',
    },
    {
      type: 'field',
      key: 'PE',
      label: 'Potential Energy (PE)',
      unitOptions: energyUnits,
      defaultUnit: 'J',
      conversionBase: 'J',
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
    { type: 'error' },
  ],
  formula: (inputs, changedField) => {
    const { PE, h, g } = inputs;
    let m: number | undefined = undefined;

    if (PE > 0 && h > 0 && g > 0) {
      m = PE / (g * h);
    }

    return {
      ...inputs,
      m: m ?? inputs.m,
    };
  },
  validate: (inputs, rawInputs) => {
    const errors: string[] = [];
    if (rawInputs.PE.trim() !== '' && inputs.PE <= 0) {
      errors.push('Potential energy must be positive');
    }
    if (rawInputs.h.trim() !== '' && inputs.h <= 0) {
      errors.push('Height must be positive');
    }
    if (rawInputs.g.trim() !== '' && inputs.g <= 0) {
      errors.push('Gravitational acceleration must be positive');
    }
    return errors.length > 0 ? errors : null;
  },
};

export default function PotentialEnergyMassCalculator() {
  return <Calculator config={config} />;
}
