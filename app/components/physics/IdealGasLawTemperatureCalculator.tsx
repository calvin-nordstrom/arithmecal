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
      key: 'n',
      label: 'Amount of substance (n) in mols',
    },
    {
      type: 'field',
      key: 't',
      label: 'Temperature (T)',
      unitOptions: temperatureUnits,
      defaultUnit: 'K',
      conversionBase: 'K',
      isOutput: true,
    },
    {
      type: 'error'
    },
  ],
  formula: (inputs, changedField) => {
    const { p, V, n } = inputs;
    let t: number | undefined = undefined;

    if (p > 0 && V > 0 && n > 0) {
      t = (p * V) / (n * R);
    }

    return {
      ...inputs,
      t: t ?? inputs.t,
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
    if (rawInputs.n.trim() !== '' && inputs.n <= 0) {
      errors.push('Amount of substance must be positive');
    }
    return errors.length > 0 ? errors : null;
  },
};

export default function IdealGasLawTemperatureCalculator() {
  return <Calculator config={config} />;
}
