'use client';

import React from 'react';
import Calculator, { CalculatorConfig } from '@/app/components/Calculator';
import { getUnitsByDimension } from '@/cnconvert/cnconvert';

const massUnits = getUnitsByDimension('mass');
const volumeUnits = getUnitsByDimension('volume');
const densityUnits = getUnitsByDimension('density');

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
      key: 'V',
      label: 'Volume (V)',
      unitOptions: volumeUnits,
      defaultUnit: 'm^3',
      conversionBase: 'm^3',
    },
    {
      type: 'field',
      key: 'ρ',
      label: 'Density (ρ)',
      unitOptions: densityUnits,
      defaultUnit: 'kg/m^3',
      conversionBase: 'kg/m^3',
      isOutput: true,
    },
    {
      type: 'error',
    },
  ],
  formula: (inputs, changedField) => {
    const { m, V } = inputs;
    let ρ: number | undefined = undefined;

    if (m > 0 && V > 0) {
      ρ = m / V;
    }

    return {
      ...inputs,
      ρ: ρ ?? inputs['ρ'],
    };
  },
  validate: (inputs, rawInputs) => {
    const errors: string[] = [];
    if (rawInputs.m.trim() !== '' && inputs.m <= 0) {
      errors.push('Mass must be positive');
    }
    if (rawInputs.V.trim() !== '' && inputs.V <= 0) {
      errors.push('Volume must be positive');
    }
    return errors.length > 0 ? errors : null;
  },
};

export default function DensityCalculator() {
  return <Calculator config={config} />;
}
