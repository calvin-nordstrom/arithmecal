'use client';

import React from 'react';
import ComponentFieldSet from '../../ComponentFieldset';
import RhombusAreaGivenSideAndHeightCalculator from './RhombusAreaGivenSideAndHeightCalculator';
import RhombusAreaGivenSideAndAngleCalculator from './RhombusAreaGivenSideAndAngleCalculator';
import RhombusAreaGivenDiagonalsCalculator from './RhombusAreaGivenDiagonalsCalculator';

export default function RhombusAreaCalculator() {
  const fieldSetConfig = [
    { label: 'Side & height', component: <RhombusAreaGivenSideAndHeightCalculator /> },
    { label: 'Side & angle', component: <RhombusAreaGivenSideAndAngleCalculator /> },
    { label: 'Diagonals', component: <RhombusAreaGivenDiagonalsCalculator /> },
  ];

  return (
    <ComponentFieldSet label='Find area given:' config={fieldSetConfig} />
  )
}
