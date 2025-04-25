import 'katex/dist/katex.min.css';
import katex from 'katex';

interface KatexRendererProps {
  formula: string;
  displayMode?: boolean;
}

export default function LatexRenderer({
  formula,
  displayMode = false,
}: KatexRendererProps) {
  const renderedFormula = katex.renderToString(formula, {
    throwOnError: false,
    displayMode,
  });

  const Tag = displayMode ? 'div' : 'span';

  return <Tag className='katex-formula' dangerouslySetInnerHTML={{ __html: renderedFormula }} />;
}
