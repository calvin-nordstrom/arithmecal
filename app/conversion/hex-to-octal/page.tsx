import CalculatorLayout from '@/app/components/CalculatorLayout';
import BaseConverterNavigator from '@/app/components/BaseConverterNavigator';
import HexToOctalConverter from '@/app/components/conversion/HexToOctalConverter';

export const metadata = {
  title: 'Hexadecimal to Octal Conversion',
  description: 'Arithmecal hexadecimal to octal conversion',
  keywords: '',
};

export default function HexToOctalConversionPage() {
  return (
    <CalculatorLayout>
      <h1>Hexadecimal to Octal Conversion</h1>
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
