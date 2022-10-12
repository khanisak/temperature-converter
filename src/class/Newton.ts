import IBaseTemperature from '../interfaces/IBaseTemperature'
import IUnit from '../interfaces/IUnit'
import { Celcius } from './Celcius'
import { Delisle } from './Delisle'
import { Fahrenheit } from './Fahrenheit'
import { Kelvin } from './Kelvin'
import { Rankine } from './Rankine'
import { Reamur } from './Reamur'
import { Romer } from './Romer'
import Temperature from './Temperature'

class Newton extends Temperature implements IBaseTemperature {
    unit: IUnit

    constructor(value: number) {
        super(value)
        this.unit = Newton.unit;
    }

    static unit = {
        name: 'Newton',
        code: '°N'
    }

    toCelcius = () => new Celcius(this.value * 100 / 33);

    toDelisle = () => new Delisle((33 - this.value) * 50 / 11);

    toFahrenheit = () => new Fahrenheit(this.value * 60 / 11 + 32);

    toKelvin = () => new Kelvin(this.value * 100 / 33 + 273.15);

    toNewton = () => this;

    toReamur = () => new Reamur(this.value * 80 / 33);

    toRankine = () => new Rankine(this.value * 60 / 11 + 491.67);

    toRomer = () => new Romer(this.value * 35 / 22 + 7.5);
}

export { Newton }