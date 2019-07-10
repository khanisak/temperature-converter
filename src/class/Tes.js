import T from '../index'
import Temperature from './Temperature'

Temperature.convert(1, Temperature.unit.Celcius, Temperature.unit.Fahrenheit) // ini kalo di pencet tombol titik, keluar helper method nya
T.convert(1, T.unit.Celcius, T.unit.Fahrenheit) //ini ga keluar kenapa ya?

console.log(T.convert(1, T.unit.Celcius, T.unit.Fahrenheit))