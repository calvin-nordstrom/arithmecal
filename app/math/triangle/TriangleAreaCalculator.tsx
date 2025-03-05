'use client';

import React, { useState } from 'react';
import CalculatorInput from '@/app/components/CalculatorInput';
import CalculatorOutput from '@/app/components/CalculatorOutput';

let convert = require('convert-units');
const lengthUnits = ['mm', 'cm', 'm', 'km', 'in', 'ft-us', 'ft', 'mi'];
const areaUnits = ['mm2', 'cm2', 'm2', 'km2', 'in2', 'ft2', 'mi', 'ac', 'ha'];

export default function TriangleAreaCalculator() {
  const [inputs, setInputs] = useState({
    base: '',
    height: '',
    baseUnit: 'cm',
    heightUnit: 'cm',
    areaUnit: 'cm2',
  });

  const { base, height, baseUnit, heightUnit, areaUnit } = inputs;
  const baseStandard = convert(parseFloat(base) || 0).from(baseUnit).to('cm');
  const heightStandard = convert(parseFloat(height) || 0).from(heightUnit).to('cm');
  const areaStandard = 0.5 * baseStandard * heightStandard;
  const area = convert(areaStandard).from('cm2').to(areaUnit);

  const handleInputChange = (key: 'base' | 'height', value: string) => {
    setInputs((prev) => ({ ...prev, [key]: value }));
  };

  const handleUnitChange = (
    key: 'baseUnit' | 'heightUnit' | 'areaUnit',
    newUnit: string
  ) => {
    setInputs((prev) => {
      if (key === 'areaUnit') {
        return { ...prev, areaUnit: newUnit };
      }

      const oldUnit = prev[key];
      const valueKey = key === 'baseUnit' ? 'base' : 'height';
      const oldValue = parseFloat(prev[valueKey]) || 0;
      const convertedValue = convert(oldValue).from(oldUnit).to(newUnit);
      const newValue = String(parseFloat(convertedValue.toFixed(9)));

      return { ...prev, [key]: newUnit, [valueKey]: newValue };
    });
  };

  return (
    <div>
      <CalculatorInput
        label="Base"
        value={base}
        onValueChange={(value) => handleInputChange('base', value)}
        unit={baseUnit}
        onUnitChange={(unit) => handleUnitChange('baseUnit', unit)}
        unitOptions={lengthUnits}
      />
      <CalculatorInput
        label="Height"
        value={height}
        onValueChange={(value) => handleInputChange('height', value)}
        unit={heightUnit}
        onUnitChange={(unit) => handleUnitChange('heightUnit', unit)}
        unitOptions={lengthUnits}
      />
      <CalculatorOutput
        label="Area"
        value={area}
        unit={areaUnit}
        onUnitChange={(unit) => handleUnitChange('areaUnit', unit)}
        unitOptions={areaUnits}
        precision={9}
      />
    </div>
  );
}
