import CalculatorLayout from '@/app/components/CalculatorLayout';
import KatexRenderer from '@/app/components/KatexRenderer';
import Image from 'next/image';
import type { Metadata } from 'next'
import BaseConverterNavigator from '@/app/components/BaseConverterNavigator';
import HexToASCIIConverter from '@/app/components/conversion/HexToASCIIConverter';

export const metadata: Metadata = {
  title: 'Hex to ASCII Conversion',
  description: 'Arithmecal hex to ASCII conversion',
  keywords: '',
};

export default function HexToASCIIConversionPage() {
  return (
    <CalculatorLayout>
      <h1>Hex to ASCII Conversion</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <BaseConverterNavigator />
          <HexToASCIIConverter />
        </div>
        <div className='calculator-description'></div>
      </div>
    </CalculatorLayout>
  );
}
