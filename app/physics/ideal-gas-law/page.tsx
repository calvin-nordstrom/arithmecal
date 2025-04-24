import CalculatorLayout from '@/app/components/CalculatorLayout';
import KatexRenderer from '@/app/components/KatexRenderer';
import Image from 'next/image';
import type { Metadata } from 'next'
import Dropdown from '@/app/components/Dropdown';
import IdealGasLawPressureCalculator from '@/app/components/physics/IdealGasLawPressureCalculator';
import IdealGasLawVolumeCalculator from '@/app/components/physics/IdealGasLawVolumeCalculator';
import IdealGasLawMolesCalculator from '@/app/components/physics/IdealGasLawMolesCalculator';
import IdealGasLawTemperatureCalculator from '@/app/components/physics/IdealGasLawTemperatureCalculator';

export const metadata: Metadata = {
  title: 'Ideal Gas Law Calculator',
  description: 'Arithmecal ideal gas law calculator',
  keywords: '',
}

export default function IdealGasLawCalculatorPage() {
  const dropdownConfig = [
    {
      label: 'Pressure (p)',
      component: <IdealGasLawPressureCalculator />
    },
    {
      label: 'Volume (V)',
      component: <IdealGasLawVolumeCalculator />
    },
    {
      label: 'Moles (n)',
      component: <IdealGasLawMolesCalculator />
    },
    {
      label: 'Temperature (T)',
      component: <IdealGasLawTemperatureCalculator />
    },
  ];

  return (
    <CalculatorLayout>
      <h1>Ideal Gas Law Calculator</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <Dropdown config={dropdownConfig} />
        </div>
        <div className='calculator-description'>
          
        </div>
      </div>
    </CalculatorLayout>
  );
}
