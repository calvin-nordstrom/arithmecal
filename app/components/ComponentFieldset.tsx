'use client';

import React, { useState } from 'react';

interface ComponentFieldSetProps {
  label?: string;
  config: { label: string; component: React.ReactNode }[];
}

export default function ComponentFieldSet({
  label = 'Solve for',
  config
}: ComponentFieldSetProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = Number(event.target.value);
    setSelectedIndex(index);
  };

  return (
    <div className='component-fieldset-container'>
      <label>{label}</label>
      <fieldset className='component-fieldset'>
        {config.map((option, index) => (
          <label key={index}>
            <input
              type='radio'
              name='component-selector'
              value={index}
              checked={selectedIndex === index}
              onChange={handleRadioChange}
            />
            {' '}{option.label}
          </label>
        ))}
      </fieldset>
      <div className='component-fieldset-component'>
        {config[selectedIndex].component}
      </div>
    </div>
  );
}
