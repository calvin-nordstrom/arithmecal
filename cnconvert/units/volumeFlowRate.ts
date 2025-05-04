import { UnitDefinition } from "../unit";

export const volumeFlowRateUnits: Record<string, UnitDefinition> = {
  "m3/s": {
    name: "cubic meter per second",
    toAnchor: 1,
    dimension: "volumeFlowRate"
  },
  "m3/min": {
    name: "cubic meter per minute",
    toAnchor: 1 / 60,
    dimension: "volumeFlowRate"
  },
  "m3/h": {
    name: "cubic meter per hour",
    toAnchor: 1 / 3600,
    dimension: "volumeFlowRate"
  },
  "km3/s": {
    name: "cubic kilometer per second",
    toAnchor: 1e9,
    dimension: "volumeFlowRate"
  },
  "kl/s": {
    name: "kiloliter per second",
    toAnchor: 1,
    dimension: "volumeFlowRate"
  },
  "kl/min": {
    name: "kiloliter per minute",
    toAnchor: 1 / 60,
    dimension: "volumeFlowRate"
  },
  "kl/h": {
    name: "kiloliter per hour",
    toAnchor: 1 / 3600,
    dimension: "volumeFlowRate"
  },
  "l/s": {
    name: "liter per second",
    toAnchor: 0.001,
    dimension: "volumeFlowRate"
  },
  "l/min": {
    name: "liter per minute",
    toAnchor: 0.001 / 60,
    dimension: "volumeFlowRate"
  },
  "l/h": {
    name: "liter per hour",
    toAnchor: 0.001 / 3600,
    dimension: "volumeFlowRate"
  },
  "dl/s": {
    name: "deciliter per second",
    toAnchor: 0.0001,
    dimension: "volumeFlowRate"
  },
  "cl/s": {
    name: "centiliter per second",
    toAnchor: 0.00001,
    dimension: "volumeFlowRate"
  },
  "ml/s": {
    name: "milliliter per second",
    toAnchor: 0.000001,
    dimension: "volumeFlowRate"
  },
  "cm3/s": {
    name: "cubic centimeter per second",
    toAnchor: 1e-6,
    dimension: "volumeFlowRate"
  },
  "mm3/s": {
    name: "cubic millimeter per second",
    toAnchor: 1e-9,
    dimension: "volumeFlowRate"
  },
  "tsp/s": {
    name: "teaspoon per second",
    toAnchor: 4.92892159375e-6,
    dimension: "volumeFlowRate"
  },
  "Tbs/s": {
    name: "tablespoon per second",
    toAnchor: 1.478676478125e-5,
    dimension: "volumeFlowRate"
  },
  "in3/s": {
    name: "cubic inch per second",
    toAnchor: 1.6387064e-5,
    dimension: "volumeFlowRate"
  },
  "in3/min": {
    name: "cubic inch per minute",
    toAnchor: 1.6387064e-5 / 60,
    dimension: "volumeFlowRate"
  },
  "in3/h": {
    name: "cubic inch per hour",
    toAnchor: 1.6387064e-5 / 3600,
    dimension: "volumeFlowRate"
  },
  "fl-oz/s": {
    name: "fluid ounce per second",
    toAnchor: 2.95735295625e-5,
    dimension: "volumeFlowRate"
  },
  "cup/s": {
    name: "cup per second",
    toAnchor: 2.365882365e-4,
    dimension: "volumeFlowRate"
  },
  "pnt/s": {
    name: "pint per second",
    toAnchor: 4.73176473e-4,
    dimension: "volumeFlowRate"
  },
  "qt/s": {
    name: "quart per second",
    toAnchor: 9.46352946e-4,
    dimension: "volumeFlowRate"
  },
  "gal/s": {
    name: "gallon per second",
    toAnchor: 3.785411784e-3,
    dimension: "volumeFlowRate"
  },
  "gal/min": {
    name: "gallon per minute",
    toAnchor: 3.785411784e-3 / 60,
    dimension: "volumeFlowRate"
  },
  "gal/h": {
    name: "gallon per hour",
    toAnchor: 3.785411784e-3 / 3600,
    dimension: "volumeFlowRate"
  },
  "ft3/s": {
    name: "cubic foot per second",
    toAnchor: 0.028316846592,
    dimension: "volumeFlowRate"
  },
  "ft3/min": {
    name: "cubic foot per minute",
    toAnchor: 0.028316846592 / 60,
    dimension: "volumeFlowRate"
  },
  "ft3/h": {
    name: "cubic foot per hour",
    toAnchor: 0.028316846592 / 3600,
    dimension: "volumeFlowRate"
  },
  "yd3/s": {
    name: "cubic yard per second",
    toAnchor: 0.764554857984,
    dimension: "volumeFlowRate"
  },
  "yd3/min": {
    name: "cubic yard per minute",
    toAnchor: 0.764554857984 / 60,
    dimension: "volumeFlowRate"
  },
  "yd3/h": {
    name: "cubic yard per hour",
    toAnchor: 0.764554857984 / 3600,
    dimension: "volumeFlowRate"
  },
};
