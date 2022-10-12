import IBaseTemperature from '../interfaces/IBaseTemperature';
import IUnit from '../interfaces/IUnit';
import { Celcius } from './Celcius';
import { Delisle } from './Delisle';
import { Fahrenheit } from './Fahrenheit';
import { Kelvin } from './Kelvin';
import { Newton } from './Newton';
import { Reamur } from './Reamur';
import { Romer } from './Romer';
import Temperature from './Temperature';

class Rankine extends Temperature implements IBaseTemperature {
    unit: IUnit

    constructor(value: number) {
        super(value);
        this.unit = Rankine.unit
    }

    static unit = {
        name: 'Rankine',
        code: '°Ra'
    }

    toCelcius = () => new Celcius(this.value / 1.8 + 273.15);

    toDelisle = () => new Delisle((671.67 - this.value) * 5 / 6);

    toFahrenheit = () => new Fahrenheit(this.value - 459.67);

    toKelvin = () => new Kelvin(this.value / 1.8);

    toNewton = () => new Newton((this.value - 491.67) * 11 / 60);

    toRankine = () => this;

    toReamur = () => new Reamur((this.value / 1.8 + 273.15) * 0.8)

    toRomer = () => new Romer((this.value - 491.67) * 7 / 24 + 7.5)
}

export { Rankine }