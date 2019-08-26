import { Temperature, Temperatures } from './class/Temperature'
import { Celcius } from './class/Celcius'
import { Fahrenheit } from './class/Fahrenheit'
import { Kelvin } from './class/Kelvin'

export default Temperature
export {
    Celcius, Fahrenheit, Kelvin
}


const x = new Temperature();
console.log(x.convert(1, Temperature.unit.Celcius, Temperatures.Fahrenheit))
console.log(Temperature.units)
console.log(Temperature.unit)