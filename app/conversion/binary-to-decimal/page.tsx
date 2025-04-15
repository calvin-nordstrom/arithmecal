import CalculatorLayout from '@/app/components/CalculatorLayout';
import KatexRenderer from '@/app/components/KatexRenderer';
import Image from 'next/image';
import type { Metadata } from 'next'
import BaseConverterNavigator from '@/app/components/BaseConverterNavigator';
import BinaryToDecimalConverter from '@/app/components/conversion/BinaryToDecimalConverter';

export const metadata: Metadata = {
  title: 'Binary to Decimal Conversion',
  description: 'Arithmecal binary to decimal conversion',
  keywords: '',
}

export default function BinaryToDecimalConversionPage() {
  return (
    <CalculatorLayout>
      <h1>Binary to Decimal Conversion</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <BaseConverterNavigator />
          <BinaryToDecimalConverter />
        </div>
        <div className='calculator-description'>
          
        </div>
      </div>
    </CalculatorLayout>
  );
}
