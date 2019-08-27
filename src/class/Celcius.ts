import Unit from '../interface/Unit'

class Celcius {
    static unit: Unit = {
        name: 'Celcius',
        code: '°C'
    }

    static toFahrenheit(celcius: number = 1): number {
        return (celcius * 9 / 5) + 32
    }

    static toKelvin(celcius: number = 1): number {
        return celcius + 273.15
    }

    static toReamur(celcius: number = 1): number {
        return celcius * 0.8
    }

    static toNewton(celcius: number = 1): number {
        return celcius * 33/100
    }

    static toRankine(celcius: number = 1): number {
        return 1.8 * celcius + 491.67
    }
}

export { Celcius }