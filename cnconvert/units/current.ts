import { UnitDefinition } from "../unit";

export const currentUnits: Record<string, UnitDefinition> = {
  "A": {
    name: "ampere",
    toAnchor: 1,
    dimension: "current"
  },
  "mA": {
    name: "milliampere",
    toAnchor: 0.001,
    dimension: "current"
  },
  "µA": {
    name: "microampere",
    toAnchor: 1e-6,
    dimension: "current"
  },
  "kA": {
    name: "kiloampere",
    toAnchor: 1000,
    dimension: "current"
  },
};
