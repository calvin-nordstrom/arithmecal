import CalculatorLayout from '@/app/components/CalculatorLayout';
import type { Metadata } from 'next'
import ComponentSelect from '@/app/components/ComponentSelect';
import AccelerationUnitConverter from '@/app/components/conversion/unit-converter/AccelerationUnitConverter';
import AngleUnitConverter from '@/app/components/conversion/unit-converter/AngleUnitConverter';
import ApparentPowerUnitConverter from '@/app/components/conversion/unit-converter/ApparentPowerUnitConverter';
import AreaUnitConverter from '@/app/components/conversion/unit-converter/AreaUnitConverter';
import ChargeUnitConverter from '@/app/components/conversion/unit-converter/ChargeUnitConverter';
import CurrentUnitConverter from '@/app/components/conversion/unit-converter/CurrentUnitConverter';
import DensityUnitConverter from '@/app/components/conversion/unit-converter/DensityUnitConverter';
import DigitalUnitConverter from '@/app/components/conversion/unit-converter/DigitalUnitConverter';
import EnergyUnitConverter from '@/app/components/conversion/unit-converter/EnergyUnitConverter';
import ForceUnitConverter from '@/app/components/conversion/unit-converter/ForceUnitConverter';
import FrequencyUnitConverter from '@/app/components/conversion/unit-converter/FrequencyUnitConverter';
import IlluminanceUnitConverter from '@/app/components/conversion/unit-converter/IlluminanceUnitConverter';
import LengthUnitConverter from '@/app/components/conversion/unit-converter/LengthUnitConverter';
import MassFlowRateUnitConverter from '@/app/components/conversion/unit-converter/MassFlowRateUnitConverter';
import MassUnitConverter from '@/app/components/conversion/unit-converter/MassUnitConverter';
import PaceUnitConverter from '@/app/components/conversion/unit-converter/PaceUnitConverter';
import PartsPerUnitConverter from '@/app/components/conversion/unit-converter/PartsPerUnitConverter';
import PowerUnitConverter from '@/app/components/conversion/unit-converter/PowerUnitConverter';
import PressureUnitConverter from '@/app/components/conversion/unit-converter/PressureUnitConverter';
import ReactiveEnergyUnitConverter from '@/app/components/conversion/unit-converter/ReactiveEnergyUnitConverter';
import ReactivePowerUnitConverter from '@/app/components/conversion/unit-converter/ReactivePowerUnitConverter';
import SpeedUnitConverter from '@/app/components/conversion/unit-converter/SpeedUnitConverter';
import TemperatureUnitConverter from '@/app/components/conversion/unit-converter/TemperatureUnitConverter';
import TimeUnitConverter from '@/app/components/conversion/unit-converter/TimeUnitConverter';
import TorqueUnitConverter from '@/app/components/conversion/unit-converter/TorqueUnitConverter';
import VoltageUnitConverter from '@/app/components/conversion/unit-converter/VoltageUnitConverter';
import VolumeFlowRateUnitConverter from '@/app/components/conversion/unit-converter/VolumeFlowRateUnitConverter';
import VolumeUnitConverter from '@/app/components/conversion/unit-converter/VolumeUnitConverter';
import KatexRenderer from '@/app/components/KatexRenderer';

export const metadata: Metadata = {
  title: 'Unit Converter',
  description: 'Convert units across length, mass, temperature, volume, and more. This unit converter is perfect for students and professionals needing precise and instant conversions.',
  keywords: [
    'unit conversion', 'unit converter', 'metric to imperial', 'SI units', 'convert units', 'length conversion', 'mass conversion', 'temperature conversion', 'scientific calculator', 'engineering unit converter', 'volume converter', 'pressure converter', 'power converter',
  ],
  alternates: {
    canonical: 'https://arithmecal.com/conversion/unit-converter',
  },
}

