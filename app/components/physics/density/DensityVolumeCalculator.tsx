'use client';

import React from 'react';
import Calculator, { CalculatorConfig } from '@/app/components/Calculator';
import { getUnitsByDimension } from '@/cnconvert/cnconvert';

const massUnits = getUnitsByDimension('mass');
const densityUnits = getUnitsByDimension('density');
const volumeUnits = getUnitsByDimension('volume');

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
      key: 'ρ',
      label: 'Density (ρ)',
      unitOptions: densityUnits,
      defaultUnit: 'kg/m^3',
      conversionBase: 'kg/m^3',
    },
    {
      type: 'field',
      key: 'V',
      label: 'Volume (V)',
      unitOptions: volumeUnits,
      defaultUnit: 'm^3',
      conversionBase: 'm^3',
      isOutput: true,
    },
    { type: 'error' },
  ],
  formula: (inputs, changedField) => {
    const { m, ρ } = inputs;
    let V: number | undefined = undefined;

    if (m > 0 && ρ > 0) {
      V = m / ρ;
    }

    return {
      ...inputs,
      V: V ?? inputs.V,
    };
  },
  validate: (inputs, rawInputs) => {
    const errors: string[] = [];
    if (rawInputs.m.trim() !== '' && inputs.m <= 0) {
      errors.push('Mass must be positive');
    }
    if (rawInputs['ρ'].trim() !== '' && inputs['ρ'] <= 0) {
      errors.push('Density must be positive');
    }
    return errors.length > 0 ? errors : null;
  },
};

export default function DensityVolumeCalculator() {
  return <Calculator config={config} />;
}
