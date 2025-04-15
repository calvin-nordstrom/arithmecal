import CalculatorLayout from '@/app/components/CalculatorLayout';
import KatexRenderer from '@/app/components/KatexRenderer';
import Image from 'next/image';
import type { Metadata } from 'next'
import BaseConverterNavigator from '@/app/components/BaseConverterNavigator';
import ASCIIToDecimalConverter from '@/app/components/conversion/ASCIIToDecimalConverter';

export const metadata: Metadata = {
  title: 'ASCII to Decimal Conversion',
  description: 'Arithmecal ASCII to decimal conversion',
  keywords: '',
}

export default function ASCIIToDecimalConversionPage() {
  return (
    <CalculatorLayout>
      <h1>ASCII to Decimal Conversion</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <BaseConverterNavigator />
          <ASCIIToDecimalConverter />
        </div>
        <div className='calculator-description'>
          
        </div>
      </div>
    </CalculatorLayout>
  );
}
