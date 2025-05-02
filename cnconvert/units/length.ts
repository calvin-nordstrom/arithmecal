import { UnitDefinition } from "../unit";

export const lengthUnits: Record<string, UnitDefinition> = {
  m: {
    name: "meter",
    toAnchor: 1,
    dimension: "length"
  },
  km: {
    name: "kilometer",
    toAnchor: 1000,
    dimension: "length"
  },
  cm: {
    name: "centimeter",
    toAnchor: 0.01,
    dimension: "length"
  },
  mm: {
    name: "millimeter",
    toAnchor: 0.001,
    dimension: "length"
  },
  ft: {
    name: "foot",
    toAnchor: 0.3048,
    dimension: "length"
  },
  in: {
    name: "inch",
    toAnchor: 0.0254,
    dimension: "length"
  },
  yd: {
    name: "yard",
    toAnchor: 0.9144,
    dimension: "length"
  },
  mi: {
    name: "mile",
    toAnchor: 1609.34,
    dimension: "length"
  }
};
