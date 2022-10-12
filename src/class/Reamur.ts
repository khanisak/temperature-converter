import IBaseTemperature from '../interfaces/IBaseTemperature'
import IUnit from '../interfaces/IUnit'
import { Celcius } from './Celcius';
import { Delisle } from './Delisle';
import { Fahrenheit } from './Fahrenheit';
import { Kelvin } from './Kelvin';
import { Newton } from './Newton';
import { Rankine } from './Rankine';
import { Romer } from './Romer';
import Temperature from './Temperature'

class Reamur extends Temperature implements IBaseTemperature {
    unit: IUnit;

    constructor(value: number) {
        super(value);
        this.unit = Reamur.unit;
    }

    static unit = {
        name: 'Réamur',
        code: '°Ré'
    }

    toCelcius = () => new Celcius(this.value / 0.8);

    toDelisle = () => new Delisle((80 - this.value) * 1.875);

    toFahrenheit = () => new Fahrenheit(this.value * 2.25 + 32);

    toKelvin = () => new Kelvin(this.value / 0.8 + 273.15);

    toNewton = () => new Newton(this.value * 33 / 80);

    toRankine = () => new Rankine(this.value * 2.25 + 491.67);

    toReamur = () => this;

    toRomer = () => new Romer(this.value * 21 / 32 + 7.5);
}


export { Reamur }