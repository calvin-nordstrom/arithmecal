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
      key: 'n',
      label: 'Amount of substance (n) in mols',
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
      key: 'V',
      label: 'Volume (V)',
      unitOptions: volumeUnits,
      defaultUnit: 'm3',
      conversionBase: 'm3',
      isOutput: true,
    },
    {
      type: 'error'
    },
  ],
  formula: (inputs, changedField) => {
    const { p, n, t } = inputs;
    let V: number | undefined = undefined;

    if (p > 0 && n > 0 && t > 0) {
      V = (n * R * t) / p;
    }

    return {
      ...inputs,
      V: V ?? inputs.V,
    };
  },
  validate: (inputs, rawInputs) => {
    const errors: string[] = [];
    if (rawInputs.p.trim() !== '' && inputs.p <= 0) {
      errors.push('Pressure must be positive');
    }
    if (rawInputs.n.trim() !== '' && inputs.n <= 0) {
      errors.push('Amount of substance must be positive');
    }
    if (rawInputs.t.trim() !== '' && inputs.t <= 0) {
      errors.push('Temperature must be positive');
    }
    return errors.length > 0 ? errors : null;
  },
};

export default function IdealGasLawVolumeCalculator() {
  return <Calculator config={config} />;
}
