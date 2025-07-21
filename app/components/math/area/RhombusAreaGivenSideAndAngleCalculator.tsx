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
      key: 'side',
      label: 'Side Length',
      unitOptions: lengthUnits,
      defaultUnit: 'm',
      conversionBase: 'm'
    },
    {
      type: 'field',
      key: 'angle',
      label: 'Interior Angle (degrees)',
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
    const { side, angle } = inputs;
    if (side <= 0 || angle <= 0 || angle >= 180) {
      return { side, angle, area: 0 };
    }
    const radians = (angle * Math.PI) / 180;
    const area = side * side * Math.sin(radians);
    return { side, angle, area };
  },
  validate: (inputs) => {
    const errors: string[] = [];
    if (inputs.side <= 0) errors.push('Side length must be positive');
    if (inputs.angle <= 0 || inputs.angle >= 180)
      errors.push('Angle must be between 0 and 180 degrees');
    return errors.length ? errors : null;
  }
};

export default function RhombusAreaGivenSideAndAngleCalculator() {
  return <Calculator config={config} />;
}
