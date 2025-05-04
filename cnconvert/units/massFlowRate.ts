import { UnitDefinition } from "../unit";

export const massFlowRateUnits: Record<string, UnitDefinition> = {
  "kg/s": {
    name: "kilogram per second",
    toAnchor: 1,
    dimension: "massFlowRate"
  },
  "kg/min": {
    name: "kilogram per minute",
    toAnchor: 1 / 60,
    dimension: "massFlowRate"
  },
  "kg/h": {
    name: "kilogram per hour",
    toAnchor: 1 / 3600,
    dimension: "massFlowRate"
  },
  "g/s": {
    name: "gram per second",
    toAnchor: 1 / 1000,
    dimension: "massFlowRate"
  },
  "g/min": {
    name: "gram per minute",
    toAnchor: 1 / 1000 / 60,
    dimension: "massFlowRate"
  },
  "g/h": {
    name: "gram per hour",
    toAnchor: 1 / 1000 / 3600,
    dimension: "massFlowRate"
  },
  "lb/s": {
    name: "pound per second",
    toAnchor: 0.45359237,
    dimension: "massFlowRate"
  },
  "lb/min": {
    name: "pound per minute",
    toAnchor: 0.45359237 / 60,
    dimension: "massFlowRate"
  },
  "lb/h": {
    name: "pound per hour",
    toAnchor: 0.45359237 / 3600,
    dimension: "massFlowRate"
  },
  "oz/s": {
    name: "ounce per second",
    toAnchor: 0.0283495,
    dimension: "massFlowRate"
  },
  "oz/min": {
    name: "ounce per minute",
    toAnchor: 0.0283495 / 60,
    dimension: "massFlowRate"
  },
  "oz/h": {
    name: "ounce per hour",
    toAnchor: 0.0283495 / 3600,
    dimension: "massFlowRate"
  },
};
