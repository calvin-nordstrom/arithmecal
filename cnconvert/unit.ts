export type Unit = string;

export type UnitDefinition = {
  name: string;
  dimension: string;
  toAnchor: number | ((val: number) => number);
  fromAnchor?: (val: number) => number;
};
