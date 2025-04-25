'use client';

import React, { useEffect, useState } from 'react';

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
  const [localFrom, setLocalFrom] = useState<T>(selectedFrom);
  const [localTo, setLocalTo] = useState<U>(selectedTo);

  // Sync with external state changes
  useEffect(() => {
    setLocalFrom(selectedFrom);
  }, [selectedFrom]);

  useEffect(() => {
    setLocalTo(selectedTo);
  }, [selectedTo]);

  const handleFromChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newFrom = e.target.value as T;
    setLocalFrom(newFrom);
    if (newFrom !== (localTo as string)) {
      onChange(newFrom, localTo);
    }
  };

  const handleToChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newTo = e.target.value as U;
    setLocalTo(newTo);
    if (newTo !== (localFrom as string)) {
      onChange(localFrom, newTo);
    }
  };

  return (
    <div className='dropdown'>
      <div className='dropdown-container'>
        <div className='dropdown-item'>
          <label>From</label>
          <select value={localFrom} onChange={handleFromChange}>
            {fromOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt.toWellFormed()}
              </option>
            ))}
          </select>
        </div>

        <div className='dropdown-item'>
          <label>To</label>
          <select value={localTo} onChange={handleToChange}>
            {toOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt.toWellFormed()}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default BinaryDropdown;
