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
      key: 'B',
      label: 'Angle β',
      unitOptions: angleUnits,
      defaultUnit: 'deg',
      conversionBase: 'deg'
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
    const { a, B, C } = inputs;
    const A = 180 - B - C;
    if (a <= 0 || B <= 0 || C <= 0 || A <= 0) return { a, B, C, area: 0 };

    const radiansA = (A * Math.PI) / 180;
    const radiansB = (B * Math.PI) / 180;
    const radiansC = (C * Math.PI) / 180;

    // Use Law of Sines to find side b and c, then use two-side-angle formula
    const b = (a * Math.sin(radiansB)) / Math.sin(radiansA);
    const c = (a * Math.sin(radiansC)) / Math.sin(radiansA);
    const area = 0.5 * b * c * Math.sin(radiansA);

    return { a, B, C, area };
  },
  validate: (inputs) => {
    const errors: string[] = [];
    if (inputs.a <= 0) errors.push('Side a must be positive');
    if (inputs.B <= 0 || inputs.C <= 0 || inputs.B + inputs.C >= 180) {
      errors.push('Angles B and C must be positive and their sum must be less than 180°');
    }
    return errors.length ? errors : null;
  }
};

export default function TriangleAreaFromOneSideAndTwoAnglesCalculator() {
  return <Calculator config={config} />;
}
