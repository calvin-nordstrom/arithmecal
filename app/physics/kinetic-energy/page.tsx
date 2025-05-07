import CalculatorLayout from '@/app/components/CalculatorLayout';
import KatexRenderer from '@/app/components/KatexRenderer';
import type { Metadata } from 'next'
import Dropdown from '@/app/components/Dropdown';
import KineticEnergyCalculator from '@/app/components/physics/KineticEnergyCalculator';
import KineticEnergyMassCalculator from '@/app/components/physics/KineticEnergyMassCalculator';
import KineticEnergyVelocityCalculator from '@/app/components/physics/KineticEnergyVelocityCalculator';

export const metadata: Metadata = {
  title: 'Kinetic Energy Calculator',
  description: 'Arithmecal kinetic energy calculator',
  keywords: '',
}

export default function KineticEnergyCalculatorPage() {
  const dropdownConfig = [
    {
      label: 'Kinetic energy',
      component: <KineticEnergyCalculator />
    },
    {
      label: 'Mass',
      component: <KineticEnergyMassCalculator />
    },
    {
      label: 'Velocity',
      component: <KineticEnergyVelocityCalculator />
    },
  ];

  return (
    <CalculatorLayout>
      <h1>Kinetic Energy Calculator</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <Dropdown config={dropdownConfig} />
        </div>
        <div className='calculator-description'>
          <p>This calculator helps you solve for <strong>kinetic energy</strong>, <strong>mass</strong>, or <strong>velocity</strong> using the kinetic energy formula:</p>
          <div className='katex-block'>
            <KatexRenderer formula='KE=\frac{1}{2}mv^2' />
          </div>
          <p>Where:</p>
          <ul>
            <li><strong>KE</strong> = Kinetic energy</li>
            <li><strong>m</strong> = Mass of the object</li>
            <li><strong>v</strong> = Velocity of the object</li>
          </ul>
          <p>The SI unit of kinetic energy is <strong>joule (J)</strong>, where 1 J = 1 kg·m<sup>2</sup>/s<sup>2</sup>.</p>
          <p className='note'>Kinetic energy can be symbolized as <strong>KE</strong>, <strong>E<sub>k</sub></strong>, <strong>K</strong>, or <strong>T</strong>.</p>

          <h2>How to Use This Calculator</h2>
          <ol>
            <li>Select the quantity you want to solve for: kinetic energy, mass, or velocity.</li>
            <li>Enter the known values into the corresponding input fields.</li>
            <li>The calculator will instantly compute the result using the formula above.</li>
          </ol>

          <h2>Understanding Kinetic Energy</h2>
          <p>Kinetic energy is the energy that an object possesses due to its motion. It depends on both the mass of the object and its velocity. The faster something moves or the more massive it is, the more kinetic energy it has.</p>
          <p>It is a form of mechanical energy and is always a positive value or zero (an object at rest has zero kinetic energy).</p>

          <h2>Rearranged Forms</h2>
          <p>The following kinetic energy formula contains two variables that can each be represented in terms of each other.</p>
          <div className='katex-block'>
            <KatexRenderer formula='KE=\frac{1}{2}mv^2' />
          </div>
          <h3>1. Solving for Mass</h3>
          <div className='katex-block'>
            <KatexRenderer formula='m=\frac{2KE}{v^2}' />
          </div>
          <h3>2. Solving for Velocity</h3>
          <div className='katex-block'>
            <KatexRenderer formula='v=\sqrt{\frac{2KE}{m}}' />
          </div>

          <h2>Derivation of the Formula</h2>
          <p>The kinetic energy equation comes from integrating the work done by a force accelerating a mass:</p>
          <div className='katex-block'>
            <KatexRenderer formula='W=\int F\,dx' />
            <KatexRenderer formula='=\int ma\,dx' />
            <KatexRenderer formula='=m\int a\,dx' />
            <KatexRenderer formula='=m\int\frac{dv}{dt}\cdot\frac{dx}{dv}\,dv' />
            <KatexRenderer formula='=m\int v\,dv' />
            <KatexRenderer formula='=\frac{1}{2}mv^2' />
          </div>

          <h2>Applications of Kinetic Energy</h2>
          <p>Kinetic energy is a central concept in physics and engineering, with applications including:</p>
          <ul>
            <li>Vehicle crash analysis and safety engineering</li>
            <li>Sports science and human movement</li>
            <li>Projectile motion and orbital mechanics</li>
            <li>Mechanical systems and robotics</li>
          </ul>

          <h2>Important Notes</h2>
          <ul>
            <li>Kinetic energy is a scalar quantity—it has magnitude but no direction.</li>
            <li>It&apos;s always non-negative, since velocity is squared in the formula.</li>
            <li>If either mass or velocity is zero, the kinetic energy is zero.</li>
          </ul>
          <p className='note'>Tip: Doubling the velocity of an object will increase its kinetic energy by a factor of four, since velocity is squared in the formula.</p>
        </div>
      </div>
    </CalculatorLayout>
  );
}
