'use client';

import React, { useState, useRef } from 'react';
import CalculatorInput from './CalculatorInput';
import CalculatorOutput from './CalculatorOutput';
import { clamp, countConsecutiveDecimalZeroes, getDecimalCount } from '@/app/utils/mathUtils';
const convert = require('convert-units');

let input = 0;

// Interface representing a field of the calculator.
// This can be input or output depending on the isOutput option
export interface CalculatorField {
  key: string;
  label: string;
  unitOptions: string[];
  defaultUnit: string;
  conversionBase: string;
  isOutput?: boolean;
}

// Interface representing the structure of the calculator.
// This contains the fields, the formula to evaluate, and the validation option.
export interface CalculatorConfig {
  fields: CalculatorField[];
  formula: (inputs: Record<string, number>, changedField: string) => Record<string, number>;
  validate?: (inputs: Record<string, number>, rawInputs: Record<string, string>) => string[] | null;
}

// Local interface to store the real value, display value, and the unit for a 
// field.
interface FieldData {
  real: number;
  display: string;
  unit: string;
}

// Local props interface for the calculator configuration.
interface CalculatorProps {
  config: CalculatorConfig;
}

// Helper function used to format output values.
function formatValue(value: number): string {
  const inputDecimals = getDecimalCount(input);
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

// Export function for the generic Calculator component.
// Takes in config props used to build the calculator from this template.
export default function Calculator({ config }: CalculatorProps) {
  const initialState = config.fields.reduce((acc, field) => {
    let initialReal = NaN;
    let initialDisplay = '';
    if (field.isOutput) {
      initialReal = 0;
      initialDisplay = '0';
    }
    acc[field.key] = {
      real: initialReal,
      display: initialDisplay,
      unit: field.defaultUnit,
    };
    return acc;
  }, {} as Record<string, FieldData>);

  const [fieldData, setFieldData] = useState<Record<string, FieldData>>(initialState);
  const [delayedField, setDelayedField] = useState<string | null>(null);
  const delayTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Convert each field's value to its standard unit.
  const computeStandardInputs = (data: Record<string, FieldData>) => {
    return config.fields.reduce((acc, field) => {
      acc[field.key] = data[field.key].real;
      return acc;
    }, {} as Record<string, number>);
  };

  const standardInputs = computeStandardInputs(fieldData);
  const rawInputs = config.fields.reduce((acc, field) => {
    acc[field.key] = fieldData[field.key].display;
    return acc;
  }, {} as Record<string, string>);
  const errorMessage = !delayedField && config.validate ? config.validate(standardInputs, rawInputs) : null;

  // Handler for user input changes (for editable fields only)
  const handleInputChange = (key: string, newDisplay: string) => {
    const newFieldData = { ...fieldData };
    const fieldConfig = config.fields.find(field => field.key === key);
    if (!fieldConfig) return;

    const parsedValue = parseFloat(newDisplay);
    // If the parsed value is not a valid number, keep it as NaN.
    // Otherwise, convert the input from the current unit to the conversion base.
    const newReal = isNaN(parsedValue)
      ? NaN
      : convert(parsedValue).from(newFieldData[key].unit).to(fieldConfig.conversionBase);

    newFieldData[key] = {
      ...newFieldData[key],
      real: newReal,
      display: newDisplay, // show the raw input until it becomes valid
    };

    // Compute new values from the updated inputs.
    const standardInputs = computeStandardInputs(newFieldData);
    const computedStandard = config.formula(standardInputs, key);

    config.fields.forEach(field => {
      if (field.key !== key && computedStandard[field.key] !== undefined) {
        const computedReal = computedStandard[field.key];
        newFieldData[field.key] = {
          ...newFieldData[field.key],
          real: computedReal,
          display: formatValue(
            convert(computedReal)
              .from(field.conversionBase)
              .to(newFieldData[field.key].unit)
          )
        };
      } else {
        input = newFieldData[key].real;
      }
    });
    setFieldData(newFieldData);
  };

  // Handler for unit changes (applies to both inputs and outputs)
  const handleUnitChange = (key: string, newUnit: string) => {
    const newFieldData = { ...fieldData };
    const fieldConfig = config.fields.find(field => field.key === key);
    if (!fieldConfig) return;

    // If this is an input field and the current display is empty or invalid,
    // simply update the unit without converting any value.
    if (!fieldConfig.isOutput && (isNaN(newFieldData[key].real) || newFieldData[key].display.trim() === '')) {
      newFieldData[key] = {
        ...newFieldData[key],
        unit: newUnit,
        // Leave display unchanged (or keep it empty) and do not update "real"
      };
      setFieldData(newFieldData);
      return;
    }

    // For valid values (or for outputs), always convert from the conversion base.
    const realValue = newFieldData[key].real;
    const displayValue = convert(realValue)
      .from(fieldConfig.conversionBase)
      .to(newUnit);

    newFieldData[key] = {
      ...newFieldData[key],
      unit: newUnit,
      display: formatValue(displayValue),
    };
    setFieldData(newFieldData);
  };

  return (
    <div>
      {config.fields.map((field) =>
        field.isOutput ? (
          <CalculatorOutput
            key={field.key}
            label={field.label}
            value={fieldData[field.key].display}
            unit={fieldData[field.key].unit}
            onUnitChange={(unit) => handleUnitChange(field.key, unit)}
            unitOptions={field.unitOptions}
          />
        ) : (
          <CalculatorInput
            key={field.key}
            label={field.label}
            value={fieldData[field.key].display}
            unit={fieldData[field.key].unit}
            onValueChange={(value) => handleInputChange(field.key, value)}
            onUnitChange={(unit) => handleUnitChange(field.key, unit)}
            unitOptions={field.unitOptions}
          />
        )
      )}
      {errorMessage && (
        <div style={{ color: 'red', marginTop: '8px' }}>
          {Array.isArray(errorMessage)
            ? errorMessage.map((msg, index) => <div key={index}>{msg}</div>)
            : errorMessage}
        </div>
      )}
    </div>
  );
}
