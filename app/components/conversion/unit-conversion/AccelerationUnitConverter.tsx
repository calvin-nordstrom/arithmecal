'use client';

import React from 'react';
import UnitConverter from '../../UnitConverter';
import { getUnitsByDimension } from '@/cnconvert/cnconvert';

export default function AccelerationUnitConverter() {
  return <UnitConverter unitOptions={getUnitsByDimension('acceleration')} />;
}
