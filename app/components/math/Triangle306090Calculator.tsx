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
      type: 'error'
    },
  ],
  formula: (inputs, changedField) => {
    let a: number | undefined = undefined;
    let b: number | undefined = undefined;
    let c: number | undefined = undefined;
    let area: number | undefined = undefined;
    let perimeter: number | undefined = undefined;
    const sqrt3 = Math.sqrt(3);

    const checkReturn = (num: number): boolean => num <= 0;

    switch (changedField) {
      case 'a':
        a = inputs.a;
        if (checkReturn(a)) break;
        b = a * sqrt3;
        c = 2 * a;
        area = 0.5 * a * b;
        perimeter = a + b + c;
        break;
      case 'b':
        b = inputs.b;
        if (checkReturn(b)) break;
        a = b / sqrt3;
        c = 2 * a;
        area = 0.5 * a * b;
        perimeter = a + b + c;
        break;
      case 'c':
        c = inputs.c;
        if (checkReturn(c)) break;
        a = c / 2;
        b = a * sqrt3;
        area = 0.5 * a * b;
        perimeter = a + b + c;
        break;
      case 'area':
        area = inputs.area;
        if (checkReturn(area)) break;
        a = Math.sqrt((2 * area) / sqrt3);
        b = a * sqrt3;
        c = 2 * a;
        perimeter = a + b + c;
        break;
      case 'perimeter':
        perimeter = inputs.perimeter;
        if (checkReturn(perimeter)) break;
        a = perimeter / (3 + sqrt3);
        b = a * sqrt3;
        c = 2 * a;
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

export default function Triangle306090Calculator() {
  return <Calculator config={config} />;
}
