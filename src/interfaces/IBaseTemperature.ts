import IUnit from "./IUnit";
import { Celcius } from "../class/Celcius";
import { Delisle } from "../class/Delisle";
import { Fahrenheit } from "../class/Fahrenheit";
import { Kelvin } from "../class/Kelvin";
import { Newton } from "../class/Newton";
import { Rankine } from "../class/Rankine";
import { Reamur } from "../class/Reamur";
import { Romer } from "../class/Romer";

export default interface IBaseTemperature {
  unit: IUnit;
  toCelcius: () => Celcius;
  toDelisle: () => Delisle;
  toFahrenheit: () => Fahrenheit;
  toKelvin: () => Kelvin;
  toNewton: () => Newton;
  toRankine: () => Rankine;
  toReamur: () => Reamur;
  toRomer: () => Romer;
}