class Reamur {
    static order = 3
    static toCelcius = (reamur = 1) => {
        return reamur / 0.8
    }
    static toFahrenheit = (reamur = 1) => {
        return reamur * 2.25 + 32
    }
    static toKelvin = (reamur = 1) => {
        return reamur / 0.8 + 273.15
    }
}

export { Reamur }