import { UnitDefinition } from "../unit";

export const frequencyUnits: Record<string, UnitDefinition> = {
  "Hz": {
    name: "hertz",
    toAnchor: 1,
    dimension: "frequency"
  },
  "mHz": {
    name: "millihertz",
    toAnchor: 0.001,
    dimension: "frequency"
  },
  "kHz": {
    name: "kilohertz",
    toAnchor: 1000,
    dimension: "frequency"
  },
  "MHz": {
    name: "megahertz",
    toAnchor: 1_000_000,
    dimension: "frequency"
  },
  "GHz": {
    name: "gigahertz",
    toAnchor: 1_000_000_000,
    dimension: "frequency"
  },
  "THz": {
    name: "terahertz",
    toAnchor: 1_000_000_000_000,
    dimension: "frequency"
  },
  "rpm": {
    name: "revolutions per minute",
    toAnchor: 1 / 60,
    dimension: "frequency"
  },
  "deg/s": {
    name: "degrees per second",
    toAnchor: 1 / 360,
    dimension: "frequency"
  },
  "rad/s": {
    name: "radians per second",
    toAnchor: 1 / (2 * Math.PI),
    dimension: "frequency"
  },
};
