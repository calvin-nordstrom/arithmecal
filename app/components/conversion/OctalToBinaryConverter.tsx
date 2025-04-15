'use client';

import React from 'react';
import Converter, { ConverterConfig } from '@/app/components/Converter';
import { octalToBinary, binaryToOctal } from '@/app/utils/conversionUtils';

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
    key: 'binary',
    label: 'Binary',
    validate: (value: string) => {
      if (!/^[01\s]*$/.test(value)) {
        return 'Binary input must only contain 0s, 1s, and spaces.';
      }
      return null;
    },
  },
  convertAtoB: octalToBinary,
  convertBtoA: binaryToOctal,
};

export default function OctalToBinaryConverter() {
  return <Converter config={config} />;
}
