import CalculatorLayout from '@/app/components/CalculatorLayout';
import KatexRenderer from '@/app/components/KatexRenderer';
import Image from 'next/image';
import type { Metadata } from 'next'
import BaseConverterNavigator from '@/app/components/BaseConverterNavigator';
import ASCIIToHexConverter from '@/app/components/conversion/ASCIIToHexConverter';

export const metadata: Metadata = {
  title: 'ASCII to Hex Conversion',
  description: 'Arithmecal ASCII to hex conversion',
  keywords: '',
}

export default function ASCIIToHexConversionPage() {
  return (
    <CalculatorLayout>
      <h1>ASCII to Hex Conversion</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <BaseConverterNavigator />
          <ASCIIToHexConverter />
        </div>
        <div className='calculator-description'>
          
        </div>
      </div>
    </CalculatorLayout>
  );
}
