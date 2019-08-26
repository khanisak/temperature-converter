import Unit from '../interface/Unit'

class Reamur {
    static unit: Unit = {
        name: 'Réamur',
        code: '°Ré'
    }
    static toCelcius(reamur: number = 1): number {
        return reamur / 0.8
    }
    static toFahrenheit(reamur: number = 1): number {
        return reamur * 2.25 + 32
    }
    static toKelvin(reamur: number = 1): number {
        return reamur / 0.8 + 273.15
    }
}

export { Reamur }