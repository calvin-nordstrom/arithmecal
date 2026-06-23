import CalculatorLayout from '@/app/components/CalculatorLayout';
import type { Metadata } from 'next'
import KatexRenderer from '@/app/components/KatexRenderer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Table of Derivatives',
  description: 'Explore a comprehensive table of derivative formulas with names and examples. Learn and master Calculus rules easily with Arithmecal’s visual math reference.',
  keywords: 'derivative rules, calculus formulas, table of derivatives, power rule, product rule, quotient rule, chain rule, trigonometric derivatives, Arithmecal, math reference, calculus help, differentiation table, derivative chart, inverse trig derivatives, exponential derivatives, logarithmic derivatives, hyperbolic functions',
  alternates: {
    canonical: 'https://arithmecal.com/reference/derivatives',
  },
}

type Formula = string | string[];

type FormulaSection = {
  id: string;
  title: React.ReactNode;
  start: number;
  formulas: Formula[];
};

const sections: FormulaSection[] = [
  {
    id: 'general-formulas',
    title: 'General Formulas',
    start: 1,
    formulas: [
      '\\frac{d}{dx}(c)=0',
      '\\frac{d}{dx}[cf(x)]=cf^{\\prime}(x)',
      '\\frac{d}{dx}(x^n)=nx^{n-1}\\text{, for real numbers }n',
      '\\frac{d}{dx}[f(x)+g(x)]=f^{\\prime}(x)+g^{\\prime}(x)',
      '\\frac{d}{dx}[f(x)-g(x)]=f^{\\prime}(x)-g^{\\prime}(x)',
      '\\frac{d}{dx}[f(x)g(x)]=f^{\\prime}(x)g(x)+f(x)g^{\\prime}(x)',
      '\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right]=\\frac{g(x)f^{\\prime}(x)-f(x)g^{\\prime}(x)}{[g(x)]^2}',
      '\\frac{d}{dx}[f(g(x))]=f^{\\prime}(g(x))\\cdot g^{\\prime}(x)'
    ],
  },
  {
    id: 'trigonometric-functions',
    title: 'Trigonometric Functions',
    start: 9,
    formulas: [
      '\\frac{d}{dx}[\\sin(x)]=\\cos(x)',
      '\\frac{d}{dx}[\\cos(x)]=-\\sin(x)',
      '\\frac{d}{dx}[\\tan(x)]=\\sec^2(x)',
      '\\frac{d}{dx}[\\csc(x)]=-\\csc(x)\\cot(x)',
      '\\frac{d}{dx}[\\sec(x)]=\\sec(x)\\tan(x)',
      '\\frac{d}{dx}[\\cot(x)]=-\\csc^2(x)'
    ],
  },
  {
    id: 'inverse-trigonometric-functions',
    title: 'Inverse Trigonometric Functions',
    start: 15,
    formulas: [
      '\\frac{d}{dx}[\\sin^{-1}(x)]=\\frac{1}{\\sqrt{1-x^2}}',
      '\\frac{d}{dx}[\\cos^{-1}(x)]=-\\frac{1}{\\sqrt{1-x^2}}',
      '\\frac{d}{dx}[\\tan^{-1}(x)]=\\frac{1}{1+x^2}',
      '\\frac{d}{dx}[\\csc^{-1}(x)]=-\\frac{1}{|x|\\sqrt{x^2-1}}',
      '\\frac{d}{dx}[\\sec^{-1}(x)]=\\frac{1}{|x|\\sqrt{x^2-1}}',
      '\\frac{d}{dx}[\\cot^{-1}(x)]=-\\frac{1}{1+x^2}'
    ],
  },
  {
    id: 'exponential-and-logarithmic-functions',
    title: 'Exponential and Logarithmic Functions',
    start: 21,
    formulas: [
      '\\frac{d}{dx}(e^x)=e^x',
      '\\frac{d}{dx}(a^x)=a^x\\ln(a)',
      '\\frac{d}{dx}[\\ln(|x|)]=\\frac{1}{x}',
      '\\frac{d}{dx}[\\log_a(x)]=\\frac{1}{x\\ln(a)}'
    ],
  },
  {
    id: 'hyperbolic-functions',
    title: 'Hyperbolic Functions',
    start: 25,
    formulas: [
      '\\frac{d}{dx}[\\sinh(x)]=\\cosh(x)',
      '\\frac{d}{dx}[\\cosh(x)]=\\sinh(x)',
      '\\frac{d}{dx}[\\tanh(x)]=\\operatorname{sech}^2(x)',
      '\\frac{d}{dx}[\\operatorname{csch}(x)]=-\\operatorname{csch}(x)\\coth(x)',
      '\\frac{d}{dx}[\\operatorname{sech}(x)]=-\\operatorname{sech}(x)\\tanh(x)',
      '\\frac{d}{dx}[\\coth(x)]=-\\operatorname{csch}^2(x)'
    ],
  },
  {
    id: 'inverse-hyperbolic-functions',
    title: 'Inverse Hyperbolic Functions',
    start: 31,
    formulas: [
      '\\frac{d}{dx}[\\sinh^{-1}(x)]=\\frac{1}{\\sqrt{x^2+1}}',
      '\\frac{d}{dx}[\\cosh^{-1}(x)]=\\frac{1}{\\sqrt{x^2-1}}\\text{, }(x>1)',
      '\\frac{d}{dx}[\\tanh^{-1}(x)]=\\frac{1}{1-x^2}\\text{, }(|x|<1)',
      '\\frac{d}{dx}[\\operatorname{csch}^{-1}(x)]=-\\frac{1}{|x|\\sqrt{1+x^2}}\\text{, }(x\\ne0)',
      '\\frac{d}{dx}[\\operatorname{sech}^{-1}(x)]=-\\frac{1}{x\\sqrt{1-x^2}}\\text{, }(0<x<1)',
      '\\frac{d}{dx}[\\coth^{-1}(x)]=\\frac{1}{1-x^2}\\text{, }(|x|>1)'
    ],
  }
];

