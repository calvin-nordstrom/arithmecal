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
      defaultUnit: 'm/s2',
      conversionBase: 'm/s2',
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
      key: 'vi',
      label: 'Initial velocity',
      unitOptions: speedUnits,
      defaultUnit: 'm/s',
      conversionBase: 'm/s',
      isOutput: true,
    },
    {
      type: 'error'
    },
  ],
  formula: (inputs, changedField) => {
    const { g, v, t, h } = inputs;
    let vi: number | undefined = undefined;
    let derivedH: number | undefined = h;
    let derivedV = v;

    const calculateVIFromV = () => {
      if (g > 0 && t !== undefined && v !== undefined) {
        return v - g * t;
      }
      return undefined;
    };

    const calculateVIFromH = () => {
      if (g > 0 && t !== undefined && h !== undefined && t !== 0) {
        return (h - 0.5 * g * t * t) / t;
      }
      return undefined;
    };

    const calculateH = () => {
      if (vi !== undefined && g > 0 && t !== undefined) {
        return vi * t + 0.5 * g * t * t;
      }
      return undefined;
    };

    switch (changedField) {
      case 'v':
      case 'g':
      case 't':
        vi = calculateVIFromV();
        derivedH = calculateH();
        break;
      case 'h':
        if (g > 0 && t !== undefined && h !== undefined && t !== 0) {
          vi = (h - 0.5 * g * t * t) / t;
          derivedV = vi + g * t;
        }
        break;
    }

    return {
      ...inputs,
      vi: vi ?? inputs.vi,
      h: derivedH ?? inputs.h,
      v: derivedV ?? inputs.v,
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

export default function FreeFallInitialVelocityCalculator() {
  return <Calculator config={config} />;
}
