# Temperature Converter

Temperature converter is a tiny javascript library for working with Temperature values.

### Installation
With [npm](https://www.npmjs.com/ "npm") : 

`npm install --save @khanisak/temperature-converter`

### Usage
Import library
```javascript
 const tConverter = require('@khanisak/temperature-converter').default;
```
or with ES6
```javascript
import tConverter from '@khanisak/temperature-converter'
```
Use it
```javascript
// "Celcius to Fahrenheit
var result = tConverter.convert(15,  tConverter.unit.Celcius, tConverter.unit.Fahrenheit) // 59

// "Fahrenheit to Kelvin
var result = tConverter.convert(15,  tConverter.unit.Fahrenheit, tConverter.unit.Kelvin) // 263.7055555555555

// "Kelvin to Celcius
var result = tConverter.convert(15,  tConverter.unit.Kelvin, tConverter.unit.Celcius) // -258.15

// "List all supported temperature units"
console.log(tConverter.units)
```
### License
This project is licensed under the [MIT](https://github.com/khanisak/temperature-converter/blob/master/license "MIT") License