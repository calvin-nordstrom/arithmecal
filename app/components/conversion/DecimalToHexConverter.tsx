'use client';

import React from 'react';
import Converter, { ConverterConfig } from '@/app/components/Converter';
import { decimalToHex, hexToDecimal } from '@/app/utils/conversionUtils';

const config: ConverterConfig = {
  sideA: {
    key: 'decimal',
    label: 'Decimal',
    validate: (value: string) => {
      if (value.trim() === '') {
        return null;
      }
      if (!/^\d+(\s+\d+)*$/.test(value)) {
        return 'Decimal input must only contain digits and spaces.';
      }
      return null;
    },
  },
  sideB: {
    key: 'hex',
    label: 'Hexadecimal',
    validate: (value: string) => {
      if (!/^[0-9a-fA-F\s]*$/.test(value)) {
        return 'Hexadecimal input must only contain 0-9, a-f, A-F, and spaces.';
      }
      return null;
    },
  },
  convertAtoB: decimalToHex,
  convertBtoA: hexToDecimal,
};

export default function DecimalToHexConverter() {
  return <Converter config={config} />;
}
