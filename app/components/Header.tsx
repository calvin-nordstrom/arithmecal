'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import CalculatorSearch from './CalculatorSearch';

export default function Header() {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isCategoryActive, setIsCategoryActive] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const searchButtonRef = useRef<HTMLButtonElement>(null);

  const handleResize = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (searchButtonRef.current && searchContainerRef.current) {
        if (width <= 768) {
          searchButtonRef.current.style.display = 'inline';
          searchContainerRef.current.style.display = 'none';
        } else {
          searchButtonRef.current.style.display = 'none';
          searchContainerRef.current.style.display = 'block';
          setIsSearchExpanded(false);
          setIsCategoryActive(false);
        }
      }
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className='header'>
      <div className='top-bar'>
        <div className='top-left-container'>
          <button className='hamburger' onClick={() => setIsCategoryActive((prev) => !prev)}>&#9776;</button>
          <div className='center-image'>
            <Link href='../'>
              <Image
                src='/logo_horizontal.png'
                width={384}
                height={128}
                alt='Arithmecal horizontal logo'
                className='image desktop-logo'
              />
            </Link>
          </div>
        </div>

        <div className='top-right-container'>
          <div className='search-container' ref={searchContainerRef}>
            <CalculatorSearch />
          </div>
          <button className='search-button' ref={searchButtonRef} onClick={() => setIsSearchExpanded(true)}>&#128269;</button>
          <div className='nav-links'>
            <Link href='../about'>About</Link>
            <Link href='../contact'>Contact</Link>
          </div>
        </div>
      </div>

      <div className='bottom-bar'>
        <div className={isCategoryActive ? 'category-nav active' : 'category-nav'}>
          <Link href='../conversion'>Conversion</Link>
          <Link href='../math'>Math</Link>
          <Link href='../physics'>Physics</Link>
          <div className='badge-container'>
            <Link href='../sports'>Sports</Link>
            <span className='badge-new'>NEW</span>
          </div>
          <Link href='../reference'>Reference</Link>

          <div className='mobile-nav-links'>
            <Link href='../about'>About</Link>
            <Link href='../contact'>Contact</Link>
          </div>
        </div>
      </div>
      {isSearchExpanded && (
        <div className='search-expanded'>
          <button onClick={() => setIsSearchExpanded(false)}>&lt;</button>
          <CalculatorSearch />
        </div>
      )}
    </header>
  );
};
