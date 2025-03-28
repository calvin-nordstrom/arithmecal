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
      type: 'error'
    },
    {
      type: 'divider'
    },
    {
      type: 'field',
      key: 'result',
      label: 'Result',
      isOutput: true
    },
  ],
  formula: (inputs, changedField) => {
    const a = Number(inputs.a);
    const b = Number(inputs.b);
    const c = Number(inputs.c);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      return { a, b, c, result: 0 };
    }

    if (a === 0) {
      return { a, b, c, result: 0 };
    }

    const getDivisors = (num: number): number[] => {
      const divisors: number[] = [];
      if (num === 0) return [0];
      const limit = Math.abs(num);
      for (let i = 1; i <= limit; i++) {
        if (num % i === 0) {
          divisors.push(i);
          divisors.push(-i);
        }
      }
      return divisors;
    };

    const aDivisors = getDivisors(a);
    const cDivisors = getDivisors(c);
    let factorization = '';

    outer: for (let p of aDivisors) {
      const r = a / p;
      for (let q of cDivisors) {
        const s = c / q;
        if (p * s + q * r === b) {
          const formatBinomial = (coefX: number, constant: number) => {
            let xPart = '';
            if (coefX === 1) {
              xPart = 'x';
            } else if (coefX === -1) {
              xPart = '-x';
            } else {
              xPart = `${coefX}x`;
            }
            let constantPart = '';
            if (constant > 0) {
              constantPart = ` + ${constant}`;
            } else if (constant < 0) {
              constantPart = ` - ${Math.abs(constant)}`;
            }
            return `(${xPart}${constantPart})`;
          };

          const binomial1 = formatBinomial(p, q);
          const binomial2 = formatBinomial(r, s);
          factorization = `${binomial1}${binomial2}`;
          break outer;
        }
      }
    }

    if (factorization === '') {
      factorization = 'Not factorable over the integers';
    }

    return { a, b, c, result: factorization };
  },
  validate: (inputs, rawInputs) => {
    const errors: string[] = [];
    if (rawInputs.a.trim() !== '' && inputs.a === 0) {
      errors.push('Coefficient a must be nonzero');
    }
    return errors.length > 0 ? errors : null;
  },
};

export default function TrinomialFactoringCalculator() {
  return <Calculator config={config} />;
}
