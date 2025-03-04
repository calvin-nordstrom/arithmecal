'use client';

import React, { useState, useEffect } from 'react';
import CalculatorInput from '../../components/CalculatorInput';
import CalculatorOutput from '@/app/components/CalculatorOutput';

var convert = require('convert-units');
const lengthUnits = ['mm', 'cm', 'm', 'km'];
const areaUnits = ['mm2', 'cm2', 'm2', 'km2'];

export default function TriangleAreaCalculator() {
  const [baseStandard, setBaseStandard] = useState<number>(0);
  const [heightStandard, setHeightStandard] = useState<number>(0);
  
  const [baseInput, setBaseInput] = useState<string>('');
  const [heightInput, setHeightInput] = useState<string>('');
  const [areaInput, setAreaInput] = useState<string>('0');

  const [baseUnit, setBaseUnit] = useState<string>('cm');
  const [heightUnit, setHeightUnit] = useState<string>('cm');
  const [areaUnit, setAreaUnit] = useState<string>('cm2');

  // Returns the result of this calculator's operation.
  function calculate() {
    return 0.5 * baseStandard * heightStandard;
  }

  // Handler for input changes
  const handleInputChange = (value: string, type: 'base' | 'height') => {
    const isBase = type === 'base';
    const num = parseFloat(value);
    const standardValue = convert(num).from(isBase ? baseUnit : heightUnit).to('cm');

    if (isNaN(num)) {
      if (isBase) setBaseStandard(0);
      else setHeightStandard(0);
      if (isBase) setBaseInput('');
      else setHeightInput('');
      return;
    }

    if (isBase) setBaseStandard(standardValue);
    else setHeightStandard(standardValue);
    if (isBase) setBaseInput(value);
    else setHeightInput(value);
  };

  // Handler for unit changes.
  const handleUnitChange = (newUnit: string, type: 'base' | 'height' | 'area') => {
    const isBase = type === 'base';
    const isHeight = type === 'height';
    const isArea = type === 'area';

    if (isBase) setBaseUnit(newUnit);
    if (isHeight) setHeightUnit(newUnit);
    if (isArea) setAreaUnit(newUnit);

    const value = isBase ? baseStandard : isHeight ? heightStandard : calculate();
    try {
      if (isArea) {
        const area = calculate();
        const displayedValue = convert(area).from('cm2').to(newUnit);
        setAreaInput(displayedValue.toString());
      } else {
        const displayedValue = convert(value).from('cm').to(newUnit);
        if (isBase) setBaseInput(displayedValue.toString());
        if (isHeight) setHeightInput(displayedValue.toString());
      }
    } catch (error) {
      console.error(`Conversion error on ${type} unit change:`, error);
    }
  };

  useEffect(() => {
    if (baseStandard && heightStandard) {
      const area = calculate();
      try {
        const displayedArea = convert(area).from('cm2').to(areaUnit);
        setAreaInput(displayedArea.toString());
      } catch (error) {
        console.error('Conversion error computing area:', error);
      }
    } else {
      setAreaInput('');
    }
  }, [baseStandard, heightStandard, areaUnit]);

  return (
    <div>
      <CalculatorInput
        label="Base"
        value={baseInput}
        onValueChange={(value) => handleInputChange(value, 'base')}
        unit={baseUnit}
        onUnitChange={(unit) => handleUnitChange(unit, 'base')}
        unitOptions={lengthUnits}
      />
      <CalculatorInput
        label="Height"
        value={heightInput}
        onValueChange={(value) => handleInputChange(value, 'height')}
        unit={heightUnit}
        onUnitChange={(unit) => handleUnitChange(unit, 'height')}
        unitOptions={lengthUnits}
      />
      <CalculatorOutput
        label="Area"
        value={areaInput}
        unit={areaUnit}
        onUnitChange={(unit) => handleUnitChange(unit, 'area')}
        unitOptions={areaUnits}
      />
    </div>
  );
}
