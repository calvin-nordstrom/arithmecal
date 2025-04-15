'use client';

import React from 'react';

interface BinaryDropdownProps<T extends string, U extends string> {
  fromOptions: T[];
  toOptions: U[];
  selectedFrom: T;
  selectedTo: U;
  onChange: (newFrom: T, newTo: U) => void;
}

const BinaryDropdown = <T extends string, U extends string>({
  fromOptions,
  toOptions,
  selectedFrom,
  selectedTo,
  onChange,
}: BinaryDropdownProps<T, U>) => {
  return (
    <div className='binary-dropdown'>
      <div className='dropdown-container'>
        <label>From</label>
        <select
          value={selectedFrom}
          onChange={(e) => onChange(e.target.value as T, selectedTo)}
        >
          {fromOptions.map((opt) => (
            <option
              key={opt}
              value={opt}
              disabled={opt === (selectedTo as string)}
            >
              {opt.toWellFormed()}
            </option>
          ))}
        </select>
      </div>

      <div className='dropdown-container'>
        <label>To</label>
        <select
          value={selectedTo}
          onChange={(e) => onChange(selectedFrom, e.target.value as U)}
        >
          {toOptions.map((opt) => (
            <option
              key={opt}
              value={opt}
              disabled={opt === (selectedFrom as string)}
            >
              {opt.toWellFormed()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default BinaryDropdown;
