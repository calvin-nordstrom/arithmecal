export const formatUnitDisplay = (abbr: string): string => {
  const superscripts = '⁰¹²³⁴⁵⁶⁷⁸⁹';
  abbr = abbr.replace(/\^(\d)/g, (_, digit) => superscripts[parseInt(digit)]);

  const subscripts = '₀₁₂₃₄₅₆₇₈₉';
  abbr = abbr.replace(/_(\d)/g, (_, digit) => subscripts[parseInt(digit)]);

  return abbr;
};
