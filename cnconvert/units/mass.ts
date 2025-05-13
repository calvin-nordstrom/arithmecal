import { UnitDefinition } from "../unit";

export const massUnits: Record<string, UnitDefinition> = {
  "kg": {
    name: "kilogram",
    toAnchor: 1,
    dimension: "mass"
  },
  "g": {
    name: "gram",
    toAnchor: 0.001,
    dimension: "mass"
  },
  "mg": {
    name: "milligram",
    toAnchor: 0.000001,
    dimension: "mass"
  },
  "µg": {
    name: "microgram",
    toAnchor: 1e-9,
    dimension: "mass"
  },
  "t": {
    name: "metric ton",
    toAnchor: 1000,
    dimension: "mass"
  },
  "oz": {
    name: "ounce",
    toAnchor: 0.0283495,
    dimension: "mass"
  },
  "lb": {
    name: "pound",
    toAnchor: 0.453592,
    dimension: "mass"
  },
  "st": {
    name: "stone",
    toAnchor: 6.35029,
    dimension: "mass"
  },
  "us-ton": {
    name: "US ton (short ton)",
    toAnchor: 907.18474,
    dimension: "mass"
  },
  "uk-ton": {
    name: "Imperial ton (long ton)",
    toAnchor: 1016.0469088,
    dimension: "mass"
  },
};
