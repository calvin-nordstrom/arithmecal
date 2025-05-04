import { UnitDefinition } from "../unit";

export const densityUnits: Record<string, UnitDefinition> = {
  "kg/m3": {
    name: "kilogram per cubic meter",
    toAnchor: 1,
    dimension: "density"
  },
  "kg/dm3": {
    name: "kilogram per cubic decimeter",
    toAnchor: 1000,
    dimension: "density"
  },
  "kg/L": {
    name: "kilogram per liter",
    toAnchor: 1000,
    dimension: "density"
  },
  "g/L": {
    name: "gram per liter",
    toAnchor: 1,
    dimension: "density"
  },
  "g/dL": {
    name: "gram per deciliter",
    toAnchor: 10,
    dimension: "density"
  },
  "g/mL": {
    name: "gram per milliliter",
    toAnchor: 1000,
    dimension: "density"
  },
  "mg/L": {
    name: "milligram per liter",
    toAnchor: 0.001,
    dimension: "density"
  },
  "g/cm3": {
    name: "gram per cubic centimeter",
    toAnchor: 1000,
    dimension: "density"
  },
  "lb/gal": {
    name: "pound per US gallon",
    toAnchor: 0.45359237 / 0.003785411784,
    dimension: "density"
  },
  "lb/ft3": {
    name: "pound per cubic foot",
    toAnchor: 16.018463,
    dimension: "density"
  },
  "oz/in3": {
    name: "ounce per cubic inch",
    toAnchor: 1729.994,
    dimension: "density"
  },
  "t/m3": {
    name: "tonne per cubic meter",
    toAnchor: 1000,
    dimension: "density"
  },
};
