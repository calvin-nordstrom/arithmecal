import CalculatorLayout from '@/app/components/CalculatorLayout';
import KatexRenderer from '@/app/components/KatexRenderer';
import Image from 'next/image';
import type { Metadata } from 'next'
import BaseConverterNavigator from '@/app/components/BaseConverterNavigator';
import BinaryToHexConverter from '@/app/components/conversion/BinaryToHexConverter';

export const metadata: Metadata = {
  title: 'Binary to Hex Conversion',
  description: 'Arithmecal binary to hex conversion',
  keywords: '',
}

export default function BinaryToHexConversionPage() {
  return (
    <CalculatorLayout>
      <h1>Binary to Hex Conversion</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <BaseConverterNavigator />
          <BinaryToHexConverter />
        </div>
        <div className='calculator-description'>
          
        </div>
      </div>
    </CalculatorLayout>
  );
}
