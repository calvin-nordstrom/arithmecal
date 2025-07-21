'use client';

import React from 'react';
import Converter, { ConverterConfig } from '@/app/components/Converter';
import { binaryToHex, hexToBinary } from '@/utils/conversionUtils';

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
    key: 'hex',
    label: 'Hexadecimal',
    validate: (value: string) => {
      if (!/^[0-9a-fA-F\s]*$/.test(value)) {
        return 'Hexadecimal input must only contain 0-9, a-f, A-F, and spaces.';
      }
      return null;
    },
  },
  convertAtoB: binaryToHex,
  convertBtoA: hexToBinary,
};

export default function BinaryToHexConverter() {
  return <Converter config={config} />;
}
