import { UnitDefinition } from "../unit";

export const forceUnits: Record<string, UnitDefinition> = {
  N: {
    name: "newton",
    toAnchor: 1,
    dimension: "force"
  },
  kN: {
    name: "kilonewton",
    toAnchor: 1000,
    dimension: "force"
  },
  MN: {
    name: "megnewton",
    toAnchor: 1e6,
    dimension: "force"
  },
  GN: {
    name: "giganewton",
    toAnchor: 1e9,
    dimension: "force"
  },
  kgf: {
    name: "kilogram-force",
    toAnchor: 9.80665,
    dimension: "force"
  },
  gf: {
    name: "gram-force",
    toAnchor: 0.00980665,
    dimension: "force"
  },
  lbf: {
    name: "pound-force",
    toAnchor: 4.44822,
    dimension: "force"
  },
  dyne: {
    name: "dyne",
    toAnchor: 1e-5,
    dimension: "force"
  },
};
