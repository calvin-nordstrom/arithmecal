import CalculatorLayout from '@/app/components/CalculatorLayout';
import BaseConverterNavigator from '@/app/components/BaseConverterNavigator';
import HexToDecimalConverter from '@/app/components/conversion/HexToDecimalConverter';

export const metadata = {
  title: 'Hexadecimal to Decimal Conversion',
  description: 'Arithmecal hexadecimal to decimal conversion',
  keywords: '',
};

export default function HexToDecimalConversionPage() {
  return (
    <CalculatorLayout>
      <h1>Hexadecimal to Decimal Conversion</h1>
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
