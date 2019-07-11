class Kelvin {
    static order = 2
    static toFahrenheit = (kelvin = 1) => {
        return ((kelvin - 273.15) * 9 / 5) + 32
    }
    static toCelcius = (kelvin = 1) => {
        return kelvin - 273.15
    }
    static toReamur = (kelvin = 1) => {
        return (kelvin - 273.15) * 0.8
    }
}

export { Kelvin }