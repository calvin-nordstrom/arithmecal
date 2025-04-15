import CalculatorLayout from '@/app/components/CalculatorLayout';
import BaseConverterNavigator from '@/app/components/BaseConverterNavigator';
import OctalToHexConverter from '@/app/components/conversion/OctalToHexConverter';

export const metadata = {
  title: 'Octal to Hexadecimal Conversion',
  description: 'Arithmecal octal to hexadecimal conversion',
  keywords: '',
};

export default function OctalToHexConversionPage() {
  return (
    <CalculatorLayout>
      <h1>Octal to Hexadecimal Conversion</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <BaseConverterNavigator />
          <OctalToHexConverter />
        </div>
        <div className='calculator-description'></div>
      </div>
    </CalculatorLayout>
  );
}
