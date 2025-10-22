'use client';

import React, { useEffect, useState } from 'react';

interface ComponentSelectProps {
  label?: string,
  config: { label: string; component: React.ReactNode }[];
}

export default function ComponentSelect({
  label = 'Solve for',
  config
}: ComponentSelectProps) {
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
    <div className='component-select'>
      <div className='component-select-container'>
        <form className='component-select-item'>
          <label htmlFor='component-select-selection'>{label}</label>
          <select
            id='component-select-selection'
            value={selectedIndex}
            onChange={handleSelectionChange}
          >
            {config.map((option, index) => (
              <option key={index} value={index}>
                {option.label}
              </option>
            ))}
          </select>
        </form>
      </div>
      {config[selectedIndex].component}
    </div>
  );
}
