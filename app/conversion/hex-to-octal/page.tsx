import CalculatorLayout from '@/app/components/CalculatorLayout';
import KatexRenderer from '@/app/components/KatexRenderer';
import Image from 'next/image';
import type { Metadata } from 'next'
import BaseConverterNavigator from '@/app/components/BaseConverterNavigator';
import HexToOctalConverter from '@/app/components/conversion/HexToOctalConverter';

export const metadata: Metadata = {
  title: 'Hex to Octal Conversion',
  description: 'Arithmecal hex to octal conversion',
  keywords: '',
};

export default function HexToOctalConversionPage() {
  return (
    <CalculatorLayout>
      <h1>Hex to Octal Conversion</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <BaseConverterNavigator />
          <HexToOctalConverter />
        </div>
        <div className='calculator-description'></div>
      </div>
    </CalculatorLayout>
  );
}
