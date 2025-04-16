import CalculatorLayout from '@/app/components/CalculatorLayout';
import KatexRenderer from '@/app/components/KatexRenderer';
import Image from 'next/image';
import type { Metadata } from 'next'
import BaseConverterNavigator from '@/app/components/BaseConverterNavigator';
import OctalToBinaryConverter from '@/app/components/conversion/OctalToBinaryConverter';

export const metadata: Metadata = {
  title: 'Octal to Binary Conversion',
  description: 'Arithmecal octal to binary conversion',
  keywords: '',
};

export default function OctalToBinaryConversionPage() {
  return (
    <CalculatorLayout>
      <h1>Octal to Binary Conversion</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <BaseConverterNavigator />
          <OctalToBinaryConverter />
        </div>
        <div className='calculator-description'></div>
      </div>
    </CalculatorLayout>
  );
}
