import { UnitDefinition } from "../unit";

export const volumeUnits: Record<string, UnitDefinition> = {
  mm3: {
    name: "cubic millimeter",
    toAnchor: 1e-9,
    dimension: "volume"
  },
  cm3: {
    name: "cubic centimeter",
    toAnchor: 1e-6,
    dimension: "volume"
  },
  ml: {
    name: "milliliter",
    toAnchor: 1e-6,
    dimension: "volume"
  },
  cl: {
    name: "centiliter",
    toAnchor: 1e-5,
    dimension: "volume"
  },
  dl: {
    name: "deciliter",
    toAnchor: 1e-4,
    dimension: "volume"
  },
  l: {
    name: "liter",
    toAnchor: 1e-3,
    dimension: "volume"
  },
  kl: {
    name: "kiloliter",
    toAnchor: 1,
    dimension: "volume"
  },
  m3: {
    name: "cubic meter",
    toAnchor: 1,
    dimension: "volume"
  },
  km3: {
    name: "cubic kilometer",
    toAnchor: 1e9,
    dimension: "volume"
  },

  // Swedish volume units
  krm: {
    name: "kryddmått",
    toAnchor: 1e-6,
    dimension: "volume"
  },
  tsk: {
    name: "tesked",
    toAnchor: 5e-6,
    dimension: "volume"
  },
  msk: {
    name: "matsked",
    toAnchor: 15e-6,
    dimension: "volume"
  },
  kkp: {
    name: "kaffekopp",
    toAnchor: 150e-6,
    dimension: "volume"
  },
  glas: {
    name: "glas",
    toAnchor: 200e-6,
    dimension: "volume"
  },
  kanna: {
    name: "kanna",
    toAnchor: 2.617e-3,
    dimension: "volume"
  },

  // US customary units
  tsp: {
    name: "teaspoon",
    toAnchor: 4.92892159375e-6,
    dimension: "volume"
  },
  Tbs: {
    name: "tablespoon",
    toAnchor: 1.478676478125e-5,
    dimension: "volume"
  },
  in3: {
    name: "cubic inch",
    toAnchor: 1.6387064e-5,
    dimension: "volume"
  },
  "fl-oz": {
    name: "fluid ounce",
    toAnchor: 2.95735295625e-5,
    dimension: "volume"
  },
  cup: {
    name: "cup",
    toAnchor: 2.365882365e-4,
    dimension: "volume"
  },
  pnt: {
    name: "pint",
    toAnchor: 4.73176473e-4,
    dimension: "volume"
  },
  qt: {
    name: "quart",
    toAnchor: 9.46352946e-4,
    dimension: "volume"
  },
  gal: {
    name: "gallon",
    toAnchor: 3.785411784e-3,
    dimension: "volume"
  },
  ft3: {
    name: "cubic foot",
    toAnchor: 0.028316846592,
    dimension: "volume"
  },
  yd3: {
    name: "cubic yard",
    toAnchor: 0.764554857984,
    dimension: "volume"
  }
};
