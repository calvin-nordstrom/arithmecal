'use client';

import React from 'react';
import Converter, { ConverterConfig } from '@/app/components/Converter';
import { asciiToOctal, octalToAscii } from '@/app/utils/conversionUtils';

const config: ConverterConfig = {
  sideA: {
    key: 'ascii',
    label: 'ASCII Text',
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
  convertAtoB: asciiToOctal,
  convertBtoA: octalToAscii,
};

export default function ASCIIToOctalConverter() {
  return <Converter config={config} />;
}