export default function DerivativesPage() {
  return (
    <CalculatorLayout>
      <h1>Table of Derivatives</h1>

      {sections.map((section) => (
        <div key={section.id}>
          <h2 id={section.id}>{section.title}</h2>

          <ol className="formula-list" start={section.start}>
            {section.formulas.map((formula, index) => (
              <li key={index}>
                {Array.isArray(formula) ? (
                  <KatexRenderer
                    formula={`
                      \\begin{aligned}
                      ${formula.join('\\\\')}
                      \\end{aligned}
                    `}
                  />
                ) : (
                  <KatexRenderer formula={formula} />
                )}
              </li>
            ))}
          </ol>
        </div>
      ))}

      <h2>How to Use This Table</h2>
      <p>This reference page contains many of the most common differentiation formulas used throughout Calculus. Most rules are written using <KatexRenderer formula='x' />, but the same patterns apply to any variable.</p>
      <p>Derivatives describe rates of change and slopes of tangent lines. Many differentiation problems can be solved directly using one of the rules below, while others require combining several rules together.</p>
      <ul>
        <li><strong>Power Rule</strong> (formula <strong>3</strong>) is one of the most frequently used derivative rules.</li>
        <li><strong>Product Rule</strong> (formula <strong>6</strong>) is used when differentiating products of functions.</li>
        <li><strong>Quotient Rule</strong> (formula <strong>7</strong>) is used for rational expressions and function ratios.</li>
        <li><strong>Chain Rule</strong> (formula <strong>8</strong>) is essential for differentiating composite functions such as <KatexRenderer formula='\\sin(x^2)' /> or <KatexRenderer formula='e^{3x}' />.</li>
        <li>Trigonometric, inverse trigonometric, and hyperbolic derivatives follow recurring algebraic patterns that become easier to recognize with practice.</li>
      </ul>
      <p>To see a comprehensive list of antiderivatives, check out our <Link href='./integrals' target='_blank'>Table of Integrals</Link></p>

      <h2>Additional Notes</h2>
      <ul>
        <li>The notation <KatexRenderer formula='f^{\prime}(x)' /> represents the derivative of <KatexRenderer formula='f(x)' />.</li>
        <li>Expressions such as <KatexRenderer formula='\sin^{-1}(x)' /> denote inverse trigonometric functions, not reciprocals.</li>
        <li>Some formulas include domain restrictions like <KatexRenderer formula='|x|<1' /> or <KatexRenderer formula='x>1' /> because the functions are only defined on certain intervals.</li>
        <li>Hyperbolic functions use the notation <KatexRenderer formula='\sinh,\cosh,\tanh' />, while reciprocal hyperbolic functions are commonly written using <KatexRenderer formula='\operatorname{sech}' /> and <KatexRenderer formula='\operatorname{csch}' />.</li>
      </ul>
    </CalculatorLayout>
  );
}
