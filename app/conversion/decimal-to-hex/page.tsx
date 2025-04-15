import CalculatorLayout from '@/app/components/CalculatorLayout';
import BaseConverterNavigator from '@/app/components/BaseConverterNavigator';
import DecimalToHexConverter from '@/app/components/conversion/DecimalToHexConverter';

export const metadata = {
  title: 'Decimal to Hexadecimal Conversion',
  description: 'Arithmecal decimal to hexadecimal conversion',
  keywords: '',
};

export default function DecimalToHexConversionPage() {
  return (
    <CalculatorLayout>
      <h1>Decimal to Hexadecimal Conversion</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <BaseConverterNavigator />
          <DecimalToHexConverter />
        </div>
        <div className='calculator-description'></div>
      </div>
    </CalculatorLayout>
  );
}
