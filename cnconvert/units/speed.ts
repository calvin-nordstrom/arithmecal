import { UnitDefinition } from '../unit';

export const speedUnits: Record<string, UnitDefinition> = {
  'm/s': {
    name: 'meter per second',
    toAnchor: 1,
    dimension: 'speed'
  },
  'm/min': {
    name: 'meter per minute',
    toAnchor: 1 / 60,
    dimension: 'speed'
  },
  'km/s': {
    name: 'kilometer per second',
    toAnchor: 1000,
    dimension: 'speed'
  },
  'km/h': {
    name: 'kilometer per hour',
    toAnchor: 1000 / 3600,
    dimension: 'speed'
  },
  'cm/s': {
    name: 'centimeter per second',
    toAnchor: 0.01,
    dimension: 'speed'
  },
  'cm/min': {
    name: 'centimeter per minute',
    toAnchor: 0.01 / 60,
    dimension: 'speed'
  },
  'mm/s': {
    name: 'millimeter per second',
    toAnchor: 0.001,
    dimension: 'speed'
  },
  'mm/min': {
    name: 'millimeter per minute',
    toAnchor: 0.001 / 60,
    dimension: 'speed'
  },
  'mi/s': {
    name: 'mile per second',
    toAnchor: 1609.344,
    dimension: 'speed'
  },
  'mi/min': {
    name: 'mile per minute',
    toAnchor: 1609.344 / 60,
    dimension: 'speed'
  },
  'mph': {
    name: 'mile per hour',
    toAnchor: 1609.344 / 3600,
    dimension: 'speed'
  },
  'in/s': {
    name: 'inch per second',
    toAnchor: 0.0254,
    dimension: 'speed'
  },
  'in/min': {
    name: 'inch per minute',
    toAnchor: 0.0254 / 60,
    dimension: 'speed'
  },
  'ft/s': {
    name: 'foot per second',
    toAnchor: 0.3048,
    dimension: 'speed'
  },
  'ft/min': {
    name: 'foot per minute',
    toAnchor: 0.3048 / 60,
    dimension: 'speed'
  },
  'yd/s': {
    name: 'yard per second',
    toAnchor: 0.9144,
    dimension: 'speed'
  },
  'yd/min': {
    name: 'yard per minute',
    toAnchor: 0.9144 / 60,
    dimension: 'speed'
  },
  'knot': {
    name: 'knot',
    toAnchor: 1852 / 3600,
    dimension: 'speed'
  },
  'nmi/h': {
    name: 'nautical mile per hour',
    toAnchor: 1852 / 3600,
    dimension: 'speed'
  },
};
