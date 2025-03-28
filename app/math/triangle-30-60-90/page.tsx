import CalculatorLayout from '@/app/components/CalculatorLayout';
import KatexRenderer from '@/app/components/KatexRenderer';
import Triangle306090Calculator from '@/app/components/math/Triangle306090Calculator';
import Image from 'next/image';
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
          <div className='center-image'>
            <Image
              src='/triangle_30_60_90.png'
              width={350}
              height={256}
              alt='A 30 60 90 triangle showing angles and side lengths proportional to Side A'
            />
          </div>

          <p>A 30 60 90 triangle is known as a <strong>special right triangle</strong> and has the angles 30&deg;, 60&deg;, and 90&deg;, hence its name.</p>
          <p className='note'>Note: this triangle is half of an <strong>equilateral triangle</strong>.</p>
          <p>Because of this triangle's predictable angles, the 30 60 90 triangle calculator computes the properties of a triangle given any one of the following measurements:</p>
          <ul>
            <li>Side (a)</li>
            <li>Side (b)</li>
            <li>Side (c)</li>
            <li>Area</li>
            <li>Perimeter</li>
          </ul>

          <h2>Understanding the Formula</h2>
          <p>The triangle's properties are derived from the measurement provided.</p>
          <div className='block'>
            <p>Given <strong>Side A</strong>:</p>
            <div className='katex-block'>
              <KatexRenderer formula='b=a\sqrt{3}' />
            </div>
            <div className='katex-block'>
              <KatexRenderer formula='c=2a' />
            </div>
            <div className='katex-block'>
              <KatexRenderer formula='A=\frac{1}{2}ab' />
            </div>
            <div className='katex-block'>
              <KatexRenderer formula='P=a+b+c' />
            </div>
          </div>
          <div className='block'>
            <p>Given <strong>Side B</strong>:</p>
            <div className='katex-block'>
              <KatexRenderer formula='a=\frac{b}{\sqrt{3}}' />
            </div>
            <div className='katex-block'>
              <KatexRenderer formula='c=2a' />
            </div>
            <div className='katex-block'>
              <KatexRenderer formula='A=\frac{1}{2}ab' />
            </div>
            <div className='katex-block'>
              <KatexRenderer formula='P=a+b+c' />
            </div>
          </div>
          <div className='block'>
            <p>Given <strong>Side C</strong>:</p>
            <div className='katex-block'>
              <KatexRenderer formula='a=\frac{1}{2}c' />
            </div>
            <div className='katex-block'>
              <KatexRenderer formula='b=a\sqrt{3}' />
            </div>
            <div className='katex-block'>
              <KatexRenderer formula='A=\frac{1}{2}ab' />
            </div>
            <div className='katex-block'>
              <KatexRenderer formula='P=a+b+c' />
            </div>
          </div>
          <div className='block'>
            <p>Given <strong>Area</strong>:</p>
            <div className='katex-block'>
              <KatexRenderer formula='a=\sqrt{\frac{2A}{\sqrt{3}}}' />
            </div>
            <div className='katex-block'>
              <KatexRenderer formula='b=a\sqrt{3}' />
            </div>
            <div className='katex-block'>
              <KatexRenderer formula='c=2a' />
            </div>
            <div className='katex-block'>
              <KatexRenderer formula='P=a+b+c' />
            </div>
          </div>
          <div className='block'>
            <p>Given <strong>Perimeter</strong>:</p>
            <div className='katex-block'>
              <KatexRenderer formula='a=\frac{P}{3+\sqrt{3}}' />
            </div>
            <div className='katex-block'>
              <KatexRenderer formula='b=a\sqrt{3}' />
            </div>
            <div className='katex-block'>
              <KatexRenderer formula='c=2a' />
            </div>
            <div className='katex-block'>
              <KatexRenderer formula='A=\frac{1}{2}ab' />
            </div>
          </div>
          <p>Where the following variables are represented as:</p>
          <ul>
            <li>a = Side A</li>
            <li>b = Side B</li>
            <li>c = Side C</li>
            <li>A = Area</li>
            <li>P = Perimeter</li>
          </ul>

          <h2>More About the Formula</h2>
          <p>Because the angles of this triangle are 30&deg;, 60&deg;, and 90&deg;, we can use trigonometry to find the lengths of the other sides.</p>
          <div className='block'>
            <p>The <strong>relationship between Side A and Side C</strong> can be solved with these calculations:</p>
            <div className='katex-block'>
              <KatexRenderer formula='a/c=\sin{(30^{\circ})}' />
              <KatexRenderer formula='a/c=\frac{1}{2}' />
            </div>
            <p>Therefore,</p>
            <div className='katex-block'>
              <KatexRenderer formula='c=2a' />
              <KatexRenderer formula='a=\frac{1}{2}c' />
            </div>
          </div>
          <div className='block'>
            <p>The <strong>relationship between Side B and Side C</strong> can be solved with these calculations:</p>
            <div className='katex-block'>
              <KatexRenderer formula='b/c=\sin{(60^{\circ})}' />
              <KatexRenderer formula='b/c=\frac{\sqrt{3}}{2}' />
            </div>
            <p>Therefore,</p>
            <div className='katex-block'>
              <KatexRenderer formula='b=c\frac{\sqrt{3}}{2}' />
              <KatexRenderer formula='c=\frac{2b}{\sqrt{3}}' />
            </div>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}
