'use client';

import React from 'react';
import Converter, { ConverterConfig } from '@/app/components/Converter';
import { binaryToDecimal, decimalToBinary } from '@/utils/conversionUtils';

const config: ConverterConfig = {
  sideA: {
    key: 'binary',
    label: 'Binary',
    validate: (value: string) => {
      if (!/^[01\s]*$/.test(value)) {
        return 'Binary input must only contain 0s, 1s, and spaces.';
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
  convertAtoB: binaryToDecimal,
  convertBtoA: decimalToBinary,
};

export default function BinaryToDecimalConverter() {
  return <Converter config={config} />;
}
