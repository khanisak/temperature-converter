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
}

export { Celcius }