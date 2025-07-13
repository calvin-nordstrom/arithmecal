'use client';

import React from 'react';
import ComponentFieldSet from '../ComponentFieldset';
import TriangleAreaFromBaseAndHeightCalculator from './TriangleAreaFromBaseAndHeightCalculator';
import TriangleAreaFromThreeSidesCalculator from './TriangleAreaFromThreeSidesCalculator';
import TriangleAreaFromTwoSidesAndAngleCalculator from './TriangleAreaFromTwoSidesAndAngleCalculator';
import TriangleAreaFromOneSideAndTwoAnglesCalculator from './TriangleAreaFromOneSideAndTwoAnglesCalculator';
import TriangleAreaFromCoordinatesCalculator from './TriangleAreaFromCoordinatesCalculator';

export default function TriangleAreaCalculator() {
  const fieldSetConfig = [
    { label: 'Base & height', component: <TriangleAreaFromBaseAndHeightCalculator /> },
    { label: 'Three sides', component: <TriangleAreaFromThreeSidesCalculator /> },
    { label: 'Two sides & angle between them', component: <TriangleAreaFromTwoSidesAndAngleCalculator /> },
    { label: 'Two angles & side between them', component: <TriangleAreaFromOneSideAndTwoAnglesCalculator /> },
    { label: '2D coordinate points', component: <TriangleAreaFromCoordinatesCalculator /> },
  ];

  return (
    <ComponentFieldSet label='Find area given:' config={fieldSetConfig} />
  )
}
