import type { Metadata } from 'next'
import Link from 'next/link';
import CalculatorLayout from '../components/CalculatorLayout';

export const metadata: Metadata = {
  title: 'Math Calculators',
  description: 'Explore Arithmecal’s library of math calculators for geometry, algebra, and calculus equations. Enhance your understanding with our tools.',
  keywords: 'math calculators, algebra calculator, geometry calculator, calculus, math tools, online calculator, triangle calculator',
}

export default function MathCalculatorsPage() {
  return (
    <CalculatorLayout>
      <h1>Math Calculators</h1>
      <p>Unlock a wide range of powerful math calculators designed to handle everything from basic arithmetic to advanced algebra, calculus, and geometry. Explore our various tools to help you solve problems, check homework, and explore mathematical concepts with precision and ease. Whether you&apos;re a student, educator, or professional, these calculators support learning, problem-solving, and decision-making in both academic and real-world scenarios.</p>

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
