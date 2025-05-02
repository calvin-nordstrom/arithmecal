'use client';

import React from 'react';
import Calculator, { CalculatorConfig } from '@/app/components/Calculator';
import { lengthUnits, areaUnits } from '@/utils/units';

const config: CalculatorConfig = {
  fields: [
    {
      type: 'field',
      key: 'a',
      label: 'Side (a)',
      unitOptions: lengthUnits,
      defaultUnit: 'm',
      conversionBase: 'm'
    },
    {
      type: 'field',
      key: 'b',
      label: 'Side (b)',
      unitOptions: lengthUnits,
      defaultUnit: 'm',
      conversionBase: 'm'
    },
    {
      type: 'field',
      key: 'c',
      label: 'Side (c)',
      unitOptions: lengthUnits,
      defaultUnit: 'm',
      conversionBase: 'm'
    },
    {
      type: 'field',
      key: 'area',
      label: 'Area',
      unitOptions: areaUnits,
      defaultUnit: 'm2',
      conversionBase: 'm2'
    },
    {
      type: 'field',
      key: 'perimeter',
      label: 'Perimeter',
      unitOptions: lengthUnits,
      defaultUnit: 'm',
      conversionBase: 'm'
    },
    {
      type: 'error'
    },
  ],
  formula: (inputs, changedField) => {
    let a: number | undefined = undefined;
    let b: number | undefined = undefined;
    let c: number | undefined = undefined;
    let area: number | undefined = undefined;
    let perimeter: number | undefined = undefined;
    const sqrt2 = Math.sqrt(2);

    switch (changedField) {
      case 'a':
        a = inputs.a;
        if (a <= 0) break;
        b = a;
        c = a * sqrt2;
        area = 0.5 * a * b;
        perimeter = a + b + c;
        break;
      case 'b':
        b = inputs.b;
        if (b <= 0) break;
        a = b;
        c = a * sqrt2;
        area = 0.5 * a * b;
        perimeter = a + b + c;
        break;
      case 'c':
        c = inputs.c;
        if (c <= 0) break;
        a = c * sqrt2 / 2;
        b = c * sqrt2 / 2;
        area = 0.5 * a * b;
        perimeter = a + b + c;
        break;
      case 'area':
        area = inputs.area;
        if (area <= 0) break;
        a = Math.sqrt(2 * area);
        b = Math.sqrt(2 * area);
        c = 2 * Math.sqrt(area);
        perimeter = a + b + c;
        break;
      case 'perimeter':
        perimeter = inputs.perimeter;
        if (perimeter <= 0) break;
        a = perimeter / (2 + sqrt2);
        b = perimeter / (2 + sqrt2);
        c = a * sqrt2;
        area = 0.5 * a * b;
        break;
      default:
        return inputs;
    }

    return {
      a: a ?? inputs.a,
      b: b ?? inputs.b,
      c: c ?? inputs.c,
      area: area ?? inputs.area,
      perimeter: perimeter ?? inputs.perimeter,
    };
  },
  validate: (inputs, rawInputs) => {
    const errors: string[] = [];
    if (rawInputs.a.trim() !== '' && inputs.a <= 0) {
      errors.push('Side a must be positive');
    }
    if (rawInputs.b.trim() !== '' && inputs.b <= 0) {
      errors.push('Side b must be positive');
    }
    if (rawInputs.c.trim() !== '' && inputs.c <= 0) {
      errors.push('Side c must be positive');
    }
    if (rawInputs.area.trim() !== '' && inputs.area <= 0) {
      errors.push('Area must be positive');
    }
    if (rawInputs.perimeter.trim() !== '' && inputs.perimeter <= 0) {
      errors.push('Perimeter must be positive');
    }
    return errors.length > 0 ? errors : null;
  },
};

export default function Triangle454590Calculator() {
  return <Calculator config={config} />;
}
