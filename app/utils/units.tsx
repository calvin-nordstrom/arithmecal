const convert = require('convert-units');

export const getUnits = (category: string): string[] | [] => {
  try {
    const units = convert().list(category);
    if (units) {
      return units.map((unit: { abbr: string; }) => unit.abbr);
    } else {
      console.warn(`No units found for category: ${category}`);
      return [];
    }
  } catch (error) {
    console.error(`Error fetching units for category "${category}":`, error);
    return [];
  }
};

export const lengthUnits = getUnits('length');
export const areaUnits = getUnits('area');
export const massUnits = getUnits('mass');
export const volumeUnits = getUnits('volume');
export const eachUnits = getUnits('each');
export const temperatureUnits = getUnits('temperature');
export const timeUnits = getUnits('time');
export const digitalUnits = getUnits('digital');
export const partsPerUnits = getUnits('partsPer');
export const speedUnits = getUnits('speed');
export const paceUnits = getUnits('pace');
export const pressureUnits = getUnits('pressure');
export const currentUnits = getUnits('current');
export const voltageUnits = getUnits('voltage');
export const powerUnits = getUnits('power');
export const reactivePowerUnits = getUnits('reactivePower');
export const apparentPowerUnits = getUnits('apparentPower');
export const energyUnits = getUnits('energy');
export const reactiveEnergyUnits = getUnits('reactiveEnergy');
export const volumeFlowRateUnits = getUnits('volumeFlowRate');
export const illuminanceUnits = getUnits('illuminance');
export const frequencyUnits = getUnits('frequency');
export const angleUnits = getUnits('angle');
