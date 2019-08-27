import { Celcius } from './Celcius'
import { Fahrenheit } from './Fahrenheit'
import { Kelvin } from './Kelvin'
import { Reamur } from './Reamur'
import { Newton } from './Newton'
import { Rankine } from './Rankine'
import { Delisle } from './Delisle'
import { Romer } from './Romer'
import Unit from '../interface/Unit'

enum Temperatures { Celcius = 0, Fahrenheit, Kelvin, Reamur, Newton, Rankine, Delisle, Romer }
class Temperature {
    static unit = {
        Celcius: Temperatures.Celcius, Fahrenheit: Temperatures.Fahrenheit,
        Kelvin: Temperatures.Kelvin, Reamur: Temperatures.Reamur,
        Newton: Temperatures.Newton, Rankine: Temperatures.Rankine,
        Delisle: Temperatures.Delisle, Romer: Temperatures.Delisle
    }
    static units: Unit[] = [
        Celcius.unit,
        Fahrenheit.unit,
        Kelvin.unit,
        Reamur.unit,
        Newton.unit,
        Rankine.unit,
        Delisle.unit,
        Romer.unit
    ];

    static _nothing(val: number): number { return val; };
    formula(): ((val: number) => number)[][] { // return array of function which return number
        return [
            [Temperature._nothing, Celcius.toFahrenheit, Celcius.toKelvin, Celcius.toReamur, Celcius.toNewton, Celcius.toRankine, Celcius.toDelisle, Celcius.toRomer],
            [Fahrenheit.toCelcius, Temperature._nothing, Fahrenheit.toKelvin, Fahrenheit.toReamur, Fahrenheit.toNewton, Fahrenheit.toRankine, Fahrenheit.toDelisle, Fahrenheit.toRomer],
            [Kelvin.toCelcius, Kelvin.toFahrenheit, Temperature._nothing, Kelvin.toReamur, Kelvin.toNewton, Kelvin.toRankine, Kelvin.toDelisle, Kelvin.toRomer],
            [Reamur.toCelcius, Reamur.toFahrenheit, Reamur.toKelvin, Temperature._nothing, Reamur.toNewton, Reamur.toRankine, Reamur.toDelisle, Reamur.toRomer],
            [Newton.toCelcius, Newton.toFahrenheit, Newton.toKelvin, Newton.toReamur, Temperature._nothing, Newton.toRankine, Newton.toDelisle, Newton.toRomer],
            [Rankine.toCelcius, Rankine.toFahrenheit, Rankine.toKelvin, Rankine.toReamur, Rankine.toNewton, Temperature._nothing, Rankine.toDelisle, Rankine.toRomer],
            [Delisle.toCelcius, Delisle.toFahrenheit, Delisle.toKelvin, Delisle.toReamur, Delisle.toNewton, Delisle.toRankine, Temperature._nothing, Delisle.toRomer],
            [Romer.toCelcius, Romer.toFahrenheit, Romer.toKelvin, Romer.toReamur, Romer.toNewton, Romer.toRankine, Romer.toDelisle, Temperature._nothing]
        ]
    }

    static convert(value: number, from: Temperatures, to: Temperatures): number {
        try {
            const x = new Temperature();
            let formulas = x.formula();
            try {
                let formula = formulas[from][to]
                if (!formula) throw 'err'
                return formula(value);
            } catch (err) { throw 'No formula found! Please check unit supplied' }
        } catch (err) {
            throw err;
        }
    }
}

export { Temperature, Temperatures }