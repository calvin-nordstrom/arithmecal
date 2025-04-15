import CalculatorLayout from '@/app/components/CalculatorLayout';
import BaseConverterNavigator from '@/app/components/BaseConverterNavigator';
import OctalToDecimalConverter from '@/app/components/conversion/OctalToDecimalConverter';

export const metadata = {
  title: 'Octal to Decimal Conversion',
  description: 'Arithmecal octal to decimal conversion',
  keywords: '',
};

export default function OctalToDecimalConversionPage() {
  return (
    <CalculatorLayout>
      <h1>Octal to Decimal Conversion</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <BaseConverterNavigator />
          <OctalToDecimalConverter />
        </div>
        <div className='calculator-description'></div>
      </div>
    </CalculatorLayout>
  );
}
