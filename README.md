# Temperature Converter

Lightweight javascript library to calculate Temperature values.

### Installation
With [npm](https://www.npmjs.com/ "npm") : 

`npm install --save @khanisak/temperature-converter`

### Usage
```javascript
import { Celcius, Fahrenheit, Kelvin } from '@khanisak/temperature-converter';
```

Use it
```javascript
// "Celcius to Fahrenheit
const fahrenheit =  new Celcius(15).toFahrenheit(); 
console.log(fahrenheit.value); // will result 59
console.log(fahrenheit.unit); // { name: "Fahrenheit", code: "°F" }

// "Fahrenheit to Kelvin
const kelvin = new Fahrenheit(15).toKelvin();
console.log(kelvin.value); // will result 263.7055555555555
console.log(kelvin.unit); // { name: "Kelvin", code: "°K" }

// "Kelvin to Celcius
const celcius = new Kelvin(15).toCelcius();
console.log(celcius.value); // will result -258.15
console.log(celcius.unit); // { name: "Celcius", code: "°C" }
```

list all temperature units available
```javascript
import { units } from '@khanisak/temperature-converter';

console.log(units);
```

### Available property
| Name | Type | Description |
|---|---|---|
| value | number | value of current temperature
| unit | object | name and code of current unit. ex: { name: "Celcius", code: '°C' }

### License
This project is licensed under the [MIT](https://github.com/khanisak/temperature-converter/blob/master/license "MIT") License