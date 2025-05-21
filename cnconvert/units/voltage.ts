import { UnitDefinition } from '../unit';

export const voltageUnits: Record<string, UnitDefinition> = {
  'V': {
    name: 'volt',
    toAnchor: 1,
    dimension: 'voltage'
  },
  'mV': {
    name: 'millivolt',
    toAnchor: 0.001,
    dimension: 'voltage'
  },
  'kV': {
    name: 'kilovolt',
    toAnchor: 1000,
    dimension: 'voltage'
  },
};
