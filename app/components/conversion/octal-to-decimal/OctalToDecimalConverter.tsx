'use client';

import React from 'react';
import Converter, { ConverterConfig } from '@/app/components/Converter';
import { octalToDecimal, decimalToOctal } from '@/utils/conversionUtils';

const config: ConverterConfig = {
  sideA: {
    key: 'octal',
    label: 'Octal',
    validate: (value: string) => {
      if (!/^[0-7\s]*$/.test(value)) {
        return 'Octal input must only contain digits 0-7 and spaces.';
      }
      return null;
    },
  },
  sideB: {
    key: 'decimal',
    label: 'Decimal',
    validate: (value: string) => {
      if (!/^\d+(\s+\d+)*$/.test(value)) {
        return 'Decimal input must only contain digits and spaces.';
      }
      return null;
    },
  },
  convertAtoB: octalToDecimal,
  convertBtoA: decimalToOctal,
};

export default function OctalToDecimalConverter() {
  return <Converter config={config} />;
}
