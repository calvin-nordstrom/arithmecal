'use client';

import React from 'react';
import Converter, { ConverterConfig } from '@/app/components/Converter';
import { asciiToDecimal, decimalToAscii } from '@/app/utils/conversionUtils';

const config: ConverterConfig = {
  sideA: {
    key: 'ascii',
    label: 'ASCII Text',
  },
  sideB: {
    key: 'decimal',
    label: 'Decimal',
  },
  convertAtoB: asciiToDecimal,
  convertBtoA: decimalToAscii,
}

export default function ASCIIToDecimalConverter() {
  return <Converter config={config}/>;
}
