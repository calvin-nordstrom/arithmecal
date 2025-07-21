'use client';

import React from 'react';
import Converter, { ConverterConfig } from '@/app/components/Converter';
import { asciiToBinary, binaryToAscii } from '@/utils/conversionUtils';

const config: ConverterConfig = {
  sideA: {
    key: 'ascii',
    label: 'ASCII Text',
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
  convertAtoB: asciiToBinary,
  convertBtoA: binaryToAscii,
}

export default function ASCIIToBinaryConverter() {
  return <Converter config={config}/>;
}
