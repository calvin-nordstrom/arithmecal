'use client';

import React, { useEffect, useState } from 'react';

export type ConverterSide = {
  key: string;
  label: string;
  validate?: (value: string) => string | null;
};

export interface ConverterConfig {
  sideA: ConverterSide;
  sideB: ConverterSide;
  convertAtoB: (input: string) => string;
  convertBtoA: (input: string) => string;
}

interface ConverterProps {
  config: ConverterConfig;
}

export default function Converter({ config }: ConverterProps) {
  const [inputA, setInputA] = useState('');
  const [inputB, setInputB] = useState('');
  const [errorA, setErrorA] = useState<string | null>(null);
  const [errorB, setErrorB] = useState<string | null>(null);
  const [lastChanged, setLastChanged] = useState<'A' | 'B'>('A');

  // When side A changes, update B
  useEffect(() => {
    if (lastChanged !== 'A') return;
    if (config.sideA.validate) {
      const err = config.sideA.validate(inputA);
      setErrorA(err);
      if (err) return;
    }
    try {
      const result = config.convertAtoB(inputA);
      setInputB(result);
      setErrorB(null);
    } catch {}
  }, [inputA, config, lastChanged]);

  // When side B changes, update A
  useEffect(() => {
    if (lastChanged !== 'B') return;
    if (config.sideB.validate) {
      const err = config.sideB.validate(inputB);
      setErrorB(err);
      if (err) return;
    }
    try {
      const result = config.convertBtoA(inputB);
      setInputA(result);
      setErrorA(null);
    } catch {}
  }, [inputB, config, lastChanged]);

  const handleReset = () => {
    setInputA('');
    setInputB('');
    setErrorA(null);
    setErrorB(null);
    setLastChanged('A');
  };

  return (
    <div className='converter'>
      <div className='converter-input-container'>
        <label>{config.sideA.label}</label>
        <textarea
          rows={5}
          value={inputA}
          onChange={(e) => {
            setLastChanged('A');
            setInputA(e.target.value);
          }}
        />
      </div>
      <div className='converter-input-container'>
        <label>{config.sideB.label}</label>
        <textarea
          rows={5}
          value={inputB}
          onChange={(e) => {
            setLastChanged('B');
            setInputB(e.target.value);
          }}
        />
        {(errorA || errorB) && <ul>
          {errorA && <li className='converter-error'>{errorA}</li>}
          {errorB && <li className='converter-error'>{errorB}</li>}
        </ul>}
      </div>
      <hr />
      <div className='calculator-controls'>
        <button onClick={handleReset}>Reset All</button>
      </div>
    </div>
  );
}
