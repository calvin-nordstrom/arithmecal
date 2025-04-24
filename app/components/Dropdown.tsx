'use client';

import React, { useState } from 'react';

interface DropdownProps {
  config: { label: string; component: React.ReactNode }[];
}

export default function Dropdown({ config }: DropdownProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelectionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedIndex(Number(event.target.value));
  };

  return (
    <div className='dropdown'>
      <div className='dropdown-container'>
        <div className='dropdown-item'>
          <label>Solve for</label>
          <select
            value={selectedIndex}
            onChange={handleSelectionChange}
          >
            {config.map((option, index) => (
              <option key={index} value={index}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      {config[selectedIndex].component}
    </div>
  );
}