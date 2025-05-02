import { UnitDefinition } from "../unit";

export const temperatureUnits: Record<string, UnitDefinition> = {
  K: {
    name: "kelvin",
    toAnchor: (val: number) => val,
    fromAnchor: (val: number) => val,
    dimension: "temperature"
  },
  C: {
    name: "celsius",
    toAnchor: (val: number) => val + 273.15,
    fromAnchor: (val: number) => val - 273.15,
    dimension: "temperature"
  },
  F: {
    name: "fahrenheit",
    toAnchor: (val: number) => (val + 459.67) * (5 / 9),
    fromAnchor: (val: number) => (val * 9 / 5) - 459.67,
    dimension: "temperature"
  },
  R: {
    name: "rankine",
    toAnchor: (val: number) => val * (5 / 9),
    fromAnchor: (val: number) => val * (9 / 5),
    dimension: "temperature"
  }
};
