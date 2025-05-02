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
      key: 'P',
      label: 'Pressure (P)',
      unitOptions: pressureUnits,
      defaultUnit: 'Pa',
      conversionBase: 'Pa'
    },
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
      key: 'T',
      label: 'Temperature (T)',
      unitOptions: temperatureUnits,
      defaultUnit: 'K',
      conversionBase: 'K'
    },
    {
      type: 'field',
      key: 'n',
      label: 'Amount of substance (n) in mols',
      isOutput: true,
    },
    {
      type: 'error'
    },
  ],
  formula: (inputs, changedField) => {
    const { P, V, T } = inputs;
    let n: number | undefined = undefined;

    if (P > 0 && V > 0 && T > 0) {
      n = (P * V) / (R * T);
    }

    return {
      ...inputs,
      n: n ?? inputs.n,
    };
  },
  validate: (inputs, rawInputs) => {
    const errors: string[] = [];
    if (rawInputs.P.trim() !== '' && inputs.P <= 0) {
      errors.push('Pressure must be positive');
    }
    if (rawInputs.V.trim() !== '' && inputs.V <= 0) {
      errors.push('Volume must be positive');
    }
    if (rawInputs.T.trim() !== '' && inputs.T <= 0) {
      errors.push('Temperature must be positive');
    }
    return errors.length > 0 ? errors : null;
  },
};

export default function IdealGasLawMolesCalculator() {
  return <Calculator config={config} />;
}
