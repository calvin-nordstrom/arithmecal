'use client';

import React from 'react';
import Calculator, { CalculatorConfig } from '@/app/components/Calculator';

const config: CalculatorConfig = {
  fields: [
    {
      type: 'field',
      key: 'a',
      label: 'Coefficient a',
    },
    {
      type: 'field',
      key: 'b',
      label: 'Coefficient b',
    },
    {
      type: 'field',
      key: 'c',
      label: 'Coefficient c',
    },
    {
      type: 'error'
    },
    {
      type: 'divider'
    },
    {
      type: 'field',
      key: 'root1',
      label: 'Root 1',
      isOutput: true
    },
    {
      type: 'field',
      key: 'root2',
      label: 'Root 2',
      isOutput: true
    },
    {
      type: 'field',
      key: 'discriminant',
      label: 'Discriminant',
      isOutput: true
    },
  ],
  formula: (inputs) => {
    const { a, b, c } = inputs;
    const discriminant = b * b - 4 * a * c;
    let root1 = null;
    let root2 = null;
  
    if (a === 0 || isNaN(a) || isNaN(b) || isNaN(c)) {
      return { a, b, c, root1: 0, root2: 0, discriminant: 0 };
    }
  
    const round = (num: number) => Number(num.toFixed(3));
  
    if (discriminant > 0) {
      root1 = round((-b + Math.sqrt(discriminant)) / (2 * a));
      root2 = round((-b - Math.sqrt(discriminant)) / (2 * a));
    } else if (discriminant === 0) {
      root1 = root2 = round(-b / (2 * a));
    } else {
      const realPart = round(-b / (2 * a));
      const imaginaryPart = round(Math.sqrt(-discriminant) / (2 * a));
      root1 = `${realPart} + ${imaginaryPart}i`;
      root2 = `${realPart} - ${imaginaryPart}i`;
    }
  
    return { a, b, c, root1, root2, discriminant: round(discriminant) };
  },
  validate: (inputs, rawInputs) => {
    const errors: string[] = [];
    if (rawInputs.a.trim() !== '' && inputs.a === 0) {
      errors.push('Coefficient a must be nonzero');
    }
    return errors.length > 0 ? errors : null;
  },
};

export default function QuadraticFormulaCalculator() {
  return <Calculator config={config} />;
}
