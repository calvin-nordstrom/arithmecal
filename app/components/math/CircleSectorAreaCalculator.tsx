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
      key: 'radius',
      label: 'Radius',
      unitOptions: lengthUnits,
      defaultUnit: 'm',
      conversionBase: 'm'
    },
    {
      type: 'field',
      key: 'angle',
      label: 'Central Angle',
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
      label: 'Sector Area',
      unitOptions: areaUnits,
      defaultUnit: 'm^2',
      conversionBase: 'm^2',
      isOutput: true
    }
  ],
  formula: (inputs) => {
    const { radius, angle } = inputs;
    if (radius <= 0 || angle <= 0 || angle > 360) return { radius, angle, area: 0 };
    const area = (angle / 360) * Math.PI * radius * radius;
    return { radius, angle, area };
  },
  validate: (inputs, raw) => {
    const errors: string[] = [];
    if (raw.radius.trim() !== '' && inputs.radius <= 0) {
      errors.push('Radius must be positive');
    }
    if (inputs.angle <= 0 || inputs.angle > 360) {
      errors.push('Angle must be between 0 and 360 degrees');
    }
    return errors.length ? errors : null;
  }
};

export default function CircleSectorAreaCalculator() {
  return <Calculator config={config} />;
}
