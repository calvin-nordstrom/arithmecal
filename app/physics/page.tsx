import type { Metadata } from 'next'
import Link from 'next/link';
import CalculatorLayout from '../components/CalculatorLayout';

export const metadata: Metadata = {
  title: 'Physics Calculators',
  description: 'Explore Arithmecal’s range of physics calculators for energy, motion, thermodynamics, and materials. Expand your knowledge using our services.',
  keywords: 'physics calculators, energy calculator, materials, motion calculator, thermodynamics calculator, power calculator, work calculator, physics tools, online calculator'
}

export default function PhysicsCalculatorsPage() {
  return (
    <CalculatorLayout>
      <h1>Physics Calculators</h1>
      <p>Explore an extensive collection of physics calculators covering mechanics, energy, motion, electricity, thermodynamics, waves, and more. Built to simplify complex equations and enhance understanding, these tools help you explore the laws of nature with clarity and confidence. Whether you&apos;re solving classroom problems or conducting advanced research, this growing library of calculators is an essential resource for students, educators, and professionals in physics and engineering.</p>

      <div className='calculator-category'>
        <h2>Energy, Power, and Work Calculators</h2>
        <ul>
          <li><Link href='physics/kinetic-energy'>Kinetic Energy Calculator</Link></li>
          <li><Link href='physics/potential-energy'>Potential Energy Calculator</Link></li>
        </ul>

        <h2>Materials Calculators</h2>
        <ul>
          <li><Link href='physics/density'>Density Calculator</Link></li>
        </ul>

        <h2>Motion and Kinematics Calculators</h2>
        <ul>
          <li><Link href='physics/acceleration'>Acceleration Calculator</Link></li>
          <li><Link href='physics/free-fall'>Free Fall Calculator</Link></li>
          <li><Link href='physics/velocity'>Velocity Calculator</Link></li>
        </ul>

        <h2>Thermodynamics Calculators</h2>
        <ul>
          <li><Link href='physics/ideal-gas-law'>Ideal Gas Law Calculator</Link></li>
        </ul>
      </div>
    </CalculatorLayout>
  );
}
