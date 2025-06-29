import CalculatorLayout from '@/app/components/CalculatorLayout';
import type { Metadata } from 'next'
import KatexRenderer from '@/app/components/KatexRenderer';

export const metadata: Metadata = {
  title: 'Trigonometric Identities',
  description: 'Discover essential trigonometric identities including Pythagorean, reciprocal, double angle, half angle, cofunction, and more on Arithmecal’s visual reference.',
  keywords: 'trigonometric identities, trig formulas, pythagorean identity, cofunction identity, double angle formula, half angle identity, sum to product, product to sum, Arithmecal, math reference, trigonometry chart, Euler, reciprocal identity, law of sines, law of cosines',
  alternates: {
    canonical: 'https://www.arithmecal.com/reference/trigonometry',
  },
}

export default function TrigIdentitiesPage() {
  return (
    <CalculatorLayout>
      <h1>Trigonometric Identities</h1>

      <h2 id='pythagorean-identities'>Pythagorean Identities</h2>
      <ul className='formula-list'>
        <li><KatexRenderer formula='\sin^2(\theta)+\cos^2(\theta)=1' /></li>
        <li><KatexRenderer formula='1+\tan^2(\theta)=\sec^2(\theta)' /></li>
        <li><KatexRenderer formula='1+\cot^2(\theta)=\csc^2(\theta)' /></li>
      </ul>

      <h2 id='reciprocal-identities'>Reciprocal Identities</h2>
      <ul className='formula-list'>
        <li><KatexRenderer formula='\sin(\theta)=\frac{1}{\csc(\theta)}' /></li>
        <li><KatexRenderer formula='\cos(\theta)=\frac{1}{\sec(\theta)}' /></li>
        <li><KatexRenderer formula='\tan(\theta)=\frac{1}{\cot(\theta)}' /></li>
        <li><KatexRenderer formula='\csc(\theta)=\frac{1}{\sin(\theta)}' /></li>
        <li><KatexRenderer formula='\sec(\theta)=\frac{1}{\cos(\theta)}' /></li>
        <li><KatexRenderer formula='\cot(\theta)=\frac{1}{\tan(\theta)}' /></li>
      </ul>

      <h2 id='power-reduction-identities'>Power Reduction Identities</h2>
      <ul className='formula-list'>
        <li><KatexRenderer formula='\sin^2(\theta)=\frac{1-\cos(2\theta)}{2}' /></li>
        <li><KatexRenderer formula='\cos^2(\theta)=\frac{1+\cos(2\theta)}{2}' /></li>
      </ul>

      <h2 id='quotient-identities'>Quotient Identities</h2>
      <ul className='formula-list'>
        <li><KatexRenderer formula='\tan(\theta)=\frac{\sin(\theta)}{\cos(\theta)}' /></li>
        <li><KatexRenderer formula='\cot(\theta)=\frac{\cos(\theta)}{\sin(\theta)}' /></li>
      </ul>

      <h2 id='law-of-sines-and-cosines'>Law of Sines/Cosines</h2>
      <ul className='formula-list'>
        <li><KatexRenderer formula='\frac{a}{\sin(A)}=\frac{b}{\sin(B)}=\frac{c}{\sin(C)}' /></li>
        <li><KatexRenderer formula='c^2=a^2+b^2-2ab\cos(C)' /></li>
        <li><KatexRenderer formula='b^2=a^2+c^2-2ac\cos(B)' /></li>
        <li><KatexRenderer formula='a^2=b^2+c^2-2bc\cos(A)' /></li>
      </ul>

      <h2 id='half-angle-identities'>Half Angle Identities</h2>
      <ul className='formula-list'>
        <li><KatexRenderer formula='\sin\left(\frac{\theta}{2}\right)=\pm\sqrt{\frac{1-\cos(\theta)}{2}}' /></li>
        <li><KatexRenderer formula='\cos\left(\frac{\theta}{2}\right)=\pm\sqrt{\frac{1+\cos(\theta)}{2}}' /></li>
        <li><KatexRenderer formula='\tan\left(\frac{\theta}{2}\right)=\pm\sqrt{\frac{1-\cos(\theta)}{1+\cos(\theta)}}' /></li>
      </ul>
      <p className='note'>Note that the sign depends on the <strong>quadrant</strong> of <KatexRenderer formula='\frac{\theta}{2}' />.</p>

      <h2 id='double-angle-identities'>Double Angle Identities</h2>
      <ul className='formula-list'>
        <li><KatexRenderer formula='\sin(2\theta)=2\sin(\theta)\cos(\theta)' /></li>
        <li><KatexRenderer formula='\cos(2\theta)=\cos^2(\theta)-\sin^2(\theta)' /></li>
        <li><KatexRenderer formula='\cos(2\theta)=2\cos^2(\theta)-1' /></li>
        <li><KatexRenderer formula='\cos(2\theta)=1-2\sin^2(\theta)' /></li>
        <li><KatexRenderer formula='\tan(2\theta)=\frac{2\tan(\theta)}{1-\tan^2(\theta)}' /></li>
      </ul>

      <h2 id='triple-angle-identities'>Triple Angle Identities</h2>
      <ul className='formula-list'>
        <li><KatexRenderer formula='\sin(3\theta) = 3\sin(\theta) - 4\sin^3(\theta)' /></li>
        <li><KatexRenderer formula='\cos(3\theta) = 4\cos^3(\theta) - 3\cos(\theta)' /></li>
        <li><KatexRenderer formula='\tan(3\theta) = \frac{3\tan(\theta) - \tan^3(\theta)}{1 - 3\tan^2(\theta)}' /></li>
      </ul>

      <h2 id='eulers-formula'>Euler&apos;s Formula</h2>
      <ul className='formula-list'>
        <li><KatexRenderer formula='e^{i\theta} = \cos(\theta) + i\sin(\theta)' /></li>
        <li><KatexRenderer formula='\sin(\theta) = \frac{e^{i\theta} - e^{-i\theta}}{2i}' /></li>
        <li><KatexRenderer formula='\cos(\theta) = \frac{e^{i\theta} + e^{-i\theta}}{2}' /></li>
      </ul>

      <h2 id='even-odd-identities'>Even/Odd Identities</h2>
      <ul className='formula-list'>
        <li><KatexRenderer formula='\sin(-\theta)=-\sin(\theta)' /></li>
        <li><KatexRenderer formula='\cos(-\theta)=\cos(\theta)' /></li>
        <li><KatexRenderer formula='\tan(-\theta)=-\tan(\theta)' /></li>
        <li><KatexRenderer formula='\csc(-\theta)=-\csc(\theta)' /></li>
        <li><KatexRenderer formula='\sec(-\theta)=\sec(\theta)' /></li>
        <li><KatexRenderer formula='\cot(-\theta)=-\cot(\theta)' /></li>
      </ul>

      <h2 id='cofunction-identities'>Cofunction Identities</h2>
      <ul className='formula-list'>
        <li><KatexRenderer formula='\sin\left(\frac{\pi}{2}-\theta\right)=\cos(\theta)' /></li>
        <li><KatexRenderer formula='\cos\left(\frac{\pi}{2}-\theta\right)=\sin(\theta)' /></li>
        <li><KatexRenderer formula='\tan\left(\frac{\pi}{2}-\theta\right)=\cot(\theta)' /></li>
        <li><KatexRenderer formula='\csc\left(\frac{\pi}{2}-\theta\right)=\sec(\theta)' /></li>
        <li><KatexRenderer formula='\sec\left(\frac{\pi}{2}-\theta\right)=\csc(\theta)' /></li>
        <li><KatexRenderer formula='\cot\left(\frac{\pi}{2}-\theta\right)=\tan(\theta)' /></li>
      </ul>

      <h2 id='sum-difference-identities'>Sum and Difference Identities</h2>
      <ul className='formula-list'>
        <li><KatexRenderer formula='\sin(a + b) = \sin(a)\cos(b) + \cos(a)\sin(b)' /></li>
        <li><KatexRenderer formula='\sin(a - b) = \sin(a)\cos(b) - \cos(a)\sin(b)' /></li>
        <li><KatexRenderer formula='\cos(a + b) = \cos(a)\cos(b) - \sin(a)\sin(b)' /></li>
        <li><KatexRenderer formula='\cos(a - b) = \cos(a)\cos(b) + \sin(a)\sin(b)' /></li>
        <li><KatexRenderer formula='\tan(a + b) = \frac{\tan(a) + \tan(b)}{1 - \tan(a)\tan(b)}' /></li>
        <li><KatexRenderer formula='\tan(a - b) = \frac{\tan(a) - \tan(b)}{1 + \tan(a)\tan(b)}' /></li>
      </ul>

      <h2 id='sum-to-product-identities'>Sum-to-Product Identities</h2>
      <ul className='formula-list'>
        <li><KatexRenderer formula='\sin(a)+\sin(b)=2\sin\left(\frac{a+b}{2}\right)\cos\left(\frac{a-b}{2}\right)' /></li>
        <li><KatexRenderer formula='\sin(a)-\sin(b)=2\cos\left(\frac{a+b}{2}\right)\sin\left(\frac{a-b}{2}\right)' /></li>
        <li><KatexRenderer formula='\cos(a)+\cos(b)=2\cos\left(\frac{a+b}{2}\right)\cos\left(\frac{a-b}{2}\right)' /></li>
        <li><KatexRenderer formula='\cos(a)-\cos(b)=-2\sin\left(\frac{a+b}{2}\right)\sin\left(\frac{a-b}{2}\right)' /></li>
      </ul>

      <h2 id='product-to-sum-identities'>Product-to-Sum Identities</h2>
      <ul className='formula-list'>
        <li><KatexRenderer formula='\sin(a)\sin(b)=\frac{1}{2}[\cos(a-b)-\cos(a+b)]' /></li>
        <li><KatexRenderer formula='\cos(a)\cos(b)=\frac{1}{2}[\cos(a-b)+\cos(a+b)]' /></li>
        <li><KatexRenderer formula='\sin(a)\cos(b)=\frac{1}{2}[\sin(a+b)+\sin(a-b)]' /></li>
        <li><KatexRenderer formula='\cos(a)\sin(b)=\frac{1}{2}[\sin(a+b)-\sin(a-b)]' /></li>
      </ul>
    </CalculatorLayout>
  );
}
