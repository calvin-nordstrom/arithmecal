import CalculatorLayout from '@/app/components/CalculatorLayout';
import BaseConverterNavigator from '@/app/components/BaseConverterNavigator';
import DecimalToBinaryConverter from '@/app/components/conversion/DecimalToBinaryConverter';

export const metadata = {
  title: 'Decimal to Binary Conversion',
  description: 'Arithmecal decimal to binary conversion',
  keywords: '',
};

export default function DecimalToBinaryConversionPage() {
  return (
    <CalculatorLayout>
      <h1>Decimal to Binary Conversion</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <BaseConverterNavigator />
          <DecimalToBinaryConverter />
        </div>
        <div className='calculator-description'></div>
      </div>
    </CalculatorLayout>
  );
}
