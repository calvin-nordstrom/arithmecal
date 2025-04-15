'use client';

import React from 'react';
import Converter, { ConverterConfig } from '@/app/components/Converter';
import { decimalToAscii, asciiToDecimal } from '@/app/utils/conversionUtils';

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
    key: 'ascii',
    label: 'ASCII Text',
  },
  convertAtoB: decimalToAscii,
  convertBtoA: asciiToDecimal,
};

export default function DecimalToASCIIConverter() {
  return <Converter config={config} />;
}
