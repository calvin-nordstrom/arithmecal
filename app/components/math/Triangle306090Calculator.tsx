'use client';

import React from 'react';
import Calculator, { CalculatorConfig } from '@/app/components/Calculator';
import { lengthUnits, areaUnits } from '@/app/utils/units';

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
      type: 'divider'
    },
  ],
  formula: (inputs, changedField) => {
    let a: number, b: number, c: number, area: number, perimeter: number;
    const sqrt3 = Math.sqrt(3);

    switch (changedField) {
      case 'a':
        a = inputs.a;
        b = a * sqrt3;
        c = 2 * a;
        area = 0.5 * a * b;
        perimeter = a + b + c;
        break;
      case 'b':
        b = inputs.b;
        a = b / sqrt3;
        c = 2 * a;
        area = 0.5 * a * b;
        perimeter = a + b + c;
        break;
      case 'c':
        c = inputs.c;
        a = c / 2;
        b = a * sqrt3;
        area = 0.5 * a * b;
        perimeter = a + b + c;
        break;
      case 'area':
        area = inputs.area;
        a = Math.sqrt((2 * area) / sqrt3);
        b = a * sqrt3;
        c = 2 * a;
        perimeter = a + b + c;
        break;
      case 'perimeter':
        perimeter = inputs.perimeter;
        a = perimeter / (3 + sqrt3);
        b = a * sqrt3;
        c = 2 * a;
        area = 0.5 * a * b;
        break;
      default:
        return inputs;
    }
    return { a, b, c, area, perimeter };
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

export default function Triangle306090Calculator() {
  return <Calculator config={config} />;
}
