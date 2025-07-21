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
      key: 'm',
      label: 'Mass (m)',
      unitOptions: massUnits,
      defaultUnit: 'kg',
      conversionBase: 'kg',
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
      key: 'g',
      label: 'Gravitational acceleration (g)',
      unitOptions: accelerationUnits,
      defaultUnit: 'm/s^2',
      conversionBase: 'm/s^2',
      isOutput: true,
    },
    { type: 'error' },
  ],
  formula: (inputs, changedField) => {
    const { PE, m, h } = inputs;
    let g: number | undefined = undefined;

    if (PE > 0 && m > 0 && h > 0) {
      g = PE / (m * h);
    }

    return {
      ...inputs,
      g: g ?? inputs.g,
    };
  },
  validate: (inputs, rawInputs) => {
    const errors: string[] = [];
    if (rawInputs.PE.trim() !== '' && inputs.PE <= 0) {
      errors.push('Potential energy must be positive');
    }
    if (rawInputs.m.trim() !== '' && inputs.m <= 0) {
      errors.push('Mass must be positive');
    }
    if (rawInputs.h.trim() !== '' && inputs.h <= 0) {
      errors.push('Height must be positive');
    }
    return errors.length > 0 ? errors : null;
  },
};

export default function PotentialEnergyGravityCalculator() {
  return <Calculator config={config} />;
}
