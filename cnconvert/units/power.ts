import { UnitDefinition } from '../unit';

export const powerUnits: Record<string, UnitDefinition> = {
  'W': {
    name: 'watt',
    toAnchor: 1,
    dimension: 'power'
  },
  'mW': {
    name: 'milliwatt',
    toAnchor: 0.001,
    dimension: 'power'
  },
  'kW': {
    name: 'kilowatt',
    toAnchor: 1000,
    dimension: 'power'
  },
  'MW': {
    name: 'megawatt',
    toAnchor: 1_000_000,
    dimension: 'power'
  },
  'GW': {
    name: 'gigawatt',
    toAnchor: 1_000_000_000,
    dimension: 'power'
  },
  'ft-lb/s': {
    name: 'foot-pound per second',
    toAnchor: 1.3558179483,
    dimension: 'power'
  },
  'hp': {
    name: 'horsepower (mechanical)',
    toAnchor: 745.69987158227022,
    dimension: 'power'
  },
  'PS': {
    name: 'Pferdestärke (metric horsepower)',
    toAnchor: 735.49875,
    dimension: 'power'
  },
  'Btu/s': {
    name: 'British thermal unit per second',
    toAnchor: 1055.05585,
    dimension: 'power'
  },
};
