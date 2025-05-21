import { UnitDefinition } from '../unit';

export const illuminanceUnits: Record<string, UnitDefinition> = {
  'lx': {
    name: 'lux',
    toAnchor: 1,
    dimension: 'illuminance'
  },
  'ph': {
    name: 'phot',
    toAnchor: 10_000,
    dimension: 'illuminance'
  },
  'fc': {
    name: 'foot-candle',
    toAnchor: 10.76391,
    dimension: 'illuminance'
  },
};
