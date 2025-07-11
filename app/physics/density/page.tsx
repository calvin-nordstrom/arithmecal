import CalculatorLayout from '@/app/components/CalculatorLayout';
import KatexRenderer from '@/app/components/KatexRenderer';
import type { Metadata } from 'next'
import Dropdown from '@/app/components/Dropdown';
import DensityCalculator from '@/app/components/physics/DensityCalculator';
import DensityVolumeCalculator from '@/app/components/physics/DensityVolumeCalculator';
import DensityMassCalculator from '@/app/components/physics/DensityMassCalculator';

export const metadata: Metadata = {
  title: 'Density Calculator',
  description: 'Easily calculate density, mass, or volume using Arithmecal’s physics-based density calculator. Enter two values to solve the third using the formula ρ = m / V.',
  keywords: 'density calculator, mass calculator, volume calculator, physics calculator, density formula, rho = m/V, Arithmecal',
  alternates: {
    canonical: 'https://www.arithmecal.com/physics/density',
  },
}

export default function DensityCalculatorPage() {
  const dropdownConfig = [
    { label: 'Density (ρ)', component: <DensityCalculator /> },
    { label: 'Volume (V)', component: <DensityVolumeCalculator /> },
    { label: 'Mass (n)', component: <DensityMassCalculator /> },
  ];

  return (
    <CalculatorLayout>
      <h1>Density Calculator</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <Dropdown config={dropdownConfig} />
        </div>
        <div className='calculator-description'>
          <p>This calculator allows you to use the <strong>density formula</strong> to solve for mass, volume, or density when the other two values are known.</p>
          <p>The relationship between these variables is expressed by the formula:</p>
          <div className='katex-block'>
            <KatexRenderer formula='\rho = \frac{m}{V}' />
          </div>
          <p>Where:</p>
          <ul>
            <li><strong>ρ</strong> = Density</li>
            <li><strong>m</strong> = Mass</li>
            <li><strong>V</strong> = Volume</li>
          </ul>

          <h2>How to Use This Calculator</h2>
          <ol>
            <li>Select the variable you want to solve for (density, mass, or volume) using the dropdown menu.</li>
            <li>Enter the known values for the other two variables.</li>
            <li>The calculator will compute the missing variable using the density equation.</li>
          </ol>

          <h2>Understanding Density</h2>
          <p><strong>Density</strong> is a measure of how much mass is contained in a given volume. It reflects how compact or concentrated a substance is. The standard SI unit of density is kilograms per cubic meter (kg/m³), but other units such as g/cm³ or lb/ft³ are commonly used in specific contexts.</p>
          <p>The formula for density comes from rearranging the relationship between mass and volume:</p>
          <div className='katex-block'>
            <KatexRenderer formula='\rho=\frac{m}{V}' />
          </div>
          <p>From this equation, we can also derive:</p>
          <ul>
            <li>
              To find <strong>mass</strong>:&nbsp;
              <KatexRenderer formula='m=\rho V' />
            </li>
            <li>
              To find <strong>volume</strong>:&nbsp;
              <KatexRenderer formula='V=\frac{m}{\rho}' />
            </li>
          </ul>

          <h2>Applications of Density</h2>
          <p>Density is used in a wide range of disciplines including chemistry, physics, engineering, and material science. It plays a key role in:</p>
          <ul>
            <li>Identifying substances (e.g., gold vs. lead)</li>
            <li>Designing objects that float or sink</li>
            <li>Measuring fluid concentrations and properties</li>
            <li>Calculating buoyant forces and pressure in fluids</li>
          </ul>
          <p>By understanding how density interacts with mass and volume, you can solve many practical and theoretical problems in science and engineering.</p>
        </div>
      </div>
    </CalculatorLayout>
  );
}
