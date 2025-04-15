import CalculatorLayout from '@/app/components/CalculatorLayout';
import KatexRenderer from '@/app/components/KatexRenderer';
import Image from 'next/image';
import type { Metadata } from 'next'
import BaseConverterNavigator from '@/app/components/BaseConverterNavigator';
import BinaryToOctalConverter from '@/app/components/conversion/BinaryToOctalConverter';

export const metadata: Metadata = {
  title: 'Binary to Octal Conversion',
  description: 'Arithmecal binary to octal conversion',
  keywords: '',
}

export default function BinaryToOctalConversionPage() {
  return (
    <CalculatorLayout>
      <h1>Binary to Octal Conversion</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <BaseConverterNavigator />
          <BinaryToOctalConverter />
        </div>
        <div className='calculator-description'>
          
        </div>
      </div>
    </CalculatorLayout>
  );
}
