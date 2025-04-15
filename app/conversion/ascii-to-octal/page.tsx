import CalculatorLayout from '@/app/components/CalculatorLayout';
import KatexRenderer from '@/app/components/KatexRenderer';
import Image from 'next/image';
import type { Metadata } from 'next'
import BaseConverterNavigator from '@/app/components/BaseConverterNavigator';
import ASCIIToOctalConverter from '@/app/components/conversion/ASCIIToOctalConverter';

export const metadata: Metadata = {
  title: 'ASCII to Octal Conversion',
  description: 'Arithmecal ASCII to octal conversion',
  keywords: '',
}

export default function ASCIIToOctalConversionPage() {
  return (
    <CalculatorLayout>
      <h1>ASCII to Octal Conversion</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <BaseConverterNavigator />
          <ASCIIToOctalConverter />
        </div>
        <div className='calculator-description'>
          
        </div>
      </div>
    </CalculatorLayout>
  );
}
