import CalculatorLayout from '@/app/components/CalculatorLayout';
import KatexRenderer from '@/app/components/KatexRenderer';
import TrinomialFactoringCalculator from '@/app/components/math/TrinomialFactoringCalculator';
import Image from 'next/image';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trinomial Factoring Calculator',
  description: 'Arithmecal trinomial factoring calculator',
  keywords: '',
}

export default function TrinomialFactoringCalculatorPage() {
  return (
    <CalculatorLayout>
      <h1>Trinomial Factoring Calculator</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <TrinomialFactoringCalculator />
        </div>
        <div className='calculator-description'>
          <p>A <strong>quadratic trinomial</strong> is an expression with three non-zero terms with two variables in the expression, where the highest power seen in the expression is 2.</p>
          <p>A trinomial is typically in the form</p>
          <div className='katex-block'>
            <KatexRenderer formula='ax^2+bx+c' />
          </div>
          <p>This calculator factors quadratic trinomials into two binomials over the integers. It finds binomials of the form</p>
          <div className='katex-block'>
            <KatexRenderer formula='(px+q)(rx+s)' />
          </div>
          <p>where the factors satisfy:</p>
          <div className='katex-block'>
            <KatexRenderer formula='p\times r=a' />
            <KatexRenderer formula='p\times s+q\times r=b' />
            <KatexRenderer formula='q\times s=c' />
          </div>

          <h2>How to Use This Calculator</h2>
          <ol>
            <li>Enter the coefficients for <em>a</em>, <em>b</em>, and <em>c</em> in the input fields.</li>
            <li>Once all coefficients are provided, the calculator will attempt to factor the trinomial.</li>
          </ol>
          <p>If the trinomial is factorable over the integers, the result will be shown as two binomials. Otherwise, you'll see a message stating that the trinomial is not factorable over the integers.</p>

          <h2>Understanding the Factorization</h2>
          <p>To reiterate, the relation between the trinomial (left) and its binomial factors (right) is as follows:</p>
          <div className='katex-block'>
            <KatexRenderer formula='ax^2+bx+c=(px+q)(rx+s)' />
          </div>
          <p>This calculator uses the <strong>ac method</strong> that utilizes these steps:</p>
          <ol>
            <li>Find the divisors of a multiplied with c</li>
            <li>Find pair of divisors that sum to the term b</li>
            <li>Use the pair to find the factors that make up each binomial factor of the trinomial</li>
          </ol>
          <p>You can see a full example later in this article.</p>

          <h2>Example Problem</h2>
          <p>Consider the quadratic trinomial</p>
          <div className='katex-block'>
            <KatexRenderer formula='6x^2+11x+4' />
          </div>
          <p>Recall that</p>
          <div className='katex-block'>
            <KatexRenderer formula='ax^2+bx+c=(px+q)(rx+s)' />
          </div>
          <p>and</p>
          <div className='katex-block'>
            <KatexRenderer formula='p\times r=a' />
            <KatexRenderer formula='p\times s+q\times r=b' />
            <KatexRenderer formula='q\times s=c' />
          </div>
          <p>The steps to factor the trinomial:</p>
          <ol>
            <li>
              <p>Plug in the coefficients</p>
              <div className='katex-block'>
                <KatexRenderer formula='p\times r=6' />
                <KatexRenderer formula='p\times s+q\times r=4' />
                <KatexRenderer formula='q\times s=11' />
              </div>
            </li>
            <li>
              <p>Find the divisors of each coefficient.</p>
              <ul>
                <li><strong>Coefficient a</strong> (6) includes 1, 2, 3, 6 (and negatives)</li>
                <li><strong>Coefficient c</strong> (4) includes 1, 2, 4 (and negatives)</li>
              </ul>
            </li>
            <li>
              <p>Check the candidate pairs</p>
              <p>For a candidate such as p = 2,</p>
              <div className='katex-block'>
                <KatexRenderer formula='r=a/p' />
                <KatexRenderer formula='r=6/2' />
                <KatexRenderer formula='r=3' />
              </div>
              <p>For a candidate such as q = 1,</p>
              <div className='katex-block'>
                <KatexRenderer formula='s=c/q' />
                <KatexRenderer formula='s=4/1' />
                <KatexRenderer formula='s=4' />
              </div>
              <p>Repeat the candidate testing process until the following equation is true.</p>
              <div className='katex-block'>
                <KatexRenderer formula='p\times s+q\times r=b' />
              </div>
              <p>Testing these candidates with the equation:</p>
              <div className='katex-block'>
                <KatexRenderer formula='p=2' />
                <KatexRenderer formula='s=4' />
                <KatexRenderer formula='q=1' />
                <KatexRenderer formula='r=3' />
                <KatexRenderer formula='b=11' />
              </div>
              <p>Therefore,</p>
              <div className='katex-block'>
                <KatexRenderer formula='p\times s+q\times r=b' />
                <KatexRenderer formula='2\times 4+1\times 3=11' />
                <KatexRenderer formula='8+3=11' />
                <KatexRenderer formula='11=11' />
              </div>
              <p>This equation is true and the binomial factors have been found.</p>
            </li>
            <li>
              <p>Now that the factors have been found, they can be written in the full form</p>
              <div className='katex-block'>
                <KatexRenderer formula='6x^2+11x+4=(2x+1)(3x+4)' />
              </div>
              <p>with the binomial factors being</p>
              <div className='katex-block'>
                <KatexRenderer formula='(2x+1)(3x+4)' />
              </div>
            </li>
          </ol>
        </div>
      </div>
    </CalculatorLayout>
  );
}
