'use client';

import React from 'react';
import ComponentFieldSet from '../../ComponentFieldset';
import SquareAreaGivenSidesCalculator from './SquareAreaGivenSidesCalculator';
import SquareAreaGivenDiagonalCalculator from './SquareAreaGivenDiagonalCalculator';


export default function TriangleAreaCalculator() {
  const fieldSetConfig = [
    { label: 'Side length', component: <SquareAreaGivenSidesCalculator /> },
    { label: 'Diagonal length', component: <SquareAreaGivenDiagonalCalculator /> },
  ];

  return (
    <ComponentFieldSet label='Find area given:' config={fieldSetConfig} />
  )
}
