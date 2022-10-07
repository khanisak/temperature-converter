import IBaseTemperature from '../interfaces/IBaseTemperature';
import IUnit from '../interfaces/IUnit';
import { Celcius } from './Celcius';
import { Delisle } from './Delisle';
import { Fahrenheit } from './Fahrenheit';
import { Kelvin } from './Kelvin';
import { Newton } from './Newton';
import { Rankine } from './Rankine';
import { Reamur } from './Reamur';
import Temperature from './Temperature';

class Romer extends Temperature implements IBaseTemperature {
    unit: IUnit

    constructor(value: number) {
        super(value);
        this.unit = Romer.unit;
    }

    static unit = {
        name: 'Rømer',
        code: '°Rø'
    }

    toCelcius = () => new Celcius((this.value - 7.5) * 40 / 21);

    toDelisle = () => new Delisle((60 - this.value) * 20 / 7);

    toFahrenheit = () => new Fahrenheit((this.value - 7.5) * 24 / 7 + 32);

    toKelvin = () => new Kelvin((this.value - 7.5) * 40 / 21 + 273.15);

    toNewton = () => new Newton((this.value - 7.5) * 22 / 35);

    toRankine = () => new Rankine((this.value - 7.5) * 24 / 7 + 491.67);

    toReamur = () => new Reamur((this.value - 7.5) * 32 / 21);

    toRomer = () => this;
}

export { Romer }