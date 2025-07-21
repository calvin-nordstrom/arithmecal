'use client';

import React from 'react';
import Calculator, { CalculatorConfig } from '@/app/components/Calculator';
import { getUnitsByDimension } from '@/cnconvert/cnconvert';

const lengthUnits = getUnitsByDimension('length');
const areaUnits = getUnitsByDimension('area');
const angleUnits = getUnitsByDimension('angle');

const config: CalculatorConfig = {
  fields: [
    {
      type: 'field',
      key: 'a',
      label: 'Side a',
      unitOptions: lengthUnits,
      defaultUnit: 'm',
      conversionBase: 'm'
    },
    {
      type: 'field',
      key: 'b',
      label: 'Side b',
      unitOptions: lengthUnits,
      defaultUnit: 'm',
      conversionBase: 'm'
    },
    {
      type: 'field',
      key: 'C',
      label: 'Angle γ',
      unitOptions: angleUnits,
      defaultUnit: 'deg',
      conversionBase: 'deg'
    },
    { type: 'error' },
    {
      type: 'field',
      key: 'area',
      label: 'Area',
      unitOptions: areaUnits,
      defaultUnit: 'm^2',
      conversionBase: 'm^2',
      isOutput: true
    }
  ],
  formula: (inputs) => {
    const { a, b, C } = inputs;
    if (a <= 0 || b <= 0 || C <= 0 || C >= 180) return { a, b, C, area: 0 };
    const radians = (C * Math.PI) / 180;
    const area = 0.5 * a * b * Math.sin(radians);
    return { a, b, C, area };
  },
  validate: (inputs) => {
    const errors: string[] = [];
    if (inputs.a <= 0) errors.push('Side a must be positive');
    if (inputs.b <= 0) errors.push('Side b must be positive');
    if (inputs.C <= 0 || inputs.C >= 180) errors.push('Angle C must be between 0° and 180°');
    return errors.length ? errors : null;
  }
};

export default function TriangleAreaFromTwoSidesAndAngleCalculator() {
  return <Calculator config={config} />;
}
