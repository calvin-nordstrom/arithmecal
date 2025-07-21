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
      key: 'angle',
      label: 'Included Angle (degrees)',
      unitOptions: angleUnits,
      defaultUnit: 'deg',
      conversionBase: 'deg'
    },
    {
      type: 'error'
    },
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
    const { a, b, angle } = inputs;
    let area = 0;
    if (a > 0 && b > 0 && angle > 0 && angle < 180) {
      const radians = (angle * Math.PI) / 180;
      area = a * b * Math.sin(radians);
    }
    return { a, b, angle, area };
  },
  validate: (inputs) => {
    const errors: string[] = [];
    if (inputs.a <= 0) errors.push('Side a must be positive');
    if (inputs.b <= 0) errors.push('Side b must be positive');
    if (inputs.angle <= 0 || inputs.angle >= 180) {
      errors.push('Angle must be between 0 and 180 degrees');
    }
    return errors.length ? errors : null;
  }
};

export default function KiteAreaGivenSidesAndAngleCalculator() {
  return <Calculator config={config} />;
}
