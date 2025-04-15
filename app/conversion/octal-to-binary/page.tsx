import CalculatorLayout from '@/app/components/CalculatorLayout';
import BaseConverterNavigator from '@/app/components/BaseConverterNavigator';
import OctalToBinaryConverter from '@/app/components/conversion/OctalToBinaryConverter';

export const metadata = {
  title: 'Octal to Binary Conversion',
  description: 'Arithmecal octal to binary conversion',
  keywords: '',
};

export default function OctalToBinaryConversionPage() {
  return (
    <CalculatorLayout>
      <h1>Octal to Binary Conversion</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <BaseConverterNavigator />
          <OctalToBinaryConverter />
        </div>
        <div className='calculator-description'></div>
      </div>
    </CalculatorLayout>
  );
}
