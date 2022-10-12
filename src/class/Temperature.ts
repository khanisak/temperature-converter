export enum Temperatures {
  Celcius,
  Fahrenheit,
  Kelvin,
  Reamur,
  Newton,
  Rankine,
  Delisle,
  Romer
}

class Temperature {
  value: number;

  constructor(value: number) {
    this.value = value;
  }
}

export default Temperature;