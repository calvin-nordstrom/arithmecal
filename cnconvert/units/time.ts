import { UnitDefinition } from "../unit";

export const timeUnits: Record<string, UnitDefinition> = {
  s: {
    name: "second",
    toAnchor: 1,
    dimension: "time"
  },
  ms: {
    name: "millisecond",
    toAnchor: 1e-3,
    dimension: "time"
  },
  us: {
    name: "microsecond",
    toAnchor: 1e-6,
    dimension: "time"
  },
  ns: {
    name: "nanosecond",
    toAnchor: 1e-9,
    dimension: "time"
  },
  min: {
    name: "minute",
    toAnchor: 60,
    dimension: "time"
  },
  h: {
    name: "hour",
    toAnchor: 3600,
    dimension: "time"
  },
  d: {
    name: "day",
    toAnchor: 86400,
    dimension: "time"
  },
  week: {
    name: "week",
    toAnchor: 604800,
    dimension: "time"
  },
  month: {
    name: "month",
    toAnchor: 2_629_746,
    dimension: "time"
  },
  year: {
    name: "year",
    toAnchor: 31_556_952,
    dimension: "time"
  },
};
