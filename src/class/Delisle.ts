import Temperature from './Temperature'
import IBaseTemperature from '../interfaces/IBaseTemperature'
import IUnit from '../interfaces/IUnit'
import { Celcius } from './Celcius';
import { Fahrenheit } from './Fahrenheit';
import { Kelvin } from './Kelvin';
import { Newton } from './Newton';
import { Reamur } from './Reamur';
import { Rankine } from './Rankine';
import { Romer } from './Romer';

class Delisle extends Temperature implements IBaseTemperature {
    unit: IUnit;

    constructor(value: number) {
        super(value);
        this.unit = Delisle.unit
    }

    static unit = {
        name: 'Delisle',
        code: '°De'
    }

    toCelcius = () => new Celcius(100 - this.value * 2 / 3);

    toDelisle = () => this;

    toFahrenheit = () => new Fahrenheit(212 - this.value * 1.2);

    toKelvin = () => new Kelvin(373.15 - this.value * 2 / 3);

    toNewton = () => new Newton(33 - this.value * 0.22);

    toRankine = () => new Rankine(671.67 - this.value * 1.2);

    toReamur = () => new Reamur(80 - this.value * 8 / 15);

    toRomer = () => new Romer(60 - this.value * 0.35);

}

export { Delisle }