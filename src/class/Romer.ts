import Unit from '../interface/Unit'

class Romer {
    static unit: Unit = {
        name: 'Rømer',
        code: '°Rø'
    }

    static toCelcius(romer: number = 1): number {
        return (romer - 7.5) * 40 / 21
    }

    static toFahrenheit(romer: number = 1): number {
        return (romer - 7.5) * 24 / 7 + 32
    }

    static toKelvin(romer: number = 1): number {
        return (romer - 7.5) * 40 / 21 + 273.15
    }

    static toReamur(romer: number = 1): number {
        return (romer - 7.5) * 32 / 21
    }

    static toNewton(romer: number = 1): number {
        return (romer - 7.5) * 22 / 35
    }

    static toRankine(romer: number = 1): number {
        return (romer - 7.5) * 24 / 7 + 491.67
    }

    static toDelisle(romer: number = 1): number {
        return (60 - romer) * 20 / 7
    }
}

export { Romer }