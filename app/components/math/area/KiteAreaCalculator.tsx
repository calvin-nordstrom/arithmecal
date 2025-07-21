'use client';

import React from 'react';
import ComponentFieldSet from '../../ComponentFieldset';
import KiteAreaGivenDiagonalsCalculator from './KiteAreaGivenDiagonalsCalculator';
import KiteAreaGivenSidesAndAngleCalculator from './KiteAreaGivenSidesAndAngleCalculator';

export default function KiteAreaCalculator() {
  const fieldSetConfig = [
    { label: 'Diagonals', component: <KiteAreaGivenDiagonalsCalculator /> },
    { label: 'Two unequal sides & angle between them', component: <KiteAreaGivenSidesAndAngleCalculator /> },
  ];

  return (
    <ComponentFieldSet label='Find area given:' config={fieldSetConfig} />
  )
}
