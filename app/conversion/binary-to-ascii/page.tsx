import CalculatorLayout from '@/app/components/CalculatorLayout';
import KatexRenderer from '@/app/components/KatexRenderer';
import Image from 'next/image';
import type { Metadata } from 'next'
import BaseConverterNavigator from '@/app/components/BaseConverterNavigator';
import BinaryToASCIIConverter from '@/app/components/conversion/BinaryToASCIIConverter';

export const metadata: Metadata = {
  title: 'Binary to ASCII Conversion',
  description: 'Arithmecal binary to ASCII conversion',
  keywords: '',
}

export default function BinaryToASCIIConversionPage() {
  return (
    <CalculatorLayout>
      <h1>Binary to ASCII Conversion</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <BaseConverterNavigator />
          <BinaryToASCIIConverter />
        </div>
        <div className='calculator-description'>
          
        </div>
      </div>
    </CalculatorLayout>
  );
}
