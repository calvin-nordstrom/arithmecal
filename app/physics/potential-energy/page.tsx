import CalculatorLayout from '@/app/components/CalculatorLayout';
import KatexRenderer from '@/app/components/KatexRenderer';
import type { Metadata } from 'next'
import Dropdown from '@/app/components/Dropdown';
import PotentialEnergyCalculator from '@/app/components/physics/PotentialEnergyCalculator';
import PotentialEnergyMassCalculator from '@/app/components/physics/PotentialEnergyMassCalculator';
import PotentialEnergyHeightCalculator from '@/app/components/physics/PotentialEnergyHeightCalculator';
import PotentialEnergyGravityCalculator from '@/app/components/physics/PotentialEnergyGravitationalAccelerationCalculator';

export const metadata: Metadata = {
  title: 'Potential Energy Calculator',
  description: 'Arithmecal potential energy calculator',
  keywords: '',
}

export default function PotentialEnergyCalculatorPage() {
  const dropdownConfig = [
    {
      label: 'Potential energy',
      component: <PotentialEnergyCalculator />
    },
    {
      label: 'Mass',
      component: <PotentialEnergyMassCalculator />
    },
    {
      label: 'Height',
      component: <PotentialEnergyHeightCalculator />
    },
    {
      label: 'Gravitational acceleration',
      component: <PotentialEnergyGravityCalculator />
    },
  ];

  return (
    <CalculatorLayout>
      <h1>Potential Energy Calculator</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <Dropdown config={dropdownConfig} />
        </div>
        <div className='calculator-description'>
          <p>This calculator helps you compute variables related to <strong>gravitational potential energy</strong>—a form of stored energy possessed by an object due to its height in a gravitational field.</p>
          <p>The formula for gravitational potential energy is:</p>
          <div className='katex-block'>
            <KatexRenderer formula='PE=mgh' />
          </div>
          <p>Where:</p>
          <ul>
            <li><strong>PE</strong> = Potential energy</li>
            <li><strong>m</strong> = Mass of the object</li>
            <li><strong>g</strong> = Gravitational acceleration</li>
            <li><strong>h</strong> = Height above the reference point</li>
          </ul>
          <p>The SI unit of potential energy is <strong>joule (J)</strong>, where 1 J = 1 kg·m<sup>2</sup>/s<sup>2</sup>.</p>
          <p className='note'>Potential energy can be symbolized as <strong>PE</strong>, <strong>E<sub>p</sub></strong>, <strong>U</strong>, or <strong>V</strong>.</p>

          <h2>How to Use This Calculator</h2>
          <ol>
            <li>Select the variable you want to solve for: potential energy, mass, height, or gravitational acceleration.</li>
            <li>Enter the known values in the appropriate units. You can switch between unit systems as needed.</li>
            <li>The result will update automatically based on the formula <em>PE = mgh</em>.</li>
          </ol>

          <h2>Understanding Gravitational Potential Energy</h2>
          <p>Gravitational potential energy represents the energy an object has due to its position in a gravitational field. It is directly proportional to the object&apos;s mass and its height relative to a reference point (typically ground level).</p>
          <p>On Earth, <strong>g</strong> is generally approximated as <strong>9.80665 m/s²</strong>, but it can vary slightly depending on altitude and latitude.</p>
          <h3>Why It Matters</h3>
          <ul>
            <li>Potential energy is a key concept in mechanics and conservation of energy.</li>
            <li>It&apos;s used in physics, engineering, structural design, and energy systems.</li>
            <li>Real-world applications include roller coasters, cranes, and hydroelectric power.</li>
          </ul>

          <h2>Rearranged Forms</h2>
          <p>The following potential energy formula contains three variables that can each be expressed in terms of the others.</p>
          <div className='katex-block'>
            <KatexRenderer formula='PE = mgh' />
          </div>
          <h3>1. Solving for Mass</h3>
          <div className='katex-block'>
            <KatexRenderer formula='m = \frac{PE}{gh}' />
          </div>
          <h3>2. Solving for Height</h3>
          <div className='katex-block'>
            <KatexRenderer formula='h = \frac{PE}{mg}' />
          </div>
          <h3>3. Solving for Gravitational Acceleration</h3>
          <div className='katex-block'>
            <KatexRenderer formula='g = \frac{PE}{mh}' />
          </div>

          <h2>Applications of Potential Energy</h2>
          <p>Potential energy is a fundamental concept in physics that plays a key role in understanding how energy is stored and transferred. Common applications include:</p>
          <ul>
            <li>Designing roller coasters and theme park rides</li>
            <li>Calculating the energy in lifted or suspended loads in cranes and elevators</li>
            <li>Analyzing dam and hydroelectric power systems (water stored at height)</li>
            <li>Studying gravitational fields and planetary motion</li>
            <li>Understanding biomechanics, such as energy stored in raised limbs</li>
          </ul>

          <h2>Important Notes</h2>
          <ul>
            <li>Gravitational potential energy is relative—it depends on the chosen reference height (zero level).</li>
            <li>It is also a scalar quantity, meaning it has magnitude but no direction.</li>
            <li>If either the mass, height, or gravitational acceleration is zero, then the potential energy is zero.</li>
            <li>In a closed system, potential energy can convert to kinetic energy and vice versa, illustrating the conservation of mechanical energy.</li>
          </ul>
          <p className='note'>Tip: Increasing the height of an object has a linear effect on potential energy. For example, doubling the height will double the potential energy, assuming mass and gravity stay constant.</p>
          
          <h2>Try Different Scenarios</h2>
          <p>
            You can experiment with different mass and height values to see how energy changes in various conditions. For example:
          </p>
          <ul>
            <li>Lifting a 10 kg object to 5 meters yields <KatexRenderer formula='PE = 10 \times 9.80665 \times 5 = 490.33\, \text{J}' /></li>
            <li>A feather with negligible mass has little potential energy even at high altitudes.</li>
          </ul>
        </div>
      </div>
    </CalculatorLayout>
  );
}
