'use client';

import React, { useState, useRef } from 'react';
import CalculatorInput from './CalculatorInput';
import CalculatorOutput from './CalculatorOutput';
import { clamp, countConsecutiveDecimalZeroes, getDecimalCount } from '@/app/utils/mathUtils';
const convert = require('convert-units');

let input = 0;

// Local interface to store the real value, display value, and the unit for a 
// field.
interface FieldData {
  real: number;
  display: string;
  unit: string;
}

// Interface representing a field of the calculator.
// This can be input or output depending on the isOutput option.
export interface FieldElement {
  type: 'field';
  key: string;
  label: string;
  unitOptions?: string[];
  defaultUnit?: string;
  conversionBase?: string;
  isOutput?: boolean;
}

// Interface representing a divider of the calculator.
// This is used to separate field elements.
export interface DividerElement {
  type: 'divider';
}

// Interface representing the error element of the calculator.
// This is used to display error messages at the position in which this was 
// added to the config.
export interface ErrorElement {
  type: 'error';
}

export type CalculatorElement = FieldElement | DividerElement | ErrorElement;

// Interface representing the structure of the calculator.
// This contains the fields, the formula to evaluate, and the validation option.
export interface CalculatorConfig {
  fields: CalculatorElement[];
  formula: (inputs: Record<string, number>, changedField: string) => Record<string, number>;
  validate?: (inputs: Record<string, number>, rawInputs: Record<string, string>) => string[] | null;
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
  const fieldConfigs = config.fields.filter(
    (el): el is FieldElement => el.type === 'field'
  );

  const initialState = fieldConfigs.reduce((acc, field) => {
    const initialReal = field.isOutput ? 0 : NaN;
    const initialDisplay = field.isOutput ? '0' : '';
    acc[field.key] = {
      real: initialReal,
      display: initialDisplay,
      unit: field.defaultUnit || '',
    };
    return acc;
  }, {} as Record<string, FieldData>);

  const [fieldData, setFieldData] = useState<Record<string, FieldData>>(initialState);
  const [delayedField, setDelayedField] = useState<string | null>(null);
  const delayTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Convert each field's value to its standard unit.
  const computeStandardInputs = (data: Record<string, FieldData>) => {
    return fieldConfigs.reduce((acc, field) => {
      acc[field.key] = data[field.key].real;
      return acc;
    }, {} as Record<string, number>);
  };

  const standardInputs = computeStandardInputs(fieldData);
  const rawInputs = fieldConfigs.reduce((acc, field) => {
    acc[field.key] = fieldData[field.key].display;
    return acc;
  }, {} as Record<string, string>);
  const errorMessage = !delayedField && config.validate ? config.validate(standardInputs, rawInputs) : null;

  // Handler for user input changes (for editable fields only)
  const handleInputChange = (key: string, newDisplay: string) => {
    const newFieldData = { ...fieldData };
    const fieldConfig = fieldConfigs.find(field => field.key === key);
    if (!fieldConfig) return;

    const parsedValue = parseFloat(newDisplay);
    let newReal: number;
    if (isNaN(parsedValue)) {
      newReal = NaN;
    } else if (!fieldConfig.conversionBase) {
      // Field is unitless; use the raw number.
      newReal = parsedValue;
    } else {
      // Field has units: convert from the current unit to the conversion base.
      newReal = convert(parsedValue)
        .from(newFieldData[key].unit)
        .to(fieldConfig.conversionBase);
    }
    newFieldData[key] = {
      ...newFieldData[key],
      real: newReal,
      display: newDisplay,
    };

    // Compute new values from the updated inputs.
    const standardInputs = computeStandardInputs(newFieldData);
    const computedStandard = config.formula(standardInputs, key);

    fieldConfigs.forEach(field => {
      if (field.key !== key && computedStandard[field.key] !== undefined) {
        const computedReal = computedStandard[field.key];
        if (!field.conversionBase) {
          // For unitless fields, just display the raw computed value.
          newFieldData[field.key] = {
            ...newFieldData[field.key],
            real: computedReal,
            display: formatValue(computedReal)
          };
        } else {
          // For fields with units, perform conversion.
          newFieldData[field.key] = {
            ...newFieldData[field.key],
            real: computedReal,
            display: formatValue(
              convert(computedReal)
                .from(field.conversionBase)
                .to(newFieldData[field.key].unit)
            )
          };
        }
      } else {
        input = parsedValue;
      }
    });
    
    setFieldData(newFieldData);
  };

  // Handler for unit changes (applies to both inputs and outputs)
  const handleUnitChange = (key: string, newUnit: string) => {
    const newFieldData = { ...fieldData };
    const fieldConfig = fieldConfigs.find(field => field.key === key);
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

    if (!fieldConfig.conversionBase) {
      newFieldData[key] = {
        ...newFieldData[key],
        unit: newUnit, // Or potentially ignore if you don't want unit changes.
      };
    } else {
      const realValue = newFieldData[key].real;
      const displayValue = convert(realValue)
        .from(fieldConfig.conversionBase)
        .to(newUnit);
      newFieldData[key] = {
        ...newFieldData[key],
        unit: newUnit,
        display: formatValue(displayValue),
      };
    }

    setFieldData(newFieldData);
  };

  // Handler to clear all fields: resets state to initial values.
  const handleReset = () => {
    input = 0;
    setFieldData(initialState);
  };

  return (
    <div className='calculator'>
      {config.fields.map((element, index) => {
        if (element.type === 'divider') {
          return <hr key={`divider-${index}`} className="calculator-divider" />;
        } else if (element.type === 'error') {
          return errorMessage ? (
            <ul key={`error-${index}`} className='calculator-error-ul'>
              {Array.isArray(errorMessage)
                ? errorMessage.map((msg, index) => <li key={index} className='calculator-error-li'>{msg}</li>)
                : <li className='calculator-error-li'>{errorMessage}</li>}
            </ul>
          ) : null;
        } else if (element.type === 'field') {
          return element.isOutput ? (
            <CalculatorOutput
              key={element.key}
              label={element.label}
              value={fieldData[element.key].display}
              unit={fieldData[element.key].unit}
              onUnitChange={(unit) => handleUnitChange(element.key, unit)}
              unitOptions={element.unitOptions || []}
            />
          ) : (
            <CalculatorInput
              key={element.key}
              label={element.label}
              value={fieldData[element.key].display}
              unit={fieldData[element.key].unit}
              onValueChange={(value) => handleInputChange(element.key, value)}
              onUnitChange={(unit) => handleUnitChange(element.key, unit)}
              unitOptions={element.unitOptions || []}
            />
          );
        }
      })}
      {!config.fields.some((el) => el.type === 'error') && errorMessage && (
        <ul className='calculator-error-ul'>
          {Array.isArray(errorMessage)
            ? errorMessage.map((msg, index) => <li key={index} className='calculator-error-li'>{msg}</li>)
            : <li className='calculator-error-li'>{errorMessage}</li>}
        </ul>
      )}
      <hr className="calculator-divider" />
      <div className='calculator-controls'>
        <button className='calculator-button' onClick={handleReset}>Reset All</button>
      </div>
    </div>
  );  
}
