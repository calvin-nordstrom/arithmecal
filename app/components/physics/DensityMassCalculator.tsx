'use client';

import React from 'react';
import Calculator, { CalculatorConfig } from '@/app/components/Calculator';
import { getUnitsByDimension } from '@/cnconvert/cnconvert';

const densityUnits = getUnitsByDimension('density');
const volumeUnits = getUnitsByDimension('volume');
const massUnits = getUnitsByDimension('mass');

const config: CalculatorConfig = {
  fields: [
    {
      type: 'field',
      key: 'ρ',
      label: 'Density (ρ)',
      unitOptions: densityUnits,
      defaultUnit: 'kg/m3',
      conversionBase: 'kg/m3',
    },
    {
      type: 'field',
      key: 'V',
      label: 'Volume (V)',
      unitOptions: volumeUnits,
      defaultUnit: 'm3',
      conversionBase: 'm3',
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
    const { ρ, V } = inputs;
    let m: number | undefined = undefined;

    if (ρ > 0 && V > 0) {
      m = ρ * V;
    }

    return {
      ...inputs,
      m: m ?? inputs.m,
    };
  },
  validate: (inputs, rawInputs) => {
    const errors: string[] = [];
    if (rawInputs['ρ'].trim() !== '' && inputs['ρ'] <= 0) {
      errors.push('Density must be positive');
    }
    if (rawInputs.V.trim() !== '' && inputs.V <= 0) {
      errors.push('Volume must be positive');
    }
    return errors.length > 0 ? errors : null;
  },
};

export default function DensityMassCalculator() {
  return <Calculator config={config} />;
}
