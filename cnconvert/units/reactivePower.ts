import { UnitDefinition } from '../unit';

export const reactivePowerUnits: Record<string, UnitDefinition> = {
  'VAR': {
    name: 'volt-ampere reactive',
    toAnchor: 1,
    dimension: 'reactivePower'
  },
  'mVAR': {
    name: 'millivolt-ampere reactive',
    toAnchor: 0.001,
    dimension: 'reactivePower'
  },
  'kVAR': {
    name: 'kilovolt-ampere reactive',
    toAnchor: 1000,
    dimension: 'reactivePower'
  },
  'MVAR': {
    name: 'megavolt-ampere reactive',
    toAnchor: 1_000_000,
    dimension: 'reactivePower'
  },
  'GVAR': {
    name: 'gigavolt-ampere reactive',
    toAnchor: 1_000_000_000,
    dimension: 'reactivePower'
  },
};
