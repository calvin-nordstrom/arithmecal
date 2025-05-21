import { UnitDefinition } from '../unit';

export const apparentPowerUnits: Record<string, UnitDefinition> = {
  'VA': {
    name: 'volt-ampere',
    toAnchor: 1,
    dimension: 'apparentPower'
  },
  'mVA': {
    name: 'millivolt-ampere',
    toAnchor: 0.001,
    dimension: 'apparentPower'
  },
  'kVA': {
    name: 'kilovolt-ampere',
    toAnchor: 1000,
    dimension: 'apparentPower'
  },
  'MVA': {
    name: 'megavolt-ampere',
    toAnchor: 1_000_000,
    dimension: 'apparentPower'
  },
  'GVA': {
    name: 'gigavolt-ampere',
    toAnchor: 1_000_000_000,
    dimension: 'apparentPower'
  },
};
