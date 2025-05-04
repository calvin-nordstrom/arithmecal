import { UnitDefinition } from "../unit";

export const reactiveEnergyUnits: Record<string, UnitDefinition> = {
  VARh: {
    name: "volt-ampere reactive hour",
    toAnchor: 1,
    dimension: "reactiveEnergy"
  },
  mVARh: {
    name: "millivolt-ampere reactive hour",
    toAnchor: 0.001,
    dimension: "reactiveEnergy"
  },
  kVARh: {
    name: "kilovolt-ampere reactive hour",
    toAnchor: 1000,
    dimension: "reactiveEnergy"
  },
  MVARh: {
    name: "megavolt-ampere reactive hour",
    toAnchor: 1_000_000,
    dimension: "reactiveEnergy"
  },
  GVARh: {
    name: "gigavolt-ampere reactive hour",
    toAnchor: 1_000_000_000,
    dimension: "reactiveEnergy"
  },
};
