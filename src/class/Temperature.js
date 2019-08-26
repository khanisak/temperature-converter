import { Celcius } from './Celcius'
import { Fahrenheit } from './Fahrenheit'
import { Kelvin } from './Kelvin';
import { Reamur } from './Reamur'

class Temperature {

    static units = [
        {
            "code": "°C",
            "name": "Celcius"
        },
        {
            "code": "°F",
            "name": "Fahrenheit"
        },
        {
            "code": "K",
            "name": "Kelvin"
        },
        {
            "code": "°Ré",
            "name": "Réamur"
        }
    ]

    static unit = {
        Celcius: Celcius.order,
        Fahrenheit: Fahrenheit.order,
        Kelvin: Kelvin.order,
        Réamur: Reamur.order
    }

    formula = () => {
        return [
            [this._nothing, Celcius.toFahrenheit, Celcius.toKelvin, Celcius.toReamur],
            [Fahrenheit.toCelcius, this._nothing, Fahrenheit.toKelvin, Fahrenheit.toReamur],
            [Kelvin.toCelcius, Kelvin.toFahrenheit, this._nothing, Kelvin.toReamur],
            [Reamur.toCelcius, Reamur.toFahrenheit, Reamur.toKelvin, this._nothing]
        ]
    }

    static convert = (value, from, to) => {
        try {
            const x = new Temperature();
            let formula = x.formula();
            try {
                formula = formula[from][to]
                if (!formula) throw 'err'
            } catch (err) { throw 'No formula found! Please check unit supplied' }
            return formula(value);
        } catch (err) {
            throw err
        }
    }

    _nothing = (val) => { return val; }
}

export { Temperature }