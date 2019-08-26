import { Temperature } from './Temperature'

class Kelvin extends Temperature {
    static temperature_name: string = 'Kelvin'
    static temperature_code: string = 'K'

    static toFahrenheit(kelvin: number = 1): number {
        return ((kelvin - 273.15) * 9 / 5) + 32
    }
    static toCelcius(kelvin: number = 1): number {
        return kelvin - 273.15
    }
    static toReamur(kelvin: number = 1): number {
        return (kelvin - 273.15) * 0.8
    }
}

export { Kelvin }