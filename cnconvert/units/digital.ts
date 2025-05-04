import { UnitDefinition } from "../unit";

export const digitalUnits: Record<string, UnitDefinition> = {
  bit: {
    name: "bit",
    toAnchor: 1,
    dimension: "digital"
  },
  byte: {
    name: "byte",
    toAnchor: 8,
    dimension: "digital"
  },
  kB: {
    name: "kilobyte",
    toAnchor: 8_000,
    dimension: "digital"
  },
  MB: {
    name: "megabyte",
    toAnchor: 8_000_000,
    dimension: "digital"
  },
  GB: {
    name: "gigabyte",
    toAnchor: 8_000_000_000,
    dimension: "digital"
  },
  TB: {
    name: "terabyte",
    toAnchor: 8_000_000_000_000,
    dimension: "digital"
  },
  KiB: {
    name: "kibibyte",
    toAnchor: 8_192,
    dimension: "digital"
  },
  MiB: {
    name: "mebibyte",
    toAnchor: 8_388_608,
    dimension: "digital"
  },
  GiB: {
    name: "gibibyte",
    toAnchor: 8_589_934_592,
    dimension: "digital"
  },
  TiB: {
    name: "tebibyte",
    toAnchor: 8_796_093_022_208,
    dimension: "digital"
  },
};
