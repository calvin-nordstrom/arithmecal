'use client';

import React from 'react';
import Converter, { ConverterConfig } from '@/app/components/Converter';
import { hexToOctal, octalToHex } from '@/utils/conversionUtils';

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
    key: 'octal',
    label: 'Octal',
    validate: (value: string) => {
      if (!/^[0-7\s]*$/.test(value)) {
        return 'Octal input must only contain digits 0-7 and spaces.';
      }
      return null;
    },
  },
  convertAtoB: hexToOctal,
  convertBtoA: octalToHex,
};

export default function HexToOctalConverter() {
  return <Converter config={config} />;
}
