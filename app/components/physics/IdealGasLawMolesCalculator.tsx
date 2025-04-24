'use client';

import React from 'react';
import Calculator, { CalculatorConfig } from '@/app/components/Calculator';
import { pressureUnits, volumeUnits, temperatureUnits } from '@/app/utils/units';

const R = 8.314462618; // J/(mol·K)

const config: CalculatorConfig = {
  fields: [
    {
      type: 'field',
      key: 'p',
      label: 'Pressure (p)',
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
      key: 't',
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
    const { p, V, t } = inputs;
    let n: number | undefined = undefined;

    if (p > 0 && V > 0 && t > 0) {
      n = (p * V) / (R * t);
    }

    return {
      ...inputs,
      n: n ?? inputs.n,
    };
  },
  validate: (inputs, rawInputs) => {
    const errors: string[] = [];
    if (rawInputs.p.trim() !== '' && inputs.p <= 0) {
      errors.push('Pressure must be positive');
    }
    if (rawInputs.V.trim() !== '' && inputs.V <= 0) {
      errors.push('Volume must be positive');
    }
    if (rawInputs.t.trim() !== '' && inputs.t <= 0) {
      errors.push('Temperature must be positive');
    }
    return errors.length > 0 ? errors : null;
  },
};

export default function IdealGasLawMolesCalculator() {
  return <Calculator config={config} />;
}
