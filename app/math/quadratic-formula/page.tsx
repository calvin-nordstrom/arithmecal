import CalculatorLayout from '@/app/components/CalculatorLayout';
import KatexRenderer from '@/app/components/KatexRenderer';
import QuadraticFormulaCalculator from '@/app/components/math/QuadraticFormulaCalculator';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quadratic Formula Calculator',
  description: 'Arithmecal Quadratic Formula calculator',
  keywords: '',
};

export default function QuadraticFormulaCalculatorPage() {
  return (
    <CalculatorLayout>
      <h1>Quadratic Formula Calculator</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <QuadraticFormulaCalculator />
        </div>
        <div className='calculator-description'>
          <p>The quadratic formula is used to find the roots of a <strong>quadratic equation</strong> in the form</p>
          <div className='katex-block'>
            <KatexRenderer formula='ax^2+bx+c=0' />
          </div>
          <p>The <strong>solution</strong> is given by the equation</p>
          <div className='katex-block'>
            <KatexRenderer formula='x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}' />
          </div>
          
          <h2>How to Use This Calculator</h2>
          <ol>
            <li>Enter values for coefficients a, b, and c.</li>
            <li>Ensure a is nonzero.</li>
            <li>View the computed roots and discriminant below.</li>
          </ol>
          <p className='note'>Note: a must be nonzero because the variable a is in the denominator of the quadratic solution, and you cannot divide by zero.</p>
          
          <h3>Understanding the Discriminant</h3>
          <p>The <strong>discriminant</strong> is used to determine the nature of the roots. It's an equation derived from within the square root of the quadratic solution equation.</p>
          <div className='katex-block'>
            <KatexRenderer formula='b^2-4ac' />
          </div>
          <p>Based on the sign of the discriminant, the nature of the roots are revealed.</p>
          <ul>
            <li>If <strong>positive</strong>, the equation has two real roots.</li>
            <li>If <strong>zero</strong>, the equation has one real root (a repeated root).</li>
            <li>If <strong>negative</strong>, the equation has two complex roots.</li>
          </ul>

          <h2>Example Problems</h2>
          <h3>Problem 1</h3>
          <p>Find the roots of the equation using the quadratic formula.</p>
          <div className='katex-block'>
            <KatexRenderer formula='5x^2+8x-3=0' />
          </div>
          <ol>
            <li>
              <p>Extract the coefficients from the equation</p>
              <div className='katex-block'>
                <KatexRenderer formula='a=5' />
                <KatexRenderer formula='b=8' />
                <KatexRenderer formula='c=-3' />
              </div>
            </li>
            <li>
              <p>Plug the coefficients into the equation and simplify</p>
              <div className='katex-block'>
                <KatexRenderer formula='x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}' />
                <KatexRenderer formula='x=\frac{-8\pm\sqrt{8^2-4\left(5\right)\left(-3\right)}}{2\left(5\right)}' />
                <KatexRenderer formula='x=\frac{-8\pm\sqrt{124}}{10}' />
                <KatexRenderer formula='x=\frac{-8\pm11.136}{10}' />
              </div>
              <p>Notice that the discriminant is negative, indicating that the quadratic has <strong>two complex roots</strong>.</p>
              <div className='katex-block'>
                <KatexRenderer formula='x_1=0.314' />
                <KatexRenderer formula='x_2=-1.914' />
                <KatexRenderer formula='\text{discriminant}=124' />
              </div>
            </li>
          </ol>
          <h3>Problem 2</h3>
          <p>Find the roots of the equation using the quadratic formula.</p>
          <div className='katex-block'>
            <KatexRenderer formula='x^2+5x+12=0' />
          </div>
          <ol>
            <li>
              <p>Extract the coefficients from the equation</p>
              <div className='katex-block'>
                <KatexRenderer formula='a=1' />
                <KatexRenderer formula='b=5' />
                <KatexRenderer formula='c=12' />
              </div>
            </li>
            <li>
              <p>Plug the coefficients into the equation and simplify</p>
              <div className='katex-block'>
                <KatexRenderer formula='x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}' />
                <KatexRenderer formula='x=\frac{-5\pm\sqrt{5^2-4\left(1\right)\left(12\right)}}{2\left(1\right)}' />
                <KatexRenderer formula='x=\frac{-5\pm\sqrt{-23}}{2}' />
                <KatexRenderer formula='x=\frac{-5\pm4.796i}{2}' />
              </div>
              <p>Notice that the discriminant is positive, indicating that the quadratic has <strong>two real roots</strong>.</p>
              <div className='katex-block'>
                <KatexRenderer formula='x_1=-2.5+2.398i' />
                <KatexRenderer formula='x_2=-2.5-2.398i' />
                <KatexRenderer formula='\text{discriminant}=-23' />
              </div>
            </li>
          </ol>
        </div>
      </div>
    </CalculatorLayout>
  );
}
