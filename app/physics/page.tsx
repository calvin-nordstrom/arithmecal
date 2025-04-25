import type { Metadata } from 'next'
import Link from 'next/link';
import CalculatorLayout from '../components/CalculatorLayout';

export const metadata: Metadata = {
  title: 'Physics Calculators',
  description: 'Arithmecal physics calculators',
  keywords: '',
}

export default function PhysicsCalculatorsPage() {
  return (
    <CalculatorLayout>
      <h1>Physics Calculators</h1>
      <div className='calculator-category'>
        <h2>Thermodynamics Calculators</h2>
        <ul>
          <li><Link href='physics/ideal-gas-law'>Ideal Gas Law Calculator</Link></li>
        </ul>
      </div>
    </CalculatorLayout>
  );
}
