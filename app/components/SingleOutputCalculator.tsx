'use client';

import React, { useState } from 'react';
import CalculatorInput from './CalculatorInput';
import CalculatorOutput from './CalculatorOutput';

const convert = require('convert-units');

// Define an interface for each input/output field
export interface CalculatorField {
  key: string;
  label: string;
  unitOptions: string[];
  defaultUnit: string;
  conversionBase: string;
}

// Define an interface for the overall calculator configuration
export interface CalculatorConfig {
  inputFields: CalculatorField[];
  outputField: CalculatorField;
  formula: (inputs: Record<string, number>) => number;
  validate?: (inputs: Record<string, number>, rawInputs: Record<string, string>) => string[] | null;
}

interface SingleOutputCalculatorProps {
  config: CalculatorConfig;
}

export default function SingleOutputCalculator({
  config 
}: SingleOutputCalculatorProps) {
  // Build initial state for inputs and their units.
  const initialState = config.inputFields.reduce((acc, field) => {
    acc[field.key] = '';
    acc[field.key + 'Unit'] = field.defaultUnit;
    return acc;
  }, {} as Record<string, string>);

  // Add state for the output unit.
  initialState[config.outputField.key + 'Unit'] = config.outputField.defaultUnit;

  const [inputs, setInputs] = useState<Record<string, string>>(initialState);

  // Convert each input to its standard unit (using conversionBase)
  const standardInputs = config.inputFields.reduce((acc, field) => {
    acc[field.key] = convert(parseFloat(inputs[field.key]) || 0)
      .from(inputs[field.key + 'Unit'])
      .to(field.conversionBase);
    return acc;
  }, {} as Record<string, number>);

  // Use the optional validate function to get an error message.
  const errorMessage = config.validate ? config.validate(standardInputs, inputs) : null;

  // Only evaluate the formula if there are no errors
  const result = errorMessage ? "" : config.formula(standardInputs);

  // Calculate the standardized output using the provided formula.
  const outputStandard = errorMessage ? null : config.formula(standardInputs);

  // Convert the standardized output to the desired unit if valid
  const output = outputStandard !== null
    ? convert(outputStandard)
      .from(config.outputField.conversionBase)
      .to(inputs[config.outputField.key + 'Unit'])
    : 'Invalid input(s)';

  // Handler for input value changes.
  const handleInputChange = (key: string, value: string) => {
    setInputs((prev) => ({ ...prev, [key]: value }));
  };

  // Handler for unit changes (for both inputs and output).
  const handleUnitChange = (key: string, newUnit: string) => {
    setInputs((prev) => {
      // For output, just update the unit.
      if (key === config.outputField.key + 'Unit') {
        return { ...prev, [key]: newUnit };
      }
      // For inputs, convert the current value to the new unit.
      const oldUnit = prev[key];
      const inputKey = key.replace('Unit', '');
      const oldValue = parseFloat(prev[inputKey]) || 0;
      const convertedValue = convert(oldValue).from(oldUnit).to(newUnit);
      return {
        ...prev,
        [key]: newUnit,
        [inputKey]: String(parseFloat(convertedValue.toFixed(9))),
      };
    });
  };

  return (
    <div>
      {config.inputFields.map((field) => (
        <CalculatorInput
          key={field.key}
          label={field.label}
          value={inputs[field.key]}
          unit={inputs[field.key + 'Unit']}
          onValueChange={(value) => handleInputChange(field.key, value)}
          onUnitChange={(unit) => handleUnitChange(field.key + 'Unit', unit)}
          unitOptions={field.unitOptions}
        />
      ))}
      <CalculatorOutput
        label={config.outputField.label}
        value={output}
        unit={inputs[config.outputField.key + 'Unit']}
        onUnitChange={(unit) =>
          handleUnitChange(config.outputField.key + 'Unit', unit)
        }
        unitOptions={config.outputField.unitOptions}
        precision={9}
      />
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
