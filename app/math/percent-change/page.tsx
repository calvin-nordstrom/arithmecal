import CalculatorLayout from '@/app/components/CalculatorLayout';
import PercentChangeCalculator from '@/app/components/math/PercentChangeCalculator';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Percent Change Calculator',
  description: 'Arithmecal percent change calculator',
  keywords: '',
}

export default function PercentChangeCalculatorPage() {
  return (
    <CalculatorLayout>
      <h1>Percent Change Calculator</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <PercentChangeCalculator />
        </div>
        <div className='calculator-description'>
          <p>This calculator finds the increase or decrease between two values in the form of a percentage.</p>
          <h2>How to Use This Calculator</h2>
          <p>Enter the initial value</p>
        </div>
      </div>
    </CalculatorLayout>
  );
}
