import CalculatorLayout from '@/app/components/CalculatorLayout';
import KatexRenderer from '@/app/components/KatexRenderer';
import Image from 'next/image';
import type { Metadata } from 'next'
import BaseConverterNavigator from '@/app/components/BaseConverterNavigator';
import HexToDecimalConverter from '@/app/components/conversion/HexToDecimalConverter';

export const metadata: Metadata = {
  title: 'Hex to Decimal Conversion',
  description: 'Arithmecal hex to decimal conversion',
  keywords: '',
};

export default function HexToDecimalConversionPage() {
  return (
    <CalculatorLayout>
      <h1>Hex to Decimal Conversion</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <BaseConverterNavigator />
          <HexToDecimalConverter />
        </div>
        <div className='calculator-description'></div>
      </div>
    </CalculatorLayout>
  );
}
