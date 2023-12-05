window.addEventListener("load", inicio);

function inicio (){
document.querySelector("#btn").addEventListener("click", mostrarEjercicio);
}

function convertirCelsiusAFahrenheit(temperatura) {
return (temperatura * 1.8) + 32;
}

function mostrarEjercicio(){
let laTemperatura = Number(document.querySelector("#val1").value);

let temperaturaEnFahrenheit = convertirCelsiusAFahrenheit(laTemperatura);
let mensaje;
if (temperaturaEnFahrenheit) {
    mensaje = "la temperatura en fahrenheit es "+ temperaturaEnFahrenheit;
    
}

document.querySelector("#resultado").innerHTML = mensaje;


}