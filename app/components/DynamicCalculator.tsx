'use client';

import React, { useState, useRef } from 'react';
import CalculatorInput from './CalculatorInput';
import { countConsecutiveDecimalZeroes, getDecimalCount } from '@/app/utils/mathUtils';

const convert = require('convert-units');
let inputDecimals = 0;

export interface CalculatorField {
  key: string;
  label: string;
  unitOptions: string[];
  defaultUnit: string;
  conversionBase: string;
}

export interface DynamicCalculatorConfig {
  fields: CalculatorField[];
  // When a field changes, this function returns computed values (in standard units)
  // for the other fields.
  formula: (inputs: Record<string, number>, changedField: string) => Record<string, number>;
  validate?: (inputs: Record<string, number>, rawInputs: Record<string, string>) => string[] | null;
}

// Store separate "real" (precise) and "display" values for each field.
interface FieldData {
  real: number;
  display: string;
  unit: string;
}

interface DynamicCalculatorProps {
  config: DynamicCalculatorConfig;
}

// Helper to format values for display.
// Uses exponential notation for very small numbers.
function formatValue(value: number): string {
  let precision = inputDecimals + 3;
  const fixedValue = parseFloat(value.toFixed(precision));
  const decimalCount = getDecimalCount(fixedValue);
  const consecutiveZeroes = countConsecutiveDecimalZeroes(fixedValue);

  if (inputDecimals !== 0) {
    if (decimalCount - consecutiveZeroes < 3) {
      precision += 2;
    }
  }

  if (Math.abs(value) < Math.pow(10, -precision)) {
    return value.toExponential(precision);
  }
  return parseFloat(value.toFixed(precision)).toString();
}

export default function DynamicCalculator({ config }: DynamicCalculatorProps) {
  // Initialize state: for each field, store its precise value, formatted display, and unit.
  const initialState = config.fields.reduce((acc, field) => {
    acc[field.key] = {
      real: 0,
      display: '',
      unit: field.defaultUnit,
    };
    return acc;
  }, {} as Record<string, FieldData>);

  const [fieldData, setFieldData] = useState<Record<string, FieldData>>(initialState);
  // This state holds the key of a field that is in the "delay" period.
  const [delayedField, setDelayedField] = useState<string | null>(null);
  const delayTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Convert each field's precise (real) value to the standard unit for calculations.
  const computeStandardInputs = (data: Record<string, FieldData>) => {
    return config.fields.reduce((acc, field) => {
      acc[field.key] = convert(data[field.key].real)
        .from(data[field.key].unit)
        .to(field.conversionBase);
      return acc;
    }, {} as Record<string, number>);
  };

  // Handler for user input changes.
  const handleInputChange = (key: string, newDisplay: string) => {
    const newReal = parseFloat(newDisplay);
    const newFieldData = { ...fieldData };
    newFieldData[key] = {
      ...newFieldData[key],
      real: newReal,
      display: newDisplay, // show the raw input until it becomes valid
    };
  
    // If the new value is invalid (e.g., ≤ 0), do not update other fields.
    if (newReal <= 0) {
      setDelayedField(key);
      if (delayTimeoutRef.current) {
        clearTimeout(delayTimeoutRef.current);
      }
      delayTimeoutRef.current = setTimeout(() => {
        setDelayedField(null);
      }, 1000);
      // Update state only for the changed field and exit.
      setFieldData(newFieldData);
      return;
    } else {
      // Clear the delay if the input becomes valid.
      if (delayedField === key) {
        setDelayedField(null);
        if (delayTimeoutRef.current) {
          clearTimeout(delayTimeoutRef.current);
          delayTimeoutRef.current = null;
        }
      }
    }
  
    // If the input is valid, compute standard values and update computed fields.
    const standardInputs = computeStandardInputs(newFieldData);
    const computedStandard = config.formula(standardInputs, key);
  
    // Update other fields based on computed values.
    config.fields.forEach(field => {
      if (field.key !== key && computedStandard[field.key] !== undefined) {
        const computedReal = computedStandard[field.key];
        newFieldData[field.key] = {
          ...newFieldData[field.key],
          real: computedReal,
          display: formatValue(
            convert(computedReal)
              .from(field.conversionBase)
              .to(newFieldData[field.key].unit),
          ),
        };
      } else {
        inputDecimals = getDecimalCount(newFieldData[key].real);
      }
    });
    setFieldData(newFieldData);
  };  

  // Handler for unit changes.
  const handleUnitChange = (key: string, newUnit: string) => {
    const newFieldData = { ...fieldData };
    const oldUnit = newFieldData[key].unit;
    const realValue = newFieldData[key].real;
    const newRealValue = convert(realValue).from(oldUnit).to(newUnit);
    newFieldData[key] = {
      ...newFieldData[key],
      real: newRealValue,
      unit: newUnit,
      display: formatValue(newRealValue),
    };
    setFieldData(newFieldData);
  };

  // Prepare data for validation.
  const standardInputs = computeStandardInputs(fieldData);
  const rawInputs = config.fields.reduce((acc, field) => {
    acc[field.key] = fieldData[field.key].display;
    return acc;
  }, {} as Record<string, string>);
  // Only show error messages if no field is currently in the delay period.
  const errorMessage =
    !delayedField && config.validate ? config.validate(standardInputs, rawInputs) : null;

  return (
    <div>
      {config.fields.map((field) => (
        <CalculatorInput
          key={field.key}
          label={field.label}
          value={fieldData[field.key].display}
          unit={fieldData[field.key].unit}
          onValueChange={(value) => handleInputChange(field.key, value)}
          onUnitChange={(unit) => handleUnitChange(field.key, unit)}
          unitOptions={field.unitOptions}
        />
      ))}
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
