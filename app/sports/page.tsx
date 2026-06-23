import type { Metadata } from 'next'
import Link from 'next/link';
import CalculatorLayout from '../components/CalculatorLayout';

export const metadata: Metadata = {
  title: 'Sports Calculators',
  description: 'Explore a set of sports calculators to help keep you active and learn.',
  keywords: 'online calculator, sports calculator, disc golf, outdoor activity',
  alternates: {
    canonical: 'https://arithmecal.com/sports',
  },
}

export default function SportsCalculatorsPage() {
  return (
    <CalculatorLayout>
      <h1>Sports Calculators</h1>
      {/* <p>Explore our diverse set of sports calculators and guides.</p> */}

      <div className='calculator-category'>
        <h2>Outdoor Sports Calculators</h2>
        <ul>
          <li><Link href='sports/disc-golf'>Disc Golf Flight Guide</Link></li>
        </ul>
      </div>
    </CalculatorLayout>
  );
}
