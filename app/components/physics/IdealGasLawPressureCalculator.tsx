'use client';

import React from 'react';
import Calculator, { CalculatorConfig } from '@/app/components/Calculator';
import { getUnitsByDimension } from '@/cnconvert/cnconvert';

const pressureUnits = getUnitsByDimension('pressure');
const volumeUnits = getUnitsByDimension('volume');
const temperatureUnits = getUnitsByDimension('temperature');

const R = 8.314462618; // J/(mol·K)

const config: CalculatorConfig = {
  fields: [
    {
      type: 'field',
      key: 'V',
      label: 'Volume (V)',
      unitOptions: volumeUnits,
      defaultUnit: 'm3',
      conversionBase: 'm3'
    },
    {
      type: 'field',
      key: 'n',
      label: 'Amount of substance (n) in mols',
    },
    {
      type: 'field',
      key: 'T',
      label: 'Temperature (T)',
      unitOptions: temperatureUnits,
      defaultUnit: 'K',
      conversionBase: 'K'
    },
    {
      type: 'field',
      key: 'P',
      label: 'Pressure (P)',
      unitOptions: pressureUnits,
      defaultUnit: 'Pa',
      conversionBase: 'Pa',
      isOutput: true,
    },
    {
      type: 'error'
    },
  ],
  formula: (inputs, changedField) => {
    const { V, n, T } = inputs;
    let P: number | undefined = undefined;

    if (V > 0 && n > 0 && T > 0) {
      P = (n * R * T) / V;
    }

    return {
      ...inputs,
      P: P ?? inputs.P,
    };
  },
  validate: (inputs, rawInputs) => {
    const errors: string[] = [];
    if (rawInputs.V.trim() !== '' && inputs.V <= 0) {
      errors.push('Volume must be positive');
    }
    if (rawInputs.n.trim() !== '' && inputs.n <= 0) {
      errors.push('Amount of substance must be positive');
    }
    if (rawInputs.T.trim() !== '' && inputs.T <= 0) {
      errors.push('Temperature must be positive');
    }
    return errors.length > 0 ? errors : null;
  },
};

export default function IdealGasLawPressureCalculator() {
  return <Calculator config={config} />;
}
