import { UnitDefinition } from "../unit";

export const lengthUnits: Record<string, UnitDefinition> = {
  m: {
    name: "meter",
    toAnchor: 1,
    dimension: "length"
  },
  km: {
    name: "kilometer",
    toAnchor: 1000,
    dimension: "length"
  },
  cm: {
    name: "centimeter",
    toAnchor: 0.01,
    dimension: "length"
  },
  mm: {
    name: "millimeter",
    toAnchor: 0.001,
    dimension: "length"
  },
  µm: {
    name: "micrometer",
    toAnchor: 0.000001,
    dimension: "length"
  },
  nm: {
    name: "nanometer",
    toAnchor: 1e-9,
    dimension: "length"
  },
  pm: {
    name: "picometer",
    toAnchor: 1e-12,
    dimension: "length"
  },
  Å: {
    name: "angstrom",
    toAnchor: 1e-10,
    dimension: "length"
  },
  ft: {
    name: "foot",
    toAnchor: 0.3048,
    dimension: "length"
  },
  yd: {
    name: "yard",
    toAnchor: 0.9144,
    dimension: "length"
  },
  in: {
    name: "inch",
    toAnchor: 0.0254,
    dimension: "length"
  },
  mi: {
    name: "mile",
    toAnchor: 1609.34,
    dimension: "length"
  },
  nmi: {
    name: "nautical mile",
    toAnchor: 1852,
    dimension: "length"
  },
};
