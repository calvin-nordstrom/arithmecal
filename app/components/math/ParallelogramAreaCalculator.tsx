'use client';

import React from 'react';
import ComponentFieldSet from '../ComponentFieldset';
import ParallelogramAreaGivenBaseAndHeightCalculator from './ParallelogramAreaGivenBaseAndHeightCalculator';
import ParallelogramAreaGivenTwoSidesAndAngleCalculator from './ParallelogramAreaGivenTwoSidesAndAngleCalculator';
import ParallelogramAreaGivenDiagonalsAndAngleCalculator from './ParallelogramAreaGivenDiagonalsAndAngleCalculator';

export default function ParallelogramAreaCalculator() {
  const fieldSetConfig = [
    { label: 'Base & height', component: <ParallelogramAreaGivenBaseAndHeightCalculator /> },
    { label: 'Sides & angle between them', component: <ParallelogramAreaGivenTwoSidesAndAngleCalculator /> },
    { label: 'Diagonals & angle between them', component: <ParallelogramAreaGivenDiagonalsAndAngleCalculator /> },
  ];

  return (
    <ComponentFieldSet label='Find area given:' config={fieldSetConfig} />
  )
}
