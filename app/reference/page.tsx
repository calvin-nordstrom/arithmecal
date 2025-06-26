import type { Metadata } from 'next'
import Link from 'next/link';
import CalculatorLayout from '../components/CalculatorLayout';

export const metadata: Metadata = {
  title: 'Reference',
  description: 'Explore Arithmecal’s references including ASCII tables and other resources for Science, Technology, Engineering, and Mathematics.',
  keywords: 'STEM reference, ASCII table, mathematical reference, science reference, technology reference, engineering reference, math tools',
  alternates: {
    canonical: 'https://www.arithmecal.com/reference',
  },
}

export default function ReferencePage() {
  return (
    <CalculatorLayout>
      <h1>Reference</h1>
      <p>Access Arithmecal&apos;s reference page to find useful charts, diagrams, and tables from various aspects of science, technology, engineering, and mathematics (STEM) as well as general resources for everyday life. Whether you&apos;re looking for advanced or basic information, our expanding library of reference pages will help you find it.</p>

      <div className='calculator-category'>
        <h2>STEM Reference</h2>
        <p><em>Science, Technology, Engineering, and Mathematics</em></p>
        <ul>
          <li><Link href='reference/ascii-table'>ASCII Table</Link></li>
          <li><Link href='reference/derivatives'>Table of Derivatives</Link></li>
        </ul>
      </div>
    </CalculatorLayout>
  );
}
