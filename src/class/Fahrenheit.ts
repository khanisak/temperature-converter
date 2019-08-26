import Unit from '../interface/Unit'

class Fahrenheit {
    static unit: Unit = {
        name: 'Fahrenheit',
        code: '°F'
    }

    static toKelvin(fahrenheit: number = 1): number {
        return ((fahrenheit - 32) * 5 / 9) + 273.15
    }
    static toCelcius(fahrenheit: number = 1): number {
        return (fahrenheit - 32) * 5 / 9
    }
    static toReamur(fahrenheit: number = 1): number {
        return (fahrenheit - 32) * 0.44
    }
}

export { Fahrenheit }