'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { calculators, Calculator } from '@/utils/calculators';
import Link from 'next/link';

export default function CalculatorSearch() {
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState<Calculator[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (query.trim() === '') {
      setFiltered([]);
      setShowDropdown(false);
    } else {
      const q = query.toLowerCase();
      const matches = calculators.filter(c =>
        c.title.toLowerCase().includes(q)
      );
      setFiltered(matches);
      setShowDropdown(true);
    }
  }, [query]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(e.target as Node)
      ) {
        setShowDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className='search-wrapper'>
      <input
        ref={inputRef}
        type='text'
        className='search-input'
        placeholder='Search calculators...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => {
          if (filtered.length > 0) setShowDropdown(true);
        }}
      />
      {showDropdown && filtered.length > 0 && (
        <div className='search-dropdown' ref={dropdownRef}>
          {filtered.map((calc, i) => (
            <Link
              href={calc.url}
              key={i}
              className='search-result'
            >
              <div className='search-title'>{calc.title}</div>
              <div className='search-category'>{calc.category}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
