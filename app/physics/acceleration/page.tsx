import CalculatorLayout from '@/app/components/CalculatorLayout';
import KatexRenderer from '@/app/components/KatexRenderer';
import type { Metadata } from 'next'
import Dropdown from '@/app/components/Dropdown';
import AccelerationFromSpeedDifferenceCalculator from '@/app/components/physics/AccelerationFromSpeedDifferenceCalculator';
import AccelerationFromDistanceTraveledCalculator from '@/app/components/physics/AccelerationFromDistanceTraveledCalculator';
import AccelerationFromMassAndForceCalculator from '@/app/components/physics/AccelerationFromMassAndForceCalculator';
import RelatedCalculators from '@/app/components/RelatedCalculators';

export const metadata: Metadata = {
  title: 'Acceleration Calculator',
  description: 'Use Arithmecal’s acceleration calculator to solve for acceleration using speed difference, distance, or Newton’s Second Law. Fast and accurate results.',
  keywords: 'acceleration calculator, physics calculator, acceleration from speed, acceleration from distance, acceleration from force, Newton’s Second Law, Arithmecal',
  alternates: {
    canonical: 'https://www.arithmecal.com/physics/acceleration',
  },
}

export default function AccelerationCalculatorPage() {
  const dropdownConfig = [
    {
      label: 'Speed difference',
      component: <AccelerationFromSpeedDifferenceCalculator />
    },
    {
      label: 'Distance traveled',
      component: <AccelerationFromDistanceTraveledCalculator />
    },
    {
      label: 'Mass and force',
      component: <AccelerationFromMassAndForceCalculator />
    },
  ];

  return (
    <CalculatorLayout>
      <h1>Acceleration Calculator</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <Dropdown label='Solve given' config={dropdownConfig} />
          <RelatedCalculators
            links={[
              { href: './free-fall', label: 'Free Fall Calculator' },
              { href: './velocity', label: 'Velocity Calculator' },
            ]}
          />
        </div>
        <div className='calculator-description'>
          <p>This calculator allows you to solve for <strong>acceleration</strong> using different sets of known values. You can calculate acceleration from:</p>
          <ul>
            <li>Initial and final speed over time</li>
            <li>Distance traveled and time with known initial speed</li>
            <li>Mass and force using Newton&apos;s Second Law</li>
          </ul>

          <h2>How to Use This Calculator</h2>
          <ol>
            <li>Select which variables you are given using the dropdown menu.</li>
            <li>Enter values for the known quantities.</li>
            <li>The calculator will compute the acceleration using the appropriate formula.</li>
          </ol>

          <h2>Formulas Used</h2>
          <h3>1. From Speed Difference</h3>
          <p>Acceleration is the rate of change of velocity over time:</p>
          <div className='katex-block'>
            <KatexRenderer formula='a=\frac{v_f-v_i}{t}' />
          </div>
          <p>Where:</p>
          <ul>
            <li><strong>a</strong> = Acceleration</li>
            <li><strong>v<sub>f</sub></strong> = Final velocity</li>
            <li><strong>v<sub>i</sub></strong> = Initial velocity</li>
            <li><strong>t</strong> = Time</li>
          </ul>
          <h3>2. From Distance Traveled</h3>
          <p>This formula comes from a kinematic equation for motion with constant acceleration:</p>
          <div className='katex-block'>
            <KatexRenderer formula='a=\frac{2(d-v_it)}{t^2}' />
          </div>
          <p>Where:</p>
          <ul>
            <li><strong>d</strong> = Distance traveled</li>
            <li><strong>v<sub>i</sub></strong> = Initial velocity</li>
            <li><strong>t</strong> = Time</li>
          </ul>
          <h3>3. From Mass and Force</h3>
          <p>According to Newton&apos;s Second Law of Motion:</p>
          <div className='katex-block'>
            <KatexRenderer formula='a=\frac{F}{m}' />
          </div>
          <p>Where:</p>
          <ul>
            <li><strong>F</strong> = Force</li>
            <li><strong>m</strong> = Mass</li>
          </ul>

          <h2>Understanding Acceleration</h2>
          <p><strong>Acceleration</strong> measures the rate of change of an object&apos;s velocity over time. It can occur due to speeding up, slowing down, or changing direction.</p>
          <p>It is a vector quantity, meaning it has both magnitude and direction. The SI unit of acceleration is meters per second squared (m/s<sup>2</sup>).</p>

          <h2>Applications of Acceleration</h2>
          <p>Understanding and calculating acceleration is fundamental to mechanics, engineering, and physics. It is used in:</p>
          <ul>
            <li>Vehicle dynamics and crash analysis</li>
            <li>Designing roller coasters and theme park rides</li>
            <li>Rocket propulsion and trajectory planning</li>
            <li>Biomechanics and human motion studies</li>
          </ul>
        </div>
      </div>
    </CalculatorLayout>
  );
}
