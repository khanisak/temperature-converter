import Temperature from './Temperature';
import IBaseTemperature from '../interfaces/IBaseTemperature'
import IUnit from '../interfaces/IUnit'
import { Celcius } from './Celcius';
import { Delisle } from './Delisle';
import { Fahrenheit } from './Fahrenheit';
import { Newton } from './Newton';
import { Reamur } from './Reamur';
import { Rankine } from './Rankine';
import { Romer } from './Romer';

class Kelvin extends Temperature implements IBaseTemperature {
    unit: IUnit;

    constructor(value: number) {
        super(value);
        this.unit = Kelvin.unit;
    }

    static unit = {
        name: 'Kelvin',
        code: '°K'
    }

    toCelcius = () => new Celcius(this.value - 273.15);

    toDelisle = () => new Delisle((373.15 - this.value) * 1.5);

    toFahrenheit = () => new Fahrenheit(((this.value - 273.15) * 9 / 5) + 32);

    toKelvin = () => this;

    toNewton = () => new Newton((this.value - 273.15) * 33 / 100);

    toRankine = () => new Rankine(this.value * 1.8);

    toReamur = () => new Reamur((this.value - 273.15) * 0.8);

    toRomer = () => new Romer(this.value * 1.8 - 459.67);
}

export { Kelvin }