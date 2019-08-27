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
    static toNewton(reamur: number = 1): number {
        return reamur * 33 / 80
    }
    static toRankine(reamur: number = 1): number {
        return reamur * 2.25 + 491.67
    }
    static toDelisle(reamur: number = 1): number {
        return (80 - reamur) * 1.875
    }
    static toRomer(reamur: number = 1): number {
        return reamur * 21 / 32 + 7.5
    }
}

export { Reamur }