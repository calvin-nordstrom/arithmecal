'use client';

import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-top'>
        <div className='footer-categories'>
          <h2>Calculator Categories</h2>
          <ul>
            <li><Link href='../conversion'>Conversion</Link></li>
            <li><Link href='../math'>Math</Link></li>
            <li><Link href='../physics'>Physics</Link></li>
            <li><Link href='../reference'>Reference</Link></li>
          </ul>
        </div>

        <div className='footer-company'>
          <h2>Arithmecal</h2>
          <ul>
            <li><Link href='../about'>About</Link></li>
            <li><Link href='../contact'>Contact</Link></li>
            <li><Link href='../privacy-policy'>Privacy Policy</Link></li>
            <li><Link href='../terms'>Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className='footer-bottom'>
        <p>&copy; 2025 Arithmecal. All rights reserved.</p>
      </div>
    </footer>
  );
}
