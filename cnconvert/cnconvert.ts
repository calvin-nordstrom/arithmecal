import { unitRegistry } from "./registry";
import { Unit } from "./unit";

class Converter {
  private value: number;
  private fromUnit: Unit | null = null;

  constructor(value: number) {
    if (typeof value !== "number" || isNaN(value)) {
      throw new Error("Value must be a valid number.");
    }
    this.value = value;
  }

  from(unit: Unit): this {
    if (!unitRegistry[unit]) {
      throw new Error(`Unsupported 'from' unit: ${unit}`);
    }
    this.fromUnit = unit;
    return this;
  }

  to(unit: Unit): number {
    if (!this.fromUnit) {
      throw new Error("Source unit not specified. Use .from(unit) first.");
    }
    if (!unitRegistry[unit]) {
      throw new Error(`Unsupported 'to' unit: ${unit}`);
    }

    const fromDef = unitRegistry[this.fromUnit];
    const toDef = unitRegistry[unit];

    if (this.fromUnit === unit) return this.value;

    if (fromDef.dimension !== toDef.dimension) {
      throw new Error(
        `Cannot convert between incompatible dimensions: ${fromDef.dimension} and ${toDef.dimension}`
      );
    }

    // Convert to SI
    const siValue =
      typeof fromDef.toAnchor === "function"
        ? fromDef.toAnchor(this.value)
        : this.value * fromDef.toAnchor;

    // Convert from SI to target unit
    const result =
      typeof toDef.fromAnchor === "function"
        ? toDef.fromAnchor(siValue)
        : siValue / (toDef.toAnchor as number);

    return result;
  }
}

export function cnconvert(value: number): Converter {
  return new Converter(value);
}

export function getUnits(): string[] {
  return Object.keys(unitRegistry);
}

export function getUnitsByDimension(dimension: string): string[] {
  return Object.entries(unitRegistry)
    .filter(([, def]) => def.dimension === dimension)
    .map(([key]) => key);
}

export function getDimensions(): string[] {
  const dimensions = new Set<string>();
  Object.values(unitRegistry).forEach(def => dimensions.add(def.dimension));
  return Array.from(dimensions);
}
