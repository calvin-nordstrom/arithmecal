import { UnitDefinition } from '../unit';

export const areaUnits: Record<string, UnitDefinition> = {
  'm^2': {
    name: 'square meter',
    toAnchor: 1,
    dimension: 'area'
  },
  'km^2': {
    name: 'square kilometer',
    toAnchor: 1_000_000,
    dimension: 'area'
  },
  'cm^2': {
    name: 'square centimeter',
    toAnchor: 0.0001,
    dimension: 'area'
  },
  'mm^2': {
    name: 'square millimeter',
    toAnchor: 0.000001,
    dimension: 'area'
  },
  'ft^2': {
    name: 'square foot',
    toAnchor: 0.09290304,
    dimension: 'area'
  },
  'in^2': {
    name: 'square inch',
    toAnchor: 0.00064516,
    dimension: 'area'
  },
  'yd^2': {
    name: 'square yard',
    toAnchor: 0.83612736,
    dimension: 'area'
  },
  'mi^2': {
    name: 'square mile',
    toAnchor: 2_589_988.110336,
    dimension: 'area'
  },
  'acre': {
    name: 'acre',
    toAnchor: 4046.8564224,
    dimension: 'area'
  },
  'ha': {
    name: 'hectare',
    toAnchor: 10000,
    dimension: 'area'
  },
};
