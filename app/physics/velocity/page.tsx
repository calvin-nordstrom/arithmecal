import CalculatorLayout from '@/app/components/CalculatorLayout';
import KatexRenderer from '@/app/components/KatexRenderer';
import type { Metadata } from 'next'
import Dropdown from '@/app/components/Dropdown';
import VelocityFromDistanceTraveledCalculator from '@/app/components/physics/VelocityFromDistanceTraveledCalculator';
import VelocityFromAccelerationCalculator from '@/app/components/physics/VelocityFromAccelerationCalculator';

export const metadata: Metadata = {
  title: 'Velocity Calculator',
  description: 'Arithmecal velocity calculator',
  keywords: '',
}

export default function VelocityCalculatorPage() {
  const dropdownConfig = [
    {
      label: 'Distance traveled',
      component: <VelocityFromDistanceTraveledCalculator />
    },
    {
      label: 'Acceleration',
      component: <VelocityFromAccelerationCalculator />
    },
  ];

  return (
    <CalculatorLayout>
      <h1>Velocity Calculator</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <Dropdown label='Solve given' config={dropdownConfig} />
        </div>
        <div className='calculator-description'>
          <p>
            This calculator allows you to solve for <strong>velocity</strong> using different sets of known values. You can calculate velocity from:
          </p>
          <ul>
            <li>Distance traveled over a period of time</li>
            <li>Initial velocity, acceleration, and elapsed time</li>
          </ul>

          <h2>How to Use This Calculator</h2>
          <ol>
            <li>Select which variables you are given using the dropdown menu</li>
            <li>Enter values for the known quantities</li>
            <li>The calculator will compute the velocity using the appropriate formula</li>
          </ol>

          <h2>Formulas Used</h2>
          <h3>1. From Distance and Time</h3>
          <p>
            Velocity is the rate of change of position with respect to time. The basic formula is:
          </p>
          <div className='katex-block'>
            <KatexRenderer formula='v=\frac{d}{t}' />
          </div>
          <p>Where:</p>
          <ul>
            <li><strong>v</strong> = Velocity</li>
            <li><strong>d</strong> = Distance traveled</li>
            <li><strong>t</strong> = Time</li>
          </ul>
          <h3>2. From Acceleration and Initial Velocity</h3>
          <p>
            When an object is accelerating, its final velocity is calculated by:
          </p>
          <div className='katex-block'>
            <KatexRenderer formula='v=v_i+at' />
          </div>
          <p>Where:</p>
          <ul>
            <li><strong>v</strong> = Final velocity</li>
            <li><strong>v<sub>i</sub></strong> = Initial velocity</li>
            <li><strong>a</strong> = Acceleration</li>
            <li><strong>t</strong> = Time</li>
          </ul>

          <h2>Understanding Velocity</h2>
          <p>
            <strong>Velocity</strong> describes both the speed and direction of an object. Unlike speed, which is scalar, velocity is a vector quantity. This means it includes directional information.
          </p>
          <p>
            The SI unit of velocity is meters per second (m/s). Positive or negative signs indicate direction in one-dimensional motion.
          </p>

          <h2>Applications of Velocity</h2>
          <p>Velocity is foundational in many fields including physics, engineering, and transportation. Practical applications include:</p>
          <ul>
            <li>Determining the motion of vehicles or projectiles</li>
            <li>Analyzing travel times and speed limits</li>
            <li>Evaluating aircraft or spacecraft trajectory planning</li>
            <li>Studying fluid flow in engineering systems</li>
          </ul>
        </div>
      </div>
    </CalculatorLayout>
  );
}
