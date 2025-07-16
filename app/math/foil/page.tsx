import CalculatorLayout from '@/app/components/CalculatorLayout';
import KatexRenderer from '@/app/components/KatexRenderer';
import FOILCalculator from '@/app/components/math/FOILCalculator';
import Image from 'next/image';
import foilImage from '@/assets/images/math/foil.png'
import type { Metadata } from 'next'
import RelatedCalculators from '@/app/components/RelatedCalculators';

export const metadata: Metadata = {
  title: 'FOIL Calculator',
  description: 'Multiply two binomials using the FOIL method. Arithmecal’s step-by-step calculator shows how to apply the First, Outer, Inner, Last rule with formula examples.',
  keywords: 'FOIL calculator, binomial multiplication, algebra calculator, FOIL method, polynomial multiplication, first outer inner last, expand binomials, algebra steps, multiply binomials',
  alternates: {
    canonical: 'https://www.arithmecal.com/math/foil',
  },
};

export default function FOILCalculatorPage() {
  return (
    <CalculatorLayout>
      <h1>FOIL Calculator</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <FOILCalculator />
          <RelatedCalculators
            links={[
              { href: './quadratic-formula', label: 'Quadratic Formula Calculator' },
              { href: './trinomial-factoring', label: 'Trinomial Factoring Calculator' },
            ]}
          />
        </div>
        <div className='calculator-description'>
          <div className='center-image'>
            <Image
              src={foilImage}
              width={384}
              height={280}
              alt='A diagram showing two binomials multiplied together with the FOIL method'
              className='image'
            />
          </div>

          <p>This calculator uses the first-outer-inner-last (FOIL) method to multiply two binomials. This page includes an explanation of the method as well as example computations with steps.</p>
          <p>This diagram shows how the FOIL method is used to multiply the two binomials.</p>

          <h2>How to Use This Calculator</h2>
          <ol>
            <li>Enter the coefficients for <em>a</em>, <em>b</em>, <em>c</em>, and <em>d</em> in the input fields.</li>
          </ol>
          <p>Once all coefficients are entered, the result will be computed.</p>

          <h2>Understanding the Formula</h2>
          <div className='katex-block'>
            <KatexRenderer formula='\left(ax+b\right)\left(cx+d\right)' />
          </div>
          <p>The FOIL method is used to multiply two binomials that are in this form.</p>
          <p>The steps of FOIL are as follows:</p>
          <ol>
            <li>
              <p><strong>First (F)</strong> - Multiply the first terms</p>
              <div className='katex-block'>
                <KatexRenderer formula='ax\times cx=acx^2' />
              </div>
            </li>
            <li>
              <p><strong>Outer (O)</strong> - Multiply the outer terms</p>
              <div className='katex-block'>
                <KatexRenderer formula='ax\times d=adx' />
              </div>
            </li>
            <li>
              <p><strong>Inner (I)</strong> - Multiply the inner terms</p>
              <div className='katex-block'>
                <KatexRenderer formula='b\times cx=bcx' />
              </div>
            </li>
            <li>
              <p><strong>Last (L)</strong> - Multiply the last terms</p>
              <div className='katex-block'>
                <KatexRenderer formula='b\times d=bd' />
              </div>
            </li>
            <li>
              <p>Add the products</p>
              <div className='katex-block'>
                <KatexRenderer formula='acx^2+adx+bcx+bd' />
              </div>
            </li>
            <li>
              <p>Combine like terms</p>
              <div className='katex-block'>
                <KatexRenderer formula='acx^2+\left(ad+bc\right)x+bd' />
              </div>
            </li>
          </ol>
          <p>The final result is</p>
          <div className='katex-block'>
            <KatexRenderer formula='acx^2+\left(ad+bc\right)x+bd' />
          </div>

          <h2>Example Problem</h2>
          <div className='katex-block'>
            <KatexRenderer formula='\left(5x+4\right)\left(3x+2\right)' />
          </div>
          <p>In this example, the values of the coefficients are as follows:</p>
          <ul>
            <li>a = 5</li>
            <li>b = 4</li>
            <li>c = 3</li>
            <li>d = 2</li>
          </ul>
          <p>The steps to solve this expression:</p>
          <ol>
            <li>
              <p><strong>First (F)</strong> - Multiply the first terms</p>
              <div className='katex-block'>
                <KatexRenderer formula='ax\times cx=acx^2' />
                <KatexRenderer formula='5x\times 3x=15x^2' />
              </div>
            </li>
            <li>
              <p><strong>Outer (O)</strong> - Multiply the outer terms</p>
              <div className='katex-block'>
                <KatexRenderer formula='ax\times d=adx' />
                <KatexRenderer formula='5x\times 2=10x' />
              </div>
            </li>
            <li>
              <p><strong>Inner (I)</strong> - Multiply the inner terms</p>
              <div className='katex-block'>
                <KatexRenderer formula='b\times cx=bcx' />
                <KatexRenderer formula='4\times 3x=12x' />
              </div>
            </li>
            <li>
              <p><strong>Last (L)</strong> - Multiply the last terms</p>
              <div className='katex-block'>
                <KatexRenderer formula='b\times d=bd' />
                <KatexRenderer formula='4\times 2=8' />
              </div>
            </li>
            <li>
              <p>Add the products</p>
              <div className='katex-block'>
                <KatexRenderer formula='acx^2+adx+bcx+bd' />
                <KatexRenderer formula='15x^2+10x+12x+8' />
              </div>
            </li>
            <li>
              <p>Combine like terms</p>
              <div className='katex-block'>
                <KatexRenderer formula='acx^2+\left(ad+bc\right)x+bd' />
                <KatexRenderer formula='15x^2+\left(10+12\right)x+8' />
                <KatexRenderer formula='15x^2+22x+8' />
              </div>
            </li>
          </ol>
          <p>The final result is</p>
          <div className='katex-block'>
            <KatexRenderer formula='15x^2+22x+8' />
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}
