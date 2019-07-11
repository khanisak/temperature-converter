class Fahrenheit {
    static order = 1
    static toKelvin = (fahrenheit = 1) => {
        return ((fahrenheit - 32) * 5 / 9) + 273.15
    }
    static toCelcius = (fahrenheit = 1) => {
        return (fahrenheit - 32) * 5 / 9
    }
    static toReamur = (fahrenheit = 1) => {
        return (fahrenheit - 32) * 0.44
    }
}

export { Fahrenheit }