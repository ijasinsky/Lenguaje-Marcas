function celsiusAFahrenheit(celsius) {
  return celsius * 9/5 + 32;
}

function fahrenheitACelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

function main() {
  console.log("Conversor de Temperatura");

  var temperatura = parseFloat(prompt("Introduce la temperatura:"));
  var escala = prompt("¿En qué escala? (C para Celsius, F para Fahrenheit):");

  if (escala.toUpperCase() === 'C') {
      var resultado = celsiusAFahrenheit(temperatura);
      console.log(temperatura + " grados Celsius son " + resultado.toFixed(2) + " grados Fahrenheit.");
  } else if (escala.toUpperCase() === 'F') {
      var resultado = fahrenheitACelsius(temperatura);
      console.log(temperatura + " grados Fahrenheit son " + resultado.toFixed(2) + " grados Celsius.");
  } else {
      console.log("Entrada no válida. Por favor, introduce 'C' o 'F'.");
  }
}

main();