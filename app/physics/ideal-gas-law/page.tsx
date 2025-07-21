import CalculatorLayout from '@/app/components/CalculatorLayout';
import KatexRenderer from '@/app/components/KatexRenderer';
import type { Metadata } from 'next'
import Dropdown from '@/app/components/Dropdown';
import IdealGasLawPressureCalculator from '@/app/components/physics/ideal-gas-law/IdealGasLawPressureCalculator';
import IdealGasLawVolumeCalculator from '@/app/components/physics/ideal-gas-law/IdealGasLawVolumeCalculator';
import IdealGasLawMolesCalculator from '@/app/components/physics/ideal-gas-law/IdealGasLawMolesCalculator';
import IdealGasLawTemperatureCalculator from '@/app/components/physics/ideal-gas-law/IdealGasLawTemperatureCalculator';

export const metadata: Metadata = {
  title: 'Ideal Gas Law Calculator',
  description: 'Solve for pressure, volume, moles, or temperature using Arithmecal’s Ideal Gas Law calculator based on the gas law equation.',
  keywords: 'ideal gas law calculator, pressure calculator, volume calculator, moles calculator, temperature calculator, Arithmecal',
  alternates: {
    canonical: 'https://www.arithmecal.com/physics/ideal-gas-law',
  },
}

export default function IdealGasLawCalculatorPage() {
  const dropdownConfig = [
    { label: 'Pressure (P)', component: <IdealGasLawPressureCalculator /> },
    { label: 'Volume (V)', component: <IdealGasLawVolumeCalculator /> },
    { label: 'Moles (n)', component: <IdealGasLawMolesCalculator /> },
    { label: 'Temperature (T)', component: <IdealGasLawTemperatureCalculator /> },
  ];

  return (
    <CalculatorLayout>
      <h1>Ideal Gas Law Calculator</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <Dropdown config={dropdownConfig} />
        </div>
        <div className='calculator-description'>
          <p>This calculator allows you to use the <strong>Ideal Gas Law</strong> to find a missing variable when given the other properties of the gas&apos;s environment.</p>
          <p>The Ideal Gas Law relates the pressure, volume, temperature, and number of moles of a gas:</p>
          <div className='katex-block'>
            <KatexRenderer formula='PV=nRT' />
          </div>
          <p>Where:</p>
          <ul>
            <li><strong>P</strong> = Pressure</li>
            <li><strong>V</strong> = Volume</li>
            <li><strong>n</strong> = Amount of substance (in moles)</li>
            <li><strong>R</strong> = Ideal gas constant</li>
            <li><strong>T</strong> = Temperature (in Kelvin)</li>
          </ul>

          <h2>How to Use This Calculator</h2>
          <ol>
            <li>Select the variable you want to solve for (P, V, n, or T) using the dropdown menu.</li>
            <li>Enter the known values for the other variables.</li>
            <li>The calculator will compute the result based on the ideal gas law formula.</li>
          </ol>

          <h2>The Ideal Gas Constant (R)</h2>
          <p>In the Ideal Gas Law equation, the constant <em>R</em> used to represent the proportionality between the variables <em>P</em>, <em>V</em>, <em>n</em>, and <em>T</em>.</p>
          <p>More specifically, <em>R</em> represents the <strong>constant of proportionality</strong> between energy, temperature, and the amount of substance something has. This is why it is also known as the <strong>gas constant</strong>, <strong>molar gas constant</strong>, and the <strong>universal gas constant</strong>.</p>
          <p>It&apos;s derived from the product of the <strong>Avogadro constant</strong> <em>N<sub>A</sub></em> and the <strong>Boltzmann constant</strong> <em>k</em>.</p>
          <div className='katex-block'>
            <KatexRenderer formula='R=N_Ak' />
          </div>
          <p>Where:</p>
          <ul>
            <li><strong>N<sub>A</sub></strong> = 6.02214076 × 10<sup>23</sup> mol<sup>-1</sup></li>
            <li><strong>k</strong> = 1.380649 × 10<sup>-23</sup> J · K<sup>-1</sup></li>
          </ul>
          <p>Thus, the calculation for <em>R</em> is:</p>
          <div className='katex-block'>
            <KatexRenderer formula='R=6.02214076\times 10^{23}\space\text{mol}^{-1}\times 1.380649\times 10^{-23}\space\text{J}\cdot \text{K}^{-1}' />
            <KatexRenderer formula='=8.31446261815324\space\text{J}\cdot \text{K}^{-1}\space\text{mol}^{-1}' />
          </div>
          <p className='note'>Note that this calculator uses <strong>8.314462618</strong> for <em>R</em>, which is still more than enough precision for most applications.</p>

          <h2>Understanding the Ideal Gas Law</h2>
          <p>The Ideal Gas Law is a fundamental equation in chemistry and physics that describes the relationship between pressure, volume, temperature, and the number of moles of an ideal gas. It&apos;s expressed as:</p>
          <div className='katex-block'>
            <KatexRenderer formula='PV = nRT' />
          </div>
          <p>This equation combines several simpler gas laws (Boyle&apos;s Law, Charles&apos;s Law, and Avogadro&apos;s Law) into a single, comprehensive expression.</p>
          <ul>
            <li>Gas particles have <strong>negligible volume</strong> compared to the space between them.</li> 
            <li>There are <strong>no intermolecular forces</strong> acting between particles.</li>
            <li>All collisions between particles (and with container walls) are <strong>perfectly elastic</strong>, meaning no energy is lost.</li>
            <li>The gas behaves <strong>uniformly</strong> at all temperatures and pressures—though this is mainly true at <strong>high temperature</strong> and <strong>low pressure</strong>.</li>
          </ul>
        </div>
      </div>
    </CalculatorLayout>
  );
}
