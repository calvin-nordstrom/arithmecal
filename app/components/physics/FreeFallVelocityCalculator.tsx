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
      key: 'h',
      label: 'Height',
      unitOptions: lengthUnits,
      defaultUnit: 'm',
      conversionBase: 'm',
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
      key: 'v',
      label: 'Velocity',
      unitOptions: speedUnits,
      defaultUnit: 'm/s',
      conversionBase: 'm/s',
      isOutput: true,
    },
    { type: 'error' },
  ],
  formula: (inputs, changedField) => {
    const { g, vi, h, t } = inputs;
    let v: number | undefined = undefined;
    let derivedH = h;
    let derivedT = t;

    const updateVAndT = () => {
      if (g > 0) {
        const discriminant = vi * vi + 2 * g * h;
        if (discriminant >= 0) {
          v = Math.sqrt(discriminant);
          derivedT = (v - vi) / g;
        }
      }
    };

    switch (changedField) {
      case 't':
        if (g > 0) {
          v = vi + g * t;
          derivedH = vi * t + 0.5 * g * t * t;
        }
        break;
      case 'g':
      case 'vi':
      case 'h':
        updateVAndT();
        break;
    }

    return {
      ...inputs,
      h: derivedH ?? inputs.h,
      t: derivedT ?? inputs.t,
      v: v ?? inputs.v,
    };
  },
  validate: (inputs, rawInputs) => {
    const errors: string[] = [];
    if (rawInputs.g.trim() !== '' && inputs.g <= 0) {
      errors.push('Gravitational acceleration must be positive');
    }
    if (rawInputs.h.trim() !== '' && inputs.h < 0) {
      errors.push('Height cannot be negative');
    }
    if (rawInputs.v.trim() !== '' && inputs.v < 0) {
      errors.push('Velocity cannot be negative');
    }
    if (rawInputs.t.trim() !== '' && inputs.t < 0) {
      errors.push('Time of fall cannot be negative');
    }
    return errors.length > 0 ? errors : null;
  },
};

export default function FreeFallVelocityCalculator() {
  return <Calculator config={config} />;
}
