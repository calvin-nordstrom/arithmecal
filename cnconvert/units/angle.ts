import { UnitDefinition } from '../unit';

export const angleUnits: Record<string, UnitDefinition> = {
  'rad': {
    name: 'radian',
    toAnchor: 1,
    dimension: 'angle'
  },
  'mil': {
    name: 'mil',
    toAnchor: Math.PI / 3200,
    dimension: 'angle'
  },
  'mrad': {
    name: 'milliradian',
    toAnchor: 0.001,
    dimension: 'angle'
  },
  'µrad': {
    name: 'microradian',
    toAnchor: 1e-6,
    dimension: 'angle'
  },
  'gon': {
    name: 'gradian',
    toAnchor: Math.PI / 200,
    dimension: 'angle'
  },
  'deg': {
    name: 'degree',
    toAnchor: Math.PI / 180,
    dimension: 'angle'
  },
  'turn': {
    name: 'turn',
    toAnchor: 2 * Math.PI,
    dimension: 'angle'
  },
  'arcmin': {
    name: 'arcminute',
    toAnchor: Math.PI / 10_800,
    dimension: 'angle'
  },
  'arcsec': {
    name: 'arcsecond',
    toAnchor: Math.PI / 648_000,
    dimension: 'angle'
  },
};
