import CalculatorLayout from '@/app/components/CalculatorLayout';
import type { Metadata } from 'next'
import KatexRenderer from '@/app/components/KatexRenderer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Table of Integrals',
  description: 'Explore a full table of integrals for use as a learner or professional. Discover formulas derived from the standard integration techniques.',
  keywords: 'integral formulas, table of integrals, calculus formulas, antiderivatives, trigonometric integrals, inverse trig integrals, hyperbolic integrals, integration formulas, Arithmecal',
  alternates: {
    canonical: 'https://arithmecal.com/reference/integrals',
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
    id: 'basic-forms',
    title: 'Basic Forms',
    start: 1,
    formulas: [
      '\\int u\\,dv=uv-\\int v\\,du',
      '\\int u^n\\,du=\\frac{u^{n+1}}{n+1}+C,\\quad n\\ne-1',
      '\\int \\frac{du}{u}=\\ln|u|+C',
      '\\int e^u\\,du=e^u+C',
      '\\int b^u\\,du=\\frac{b^u}{\\ln b}+C',
      '\\int \\sin u\\,du=-\\cos u+C',
      '\\int \\cos u\\,du=\\sin u+C',
      '\\int \\sec^2u\\,du=\\tan u+C',
      '\\int \\csc^2u\\,du=-\\cot u+C',
      '\\int \\sec u\\tan u\\,du=\\sec u+C',
      '\\int \\csc u\\cot u\\,du=-\\csc u+C',
      '\\int \\tan u\\,du=\\ln|\\sec u|+C',
      '\\int \\cot u\\,du=\\ln|\\sin u|+C',
      '\\int \\sec u\\,du=\\ln|\\sec u+\\tan u|+C',
      '\\int \\csc u\\,du=\\ln|\\csc u-\\cot u|+C',
      '\\int \\frac{du}{\\sqrt{a^2-u^2}}=\\sin^{-1}\\frac{u}{a}+C,\\quad a>0',
      '\\int \\frac{du}{a^2+u^2}=\\frac1a\\tan^{-1}\\frac{u}{a}+C',
      '\\int \\frac{du}{u\\sqrt{u^2-a^2}}=\\frac1a\\sec^{-1}\\left|\\frac{u}{a}\\right|+C',
      '\\int \\frac{du}{a^2-u^2}=\\frac1{2a}\\ln\\left|\\frac{u+a}{u-a}\\right|+C',
      '\\int \\frac{du}{u^2-a^2}=\\frac1{2a}\\ln\\left|\\frac{u-a}{u+a}\\right|+C'
    ],
  },
  {
    id: 'forms-2',
    title: (
      <>
        Forms involving <KatexRenderer formula='\sqrt{a^2+u^2},a>0'/>
      </>
    ),
    start: 21,
    formulas: [
      '\\int\\sqrt{a^2+u^2}\\,du=\\frac u2\\sqrt{a^2+u^2}+\\frac{a^2}2\\ln\\left(u+\\sqrt{a^2+u^2}\\right)+C',
      '\\int u^2\\sqrt{a^2+u^2}\\,du=\\frac u8(a^2+2u^2)\\sqrt{a^2+u^2}-\\frac{a^4}8\\ln\\left(u+\\sqrt{a^2+u^2}\\right)+C',
      '\\int\\frac{\\sqrt{a^2+u^2}}u\\,du=\\sqrt{a^2+u^2}-a\\ln\\left|\\frac{a+\\sqrt{a^2+u^2}}u\\right|+C',
      '\\int\\frac{\\sqrt{a^2+u^2}}{u^2}\\,du=-\\frac{\\sqrt{a^2+u^2}}u+\\ln\\left(u+\\sqrt{a^2+u^2}\\right)+C',
      '\\int\\frac{du}{\\sqrt{a^2+u^2}}=\\ln\\left(u+\\sqrt{a^2+u^2}\\right)+C',
      '\\int\\frac{u^2\\,du}{\\sqrt{a^2+u^2}}=\\frac u2\\sqrt{a^2+u^2}-\\frac{a^2}2\\ln\\left(u+\\sqrt{a^2+u^2}\\right)+C',
      '\\int\\frac{du}{u\\sqrt{a^2+u^2}}=-\\frac1a\\ln\\left|\\frac{\\sqrt{a^2+u^2}+a}{u}\\right|+C',
      '\\int\\frac{du}{u^2\\sqrt{a^2+u^2}}=-\\frac{\\sqrt{a^2+u^2}}{a^2u}+C',
      '\\int\\frac{du}{(a^2+u^2)^{3/2}}=\\frac{u}{a^2\\sqrt{a^2+u^2}}+C'
    ],
  },
  {
    id: 'forms-3',
    title: (
      <>
        Forms involving <KatexRenderer formula='\sqrt{a^2-u^2},a>0'/>
      </>
    ),
    start: 30,
    formulas: [
      '\\int\\sqrt{a^2-u^2}\\,du=\\frac u2\\sqrt{a^2-u^2}+\\frac{a^2}2\\sin^{-1}\\frac ua+C',
      '\\int u^2\\sqrt{a^2-u^2}\\,du=\\frac u8(2u^2-a^2)\\sqrt{a^2-u^2}+\\frac{a^4}8\\sin^{-1}\\frac ua+C',
      '\\int\\frac{\\sqrt{a^2-u^2}}u\\,du=\\sqrt{a^2-u^2}-a\\ln\\left|\\frac{a+\\sqrt{a^2-u^2}}u\\right|+C',
      '\\int\\frac{\\sqrt{a^2-u^2}}{u^2}\\,du=-\\frac{\\sqrt{a^2-u^2}}u-\\sin^{-1}\\frac ua+C',
      '\\int\\frac{du}{u\\sqrt{a^2-u^2}}=-\\frac1a\\ln\\left|\\frac{a+\\sqrt{a^2-u^2}}u\\right|+C',
      '\\int\\frac{du}{u^2\\sqrt{a^2-u^2}}=-\\frac1{a^2u}\\sqrt{a^2-u^2}+C',
      '\\int(a^2-u^2)^{3/2}\\,du=-\\frac u8(2u^2-5a^2)\\sqrt{a^2-u^2}+\\frac{3a^4}8\\sin^{-1}\\frac ua+C',
      '\\int\\frac{du}{(a^2-u^2)^{3/2}}=\\frac{u}{a^2\\sqrt{a^2-u^2}}+C'
    ],
  },
  {
    id: 'forms-4',
    title: (
      <>
        Forms involving <KatexRenderer formula='\sqrt{u^2-a^2},a>0'/>
      </>
    ),
    start: 39,
    formulas: [
      '\\int\\sqrt{u^2-a^2}\\,du=\\frac u2\\sqrt{u^2-a^2}-\\frac{a^2}2\\ln\\left|u+\\sqrt{u^2-a^2}\\right|+C',
      '\\int u^2\\sqrt{u^2-a^2}\\,du=\\frac u8(2u^2-a^2)\\sqrt{u^2-a^2}-\\frac{a^4}8\\ln\\left|u+\\sqrt{u^2-a^2}\\right|+C',
      '\\int\\frac{\\sqrt{u^2-a^2}}u\\,du=\\sqrt{u^2-a^2}-a\\cos^{-1}\\left|\\frac au\\right|+C',
      '\\int\\frac{\\sqrt{u^2-a^2}}{u^2}\\,du=-\\frac{\\sqrt{u^2-a^2}}u+\\ln\\left|u+\\sqrt{u^2-a^2}\\right|+C',
      '\\int\\frac{du}{\\sqrt{u^2-a^2}}=\\ln\\left|u+\\sqrt{u^2-a^2}\\right|+C',
      '\\int\\frac{u^2\\,du}{\\sqrt{u^2-a^2}}=\\frac u2\\sqrt{u^2-a^2}+\\frac{a^2}2\\ln\\left|u+\\sqrt{u^2-a^2}\\right|+C',
      '\\int\\frac{du}{u^2\\sqrt{u^2-a^2}}=\\frac{\\sqrt{u^2-a^2}}{a^2u}+C',
      '\\int\\frac{du}{(u^2-a^2)^{3/2}}=-\\frac{u}{a^2\\sqrt{u^2-a^2}}+C'
    ],
  },
  {
    id: 'forms-5',
    title: (
      <>
        Forms involving <KatexRenderer formula='a+bu'/>
      </>
    ),
    start: 47,
    formulas: [
      '\\int\\frac{u\\,du}{a+bu}=\\frac1{b^2}\\left(a+bu-a\\ln|a+bu|\\right)+C',
      '\\int\\frac{u^2\\,du}{a+bu}=\\frac1{2b^3}\\left[(a+bu)^2-4a(a+bu)+2a^2\\ln|a+bu|\\right]+C',
      '\\int\\frac{du}{u(a+bu)}=\\frac1a\\ln\\left|\\frac{u}{a+bu}\\right|+C',
      '\\int\\frac{du}{u^2(a+bu)}=-\\frac1{au}+\\frac b{a^2}\\ln\\left|\\frac{a+bu}{u}\\right|+C',
      '\\int\\frac{u\\,du}{(a+bu)^2}=\\frac a{b^2(a+bu)}+\\frac1{b^2}\\ln|a+bu|+C',
      '\\int\\frac{du}{u(a+bu)^2}=\\frac1{a(a+bu)}-\\frac1{a^2}\\ln\\left|\\frac{a+bu}{u}\\right|+C',
      '\\int\\frac{u^2\\,du}{(a+bu)^2}=\\frac1{b^3}\\left(a+bu-\\frac{a^2}{a+bu}-2a\\ln|a+bu|\\right)+C',
      '\\int u\\sqrt{a+bu}\\,du=\\frac2{15b^2}(3bu-2a)(a+bu)^{3/2}+C',
      '\\int\\frac{u\\,du}{\\sqrt{a+bu}}=\\frac2{3b^2}(bu-2a)\\sqrt{a+bu}+C',
      '\\int\\frac{u^2\\,du}{\\sqrt{a+bu}}=\\frac2{15b^3}(8a^2+3b^2u^2-4abu)\\sqrt{a+bu}+C',
      '\\int\\frac{du}{u\\sqrt{a+bu}}=\\frac1{\\sqrt a}\\ln\\left|\\frac{\\sqrt{a+bu}-\\sqrt a}{\\sqrt{a+bu}+\\sqrt a}\\right|+C\\quad(a>0)',
      '\\int\\frac{\\sqrt{a+bu}}u\\,du=2\\sqrt{a+bu}+a\\int\\frac{du}{u\\sqrt{a+bu}}',
      '\\int\\frac{\\sqrt{a+bu}}{u^2}\\,du=-\\frac{\\sqrt{a+bu}}u+\\frac b2\\int\\frac{du}{u\\sqrt{a+bu}}',
      '\\int u^n\\sqrt{a+bu}\\,du=\\frac2{b(2n+3)}\\left[u^n(a+bu)^{3/2}-na\\int u^{n-1}\\sqrt{a+bu}\\,du\\right]',
      '\\int\\frac{u^n\\,du}{\\sqrt{a+bu}}=\\frac{2u^n\\sqrt{a+bu}}{b(2n+1)}-\\frac{2na}{b(2n+1)}\\int\\frac{u^{n-1}\\,du}{\\sqrt{a+bu}}',
      '\\int\\frac{du}{u^n\\sqrt{a+bu}}=-\\frac{\\sqrt{a+bu}}{a(n-1)u^{n-1}}-\\frac{b(2n-3)}{2a(n-1)}\\int\\frac{du}{u^{n-1}\\sqrt{a+bu}}'
    ],
  },
  {
    id: 'trigonometric-forms',
    title: 'Trigonometric Forms',
    start: 63,
    formulas: [
      '\\int\\sin^2u\\,du=\\frac12u-\\frac14\\sin2u+C',
      '\\int\\cos^2u\\,du=\\frac12u+\\frac14\\sin2u+C',
      '\\int\\tan^2u\\,du=\\tan u-u+C',
      '\\int\\cot^2u\\,du=-\\cot u-u+C',
      '\\int\\sin^3u\\,du=-\\frac13(2+\\sin^2u)\\cos u+C',
      '\\int\\cos^3u\\,du=\\frac13(2+\\cos^2u)\\sin u+C',
      '\\int\\tan^3u\\,du=\\frac12\\tan^2u+\\ln|\\cos u|+C',
      '\\int\\cot^3u\\,du=-\\frac12\\cot^2u-\\ln|\\sin u|+C',
      '\\int\\sec^3u\\,du=\\frac12\\sec u\\tan u+\\frac12\\ln|\\sec u+\\tan u|+C',
      '\\int\\csc^3u\\,du=-\\frac12\\csc u\\cot u+\\frac12\\ln|\\csc u-\\cot u|+C',
      '\\int\\sin^nu\\,du=-\\frac1n\\sin^{n-1}u\\cos u+\\frac{n-1}{n}\\int\\sin^{n-2}u\\,du',
      '\\int\\cos^nu\\,du=\\frac1n\\cos^{n-1}u\\sin u+\\frac{n-1}{n}\\int\\cos^{n-2}u\\,du',
      '\\int\\tan^nu\\,du=\\frac1{n-1}\\tan^{n-1}u-\\int\\tan^{n-2}u\\,du',
      '\\int\\cot^nu\\,du=-\\frac1{n-1}\\cot^{n-1}u-\\int\\cot^{n-2}u\\,du',
      '\\int\\sec^nu\\,du=\\frac1{n-1}\\tan u\\sec^{n-2}u+\\frac{n-2}{n-1}\\int\\sec^{n-2}u\\,du',
      '\\int\\csc^nu\\,du=-\\frac1{n-1}\\cot u\\csc^{n-2}u+\\frac{n-2}{n-1}\\int\\csc^{n-2}u\\,du',
      '\\int\\sin au\\sin bu\\,du=\\frac{\\sin(a-b)u}{2(a-b)}-\\frac{\\sin(a+b)u}{2(a+b)}+C',
      '\\int\\cos au\\cos bu\\,du=\\frac{\\sin(a-b)u}{2(a-b)}+\\frac{\\sin(a+b)u}{2(a+b)}+C',
      '\\int\\sin au\\cos bu\\,du=-\\frac{\\cos(a-b)u}{2(a-b)}-\\frac{\\cos(a+b)u}{2(a+b)}+C',
      '\\int u\\sin u\\,du=\\sin u-u\\cos u+C',
      '\\int u\\cos u\\,du=\\cos u+u\\sin u+C',
      '\\int u^n\\sin u\\,du=-u^n\\cos u+n\\int u^{n-1}\\cos u\\,du',
      '\\int u^n\\cos u\\,du=u^n\\sin u-n\\int u^{n-1}\\sin u\\,du',
      [
        '\\int\\sin^nu\\cos^mu\\,du&=-\\frac{\\sin^{n-1}u\\cos^{m+1}u}{n+m}+\\frac{n-1}{n+m}\\int\\sin^{n-2}u\\cos^mu\\,du',
        '&=\\frac{\\sin^{n+1}u\\cos^{m-1}u}{n+m}+\\frac{m-1}{n+m}\\int\\sin^nu\\cos^{m-2}u\\,du'
      ]
    ],
  },
  {
    id: 'inverse-trigonometric-forms',
    title: 'Inverse Trigonometric Forms',
    start: 87,
    formulas: [
      '\\int\\sin^{-1}u\\,du=u\\sin^{-1}u+\\sqrt{1-u^2}+C',
      '\\int\\cos^{-1}u\\,du=u\\cos^{-1}u-\\sqrt{1-u^2}+C',
      '\\int\\tan^{-1}u\\,du=u\\tan^{-1}u-\\frac12\\ln(1+u^2)+C',
      '\\int u\\sin^{-1}u\\,du=\\frac{2u^2-1}{4}\\sin^{-1}u+\\frac{u\\sqrt{1-u^2}}4+C',
      '\\int u\\cos^{-1}u\\,du=\\frac{2u^2-1}{4}\\cos^{-1}u-\\frac{u\\sqrt{1-u^2}}4+C',
      '\\int u\\tan^{-1}u\\,du=\\frac{u^2+1}{2}\\tan^{-1}u-\\frac u2+C',
      '\\int u^n\\sin^{-1}u\\,du=\\frac1{n+1}\\left[u^{n+1}\\sin^{-1}u-\\int\\frac{u^{n+1}\\,du}{\\sqrt{1-u^2}}\\right],\\quad n\\ne-1',
      '\\int u^n\\cos^{-1}u\\,du=\\frac1{n+1}\\left[u^{n+1}\\cos^{-1}u+\\int\\frac{u^{n+1}\\,du}{\\sqrt{1-u^2}}\\right],\\quad n\\ne-1',
      '\\int u^n\\tan^{-1}u\\,du=\\frac1{n+1}\\left[u^{n+1}\\tan^{-1}u-\\int\\frac{u^{n+1}\\,du}{1+u^2}\\right],\\quad n\\ne-1'
    ],
  },
  {
    id: 'exponential-and-logarithmic-forms',
    title: 'Exponential and Logarithmic Forms',
    start: 96,
    formulas: [
      '\\int ue^{au}\\,du=\\frac1{a^2}(au-1)e^{au}+C',
      '\\int u^ne^{au}\\,du=\\frac1ae^{au}u^n-\\frac na\\int u^{n-1}e^{au}\\,du',
      '\\int e^{au}\\sin bu\\,du=\\frac{e^{au}}{a^2+b^2}(a\\sin bu-b\\cos bu)+C',
      '\\int e^{au}\\cos bu\\,du=\\frac{e^{au}}{a^2+b^2}(a\\cos bu+b\\sin bu)+C',
      '\\int\\ln u\\,du=u\\ln u-u+C',
      '\\int u^n\\ln u\\,du=\\frac{u^{n+1}}{(n+1)^2}\\big[(n+1)\\ln u-1\\big]+C',
      '\\int\\frac1{u\\ln u}\\,du=\\ln|\\ln u|+C'
    ],
  },
  {
    id: 'hyperbolic-forms',
    title: 'Hyperbolic Forms',
    start: 103,
    formulas: [
      '\\int\\sinh u\\,du=\\cosh u+C',
      '\\int\\cosh u\\,du=\\sinh u+C',
      '\\int\\tanh u\\,du=\\ln\\cosh u+C',
      '\\int\\coth u\\,du=\\ln|\\sinh u|+C',
      '\\int\\operatorname{sech}u\\,du=\\tan^{-1}|\\sinh u|+C',
      '\\int\\operatorname{csch}u\\,du=\\ln\\left|\\tanh\\frac12u\\right|+C',
      '\\int\\operatorname{sech}^2u\\,du=\\tanh u+C',
      '\\int\\operatorname{csch}^2u\\,du=-\\coth u+C',
      '\\int\\operatorname{sech}u\\tanh u\\,du=-\\operatorname{sech}u+C',
      '\\int\\operatorname{csch}u\\coth u\\,du=-\\operatorname{csch}u+C'
    ],
  },
  {
    id: 'forms-10',
    title: (
      <>
        Forms involving <KatexRenderer formula='\sqrt{2au-u^2},a>0'/>
      </>
    ),
    start: 113,
    formulas: [
      '\\int\\sqrt{2au-u^2}\\,du=\\frac{u-a}{2}\\sqrt{2au-u^2}+\\frac{a^2}{2}\\cos^{-1}\\left(\\frac{a-u}{a}\\right)+C',
      '\\int u\\sqrt{2au-u^2}\\,du=\\frac{2u^2-au-3a^2}{6}\\sqrt{2au-u^2}+\\frac{a^3}{2}\\cos^{-1}\\left(\\frac{a-u}{a}\\right)+C',
      '\\int\\frac{\\sqrt{2au-u^2}}u\\,du=\\sqrt{2au-u^2}+a\\cos^{-1}\\left(\\frac{a-u}{a}\\right)+C',
      '\\int\\frac{\\sqrt{2au-u^2}}{u^2}\\,du=-\\frac{2\\sqrt{2au-u^2}}u-\\cos^{-1}\\left(\\frac{a-u}{a}\\right)+C',
      '\\int\\frac{du}{\\sqrt{2au-u^2}}=\\cos^{-1}\\left(\\frac{a-u}{a}\\right)+C',
      '\\int\\frac{u\\,du}{\\sqrt{2au-u^2}}=-\\sqrt{2au-u^2}+a\\cos^{-1}\\left(\\frac{a-u}{a}\\right)+C',
      '\\int\\frac{u^2\\,du}{\\sqrt{2au-u^2}}=-\\frac{u+3a}{2}\\sqrt{2au-u^2}+\\frac{3a^2}{2}\\cos^{-1}\\left(\\frac{a-u}{a}\\right)+C',
      '\\int\\frac{du}{u\\sqrt{2au-u^2}}=-\\frac{\\sqrt{2au-u^2}}{au}+C'
    ],
  }
];

