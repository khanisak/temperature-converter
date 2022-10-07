import Temperature from './Temperature';
import IBaseTemperature from '../interfaces/IBaseTemperature'
import IUnit from '../interfaces/IUnit'
import { Celcius } from './Celcius';
import { Delisle } from './Delisle';
import { Kelvin } from './Kelvin';
import { Newton } from './Newton';
import { Reamur } from './Reamur';
import { Rankine } from './Rankine';
import { Romer } from './Romer';

class Fahrenheit extends Temperature implements IBaseTemperature {
    unit: IUnit;

    constructor(value: number) {
        super(value)
        this.unit = Fahrenheit.unit
    }

    static unit = {
        name: 'Fahrenheit',
        code: '°F'
    }

    toCelcius = () => new Celcius((this.value - 32) * 5 / 9);

    toDelisle = () => new Delisle((212 - this.value) * 5 / 6);

    toFahrenheit = () => this;

    toKelvin = () => new Kelvin(((this.value - 32) * 5 / 9) + 273.15);

    toNewton = () => new Newton((this.value - 32) * 11 / 60);

    toRankine = () => new Rankine(this.value + 459.67);

    toReamur = () => new Reamur((this.value - 32) * 0.44);

    toRomer = () => new Romer((this.value - 32) * 7 / 24 + 7.5);

}

export { Fahrenheit }