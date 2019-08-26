import { Celcius } from './Celcius'
import { Fahrenheit } from './Fahrenheit'
import { Kelvin } from './Kelvin'
import { Reamur } from './Reamur'
import Unit from '../interface/Unit'

enum Temperatures { Celcius = 0, Fahrenheit, Kelvin, Reamur }
class Temperature {
    static unit = Temperatures
    static units: Unit[] = [
        Celcius.unit,
        Fahrenheit.unit,
        Kelvin.unit,
        Reamur.unit
    ]

    static _nothing(val: number): number { return val; };
    formula(): ((val: number) => number)[][] { // return array of function which return number
        return [
            [Temperature._nothing, Celcius.toFahrenheit, Celcius.toKelvin, Celcius.toReamur],
            [Fahrenheit.toCelcius, Temperature._nothing, Fahrenheit.toKelvin, Fahrenheit.toReamur],
            [Kelvin.toCelcius, Kelvin.toFahrenheit, Temperature._nothing, Kelvin.toReamur],
            [Reamur.toCelcius, Reamur.toFahrenheit, Reamur.toKelvin, Temperature._nothing]
        ]
    }

    convert(value: number, from: Temperatures, to: Temperatures): number {
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

// class Temperature implements Temperature {

//     static units = [
//         {
//             "code": "°C",
//             "name": "Celcius"
//         },
//         {
//             "code": "°F",
//             "name": "Fahrenheit"
//         },
//         {
//             "code": "K",
//             "name": "Kelvin"
//         },
//         {
//             "code": "°Ré",
//             "name": "Réamur"
//         }
//     ]

// }

export { Temperature, Temperatures }