'use client';

import React, { useState } from 'react';
import CalculatorInput from './CalculatorInput';
import { cnconvert } from '@/cnconvert/cnconvert';
import { clamp, getDecimalCount, countConsecutiveDecimalZeroes } from '@/utils/mathUtils';
import CalculatorOutput from './CalculatorOutput';

interface FieldData {
  real: number;
  display: string;
  unit: string;
}

interface UnitConverterProps {
  unitOptions: string[];
}

function formatValue(value: number, inputDecimals: number): string {
  let precision = inputDecimals + 3;
  const fixedValue = parseFloat(value.toFixed(precision));
  const decimalCount = getDecimalCount(fixedValue);
  const consecutiveZeroes = countConsecutiveDecimalZeroes(fixedValue);

  if (inputDecimals !== 0) {
    if (decimalCount - consecutiveZeroes < 3) {
      precision += 2;
    }
  }

  precision = clamp(precision, 3, 9);

  if (value === 0) {
    return parseFloat(value.toFixed(0)).toString();
  }
  if (Math.abs(value) < Math.pow(10, -precision)) {
    return value.toExponential(precision);
  }
  return parseFloat(value.toFixed(precision)).toString();
}

export default function UnitConverter({ unitOptions }: UnitConverterProps) {
  if (unitOptions.length < 2) {
    throw new Error('UnitConverter requires at least two units');
  }

  const baseUnit = unitOptions[0];

  const [fields, setFields] = useState<{
    from: FieldData;
    to: FieldData;
  }>(() => {
    const defaultFromValue = 1;
    const real = cnconvert(defaultFromValue).from(unitOptions[0]).to(baseUnit);
    return {
      from: {
        real,
        display: formatValue(defaultFromValue, 0),
        unit: unitOptions[0],
      },
      to: {
        real,
        display: formatValue(cnconvert(real).from(baseUnit).to(unitOptions[1]), 0),
        unit: unitOptions[1],
      },
    };
  });

  const updateFrom = (source: 'from' | 'to', newDisplay: string) => {
    const target = source === 'from' ? 'to' : 'from';
    const parsed = parseFloat(newDisplay.trim());
    const sourceUnit = fields[source].unit;
    const targetUnit = fields[target].unit;

    const newReal = isNaN(parsed)
      ? NaN
      : cnconvert(parsed).from(sourceUnit).to(baseUnit);

    const newTargetDisplay = isNaN(newReal)
      ? ''
      : formatValue(cnconvert(newReal).from(baseUnit).to(targetUnit), getDecimalCount(parsed));

    setFields({
      ...fields,
      [source]: {
        ...fields[source],
        real: newReal,
        display: newDisplay,
      },
      [target]: {
        ...fields[target],
        real: newReal,
        display: newTargetDisplay,
      },
    });
  };

  const updateUnit = (key: 'from' | 'to', newUnit: string) => {
    const real = fields[key].real;
    const newDisplay = isNaN(real)
      ? ''
      : formatValue(cnconvert(real).from(baseUnit).to(newUnit), 0);

    setFields({
      ...fields,
      [key]: {
        ...fields[key],
        unit: newUnit,
        display: newDisplay,
      },
    });
  };

  const reset = () => {
    const defaultFromValue = 1;
    const real = cnconvert(defaultFromValue).from(unitOptions[0]).to(baseUnit);
    setFields({
      from: {
        real,
        display: formatValue(defaultFromValue, 0),
        unit: unitOptions[0],
      },
      to: {
        real,
        display: formatValue(cnconvert(real).from(baseUnit).to(unitOptions[1]), 0),
        unit: unitOptions[1],
      },
    });
  };

  return (
    <div className='calculator'>
      <CalculatorInput
        label='From'
        value={fields.from.display}
        unit={fields.from.unit}
        unitOptions={unitOptions}
        onValueChange={(v) => updateFrom('from', v)}
        onUnitChange={(u) => updateUnit('from', u)}
      />
      <CalculatorOutput
        label='To'
        value={fields.to.display}
        unit={fields.to.unit}
        unitOptions={unitOptions}
        onUnitChange={(u) => updateUnit('to', u)}
      />
      <hr />
      <div className='calculator-controls'>
        <button onClick={reset}>Reset All</button>
      </div>
    </div>
  );
}
