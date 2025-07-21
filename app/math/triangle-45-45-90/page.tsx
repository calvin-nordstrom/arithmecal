import CalculatorLayout from '@/app/components/CalculatorLayout';
import KatexRenderer from '@/app/components/KatexRenderer';
import Triangle454590Calculator from '@/app/components/math/triangle-45-45-90/Triangle454590Calculator';
import Image from 'next/image';
import triangle454590Image from '@/assets/images/math/triangle-45-45-90/triangle-45-45-90.png'
import type { Metadata } from 'next'
import RelatedCalculators from '@/app/components/RelatedCalculators';

export const metadata: Metadata = {
  title: '45-45-90 Triangle Calculator',
  description: 'Calculate sides, area, and perimeter of a 45-45-90 triangle with Arithmecal’s special right triangle calculator.',
  keywords: '45 45 90 triangle calculator, special right triangle, isosceles right triangle, triangle area, triangle perimeter, Arithmecal',
  alternates: {
    canonical: 'https://www.arithmecal.com/math/triangle-45-45-90',
  },
}

export default function Triangle454590CalculatorPage() {
  return (
    <CalculatorLayout>
      <h1>45 45 90 Triangle Calculator</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <Triangle454590Calculator />
          <RelatedCalculators
            links={[
              { href: './triangle-30-60-90', label: '30 60 90 Triangle Calculator' },
            ]}
          />
        </div>
        <div className='calculator-description'>
          <div className='center-image'>
            <Image
              src={triangle454590Image}
              width={256}
              height={256}
              alt='A 45 45 90 triangle showing angles and side lengths proportional to Side A'
              className='image'
            />
          </div>

          <p>A 45 45 90 triangle is known as a <strong>special right triangle</strong> and has the angles 45&deg;, 45&deg;, and 90&deg;, hence its name. You might also notice that this triangle is half of a square because sides a and b are equal to each other.</p>
          <p>Right triangles are sometimes called <strong>rectangular triangles</strong> or <strong>orthogonal triangles</strong>. A triangle is a right triangle when two sides are perpendicular to each other, forming a right angle.</p>
          <p>Because of this triangle&apos;s predictable angles, the 45 45 90 triangle calculator computes the properties of a triangle given any one of the following measurements:</p>
          <ul>
            <li>Side (a)</li>
            <li>Side (b)</li>
            <li>Side (c)</li>
            <li>Area</li>
            <li>Perimeter</li>
          </ul>

          <h2>Understanding the Formula</h2>
          <p>The triangle&apos;s properties are derived from the measurement provided.</p>
          <div className='block'>
            <p>Given <strong>Side A</strong>:</p>
            <div className='katex-block'>
              <KatexRenderer formula='b=a' />
            </div>
            <div className='katex-block'>
              <KatexRenderer formula='c=a\sqrt{2}' />
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
              <KatexRenderer formula='a=b' />
            </div>
            <div className='katex-block'>
              <KatexRenderer formula='c=a\sqrt{2}' />
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
              <KatexRenderer formula='a=\frac{c\sqrt{2}}{2}' />
            </div>
            <div className='katex-block'>
              <KatexRenderer formula='b=\frac{c\sqrt{2}}{2}' />
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
              <KatexRenderer formula='a=\sqrt{2A}' />
            </div>
            <div className='katex-block'>
              <KatexRenderer formula='b=\sqrt{2A}' />
            </div>
            <div className='katex-block'>
              <KatexRenderer formula='c=2\sqrt{A}' />
            </div>
            <div className='katex-block'>
              <KatexRenderer formula='P=a+b+c' />
            </div>
          </div>
          <div className='block'>
            <p>Given <strong>Perimeter</strong>:</p>
            <div className='katex-block'>
              <KatexRenderer formula='a=\frac{P}{2+\sqrt{2}}' />
            </div>
            <div className='katex-block'>
              <KatexRenderer formula='b=\frac{P}{2+\sqrt{2}}' />
            </div>
            <div className='katex-block'>
              <KatexRenderer formula='c=a\sqrt{2}' />
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
        </div>
      </div>
    </CalculatorLayout>
  );
}
