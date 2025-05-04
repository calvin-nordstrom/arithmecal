import { UnitDefinition } from "../unit";

export const energyUnits: Record<string, UnitDefinition> = {
  J: {
    name: "joule",
    toAnchor: 1,
    dimension: "energy"
  },
  kJ: {
    name: "kilojoule",
    toAnchor: 1000,
    dimension: "energy"
  },
  MJ: {
    name: "megajoule",
    toAnchor: 1_000_000,
    dimension: "energy"
  },
  GJ: {
    name: "gigajoule",
    toAnchor: 1_000_000_000,
    dimension: "energy"
  },
  Ws: {
    name: "watt-second",
    toAnchor: 1,
    dimension: "energy"
  },
  Wm: {
    name: "watt-minute",
    toAnchor: 60,
    dimension: "energy"
  },
  Wh: {
    name: "watt-hour",
    toAnchor: 3600,
    dimension: "energy"
  },
  mWh: {
    name: "milliwatt-hour",
    toAnchor: 3.6,
    dimension: "energy"
  },
  kWh: {
    name: "kilowatt-hour",
    toAnchor: 3_600_000,
    dimension: "energy"
  },
  MWh: {
    name: "megawatt-hour",
    toAnchor: 3_600_000_000,
    dimension: "energy"
  },
  GWh: {
    name: "gigawatt-hour",
    toAnchor: 3_600_000_000_000,
    dimension: "energy"
  },
};
