'use client';

import { useEffect, useState } from 'react';

export default function CalculatorSearch() {
  const [calculators, setCalculators] = useState([]);

  useEffect(() => {
    fetch('/calculators.json')
      .then(res => res.json())
      .then(setCalculators);
  }, []);

  return (
    <>
      <input type='text' className='search-input' placeholder='Search calculators...' />
      {/* <ul>
        {calculators.map((calc) => (
          <li key={calc.url}>{calc.title}</li>
        ))}
      </ul> */}
    </>
  );
}
