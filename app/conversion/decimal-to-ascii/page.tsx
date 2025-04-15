import CalculatorLayout from '@/app/components/CalculatorLayout';
import BaseConverterNavigator from '@/app/components/BaseConverterNavigator';
import DecimalToASCIIConverter from '@/app/components/conversion/DecimalToASCIIConverter';

export const metadata = {
  title: 'Decimal to ASCII Conversion',
  description: 'Arithmecal decimal to ASCII conversion',
  keywords: '',
};

export default function DecimalToASCIIConversionPage() {
  return (
    <CalculatorLayout>
      <h1>Decimal to ASCII Conversion</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <BaseConverterNavigator />
          <DecimalToASCIIConverter />
        </div>
        <div className='calculator-description'></div>
      </div>
    </CalculatorLayout>
  );
}