export default function IntegralsPage() {
  return (
    <CalculatorLayout>
      <h1>Table of Integrals</h1>

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
      <p>This reference page contains common antiderivatives and integration formulas used throughout Calculus. Most formulas are written using the variable <KatexRenderer formula='u'/>, but they apply to any variable.</p>
      <p>Many integrals can be solved directly by matching them to one of the forms in this table. Others may require algebraic simplification, substitution, or integration techniques such as integration by parts or trigonometric identities before applying a formula.</p>
      <ul>
        <li><strong>Integration by Parts</strong> is shown in formula <strong>1</strong> and is commonly used for products such as <KatexRenderer formula='x e^x' /> or <KatexRenderer formula='x\sin x' />.</li>
        <li><strong>Reduction Formulas</strong> appear throughout the trigonometric and recursive sections (such as formulas 73-78 and 84-86). These rewrite a difficult integral in terms of a simpler one.</li>
        <li>Integrals involving square roots like <KatexRenderer formula='\sqrt{a^2-u^2}' /> or <KatexRenderer formula='\sqrt{u^2-a^2}' /> often arise in trigonometric substitution problems.</li>
        <li>Logarithmic results commonly appear when integrating rational expressions, especially forms involving <KatexRenderer formula='\frac1u' /> or partial fractions.</li>
      </ul>
      <p>To see a comprehensive list of derivatives, check out our <Link href='./derivatives' target='_blank'>Table of Derivatives</Link></p>

      <h2>Additional Notes</h2>
      <ul>
        <li>The constant <KatexRenderer formula='C' /> represents the arbitrary constant of integration.</li>
        <li>Unless otherwise stated, constants such as <KatexRenderer formula='a' />, <KatexRenderer formula='b' />, and <KatexRenderer formula='n' /> are assumed to be real constants.</li>
        <li>Expressions like <KatexRenderer formula='\sin^{-1}u' /> denote inverse trigonometric functions, not reciprocals.</li>
        <li>Absolute values appear inside logarithms because antiderivatives must remain valid for both positive and negative inputs where defined.</li>
        <li>Some formulas include conditions such as <KatexRenderer formula='a>0' /> or <KatexRenderer formula='n\ne-1' /> to specify when the identity is valid.</li>
      </ul>
    </CalculatorLayout>
  );
}
