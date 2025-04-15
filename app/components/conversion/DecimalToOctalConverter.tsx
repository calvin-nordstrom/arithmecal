'use client';

import React from 'react';
import Converter, { ConverterConfig } from '@/app/components/Converter';
import { decimalToOctal, octalToDecimal } from '@/app/utils/conversionUtils';

const config: ConverterConfig = {
  sideA: {
    key: 'decimal',
    label: 'Decimal',
    validate: (value: string) => {
      if (!/^\d+(\s+\d+)*$/.test(value)) {
        return 'Decimal input must only contain digits and spaces.';
      }
      return null;
    },
  },
  sideB: {
    key: 'octal',
    label: 'Octal',
    validate: (value: string) => {
      if (!/^[0-7\s]*$/.test(value)) {
        return 'Octal input must only contain digits 0-7 and spaces.';
      }
      return null;
    },
  },
  convertAtoB: decimalToOctal,
  convertBtoA: octalToDecimal,
};

export default function DecimalToOctalConverter() {
  return <Converter config={config} />;
}
