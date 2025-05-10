import type { Metadata } from 'next'
import Link from 'next/link';
import CalculatorLayout from '../components/CalculatorLayout';

export const metadata: Metadata = {
  title: 'Reference',
  description: 'Explore Arithmecal’s references including ASCII tables and other resources for Science, Technology, Engineering, and Mathematics.',
  keywords: 'STEM reference, ASCII table, mathematical reference, science reference, technology reference, engineering reference, math tools',
}

export default function ReferencePage() {
  return (
    <CalculatorLayout>
      <h1>Reference</h1>
      <div className='calculator-category'>
        <h2>STEM Reference</h2>
        <p><em>Science, Technology, Engineering, and Mathematics</em></p>
        <ul>
          <li><Link href='reference/ascii-table'>ASCII Table</Link></li>
        </ul>
      </div>
    </CalculatorLayout>
  );
}
