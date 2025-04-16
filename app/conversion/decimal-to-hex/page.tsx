import CalculatorLayout from '@/app/components/CalculatorLayout';
import KatexRenderer from '@/app/components/KatexRenderer';
import Image from 'next/image';
import type { Metadata } from 'next'
import BaseConverterNavigator from '@/app/components/BaseConverterNavigator';
import DecimalToHexConverter from '@/app/components/conversion/DecimalToHexConverter';

export const metadata: Metadata = {
  title: 'Decimal to Hex Conversion',
  description: 'Arithmecal decimal to hex conversion',
  keywords: '',
};

export default function DecimalToHexConversionPage() {
  return (
    <CalculatorLayout>
      <h1>Decimal to Hex Conversion</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <BaseConverterNavigator />
          <DecimalToHexConverter />
        </div>
        <div className='calculator-description'>

        </div>
      </div>
    </CalculatorLayout>
  );
}
