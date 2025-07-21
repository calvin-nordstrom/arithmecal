'use client';

import React from 'react';
import Converter, { ConverterConfig } from '@/app/components/Converter';
import { octalToAscii, asciiToOctal } from '@/utils/conversionUtils';

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
    key: 'ascii',
    label: 'ASCII Text',
  },
  convertAtoB: octalToAscii,
  convertBtoA: asciiToOctal,
};

export default function OctalToASCIIConverter() {
  return <Converter config={config} />;
}
