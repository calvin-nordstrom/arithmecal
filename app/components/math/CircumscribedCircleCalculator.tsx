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
      type: 'divider'
    },
    {
      type: 'field',
      key: 'radius',
      label: 'Radius',
      unitOptions: lengthUnits,
      defaultUnit: 'm',
      conversionBase: 'm',
      isOutput: true
    },
    {
      type: 'field',
      key: 'diameter',
      label: 'Diameter',
      unitOptions: lengthUnits,
      defaultUnit: 'm',
      conversionBase: 'm',
      isOutput: true
    },
    {
      type: 'field',
      key: 'circumference',
      label: 'Circumference',
      unitOptions: lengthUnits,
      defaultUnit: 'm',
      conversionBase: 'm',
      isOutput: true
    },
    {
      type: 'field',
      key: 'area',
      label: 'Area',
      unitOptions: areaUnits,
      defaultUnit: 'm2',
      conversionBase: 'm2',
      isOutput: true
    },
    {
      type: 'divider'
    },
    {
      type: 'field',
      key: 'trianglePerimeter',
      label: 'Triangle perimeter',
      unitOptions: lengthUnits,
      defaultUnit: 'm',
      conversionBase: 'm',
      isOutput: true
    },
    {
      type: 'field',
      key: 'triangleArea',
      label: 'Triangle area',
      unitOptions: areaUnits,
      defaultUnit: 'm2',
      conversionBase: 'm2',
      isOutput: true
    },
    {
      type: 'field',
      key: 'areaRatio',
      label: 'Area ratio (circle to triangle)',
      isOutput: true
    },
  ],
  formula: (inputs, changedField) => {
    const a = inputs.a;
    const b = inputs.b;
    const c = inputs.c;
    const s = (a + b + c) / 2;
    let radius = 0;
    let diameter = 0;
    let circumference = 0;
    let area = 0;
    let trianglePerimeter = 0;
    let triangleArea = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    let areaRatio = 0;
    
    if (triangleArea > 0) {
      radius = (a * b * c) / (4 * triangleArea);
      diameter = 2 * radius;
      circumference = 2 * Math.PI * radius;
      area = Math.PI * radius * radius;
      trianglePerimeter = a + b + c;
      areaRatio = area / triangleArea;
    } else {
      triangleArea = 0;
    }

    return {
      a, b, c, 
      radius, diameter, circumference, area, 
      trianglePerimeter, triangleArea, areaRatio 
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
    if (inputs.a + inputs.b <= inputs.c ||
        inputs.a + inputs.c <= inputs.b ||
        inputs.b + inputs.c <= inputs.a) {
      errors.push('The provided sides do not form a valid triangle');
    }
    return errors.length > 0 ? errors : null;
  },
};

export default function CircumscribedCircleCalculator() {
  return <Calculator config={config} />;
}
