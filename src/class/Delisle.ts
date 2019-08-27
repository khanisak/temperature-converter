import Unit from '../interface/Unit'

class Delisle {
    static unit: Unit = {
        name: 'Delisle',
        code: '°De'
    }

    static toCelcius(delisle: number = 1): number {
        return 100 - delisle * 2 / 3
    }

    static toFahrenheit(delisle: number = 1): number {
        return 212 - delisle * 1.2
    }

    static toKelvin(delisle: number = 1): number {
        return 373.15 - delisle * 2 / 3
    }

    static toReamur(delisle: number = 1): number {
        return 80 - delisle * 8 / 15
    }

    static toNewton(delisle: number = 1): number {
        return 33 - delisle * 0.22
    }

    static toRankine(delisle: number = 1): number {
        return 671.67 - delisle * 1.2
    }
}

export { Delisle }