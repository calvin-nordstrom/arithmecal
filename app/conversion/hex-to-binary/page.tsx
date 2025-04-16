import CalculatorLayout from '@/app/components/CalculatorLayout';
import KatexRenderer from '@/app/components/KatexRenderer';
import Image from 'next/image';
import type { Metadata } from 'next'
import BaseConverterNavigator from '@/app/components/BaseConverterNavigator';
import HexToBinaryConverter from '@/app/components/conversion/HexToBinaryConverter';

export const metadata: Metadata = {
  title: 'Hex to Binary Conversion',
  description: 'Arithmecal hex to binary conversion',
  keywords: '',
};

export default function HexToBinaryConversionPage() {
  return (
    <CalculatorLayout>
      <h1>Hex to Binary Conversion</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <BaseConverterNavigator />
          <HexToBinaryConverter />
        </div>
        <div className='calculator-description'></div>
      </div>
    </CalculatorLayout>
  );
}
