import { UnitDefinition } from "../unit";

export const accelerationUnits: Record<string, UnitDefinition> = {
  "m/s^2": {
    name: "meter per second squared",
    toAnchor: 1,
    dimension: "acceleration"
  },
  "ft/s^2": {
    name: "foot per second squared",
    toAnchor: 0.3048,
    dimension: "acceleration"
  },
  "g_0": {
    name: "standard gravity",
    toAnchor: 9.80665,
    dimension: "acceleration"
  },
};
