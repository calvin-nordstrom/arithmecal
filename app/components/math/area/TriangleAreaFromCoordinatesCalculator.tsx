'use client';

import React from 'react';
import Calculator, { CalculatorConfig } from '@/app/components/Calculator';
import { getUnitsByDimension } from '@/cnconvert/cnconvert';

const lengthUnits = getUnitsByDimension('length');
const areaUnits = getUnitsByDimension('area');

const config: CalculatorConfig = {
  fields: [
    { type: 'field', key: 'x1', label: 'x₁', unitOptions: lengthUnits, defaultUnit: 'm', conversionBase: 'm' },
    { type: 'field', key: 'y1', label: 'y₁', unitOptions: lengthUnits, defaultUnit: 'm', conversionBase: 'm' },
    { type: 'divider' },
    { type: 'field', key: 'x2', label: 'x₂', unitOptions: lengthUnits, defaultUnit: 'm', conversionBase: 'm' },
    { type: 'field', key: 'y2', label: 'y₂', unitOptions: lengthUnits, defaultUnit: 'm', conversionBase: 'm' },
    { type: 'divider' },
    { type: 'field', key: 'x3', label: 'x₃', unitOptions: lengthUnits, defaultUnit: 'm', conversionBase: 'm' },
    { type: 'field', key: 'y3', label: 'y₃', unitOptions: lengthUnits, defaultUnit: 'm', conversionBase: 'm' },
    { type: 'divider' },
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
    const { x1, y1, x2, y2, x3, y3 } = inputs;
    const area = 0.5 * Math.abs(
      x1 * (y2 - y3) +
      x2 * (y3 - y1) +
      x3 * (y1 - y2)
    );
    return { x1, y1, x2, y2, x3, y3, area };
  },
  validate: (inputs) => {
    const errors: string[] = [];
    if (inputs.x1 === inputs.x2 && inputs.y1 === inputs.y2) {
      errors.push('Points 1 and 2 must not be the same');
    }
    if (inputs.x2 === inputs.x3 && inputs.y2 === inputs.y3) {
      errors.push('Points 2 and 3 must not be the same');
    }
    if (inputs.x1 === inputs.x3 && inputs.y1 === inputs.y3) {
      errors.push('Points 1 and 3 must not be the same');
    }
    return errors.length ? errors : null;
  }
};

export default function TriangleAreaFromCoordinatesCalculator() {
  return <Calculator config={config} />;
}
