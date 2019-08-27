import Unit from '../interface/Unit'

class Rankine {
    static unit: Unit = {
        name: 'Rankine',
        code: '°Ra'
    }

    static toCelcius(rankine: number = 1): number {
        return rankine / 1.8 + 273.15
    }

    static toFahrenheit(rankine: number = 1): number {
        return rankine - 459.67
    }

    static toKelvin(rankine: number = 1): number {
        return rankine / 1.8
    }

    static toReamur(rankine: number = 1): number {
        return (rankine / 1.8 + 273.15) * 0.8
    }

    static toNewton(rankine: number = 1): number {
        return (rankine - 491.67) * 11 / 60
    }

    static toDelisle(rankine: number = 1): number {
        return (671.67 - rankine) * 5 / 6
    }

    static toRomer(rankine: number = 1): number {
        return (rankine - 491.67) * 7 / 24 + 7.5
    }
}

export { Rankine }