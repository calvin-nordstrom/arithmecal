'use client';

import React from 'react';
import Calculator, { CalculatorConfig } from '@/app/components/Calculator';

const config: CalculatorConfig = {
  fields: [
    {
      type: 'field',
      key: 'a',
      label: 'a',
    },
    {
      type: 'field',
      key: 'b',
      label: 'b',
    },
    {
      type: 'field',
      key: 'c',
      label: 'c',
    },
    {
      type: 'field',
      key: 'd',
      label: 'd',
    },
    {
      type: 'error'
    },
    {
      type: 'field',
      key: 'result',
      label: 'Result',
      isOutput: true
    },
  ],
  formula: (inputs, changedField) => {
    const a = inputs.a;
    const b = inputs.b;
    const c = inputs.c;
    const d = inputs.d;

    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
      return { a, b, c, d, result: 0 };
    }

    const first = a * c;
    const outer = a * d;
    const inner = b * c;
    const last = b * d;
    const linear = outer + inner;

    const formatTerm = (coefficient: number, variable: string, isFirst: boolean = false) => {
      if (coefficient === 0) return '';
      let sign = '';
      if (!isFirst) {
        sign = coefficient > 0 ? ' + ' : ' - ';
      } else if (coefficient < 0) {
        sign = '-';
      }
      const absCoeff = Math.abs(coefficient);
      const coeffStr = (absCoeff === 1 && variable !== '') ? '' : absCoeff.toString();
      return sign + coeffStr + variable;
    };

    let term1 = formatTerm(first, 'x²', true);
    let term2 = formatTerm(linear, 'x', term1 === '');
    let term3 = formatTerm(last, '', term1 === '' && term2 === '');

    let equation = term1 + term2 + term3;
    equation = equation.trim();
    if (equation.startsWith('+')) {
      equation = equation.substring(1).trim();
    }
    if (equation === '') {
      equation = '0';
    }

    return { a, b, c, d, result: equation };
  },
  validate: (inputs, rawInputs) => {
    const errors: string[] = [];
    
    return errors.length > 0 ? errors : null;
  },
};

export default function PercentChangeCalculator() {
  return <Calculator config={config} />;
}
