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
      key: 'd1',
      label: 'Diagonal 1',
      unitOptions: lengthUnits,
      defaultUnit: 'm',
      conversionBase: 'm',
    },
    {
      type: 'field',
      key: 'd2',
      label: 'Diagonal 2',
      unitOptions: lengthUnits,
      defaultUnit: 'm',
      conversionBase: 'm',
    },
    {
      type: 'field',
      key: 'angle',
      label: 'Angle θ',
      unitOptions: angleUnits,
      defaultUnit: 'deg',
      conversionBase: 'deg',
    },
    {
      type: 'error',
    },
    {
      type: 'field',
      key: 'area',
      label: 'Area',
      unitOptions: areaUnits,
      defaultUnit: 'm^2',
      conversionBase: 'm^2',
      isOutput: true,
    },
  ],
  formula: (inputs) => {
    const { d1, d2, angle } = inputs;
    let area = 0;
    if (d1 > 0 && d2 > 0 && angle > 0 && angle < 180) {
      const radians = (angle * Math.PI) / 180;
      area = d1 * d2 * Math.sin(radians);
    }
    return { d1, d2, angle, area };
  },
  validate: (inputs) => {
    const errors: string[] = [];
    if (inputs.d1 <= 0) errors.push('Diagonal 1 must be positive');
    if (inputs.d2 <= 0) errors.push('Diagonal 2 must be positive');
    if (inputs.angle <= 0 || inputs.angle >= 180)
      errors.push('Angle must be between 0 and 180 degrees');
    return errors.length ? errors : null;
  },
};

export default function ParallelogramAreaGivenDiagonalsAndAngleCalculator() {
  return <Calculator config={config} />;
}
