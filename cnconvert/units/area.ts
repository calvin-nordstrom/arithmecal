import { UnitDefinition } from "../unit";

export const areaUnits: Record<string, UnitDefinition> = {
  m2: {
    name: "square meter",
    toAnchor: 1,
    dimension: "area"
  },
  cm2: {
    name: "square centimeter",
    toAnchor: 0.0001,
    dimension: "area"
  },
  mm2: {
    name: "square millimeter",
    toAnchor: 0.000001,
    dimension: "area"
  },
  ft2: {
    name: "square foot",
    toAnchor: 0.092903,
    dimension: "area"
  },
  in2: {
    name: "square inch",
    toAnchor: 0.00064516,
    dimension: "area"
  },
  yd2: {
    name: "square yard",
    toAnchor: 0.836127,
    dimension: "area"
  },
  acre: {
    name: "acre",
    toAnchor: 4046.86,
    dimension: "area"
  },
  ha: {
    name: "hectare",
    toAnchor: 10000,
    dimension: "area"
  }
};