export default function UnitConverterPage() {
  const selectConfig = [
    { label: 'Acceleration', component: <AccelerationUnitConverter /> },
    { label: 'Angle', component: <AngleUnitConverter /> },
    { label: 'Apparent Power', component: <ApparentPowerUnitConverter /> },
    { label: 'Area', component: <AreaUnitConverter /> },
    { label: 'Charge', component: <ChargeUnitConverter /> },
    { label: 'Current', component: <CurrentUnitConverter /> },
    { label: 'Density', component: <DensityUnitConverter /> },
    { label: 'Digital', component: <DigitalUnitConverter /> },
    { label: 'Energy', component: <EnergyUnitConverter /> },
    { label: 'Force', component: <ForceUnitConverter /> },
    { label: 'Frequency', component: <FrequencyUnitConverter /> },
    { label: 'Illuminance', component: <IlluminanceUnitConverter /> },
    { label: 'Length', component: <LengthUnitConverter /> },
    { label: 'Mass', component: <MassUnitConverter /> },
    { label: 'Mass Flow Rate', component: <MassFlowRateUnitConverter /> },
    { label: 'Pace', component: <PaceUnitConverter /> },
    { label: 'Parts Per', component: <PartsPerUnitConverter /> },
    { label: 'Power', component: <PowerUnitConverter /> },
    { label: 'Pressure', component: <PressureUnitConverter /> },
    { label: 'Reactive Energy', component: <ReactiveEnergyUnitConverter /> },
    { label: 'Reactive Power', component: <ReactivePowerUnitConverter /> },
    { label: 'Speed', component: <SpeedUnitConverter /> },
    { label: 'Temperature', component: <TemperatureUnitConverter /> },
    { label: 'Time', component: <TimeUnitConverter /> },
    { label: 'Torque', component: <TorqueUnitConverter /> },
    { label: 'Voltage', component: <VoltageUnitConverter /> },
    { label: 'Volume', component: <VolumeUnitConverter /> },
    { label: 'Volume Flow Rate', component: <VolumeFlowRateUnitConverter /> },
  ];

  return (
    <CalculatorLayout>
      <h1>Unit Converter</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <ComponentSelect config={selectConfig} />
        </div>
        <div className='calculator-description'>
          <h2>The Importance of Unit Conversion</h2>
          <p>Unit conversion is the process of translating a quantity expressed in one unit into an equivalent value in another unit. This is essential in science, engineering, and daily life, where different systems of measurement—such as SI (International System of Units), imperial units, or U.S. customary units—are used.</p>

          <h2>How to Use This Converter</h2>
          <ol>
            <li>Select the unit dimension (volume, length, area, etc.).</li>
            <li>Choose the units you want to use</li>
            <li>Enter the &apos;From&apos; value and see the output in the &apos;To&apos; field.</li>
          </ol>

          <h2>Converting a Unit</h2>
          <p>Rather than multiplying by a conversion factor, our system works by converting all input values to a base unit (such as meters for length), then dividing by the base factor of the desired output unit. The general conversion formula is:</p>
          <div className='katex-block'>
            <KatexRenderer formula='\text{convertedValue}=(\text{value}/\text{fromFactor})\times\text{toFactor}' />
          </div>
          <p>However, since all units are internally represented relative to a common base (e.g., meters), the equation simplifies to:</p>
          <div className='katex-block'>
            <KatexRenderer formula='\text{convertedValue}=\text{value}\div\text{toFactor}' />
          </div>
          <p>For example, to convert 5 meters to inches:</p>
          <div className='katex-block'>
            <KatexRenderer formula='5\ \text{m}\div0.0254\ \text{in}/\text{m}=196.8504\ \text{in}' />
          </div>
          <p>Here, <KatexRenderer formula='0.0254' /> is the number of meters in one inch, so dividing by that gives the equivalent number of inches.</p>

          <h2>Why Use Our Unit Converter?</h2>
          <p>Our unit converters are designed for precision and convenience. When you enter a value in one unit, the tool automatically calculates the equivalent value in your chosen target unit. All conversions are based on the most up-to-date and internationally recognized conversion factors.</p>
          <p>Whether you&apos;re a student converting speed from kilometers per hour to meters per second, an engineer switching between psi and pascal, or a medical professional working with dosage units, these tools are designed to meet your needs accurately and efficiently.</p>
          <p>You can convert across a wide range of quantities including length, area, volume, speed, mass, temperature, pressure, force, power, energy, and many more. Just select a category from the dropdown and start converting instantly.</p>
        </div>
      </div>
    </CalculatorLayout>
  );
}
