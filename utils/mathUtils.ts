export function getDecimalCount(
  value: number
): number {
  if (!isFinite(value)) {
    return 0;
  }
  const numStr = value.toString();
  if (!numStr.includes('.')) {
    return 0;
  }
  return numStr.split('.')[1].length;
}

export function countConsecutiveDecimalZeroes(
  value: number
): number {
  if (!isFinite(value)) {
    return 0;
  }

  const numStr = value.toString();
  if (!numStr.includes('.')) {
    return 0;
  }

  const decimalPart = numStr.split('.')[1];
  const zeroStreaks = decimalPart.match(/0+/g);
  if (!zeroStreaks) {
    return 0;
  }

  return Math.max(...zeroStreaks.map(z => z.length));
}

export function clamp(
  value: number, 
  min: number, 
  max: number
) {
  return Math.max(min, Math.min(max, value));
}

export function map(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
) {
  return ((value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin);
}
