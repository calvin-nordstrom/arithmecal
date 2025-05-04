import { UnitDefinition } from "../unit";

export const paceUnits: Record<string, UnitDefinition> = {
  "s/m": {
    name: "second per meter",
    toAnchor: 1,
    dimension: "pace"
  },
  "s/km": {
    name: "second per kilometer",
    toAnchor: 1000,
    dimension: "pace"
  },
  "min/km": {
    name: "minute per kilometer",
    toAnchor: 60 * 1000,
    dimension: "pace"
  },
  "s/ft": {
    name: "second per foot",
    toAnchor: 0.3048,
    dimension: "pace"
  },
  "s/mi": {
    name: "second per mile",
    toAnchor: 1609.344,
    dimension: "pace"
  },
  "min/mi": {
    name: "minute per mile",
    toAnchor: 60 * 1609.344,
    dimension: "pace"
  },
};
