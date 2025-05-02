'use client';

import React from 'react';
import Converter, { ConverterConfig } from '@/app/components/Converter';
import { hexToAscii, asciiToHex } from '@/utils/conversionUtils';

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
    key: 'ascii',
    label: 'ASCII Text',
  },
  convertAtoB: hexToAscii,
  convertBtoA: asciiToHex,
};

export default function HexToASCIIConverter() {
  return <Converter config={config} />;
}
