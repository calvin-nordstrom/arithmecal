import CalculatorLayout from '@/app/components/CalculatorLayout';
import KatexRenderer from '@/app/components/KatexRenderer';
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
          <p>The percent change calculator computes the percentage increase or decrease between an initial and a final value.</p>
          
          <h2>How to Use This Calculator</h2>
          <ol>
            <li>Enter the initial value (must be nonzero)</li>
            <li>Enter the final value</li>
          </ol>
          <p>A positive value indicates an increase between the initial and final values, and a negative value indicates a decrease.</p>

          <h2>Understanding the Formula</h2>
          <div className='katex-block'>
            <KatexRenderer formula='\text{Percent Change} = \left( \frac{\text{Final} - \text{Initial}}{\text{Initial}} \right) \times 100' />
          </div>
          <p>Using the formula:</p>
          <ul>
            <li>Subtract the initial value from the final value to get the change.</li>
            <li>Divide the change by the initial value to find the relative change.</li>
            <li>Multiply by 100 to convert the result into a percentage.</li>
          </ul>

          <h2>Example Problems</h2>
          <h3>Percent Increase</h3>
          <ul>
            <li>Initial value = 50</li>
            <li>Final value = 90</li>
          </ul>
          <div className='katex-block'>
            <KatexRenderer formula='\text{Percent Change} = \left( \frac{\text{90} - \text{50}}{\text{50}} \right) \times 100' />
            <KatexRenderer formula='= \left( \frac{\text{40}}{\text{50}} \right) \times 100' />
            <KatexRenderer formula='= \text{0.8} \times 100' />
            <KatexRenderer formula='= \text{80}' />
          </div>
          <p>This indicates an <strong>80% increase</strong> between the initial and final values.</p>
          <h3>Percent Decrease</h3>
          <ul>
            <li>Initial value = 50</li>
            <li>Final value = 30</li>
          </ul>
          <div className='katex-block'>
            <KatexRenderer formula='\text{Percent Change} = \left( \frac{\text{30} - \text{50}}{\text{50}} \right) \times 100' />
            <KatexRenderer formula='= \left( \frac{-\text{20}}{\text{50}} \right) \times 100' />
            <KatexRenderer formula='= -\text{0.4} \times 100' />
            <KatexRenderer formula='= -\text{40}' />
          </div>
          <p>This indicates a <strong>40% decrease</strong> between the initial and final values.</p>
        </div>
      </div>
    </CalculatorLayout>
  );
}
