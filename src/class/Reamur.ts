import { Temperature } from './Temperature'

class Reamur extends Temperature {
    static temperature_name: string = 'Réamur'
    static temperature_code: string = '°Ré'

    static toCelcius(reamur: number = 1): number {
        return reamur / 0.8
    }
    static toFahrenheit(reamur: number = 1): number {
        return reamur * 2.25 + 32
    }
    static toKelvin = (reamur: number = 1): number {
        return reamur / 0.8 + 273.15
    }
}

export { Reamur }