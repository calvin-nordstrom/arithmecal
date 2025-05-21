import { UnitDefinition } from '../unit';

export const speedUnits: Record<string, UnitDefinition> = {
  'm/s': {
    name: 'meter per second',
    toAnchor: 1,
    dimension: 'speed'
  },
  'km/h': {
    name: 'kilometer per hour',
    toAnchor: 1000 / 3600,
    dimension: 'speed'
  },
  'mm/h': {
    name: 'millimeter per hour',
    toAnchor: 0.001 / 3600,
    dimension: 'speed'
  },
  'mph': {
    name: 'mile per hour',
    toAnchor: 1609.344 / 3600,
    dimension: 'speed'
  },
  'ft/s': {
    name: 'foot per second',
    toAnchor: 0.3048,
    dimension: 'speed'
  },
  'in/h': {
    name: 'inch per hour',
    toAnchor: 0.0254 / 3600,
    dimension: 'speed'
  },
  'knot': {
    name: 'knot',
    toAnchor: 1852 / 3600,
    dimension: 'speed'
  },
};
