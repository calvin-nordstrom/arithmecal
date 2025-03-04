'use client';

import React, { useState, useEffect } from 'react';
import CalculatorInput from '../../components/CalculatorInput';
import CalculatorOutput from '@/app/components/CalculatorOutput';

var convert = require('convert-units');
const lengthUnits = ['mm', 'cm', 'm', 'km'];
const areaUnits = ['mm2', 'cm2', 'm2', 'km2'];

export default function TriangleBaseCalculator() {
  const [heightStandard, setHeightStandard] = useState<number>(0);
  const [baseStandard, setBaseStandard] = useState<number>(0);

  const [heightInput, setHeightInput] = useState<string>('');
  const [areaInput, setAreaInput] = useState<string>('');
  const [baseInput, setBaseInput] = useState<string>('0');

  const [heightUnit, setHeightUnit] = useState<string>('cm');
  const [areaUnit, setAreaUnit] = useState<string>('cm2');
  const [baseUnit, setBaseUnit] = useState<string>('cm');

  // Handler for height input changes.
  const handleHeightInputChange = (value: string) => {
    setHeightInput(value);
    const num = parseFloat(value);
    if (!isNaN(num)) {
      try {
        // Convert the entered height from its unit to centimeters.
        const converted = convert(num).from(heightUnit).to('cm');
        setHeightStandard(converted);
      } catch (error) {
        console.error('Conversion error for height:', error);
      }
    } else {
      setHeightStandard(0);
    }
  };

  // Handler for area input changes.
  const handleAreaInputChange = (value: string) => {
    setAreaInput(value);
    // We will convert and use the area value in the effect hook.
  };

  // Generic unit change handler.
  const handleUnitChange = (
    newUnit: string,
    type: 'base' | 'height' | 'area'
  ) => {
    if (type === 'base') {
      setBaseUnit(newUnit);
      try {
        // Re-display the computed base in the new unit.
        const displayedBase = convert(baseStandard).from('cm').to(newUnit);
        setBaseInput(displayedBase.toString());
      } catch (error) {
        console.error('Conversion error on base unit change:', error);
      }
    } else if (type === 'height') {
      setHeightUnit(newUnit);
      try {
        const displayedHeight = convert(heightStandard).from('cm').to(newUnit);
        setHeightInput(displayedHeight.toString());
      } catch (error) {
        console.error('Conversion error on height unit change:', error);
      }
    } else if (type === 'area') {
      // When the area unit changes, update the displayed area.
      setAreaUnit(newUnit);
      try {
        const num = parseFloat(areaInput);
        if (!isNaN(num)) {
          // Convert the entered area from the old areaUnit to cm², then to the new unit.
          const areaInCm2 = convert(num).from(areaUnit).to('cm2');
          const displayedArea = convert(areaInCm2).from('cm2').to(newUnit);
          setAreaInput(displayedArea.toString());
        }
      } catch (error) {
        console.error('Conversion error on area unit change:', error);
      }
    }
  };

  // Compute the base whenever height or area (or their units) change.
  useEffect(() => {
    const areaNum = parseFloat(areaInput);
    if (heightStandard && !isNaN(areaNum)) {
      try {
        // Convert the area input to cm².
        const areaInCm2 = convert(areaNum).from(areaUnit).to('cm2');
        // Compute base in centimeters: base = (2 × area) / height.
        const baseCm = (2 * areaInCm2) / heightStandard;
        setBaseStandard(baseCm);
        // Convert the computed base to the selected base unit.
        const displayedBase = convert(baseCm).from('cm').to(baseUnit);
        setBaseInput(displayedBase.toString());
      } catch (error) {
        console.error('Conversion error computing base:', error);
      }
    } else {
      setBaseInput('');
    }
  }, [heightStandard, areaInput, areaUnit, baseUnit]);

  return (
    <div>
      <CalculatorInput
        label="Height"
        value={heightInput}
        onValueChange={handleHeightInputChange}
        unit={heightUnit}
        onUnitChange={(unit) => handleUnitChange(unit, 'height')}
        unitOptions={lengthUnits}
      />
      <CalculatorInput
        label="Area"
        value={areaInput}
        onValueChange={handleAreaInputChange}
        unit={areaUnit}
        onUnitChange={(unit) => handleUnitChange(unit, 'area')}
        unitOptions={areaUnits}
      />
      <CalculatorOutput
        label="Base"
        value={baseInput}
        unit={baseUnit}
        onUnitChange={(unit) => handleUnitChange(unit, 'base')}
        unitOptions={lengthUnits}
      />
    </div>
  );
}
