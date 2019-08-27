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
    static toNewton(fahrenheit: number = 1): number {
        return (fahrenheit - 32) * 11 / 60
    }
    static toRankine(fahrenheit: number = 1): number {
        return fahrenheit + 459.67
    }
    static toDelisle(fahrenheit: number = 1): number {
        return (212 - fahrenheit) * 5 / 6
    }
    static toRomer(fahrenheit: number = 1): number {
        return (fahrenheit - 32) * 7 / 24 + 7.5
    }
}

export { Fahrenheit }