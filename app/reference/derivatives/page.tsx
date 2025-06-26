import CalculatorLayout from '@/app/components/CalculatorLayout';
import type { Metadata } from 'next'
import KatexRenderer from '@/app/components/KatexRenderer';

export const metadata: Metadata = {
  title: 'Table of Derivatives',
  description: 'Explore a comprehensive table of derivative formulas with names and examples. Learn and master Calculus rules easily with Arithmecal’s visual math reference.',
  keywords: 'derivative rules, calculus formulas, table of derivatives, power rule, product rule, quotient rule, chain rule, trigonometric derivatives, Arithmecal, math reference, calculus help, differentiation table, derivative chart, inverse trig derivatives, exponential derivatives, logarithmic derivatives, hyperbolic functions',
  alternates: {
    canonical: 'https://www.arithmecal.com/reference/derivatives',
  },
}

export default function DerivativesPage() {
  return (
    <CalculatorLayout>
      <h1>Table of Derivatives</h1>

      <h2 id='general-formulas'>General Formulas</h2>
      <ol start={1} style={{ margin: 0 }}>
        <div className='katex-block-left'>
          <li><KatexRenderer formula='\frac{d}{dx}(c)=0' /></li>
          <li><KatexRenderer formula='\frac{d}{dx}[cf(x)]=cf^{\prime}(x)' /></li>
          <li><KatexRenderer formula='\frac{d}{dx}(x^n)=nx^{n-1}\text{, for real numbers n}' /></li>
          <li><KatexRenderer formula='\frac{d}{dx}[f(x)+g(x)]=f^{\prime}(x)+g^{\prime}(x)' /></li>
          <li><KatexRenderer formula='\frac{d}{dx}[f(x)-g(x)]=f^{\prime}(x)-g^{\prime}(x)' /></li>
          <li><KatexRenderer formula='\frac{d}{dx}[f(x)g(x)]=f^{\prime}(x)g(x)+f(x)g^{\prime}(x)' /></li>
          <li><KatexRenderer formula='\frac{d}{dx}[\frac{f(x)}{g(x)}]=\frac{g(x)f^{\prime}(x)-f(x)g^{\prime}(x)}{[g(x)]^2}' /></li>
          <li><KatexRenderer formula='\frac{d}{dx}[f(g(x))]=f^{\prime}(g(x))\cdot g^{\prime}(x)' /></li>
        </div>
      </ol>

      <h2 id='trigonometric-functions'>Trigonometric Functions</h2>
      <ol start={9} style={{ margin: 0 }}>
        <div className='katex-block-left'>
          <li><KatexRenderer formula='\frac{d}{dx}[\sin(x)]=\cos(x)' /></li>
          <li><KatexRenderer formula='\frac{d}{dx}[\cos(x)]=-\sin(x)' /></li>
          <li><KatexRenderer formula='\frac{d}{dx}[\tan(x)]=\sec^2(x)' /></li>
          <li><KatexRenderer formula='\frac{d}{dx}[\csc(x)]=-\csc(x)\cot(x)' /></li>
          <li><KatexRenderer formula='\frac{d}{dx}[\sec(x)]=\sec(x)\tan(x)' /></li>
          <li><KatexRenderer formula='\frac{d}{dx}[\cot(x)]=-\csc^2(x)' /></li>
        </div>
      </ol>

      <h2 id='inverse-trigonometric-functions'>Inverse Trigonometric Functions</h2>
      <ol start={15} style={{ margin: 0 }}>
        <div className='katex-block-left'>
          <li><KatexRenderer formula='\frac{d}{dx}[\sin^{-1}(x)]=\frac{1}{\sqrt{1 - x^2}}' /></li>
          <li><KatexRenderer formula='\frac{d}{dx}[\cos^{-1}(x)]=-\frac{1}{\sqrt{1 - x^2}}' /></li>
          <li><KatexRenderer formula='\frac{d}{dx}[\tan^{-1}(x)]=\frac{1}{1 + x^2}' /></li>
          <li><KatexRenderer formula='\frac{d}{dx}[\csc^{-1}(x)]=-\frac{1}{|x|\sqrt{x^2 - 1}}' /></li>
          <li><KatexRenderer formula='\frac{d}{dx}[\sec^{-1}(x)]=\frac{1}{|x|\sqrt{x^2 - 1}}' /></li>
          <li><KatexRenderer formula='\frac{d}{dx}[\cot^{-1}(x)]=-\frac{1}{1 + x^2}' /></li>
        </div>
      </ol>

      <h2 id='exponential-and-logarithmic-functions'>Exponential and Logarithmic Functions</h2>
      <ol start={21} style={{ margin: 0 }}>
        <div className='katex-block-left'>
          <li><KatexRenderer formula='\frac{d}{dx}[e^x]=e^x' /></li>
          <li><KatexRenderer formula='\frac{d}{dx}[a^x]=a^x\ln(a)' /></li>
          <li><KatexRenderer formula='\frac{d}{dx}[\ln(|x|)]=\frac{1}{x}' /></li>
          <li><KatexRenderer formula='\frac{d}{dx}[\log_a(x)]=\frac{1}{x\ln(a)}' /></li>
        </div>
      </ol>

      <h2 id='hyperbolic-functions'>Hyperbolic Functions</h2>
      <ol start={25} style={{ margin: 0 }}>
        <div className='katex-block-left'>
          <li><KatexRenderer formula='\frac{d}{dx}[\sinh(x)]=\cosh(x)' /></li>
          <li><KatexRenderer formula='\frac{d}{dx}[\cosh(x)]=\sinh(x)' /></li>
          <li><KatexRenderer formula='\frac{d}{dx}[\tanh(x)]=\text{sech}^2(x)' /></li>
          <li><KatexRenderer formula='\frac{d}{dx}[\text{csch}(x)]=-\text{csch}(x)\coth(x)' /></li>
          <li><KatexRenderer formula='\frac{d}{dx}[\text{sech}(x)]=-\text{sech}(x)\tanh(x)' /></li>
          <li><KatexRenderer formula='\frac{d}{dx}[\coth(x)]=-\text{csch}^2(x)' /></li>
        </div>
      </ol>

      <h2 id='inverse-hyperbolic-functions'>Inverse Hyperbolic Functions</h2>
      <ol start={31} style={{ margin: 0 }}>
        <div className='katex-block-left'>
          <li><KatexRenderer formula='\frac{d}{dx}[\sinh^{-1}(x)]=\frac{1}{\sqrt{x^2 + 1}}' /></li>
          <li><KatexRenderer formula='\frac{d}{dx}[\cosh^{-1}(x)]=\frac{1}{\sqrt{x^2 - 1}}\text{, (x > 1)}' /></li>
          <li><KatexRenderer formula='\frac{d}{dx}[\tanh^{-1}(x)]=\frac{1}{1 - x^2}\text{, (|x| < 1)}' /></li>
          <li><KatexRenderer formula='\frac{d}{dx}[\text{csch}^{-1}(x)]=-\frac{1}{|x|\sqrt{1 + x^2}}\text{, (x}\not=\text{0)}' /></li>
          <li><KatexRenderer formula='\frac{d}{dx}[\text{sech}^{-1}(x)]=-\frac{1}{x\sqrt{1 - x^2}}\text{, (0 < x < 1)}' /></li>
          <li><KatexRenderer formula='\frac{d}{dx}[\coth^{-1}(x)]=\frac{1}{1 - x^2}\text{, (|x| > 1)}' /></li>
        </div>
      </ol>

      <h2>Additional Notes</h2>
      <p>If you&apos;re learning Calculus, you may have recognized several of these rules. Many are commonly used and have names associated with them, such as:</p>
      <ul>
        <li><strong>3</strong>. Power Rule – Used to differentiate powers of <KatexRenderer formula='x'/>.</li>
        <li><strong>6</strong>. Product Rule – Used to differentiate the product of two functions.</li>
        <li><strong>7</strong>. Quotient Rule – Used to differentiate the ratio of two functions.</li>
        <li><strong>8</strong>. Chain Rule – Used to differentiate composite functions.</li>
        <li><strong>21</strong>. Derivative of <KatexRenderer formula='e^x'/> – The derivative of the natural exponential function is itself.</li>
        <li><strong>23</strong>. Derivative of <KatexRenderer formula='ln(|x|)'/> – The natural log function has a derivative of <KatexRenderer formula='\frac{1}{x}'/>.</li>
      </ul>
      <p>Inverse trigonometric and hyperbolic functions (entries 15–20 and 31–36) also follow standard patterns, but are not typically given short names like the above rules.</p>
    </CalculatorLayout>
  );
}
