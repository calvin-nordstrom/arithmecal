import CalculatorLayout from '@/app/components/CalculatorLayout';
import KatexRenderer from '@/app/components/KatexRenderer';
import CircumscribedCircleCalculator from '@/app/components/math/circumscribed-circle/CircumscribedCircleCalculator';
import Image from 'next/image';
import circumscribedCircleImage from '@/assets/images/math/circumscribed-circle/circumscribed-circle.png';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Circumscribed Circle Calculator',
  description: 'Use Arithmecal to calculate the circumradius, circumcenter, and area of a triangle’s circumcircle using side lengths and Heron’s formula. Fast and accurate.',
  keywords: 'circumscribed circle calculator, circumradius, circumcenter, triangle circumcircle, Heron’s formula, triangle calculator, geometry tools, radius of circumcircle, triangle area, circumcircle center',
  alternates: {
    canonical: 'https://arithmecal.com/math/circumscribed-circle',
  },
};

export default function CircumscribedCircleCalculatorPage() {
  return (
    <CalculatorLayout>
      <h1>Circumscribed Circle Calculator</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <CircumscribedCircleCalculator />
        </div>
        <div className='calculator-description'>
          <div className='center-image'>
            <Image
              src={circumscribedCircleImage}
              width={256}
              height={256}
              alt='A triangle with a circumscribed circle'
              className='image'
            />
          </div>

          <p>Given a triangle&apos;s sides, the circumscribed circle calculator computes the properties of a circle that pass through each of the vertices of the triangle.</p>
          <p>A circumscribed circle is also known as a circumcircle. <strong>Every triangle has one</strong>.</p>

          <h3>Key Terms:</h3>
          <ol>
            <li><strong>Circumcircle</strong> - the circle that surrounds any triangle that passes through all of its points.</li>
            <li><strong>Circumradius</strong> - the radius of the circumcircle.</li>
            <li><strong>Circumcenter</strong> - the center of the circumcenter, which is also where the perpendicular bisectors of the triangle&apos;s sides intersect.</li>
          </ol>

          <h2>How to Use This Calculator</h2>
          <ol>
            <li>Enter the three side lengths of the triangle (must be greater than zero)</li>
          </ol>
          <p>Assuming all three side lengths are greater than zero, they must also satisfy the <strong>Triangle Inequality Theorem</strong>:</p>
          <ul>
            <li>a + b &gt; c</li>
            <li>a + c &gt; b</li>
            <li>b + c &gt; a</li>
          </ul>

          <h2>Understanding the Formula</h2>
          <p>To calculate the properties of the circumcircle, the <strong>half perimeter</strong> of the triangle <strong>S</strong> must be computed.</p>
          <div className='katex-block'>
            <KatexRenderer formula='S=\frac{1}{2}\left(a+b+c\right)' />
          </div>
          <p>Next, the <strong>area</strong> of the triangle <strong>A</strong> can be found.</p>
          <div className='katex-block'>
            <KatexRenderer formula='A=\sqrt{S\left(S-a\right)\left(S-b\right)\left(S-c\right)}' />
          </div>
          <p className='note'>Note: this formula for area given three sides and the half perimeter is known as <strong>Heron&apos;s formula</strong>.</p>
          <h3>Properties of the Circumcircle</h3>
          <p>The <strong>radius</strong> of the circle:</p>
          <div className='katex-block'>
            <KatexRenderer formula='r=\frac{abc}{4A}' />
          </div>
          <p>The <strong>diameter</strong> of the circle:</p>
          <div className='katex-block'>
            <KatexRenderer formula='d=2r' />
          </div>
          <p>The <strong>circumference</strong> of the circle:</p>
          <div className='katex-block'>
            <KatexRenderer formula='c=2\pi r' />
          </div>
          <p>The <strong>area</strong> of the circle:</p>
          <div className='katex-block'>
            <KatexRenderer formula='a=\pi r^2' />
          </div>
          <h3>Additional Properties of the Triangle</h3>
          <p>The <strong>perimeter</strong> of the triangle is</p>
          <div className='katex-block'>
            <KatexRenderer formula='p=a+b+c' />
          </div>
          <p>To reiterate, the <strong>area</strong> of the triangle is</p>
          <div className='katex-block'>
            <KatexRenderer formula='A=\sqrt{S\left(S-a\right)\left(S-b\right)\left(S-c\right)}' />
          </div>
          <p>The <strong>area ratio</strong> of the circle to the triangle is</p>
          <div className='katex-block'>
            <KatexRenderer formula='\text{Area Ratio}=\frac{\pi r^2}{\sqrt{S\left(S-a\right)\left(S-b\right)\left(S-c\right)}}' />
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}
