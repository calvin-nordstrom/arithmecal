import { UnitDefinition } from "../unit";

export const pressureUnits: Record<string, UnitDefinition> = {
  Pa: {
    name: "pascal",
    toAnchor: 1,
    dimension: "pressure"
  },
  kPa: {
    name: "kilopascal",
    toAnchor: 1_000,
    dimension: "pressure"
  },
  MPa: {
    name: "megapascal",
    toAnchor: 1_000_000,
    dimension: "pressure"
  },
  hPa: {
    name: "hectopascal",
    toAnchor: 100,
    dimension: "pressure"
  },
  bar: {
    name: "bar",
    toAnchor: 100_000,
    dimension: "pressure"
  },
  torr: {
    name: "torr",
    toAnchor: 133.322,
    dimension: "pressure"
  },
  psi: {
    name: "pound per square inch",
    toAnchor: 6_894.76,
    dimension: "pressure"
  },
  ksi: {
    name: "kilopound per square inch",
    toAnchor: 6_894_760,
    dimension: "pressure"
  }
};
