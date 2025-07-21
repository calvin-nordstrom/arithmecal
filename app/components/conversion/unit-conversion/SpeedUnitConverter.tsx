'use client';

import React from 'react';
import UnitConverter from '../../UnitConverter';
import { getUnitsByDimension } from '@/cnconvert/cnconvert';

export default function SpeedUnitConverter() {
  return <UnitConverter unitOptions={getUnitsByDimension('speed')} />;
}
