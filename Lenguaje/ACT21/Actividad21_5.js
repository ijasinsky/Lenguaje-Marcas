function generarValorSensor() {

    return Math.floor(Math.random() * 100);
}

function verificarUmbral(valor, umbral) {

    if (valor > umbral) {
        alert("¡Alerta! El valor del sensor ha excedido el umbral. Valor actual: " + valor);
    }
}

function simularSensor() {
    var umbral = 80;

    setInterval(function() {

        var valorActual = generarValorSensor();
        console.log("Valor actual del sensor: " + valorActual);
        verificarUmbral(valorActual, umbral);
    }, 1000);
}

simularSensor();