var convertTemperature = function (celsius) {
  const kelvin = celsius + 273.15
  const fahrenheit = celsius * 1.8 + 32.0
  return [kelvin, fahrenheit]
}

console.log(convertTemperature(36.5)) //[309.65000,97.70000]
console.log(convertTemperature(122.11)) //[395.26000,251.79800]
