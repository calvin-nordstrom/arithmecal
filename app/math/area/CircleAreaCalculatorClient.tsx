'use client';

import React, { useState } from 'react';
import CalculatorInput from '../../components/CalculatorInput';

var convert = require('convert-units');

// Define available units.
const lengthUnits = ['mm', 'cm', 'm', 'km'];
const areaUnits = ['mm2', 'cm2', 'm2', 'km2'];

export default function CircleAreaCalculatorClient() {
  // Internal state: radius stored in meters.
  const [radiusStandard, setRadiusStandard] = useState<number>(0);
  // Display state for the radius.
  const [radiusInput, setRadiusInput] = useState<string>('0');
  // Selected unit for the radius (SI default: cm).
  const [radiusUnit, setRadiusUnit] = useState<string>('cm');

  // Display state for the area.
  const [areaInput, setAreaInput] = useState<string>('0');
  // Selected unit for the area (SI default: cm2).
  const [areaUnit, setAreaUnit] = useState<string>('cm2');

  // When the user updates the radius, update radius and compute the area.
  const handleRadiusInputChange = (value: string) => {
    setRadiusInput(value);
    const num = parseFloat(value);
    if (!isNaN(num)) {
      try {
        // Convert radius from the displayed unit to meters.
        const rInM = convert(num).from(radiusUnit).to('m');
        setRadiusStandard(rInM);
        // Compute area in m² = π * r².
        const areaM2 = Math.PI * rInM * rInM;
        // Convert area to the displayed area unit.
        const displayedArea = convert(areaM2).from('m2').to(areaUnit);
        setAreaInput(displayedArea.toString());
      } catch (error) {
        console.error('Error converting radius:', error);
      }
    } else {
      setRadiusStandard(0);
      setAreaInput('0');
    }
  };

  // When the user updates the area, update area and compute the radius.
  const handleAreaInputChange = (value: string) => {
    setAreaInput(value);
    const num = parseFloat(value);
    if (!isNaN(num)) {
      try {
        // Convert the area from the displayed unit to m².
        const areaM2 = convert(num).from(areaUnit).to('m2');
        // Calculate the radius from the area: r = sqrt(area / π).
        const rInM = Math.sqrt(areaM2 / Math.PI);
        setRadiusStandard(rInM);
        // Convert the radius back to the displayed unit.
        const displayedRadius = convert(rInM).from('m').to(radiusUnit);
        setRadiusInput(displayedRadius.toString());
      } catch (error) {
        console.error('Error converting area:', error);
      }
    } else {
      setRadiusStandard(0);
      setRadiusInput('0');
    }
  };

  // Update the radius display when the radius unit changes.
  const handleRadiusUnitChange = (newUnit: string) => {
    setRadiusUnit(newUnit);
    try {
      const displayedRadius = convert(radiusStandard).from('m').to(newUnit);
      setRadiusInput(displayedRadius.toString());
    } catch (error) {
      console.error('Error converting radius unit:', error);
    }
  };

  // Update the area display when the area unit changes.
  const handleAreaUnitChange = (newUnit: string) => {
    setAreaUnit(newUnit);
    try {
      const areaM2 = Math.PI * radiusStandard * radiusStandard;
      const displayedArea = convert(areaM2).from('m2').to(newUnit);
      setAreaInput(displayedArea.toString());
    } catch (error) {
      console.error('Error converting area unit:', error);
    }
  };

  return (
    <div>
      <CalculatorInput
        label="Radius"
        value={radiusInput}
        onValueChange={handleRadiusInputChange}
        unit={radiusUnit}
        onUnitChange={handleRadiusUnitChange}
        unitOptions={lengthUnits}
      />
      <CalculatorInput
        label="Area"
        value={areaInput}
        onValueChange={handleAreaInputChange}
        unit={areaUnit}
        onUnitChange={handleAreaUnitChange}
        unitOptions={areaUnits}
      />
    </div>
  );
}
