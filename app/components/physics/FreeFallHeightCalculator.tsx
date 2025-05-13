'use client';

import React from 'react';
import Calculator, { CalculatorConfig } from '@/app/components/Calculator';
import { getUnitsByDimension } from '@/cnconvert/cnconvert';

const accelerationUnits = getUnitsByDimension('acceleration');
const speedUnits = getUnitsByDimension('speed');
const lengthUnits = getUnitsByDimension('length');
const timeUnits = getUnitsByDimension('time');

const config: CalculatorConfig = {
  fields: [
    {
      type: 'field',
      key: 'g',
      label: 'Gravitational acceleration',
      defaultValue: 9.80665,
      unitOptions: accelerationUnits,
      defaultUnit: 'm/s^2',
      conversionBase: 'm/s^2',
    },
    {
      type: 'field',
      key: 'vi',
      label: 'Initial velocity',
      unitOptions: speedUnits,
      defaultUnit: 'm/s',
      conversionBase: 'm/s',
    },
    {
      type: 'field',
      key: 'v',
      label: 'Velocity',
      unitOptions: speedUnits,
      defaultUnit: 'm/s',
      conversionBase: 'm/s',
    },
    {
      type: 'field',
      key: 't',
      label: 'Time of fall',
      unitOptions: timeUnits,
      defaultUnit: 's',
      conversionBase: 's',
    },
    {
      type: 'field',
      key: 'h',
      label: 'Height',
      unitOptions: lengthUnits,
      defaultUnit: 'm',
      conversionBase: 'm',
      isOutput: true,
    },
    {
      type: 'error',
    },
  ],
  formula: (inputs, changedField) => {
    const { g, vi, t, v } = inputs;
    let h: number | undefined = undefined;
    let derivedT = t;
    let derivedV = v;

    const updateHAndV = () => {
      if (g > 0) {
        h = vi * t + 0.5 * g * t * t;
        derivedV = vi + g * t;
      }
    };

    switch (changedField) {
      case 't':
        updateHAndV();
        break;
      case 'v':
        if (g > 0) {
          derivedT = (v - vi) / g;
          h = vi * derivedT + 0.5 * g * derivedT * derivedT;
        }
        break;
      case 'g':
      case 'vi':
        if (t !== undefined) {
          updateHAndV();
        }
        break;
    }

    return {
      ...inputs,
      t: derivedT ?? inputs.t,
      v: derivedV ?? inputs.v,
      h: h ?? inputs.h,
    };
  },
  validate: (inputs, rawInputs) => {
    const errors: string[] = [];
    if (rawInputs.g.trim() !== '' && inputs.g <= 0) {
      errors.push('Gravitational acceleration must be positive');
    }
    if (rawInputs.t.trim() !== '' && inputs.t < 0) {
      errors.push('Time of fall cannot be negative');
    }
    if (rawInputs.v.trim() !== '' && inputs.v < 0) {
      errors.push('Velocity cannot be negative');
    }
    if (rawInputs.h.trim() !== '' && inputs.h < 0) {
      errors.push('Height cannot be negative');
    }
    return errors.length > 0 ? errors : null;
  },
};

export default function FreeFallHeightCalculator() {
  return <Calculator config={config} />;
}
