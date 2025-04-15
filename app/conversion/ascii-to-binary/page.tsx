import CalculatorLayout from '@/app/components/CalculatorLayout';
import KatexRenderer from '@/app/components/KatexRenderer';
import ASCIIToBinaryConverter from '@/app/components/conversion/ASCIIToBinaryConverter';
import Image from 'next/image';
import type { Metadata } from 'next'
import BaseConverterNavigator from '@/app/components/BaseConverterNavigator';

export const metadata: Metadata = {
  title: 'ASCII to Binary Conversion',
  description: 'Arithmecal ASCII to binary conversion',
  keywords: '',
}

export default function ASCIIToBinaryConversionPage() {
  return (
    <CalculatorLayout>
      <h1>ASCII to Binary Conversion</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <BaseConverterNavigator />
          <ASCIIToBinaryConverter />
        </div>
        <div className='calculator-description'>
          
        </div>
      </div>
    </CalculatorLayout>
  );
}
