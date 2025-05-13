import { UnitDefinition } from "../unit";

export const chargeUnits: Record<string, UnitDefinition> = {
  "c": {
    name: "coulomb",
    toAnchor: 1,
    dimension: "charge"
  },
  "mC": {
    name: "millicoulomb",
    toAnchor: 0.001,
    dimension: "charge"
  },
  "µC": {
    name: "microcoulomb",
    toAnchor: 1e-6,
    dimension: "charge"
  },
  "nC": {
    name: "nanocoulomb",
    toAnchor: 1e-9,
    dimension: "charge"
  },
  "pC": {
    name: "picocoulomb",
    toAnchor: 1e-12,
    dimension: "charge"
  },
  "Ah": {
    name: "ampere-hour",
    toAnchor: 3600,
    dimension: "charge"
  },
  "mAh": {
    name: "milliampere-hour",
    toAnchor: 3.6,
    dimension: "charge"
  },
  "e": {
    name: "elementary charge",
    toAnchor: 1.602176634e-19,
    dimension: "charge"
  },
};
