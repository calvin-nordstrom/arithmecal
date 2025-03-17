import 'katex/dist/katex.min.css';
import katex from 'katex';

interface KatexRendererProps {
  formula: string;
  displayMode?: boolean;
}

export default function LatexRenderer({ 
  formula, displayMode
}: KatexRendererProps) {
  const renderedFormula = katex.renderToString(formula, {
    throwOnError: false,
    displayMode: displayMode,
  });

  return <div className='katex-formula' dangerouslySetInnerHTML={{ __html: renderedFormula }} />;
}
