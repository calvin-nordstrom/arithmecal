import type { Metadata } from 'next'
import Link from 'next/link';
import CalculatorLayout from '../components/CalculatorLayout';

export const metadata: Metadata = {
  title: 'Math Calculators',
  description: 'Arithmecal math calculators',
  keywords: '',
}

export default function MathCalculatorsPage() {
  return (
    <CalculatorLayout>
      <h1>Math Calculators</h1>
      <div className='calculator-category'>
        <h2>Algebra Calculators</h2>
        <ul>
          <li><Link href='math/foil'>FOIL Calculator</Link></li>
          <li><Link href='math/trinomial-factoring'>Trinomial Factoring Calculator</Link></li>
          <li><Link href='math/percent-change'>Percent Change Calculator</Link></li>
          <li><Link href='math/quadratic-formula'>Quadratic Formula Calculator</Link></li>
        </ul>

        <h2>Geometry Calculators</h2>
        <ul>
          <li><Link href='math/circumscribed-circle'>Circumscribed Circle Calculator</Link></li>
          <li><Link href='math/triangle-30-60-90'>30 60 90 Triangle Calculator</Link></li>
          <li><Link href='math/triangle-45-45-90'>45 45 90 Triangle Calculator</Link></li>
        </ul>
      </div>
    </CalculatorLayout>
  );
}
