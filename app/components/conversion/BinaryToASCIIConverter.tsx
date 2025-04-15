'use client';

import React from 'react';
import Converter, { ConverterConfig } from '@/app/components/Converter';
import { binaryToAscii, asciiToBinary } from '@/app/utils/conversionUtils';

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
    key: 'ascii',
    label: 'ASCII Text',
  },
  convertAtoB: binaryToAscii,
  convertBtoA: asciiToBinary,
};

export default function BinaryToASCIIConverter() {
  return <Converter config={config} />;
}
