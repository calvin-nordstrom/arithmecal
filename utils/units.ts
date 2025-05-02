export const formatUnitDisplay = (abbr: string): string => {
  return abbr.replace(/(\d)/g, (match) => {
    const superscripts = '⁰¹²³⁴⁵⁶⁷⁸⁹';
    return superscripts[parseInt(match)];
  });
};
