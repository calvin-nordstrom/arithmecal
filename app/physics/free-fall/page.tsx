import CalculatorLayout from '@/app/components/CalculatorLayout';
import KatexRenderer from '@/app/components/KatexRenderer';
import type { Metadata } from 'next'
import Dropdown from '@/app/components/Dropdown';
import FreeFallTimeOfFallCalculator from '@/app/components/physics/FreeFallTimeOfFallCalculator';
import FreeFallVelocityCalculator from '@/app/components/physics/FreeFallVelocityCalculator';
import FreeFallHeightCalculator from '@/app/components/physics/FreeFallHeightCalculator';
import FreeFallInitialVelocityCalculator from '@/app/components/physics/FreeFallInitialVelocityCalculator';

export const metadata: Metadata = {
  title: 'Free Fall Calculator',
  description: 'Solve time, velocity, height, or initial velocity in free fall using Arithmecal’s physics calculator based on gravity equations.',
  keywords: 'free fall calculator, gravity calculator, time of fall, final velocity, fall height, initial velocity, Arithmecal'
}

export default function FreeFallCalculatorPage() {
  const dropdownConfig = [
    {
      label: 'Time of fall',
      component: <FreeFallTimeOfFallCalculator />
    },
    {
      label: 'Velocity',
      component: <FreeFallVelocityCalculator />
    },
    {
      label: 'Height',
      component: <FreeFallHeightCalculator />
    },
    {
      label: 'Initial velocity',
      component: <FreeFallInitialVelocityCalculator />
    },
  ];

  return (
    <CalculatorLayout>
      <h1>Free Fall Calculator</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <Dropdown config={dropdownConfig} />
        </div>
        <div className='calculator-description'>
          <p>This calculator allows you to solve various aspects of <strong>free fall motion</strong> due to gravity. You can calculate unknown variables like:</p>
          <ul>
            <li>Time it takes for an object to fall</li>
            <li>Final velocity before impact</li>
            <li>Height from which the object fell</li>
            <li>Initial velocity of the object (if thrown up or down)</li>
          </ul>

          <h2>How to Use This Calculator</h2>
          <ol>
            <li>Use the dropdown menu to choose which variable you want to solve for.</li>
            <li>Input values for the known quantities (e.g., time, height, initial velocity).</li>
            <li>The calculator will compute the desired result based on the laws of motion.</li>
          </ol>

          <h2>Formulas Used</h2>
          <p>This calculator uses <strong>9.80665 m/s<sup>2</sup></strong> as the default gravitational acceleration. It is the standard gravity value on Earth at sea level and at a latitude of 45 degrees.</p>
          <p className='note'>Note that <strong>9.80665 m/s<sup>2</sup></strong> is equal to <strong>1 g</strong>.</p>
          <p>Free fall formulas are defined using these five variables:</p>
          <ul>
            <li><strong>t</strong> = Time (seconds)</li>
            <li><strong>v<sub>i</sub></strong> = Initial velocity (m/s)</li>
            <li><strong>v<sub>f</sub></strong> = Final velocity (m/s)</li>
            <li><strong>g</strong> = Acceleration due to gravity (m/s<sup>2</sup>)</li>
            <li><strong>h</strong> = Height (m)</li>
          </ul>
          <h3>1. Time of Fall</h3>
          <p>If an object falls from rest or with a known initial velocity, the time to fall a known height can be found using:</p>
          <div className='katex-block'>
            <KatexRenderer formula='t=\frac{v_f-v_i}{g}' />
          </div>
          <p>Or, if initial velocity is known and height is given:</p>
          <div className='katex-block'>
            <KatexRenderer formula='t=\frac{-v_i+\sqrt{v_i^2+2gh}}{g}' />
          </div>
          <h3>2. Final Velocity</h3>
          <p>The velocity of an object in free fall after a certain time or from a certain height can be calculated as:</p>
          <div className='katex-block'>
            <KatexRenderer formula='v_f=v_i+gt' />
          </div>
          <p>Or, when falling from rest (v<sub>i</sub> = 0):</p>
          <div className='katex-block'>
            <KatexRenderer formula='v_f=\sqrt{2gh}' />
          </div>
          <h3>3. Height (Displacement)</h3>
          <p>The distance an object falls in free fall can be calculated using:</p>
          <div className='katex-block'>
            <KatexRenderer formula='h=v_it+\frac{1}{2}gt^2' />
          </div>
          <p>Or from the final velocity:</p>
          <div className='katex-block'>
            <KatexRenderer formula='h=\frac{v_f^2-v_i^2}{2g}' />
          </div>
          <h3>4. Initial Velocity</h3>
          <p>If the final velocity and time are known, initial velocity is:</p>
          <div className='katex-block'>
            <KatexRenderer formula='v_i=v_f-gt' />
          </div>
          <p>Or from displacement and time:</p>
          <div className='katex-block'>
            <KatexRenderer formula='v_i=\frac{h-\frac{1}{2}gt^2}{t}' />
          </div>

          <h2>Understanding Free Fall</h2>
          <p><strong>Free fall</strong> describes the motion of an object under the sole influence of gravity, with no air resistance. All objects, regardless of mass, accelerate downward at approximately 9.81 m/s<sup>2</sup> near Earth&apos;s surface.</p>
          <p>If an object is dropped from rest, it accelerates continuously, increasing its speed until it hits the ground. If it&apos;s thrown upward or downward, initial velocity must be accounted for.</p>

          <h2>Applications of Free Fall Calculations</h2>
          <p>Free fall calculations are fundamental in many areas of physics and engineering. Practical applications include:</p>
          <ul>
            <li>Estimating impact speeds and fall durations in safety engineering</li>
            <li>Analyzing motion in sports science and biomechanics</li>
            <li>Calculating trajectories in aerospace and ballistics</li>
            <li>Modeling vertical motion in amusement park rides and drones</li>
          </ul>

          <p>This calculator helps reinforce concepts of gravity, acceleration, and motion while providing real-world problem-solving tools.</p>
        </div>
      </div>
    </CalculatorLayout>
  );
}
