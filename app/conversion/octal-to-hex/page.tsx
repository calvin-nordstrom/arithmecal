import CalculatorLayout from '@/app/components/CalculatorLayout';
import KatexRenderer from '@/app/components/KatexRenderer';
import Image from 'next/image';
import type { Metadata } from 'next'
import BaseConverterNavigator from '@/app/components/BaseConverterNavigator';
import OctalToHexConverter from '@/app/components/conversion/OctalToHexConverter';

export const metadata: Metadata = {
  title: 'Octal to Hexadecimal Conversion',
  description: 'Arithmecal octal to hexadecimal conversion',
  keywords: '',
};

export default function OctalToHexConversionPage() {
  return (
    <CalculatorLayout>
      <h1>Octal to Hex Conversion</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <BaseConverterNavigator />
          <OctalToHexConverter />
        </div>
        <div className='calculator-description'></div>
      </div>
    </CalculatorLayout>
  );
}
