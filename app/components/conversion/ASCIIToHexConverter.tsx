'use client';

import React from 'react';
import Converter, { ConverterConfig } from '@/app/components/Converter';
import { asciiToHex, hexToAscii } from '@/app/utils/conversionUtils';

const config: ConverterConfig = {
  sideA: {
    key: 'ascii',
    label: 'ASCII Text',
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
  convertAtoB: asciiToHex,
  convertBtoA: hexToAscii,
};

export default function ASCIIToHexConverter() {
  return <Converter config={config} />;
}
