import Unit from '../interface/Unit'

class Newton {
    static unit: Unit = {
        name: 'Newton',
        code: '°N'
    }

    static toCelcius(newton: number = 1): number {
        return newton * 100 / 33
    }

    static toFahrenheit(newton: number = 1): number {
        return newton * 60 / 11 + 32
    }

    static toKelvin(newton: number = 1): number {
        return newton * 100 / 33 + 273.15
    }

    static toReamur(newton: number = 1): number {
        return newton * 80 / 33
    }

    static toRankine(newton: number = 1): number {
        return newton * 60 / 11 + 491.67
    }

    static toDelisle(newton: number = 1): number {
        return (33 - newton) * 50 / 11
    }

    static toRomer(newton: number = 1): number {
        return newton * 35 / 22 + 7.5
    }
}

export { Newton }