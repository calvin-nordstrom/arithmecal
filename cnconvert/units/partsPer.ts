import { UnitDefinition } from "../unit";

export const partsPerUnits: Record<string, UnitDefinition> = {
  "ppm": {
    name: "parts per million",
    toAnchor: 1,
    dimension: "partsPer"
  },
  "ppb": {
    name: "parts per billion",
    toAnchor: 0.001,
    dimension: "partsPer"
  },
  "ppt": {
    name: "parts per trillion",
    toAnchor: 0.000001,
    dimension: "partsPer"
  },
};
