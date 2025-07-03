'use client';

import React, { useEffect, useState } from 'react';

interface DropdownProps {
  label?: string,
  config: { label: string; component: React.ReactNode }[];
}

export default function Dropdown({
  label = 'Solve for',
  config
}: DropdownProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const solveFor = searchParams.get('solve-for')?.toLowerCase();

    if (solveFor) {
      const index = config.findIndex(option =>
        option.label.toLowerCase().replace(/\s+/g, '-') === solveFor
      );
      if (index >= 0) {
        setSelectedIndex(index);
      }
    }
  }, [config]);

  const handleSelectionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const index = Number(event.target.value);
    setSelectedIndex(index);

    // Update URL without full reload (using History API)
    const newSolveFor = config[index].label.toLowerCase().replace(/\s+/g, '-');
    const url = new URL(window.location.href);
    url.searchParams.set('solve-for', newSolveFor);
    window.history.replaceState({}, '', url.toString());
  };

  return (
    <div className='dropdown'>
      <div className='dropdown-container'>
        <div className='dropdown-item'>
          <label>{label}</label>
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