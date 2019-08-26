import { Celcius } from './Celcius'
import { Fahrenheit } from './Fahrenheit'
import { Kelvin } from './Kelvin';
import { Reamur } from './Reamur'

enum Temperatures { Celcius = 0, Fahrenheit, Kelvin, Reamur }

abstract class Temperature {
    static names: string;
    static code: string;

    static _nothing(val: number): number { return val; };
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

//     static unit = {
//         Celcius: Temps.Celcius,
//         Fahrenheit: Temps.Fahrenheit,
//         Kelvin: Temps.Kelvin,
//         Réamur: Temps.Reamur
//     }

//     formula = () => {
//         return [
//             [this._nothing, Celcius.toFahrenheit, Celcius.toKelvin, Celcius.toReamur],
//             [Fahrenheit.toCelcius, this._nothing, Fahrenheit.toKelvin, Fahrenheit.toReamur],
//             [Kelvin.toCelcius, Kelvin.toFahrenheit, this._nothing, Kelvin.toReamur],
//             [Reamur.toCelcius, Reamur.toFahrenheit, Reamur.toKelvin, this._nothing]
//         ]
//     }

//     static convert = (value, from, to) => {
//         try {
//             const x = new Temperature();
//             let formula = x.formula();
//             try {
//                 formula = formula[from][to]
//                 if (!formula) throw 'err'
//             } catch (err) { throw 'No formula found! Please check unit supplied' }
//             return formula(value);
//         } catch (err) {
//             throw err
//         }
//     }

//     _nothing = (val) => { return val; }
// }

export { Temperature }