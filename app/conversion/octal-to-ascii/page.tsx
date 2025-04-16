import CalculatorLayout from '@/app/components/CalculatorLayout';
import KatexRenderer from '@/app/components/KatexRenderer';
import Image from 'next/image';
import type { Metadata } from 'next'
import BaseConverterNavigator from '@/app/components/BaseConverterNavigator';
import OctalToASCIIConverter from '@/app/components/conversion/OctalToASCIIConverter';

export const metadata: Metadata = {
  title: 'Octal to ASCII Conversion',
  description: 'Arithmecal octal to ASCII conversion',
  keywords: '',
};

export default function OctalToASCIIConversionPage() {
  return (
    <CalculatorLayout>
      <h1>Octal to ASCII Conversion</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <BaseConverterNavigator />
          <OctalToASCIIConverter />
        </div>
        <div className='calculator-description'></div>
      </div>
    </CalculatorLayout>
  );
}
