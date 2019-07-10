import Celcius from './Celcius'
import Fahrenheit from './Fahrenheit'
import Kelvin from './Kelvin';

class Temperature {

    static C = Celcius.order;
    static F = Fahrenheit.order;
    static K = Kelvin.order;

    formula = () => {
        return [
            [this._nothing, Celcius.toFahrenheit, Celcius.toKelvin],
            [Fahrenheit.toCelcius, this._nothing, Fahrenheit.toKelvin],
            [Kelvin.toCelcius, Kelvin.toFahrenheit, this._nothing]
        ]
    }

    static convert = (value, from, to) => {
        try {
            const x = new Temperature();
            let formula = x.formula();
            formula = formula[from][to]
            if(!formula)
                throw 'No formula found!'
            return formula(value);
        } catch (err) {
            throw err
        }
    }

    _nothing = (val) => { return val; }
}

export default Temperature