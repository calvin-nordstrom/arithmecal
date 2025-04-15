import CalculatorLayout from '@/app/components/CalculatorLayout';
import BaseConverterNavigator from '@/app/components/BaseConverterNavigator';
import HexToASCIIConverter from '@/app/components/conversion/HexToASCIIConverter';

export const metadata = {
  title: 'Hexadecimal to ASCII Conversion',
  description: 'Arithmecal hexadecimal to ASCII conversion',
  keywords: '',
};

export default function HexToASCIIConversionPage() {
  return (
    <CalculatorLayout>
      <h1>Hexadecimal to ASCII Conversion</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <BaseConverterNavigator />
          <HexToASCIIConverter />
        </div>
        <div className='calculator-description'></div>
      </div>
    </CalculatorLayout>
  );
}
