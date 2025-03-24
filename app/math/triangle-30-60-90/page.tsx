import CalculatorLayout from '@/app/components/CalculatorLayout';
import Triangle306090Calculator from '@/app/components/math/Triangle306090Calculator';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '30-60-90 Triangle Calculator',
  description: 'Arithmecal percent change calculator',
  keywords: '',
}

export default function Triangle306090CalculatorPage() {
  return (
    <CalculatorLayout>
      <h1>30 60 90 Triangle Calculator</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <Triangle306090Calculator />
        </div>
        <div className='calculator-description'>
          <p>The 30 60 90 triangle calculator computes the properties of a triangle given any one of the following measurements:</p>
          <ul>
            <li>Side (a)</li>
            <li>Side (b)</li>
            <li>Side (c)</li>
            <li>Area</li>
            <li>Perimeter</li>
          </ul>
        </div>
      </div>
    </CalculatorLayout>
  );
}
