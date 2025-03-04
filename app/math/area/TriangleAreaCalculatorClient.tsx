'use client';

import React, { useState, useEffect } from 'react';
import CalculatorInput from '../../components/CalculatorInput';

var convert = require('convert-units');

// Available units for length and area
const lengthUnits = ['mm', 'cm', 'm', 'km'];
const areaUnits = ['mm2', 'cm2', 'm2', 'km2'];

export default function TriangleAreaCalculatorClient() {
  // Store base and height in centimeters.
  const [baseStandard, setBaseStandard] = useState<number>(0);
  const [heightStandard, setHeightStandard] = useState<number>(0);

  // Display states for base, height, and area.
  const [baseInput, setBaseInput] = useState<string>('');
  const [heightInput, setHeightInput] = useState<string>('');
  const [areaInput, setAreaInput] = useState<string>('');

  // Selected units for each field.
  const [baseUnit, setBaseUnit] = useState<string>('cm');
  const [heightUnit, setHeightUnit] = useState<string>('cm');
  const [areaUnit, setAreaUnit] = useState<string>('cm2');

  // Handler for when the base input changes.
  const handleBaseInputChange = (value: string) => {
    setBaseInput(value);
    const num = parseFloat(value);
    if (!isNaN(num)) {
      try {
        const converted = convert(num).from(baseUnit).to('cm');
        setBaseStandard(converted);
  
        // If area is provided, compute the missing height
        if (areaInput.trim() !== '' && !isNaN(parseFloat(areaInput))) {
          const areaCm2 = convert(parseFloat(areaInput)).from(areaUnit).to('cm2');
          if (converted !== 0) {
            const newHeight = (2 * areaCm2) / converted;
            const displayedHeight = convert(newHeight).from('cm').to(heightUnit);
            setHeightStandard(newHeight);
            setHeightInput(displayedHeight.toString());
          }
        }
      } catch (error) {
        console.error('Conversion error for base:', error);
      }
    } else {
      setBaseStandard(0);
    }
  };
  
  // Handler for when the height input changes.
  const handleHeightInputChange = (value: string) => {
    setHeightInput(value);
    const num = parseFloat(value);
    if (!isNaN(num)) {
      try {
        const converted = convert(num).from(heightUnit).to('cm');
        setHeightStandard(converted);
  
        // If area is provided, compute the missing base
        if (areaInput.trim() !== '' && !isNaN(parseFloat(areaInput))) {
          const areaCm2 = convert(parseFloat(areaInput)).from(areaUnit).to('cm2');
          if (converted !== 0) {
            const newBase = (2 * areaCm2) / converted;
            const displayedBase = convert(newBase).from('cm').to(baseUnit);
            setBaseStandard(newBase);
            setBaseInput(displayedBase.toString());
          }
        }
      } catch (error) {
        console.error('Conversion error for height:', error);
      }
    } else {
      setHeightStandard(0);
    }
  };
  

  // Handler for when the area input changes.
  // This will update the base while keeping the height constant.
  const handleAreaInputChange = (value: string) => {
    setAreaInput(value);
    const num = parseFloat(value);
    if (!isNaN(num)) {
      try {
        const areaCm2 = convert(num).from(areaUnit).to('cm2');
        
        // Case 1: Both base and height have valid numbers.
        if (
          baseInput.trim() !== '' &&
          !isNaN(parseFloat(baseInput)) &&
          heightInput.trim() !== '' &&
          !isNaN(parseFloat(heightInput))
        ) {
          // Update the base as before.
          const newBase = (2 * areaCm2) / heightStandard;
          const displayedBase = convert(newBase).from('cm').to(baseUnit);
          setBaseStandard(newBase);
          setBaseInput(displayedBase.toString());
        
        // Case 2: Height is missing but base is provided.
        } else if (
          baseInput.trim() !== '' &&
          !isNaN(parseFloat(baseInput)) &&
          (heightInput.trim() === '' || isNaN(parseFloat(heightInput)))
        ) {
          // Compute the missing height.
          if (baseStandard !== 0) {
            const newHeight = (2 * areaCm2) / baseStandard;
            const displayedHeight = convert(newHeight).from('cm').to(heightUnit);
            setHeightStandard(newHeight);
            setHeightInput(displayedHeight.toString());
          }
        
        // Case 3: Base is missing but height is provided.
        } else if (
          heightInput.trim() !== '' &&
          !isNaN(parseFloat(heightInput)) &&
          (baseInput.trim() === '' || isNaN(parseFloat(baseInput)))
        ) {
          // Compute the missing base.
          if (heightStandard !== 0) {
            const newBase = (2 * areaCm2) / heightStandard;
            const displayedBase = convert(newBase).from('cm').to(baseUnit);
            setBaseStandard(newBase);
            setBaseInput(displayedBase.toString());
          }
        }
      } catch (error) {
        console.error('Conversion error for area:', error);
      }
    } else {
      // Optionally reset values if the area input is invalid.
    }
  };  

  // Handler for changing the base unit.
  const handleBaseUnitChange = (newUnit: string) => {
    setBaseUnit(newUnit);
    try {
      const displayedBase = convert(baseStandard).from('cm').to(newUnit);
      setBaseInput(displayedBase.toString());
    } catch (error) {
      console.error('Conversion error on base unit change:', error);
    }
  };

  // Handler for changing the height unit.
  const handleHeightUnitChange = (newUnit: string) => {
    setHeightUnit(newUnit);
    try {
      const displayedHeight = convert(heightStandard).from('cm').to(newUnit);
      setHeightInput(displayedHeight.toString());
    } catch (error) {
      console.error('Conversion error on height unit change:', error);
    }
  };

  // Handler for changing the area unit.
  const handleAreaUnitChange = (newUnit: string) => {
    setAreaUnit(newUnit);
    try {
      const areaM2 = 0.5 * baseStandard * heightStandard;
      const displayedArea = convert(areaM2).from('cm2').to(newUnit);
      setAreaInput(displayedArea.toString());
    } catch (error) {
      console.error('Conversion error on area unit change:', error);
    }
  };

  // Effect hook to compute the area only when both base and height inputs are valid.
  useEffect(() => {
    if (
      baseInput.trim() !== '' &&
      !isNaN(parseFloat(baseInput)) &&
      heightInput.trim() !== '' &&
      !isNaN(parseFloat(heightInput))
    ) {
      const area = 0.5 * baseStandard * heightStandard;
      try {
        const displayedArea = convert(area).from('cm2').to(areaUnit);
        setAreaInput(displayedArea.toString());
      } catch (error) {
        console.error('Conversion error computing area:', error);
      }
    } else {
      // Set area to an empty string if one or both inputs are missing
      setAreaInput('');
    }
  }, [baseInput, heightInput, baseStandard, heightStandard, areaUnit]);

  return (
    <div>
      <CalculatorInput
        label="Base"
        value={baseInput}
        onValueChange={handleBaseInputChange}
        unit={baseUnit}
        onUnitChange={handleBaseUnitChange}
        unitOptions={lengthUnits}
      />
      <CalculatorInput
        label="Height"
        value={heightInput}
        onValueChange={handleHeightInputChange}
        unit={heightUnit}
        onUnitChange={handleHeightUnitChange}
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
