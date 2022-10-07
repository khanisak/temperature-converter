import { Celcius } from "./class/Celcius";
import { Delisle } from "./class/Delisle";
import { Fahrenheit } from "./class/Fahrenheit";
import { Kelvin } from "./class/Kelvin";
import { Newton } from "./class/Newton";
import { Reamur } from "./class/Reamur";
import { Rankine } from "./class/Rankine";
import { Romer } from "./class/Romer";
import IUnit from "./interfaces/IUnit";


export const units: IUnit[] = [
  Celcius.unit,
  Delisle.unit,
  Fahrenheit.unit,
  Kelvin.unit,
  Reamur.unit,
  Newton.unit,
  Rankine.unit,
  Romer.unit,
];