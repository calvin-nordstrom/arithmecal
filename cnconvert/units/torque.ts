import { UnitDefinition } from '../unit';

export const torqueUnits: Record<string, UnitDefinition> = {
  'N-m': {
    name: 'newton meter',
    toAnchor: 1,
    dimension: 'torque'
  },
  'kN-m': {
    name: 'kilonewton meter',
    toAnchor: 1000,
    dimension: 'torque'
  },
  'mN-m': {
    name: 'millinewton meter',
    toAnchor: 0.001,
    dimension: 'torque'
  },
  'kgf-m': {
    name: 'kilogram-force meter',
    toAnchor: 9.80665,
    dimension: 'torque'
  },
  'gf-cm': {
    name: 'gram-force centimeter',
    toAnchor: 0.0000980665,
    dimension: 'torque'
  },
  'lbf-ft': {
    name: 'pound-force foot',
    toAnchor: 1.3558179483314004,
    dimension: 'torque'
  },
  'lbf-in': {
    name: 'pound-force inch',
    toAnchor: 0.1129848290276167,
    dimension: 'torque'
  },
  'ozf-in': {
    name: 'ounce-force inch',
    toAnchor: 0.0070615518742254,
    dimension: 'torque'
  },
};
