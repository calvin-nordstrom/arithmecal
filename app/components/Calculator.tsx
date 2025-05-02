'use client';

import React, { useState, useRef } from 'react';
import CalculatorInput from './CalculatorInput';
import CalculatorOutput from './CalculatorOutput';
import { clamp, countConsecutiveDecimalZeroes, getDecimalCount } from '@/utils/mathUtils';
const convert = require('convert-units');

let input = 0;

interface FieldData {
  real: number;
  display: string;
  unit: string;
}

export interface FieldElement {
  type: 'field';
  key: string;
  label: string;
  unitOptions?: string[];
  defaultUnit?: string;
  conversionBase?: string;
  isOutput?: boolean;
}

export interface DividerElement {
  type: 'divider';
}

export interface ErrorElement {
  type: 'error';
}

export type CalculatorElement = FieldElement | DividerElement | ErrorElement;

export interface CalculatorConfig {
  fields: CalculatorElement[];
  formula: (inputs: Record<string, number>, changedField: string) => Record<string, number | string>;
  validate?: (inputs: Record<string, number>, rawInputs: Record<string, string>) => string[] | null;
}

interface CalculatorProps {
  config: CalculatorConfig;
}

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

  const handleInputChange = (key: string, newDisplay: string) => {
    const newFieldData = { ...fieldData };
    const fieldConfig = fieldConfigs.find(field => field.key === key);
    if (!fieldConfig) return;

    const parsedValue = parseFloat(newDisplay.trim());
    let newReal: number = fieldData[key].real;

    if (newDisplay.trim() === '' || isNaN(parsedValue)) {
      newReal = NaN;
    } else if (!fieldConfig.conversionBase) {
      newReal = parsedValue;
    } else {
      newReal = convert(parsedValue)
        .from(newFieldData[key].unit)
        .to(fieldConfig.conversionBase);
    }
    newFieldData[key] = {
      ...newFieldData[key],
      real: newReal,
      display: newDisplay,
    };

    const standardInputs = computeStandardInputs(newFieldData);
    const computedStandard = config.formula(standardInputs, key);

    fieldConfigs.forEach(field => {
      if (field.key !== key && computedStandard[field.key] !== undefined) {
        const computedValue = computedStandard[field.key];

        if (typeof computedValue === 'number' && !isNaN(computedValue)) {
          if (!field.conversionBase) {
            newFieldData[field.key] = {
              ...newFieldData[field.key],
              real: computedValue,
              display: formatValue(computedValue)
            };
          } else {
            newFieldData[field.key] = {
              ...newFieldData[field.key],
              real: computedValue,
              display: formatValue(
                convert(computedValue)
                  .from(field.conversionBase)
                  .to(newFieldData[field.key].unit)
              )
            };
          }
        } else if (typeof computedValue === 'string') {
          newFieldData[field.key] = {
            ...newFieldData[field.key],
            real: NaN,
            display: computedValue,
          };
        }
      } else {
        input = parsedValue;
      }
    });
    
    setFieldData(newFieldData);
  };

  const handleUnitChange = (key: string, newUnit: string) => {
    const newFieldData = { ...fieldData };
    const fieldConfig = fieldConfigs.find(field => field.key === key);
    if (!fieldConfig) return;

    if (!fieldConfig.isOutput && (isNaN(newFieldData[key].real) || newFieldData[key].display.trim() === '')) {
      newFieldData[key] = {
        ...newFieldData[key],
        unit: newUnit,
      };
      setFieldData(newFieldData);
      return;
    }

    if (!fieldConfig.conversionBase) {
      newFieldData[key] = {
        ...newFieldData[key],
        unit: newUnit,
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

  const handleReset = () => {
    input = 0;
    setFieldData(initialState);
  };

  return (
    <div className='calculator'>
      {config.fields.map((element, index) => {
        if (element.type === 'divider') {
          return <hr key={`divider-${index}`} />;
        } else if (element.type === 'error') {
          return errorMessage ? (
            <ul key={`error-${index}`}>
              {Array.isArray(errorMessage)
                ? errorMessage.map((msg, index) => <li key={index}>{msg}</li>)
                : <li>{errorMessage}</li>}
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
        <ul>
          {Array.isArray(errorMessage)
            ? errorMessage.map((msg, index) => <li key={index}>{msg}</li>)
            : <li>{errorMessage}</li>}
        </ul>
      )}
      <hr />
      <div className='calculator-controls'>
        <button className='calculator-control-button' onClick={handleReset}>Reset All</button>
      </div>
    </div>
  );  
}
