import Unit from '../interface/Unit'

class Kelvin {
    static unit: Unit = {
        name: 'Kelvin',
        code: 'K'
    }
    static toFahrenheit(kelvin: number = 1): number {
        return ((kelvin - 273.15) * 9 / 5) + 32
    }
    static toCelcius(kelvin: number = 1): number {
        return kelvin - 273.15
    }
    static toReamur(kelvin: number = 1): number {
        return (kelvin - 273.15) * 0.8
    }
    static toNewton(kelvin: number = 1): number {
        return (kelvin - 273.15) * 33 / 100
    }
}

export { Kelvin }