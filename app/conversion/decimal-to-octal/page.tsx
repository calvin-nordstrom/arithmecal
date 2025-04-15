import CalculatorLayout from '@/app/components/CalculatorLayout';
import BaseConverterNavigator from '@/app/components/BaseConverterNavigator';
import DecimalToOctalConverter from '@/app/components/conversion/DecimalToOctalConverter';

export const metadata = {
  title: 'Decimal to Octal Conversion',
  description: 'Arithmecal decimal to octal conversion',
  keywords: '',
};

export default function DecimalToOctalConversionPage() {
  return (
    <CalculatorLayout>
      <h1>Decimal to Octal Conversion</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <BaseConverterNavigator />
          <DecimalToOctalConverter />
        </div>
        <div className='calculator-description'></div>
      </div>
    </CalculatorLayout>
  );
}
