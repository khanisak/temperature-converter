class Celcius {
    static order = 0
    static toFahrenheit = (celcius = 1) => {
        return (celcius * 9 / 5) + 32
    }
    static toKelvin = (celcius = 1) => {
        return celcius + 273.15
    }
}

export default Celcius