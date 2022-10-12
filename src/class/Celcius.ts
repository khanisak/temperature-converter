import IBaseTemperature from '../interfaces/IBaseTemperature'
import IUnit from '../interfaces/IUnit'
import { Delisle } from './Delisle';
import { Fahrenheit } from './Fahrenheit';
import { Kelvin } from './Kelvin';
import { Newton } from './Newton';
import { Rankine } from './Rankine';
import { Reamur } from './Reamur';
import { Romer } from './Romer';
import Temperature from './Temperature'

class Celcius extends Temperature implements IBaseTemperature {
    unit: IUnit

    constructor(value: number) {
        super(value);
        this.unit = Celcius.unit;
    }

    static unit = {
        name: 'Celcius',
        code: '°C'
    }

    toCelcius = () => this;

    toDelisle = () => new Delisle((100 - this.value) * 1.5);

    toFahrenheit = () => new Fahrenheit((this.value * 9 / 5) + 32);

    toKelvin = () => new Kelvin(this.value + 273.15);

    toNewton = () => new Newton(this.value * 33 / 100);

    toRankine = () => new Rankine(1.8 * this.value + 491.67)

    toReamur = () => new Reamur(this.value * 0.8);

    toRomer = () => new Romer(this.value * 21 / 40 + 7.5);
}

export { Celcius }