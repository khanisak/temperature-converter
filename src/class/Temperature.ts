import { Celcius } from './Celcius'
import { Fahrenheit } from './Fahrenheit'
import { Kelvin } from './Kelvin'
import { Reamur } from './Reamur'
import { Newton } from './Newton'
import { Rankine } from './Rankine'
import Unit from '../interface/Unit'

enum Temperatures { Celcius = 0, Fahrenheit, Kelvin, Reamur, Newton, Rankine}
class Temperature {
    static unit = Temperatures
    static units: Unit[] = [
        Celcius.unit,
        Fahrenheit.unit,
        Kelvin.unit,
        Reamur.unit,
        Newton.unit,
        Rankine.unit
    ]

    static _nothing(val: number): number { return val; };
    formula(): ((val: number) => number)[][] { // return array of function which return number
        return [
            [Temperature._nothing, Celcius.toFahrenheit, Celcius.toKelvin, Celcius.toReamur, Celcius.toNewton, Celcius.toRankine],
            [Fahrenheit.toCelcius, Temperature._nothing, Fahrenheit.toKelvin, Fahrenheit.toReamur,Fahrenheit.toNewton, Fahrenheit.toRankine],
            [Kelvin.toCelcius, Kelvin.toFahrenheit, Temperature._nothing, Kelvin.toReamur, Kelvin.toNewton, Kelvin.toRankine],
            [Reamur.toCelcius, Reamur.toFahrenheit, Reamur.toKelvin, Temperature._nothing, Reamur.toNewton, Reamur.toRankine],
            [Newton.toCelcius, Newton.toFahrenheit, Newton.toKelvin, Newton.toReamur, Temperature._nothing, Newton.toRankine],
            [Rankine.toCelcius, Rankine.toFahrenheit, Rankine.toKelvin, Rankine.toReamur, Rankine.toNewton, Temperature._nothing]
        ]
    }

    convert(value: number, from: Temperatures, to: Temperatures): number {
        try {
            const x = new Temperature();
            let formulas = x.formula();
            try {
                let formula = formulas[from][to]
                console.log(formula.name)
                console.log(formula)
                if (!formula) throw 'err'
                return formula(value);
            } catch (err) { throw 'No formula found! Please check unit supplied' }
        } catch (err) {
            throw err;
        }
    }
}

export { Temperature, Temperatures }