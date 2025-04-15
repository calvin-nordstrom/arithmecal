'use client';

import React from 'react';
import Converter, { ConverterConfig } from '@/app/components/Converter';
import { hexToDecimal, decimalToHex } from '@/app/utils/conversionUtils';

const config: ConverterConfig = {
  sideA: {
    key: 'hex',
    label: 'Hexadecimal',
    validate: (value: string) => {
      if (!/^[0-9a-fA-F\s]*$/.test(value)) {
        return 'Hexadecimal input must only contain 0-9, a-f, A-F, and spaces.';
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
  convertAtoB: hexToDecimal,
  convertBtoA: decimalToHex,
};

export default function HexToDecimalConverter() {
  return <Converter config={config} />;
}
