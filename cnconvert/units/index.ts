import { areaUnits } from "./area";
import { lengthUnits } from "./length";
import { pressureUnits } from "./pressure";
import { temperatureUnits } from "./temperature";
import { volumeUnits } from "./volume";

export const allUnits = {
  ...areaUnits,
  ...lengthUnits,
  ...pressureUnits,
  ...temperatureUnits,
  ...volumeUnits,
};
