import CalculatorLayout from '@/app/components/CalculatorLayout';
import BaseConverterNavigator from '@/app/components/BaseConverterNavigator';
import HexToBinaryConverter from '@/app/components/conversion/HexToBinaryConverter';

export const metadata = {
  title: 'Hexadecimal to Binary Conversion',
  description: 'Arithmecal hexadecimal to binary conversion',
  keywords: '',
};

export default function HexToBinaryConversionPage() {
  return (
    <CalculatorLayout>
      <h1>Hexadecimal to Binary Conversion</h1>
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
