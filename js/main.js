function calcularCredito() {
    let creditoSolicitado, interesAnual, plazoDeMeses;

    // Aquí pido valores al usuario mediante prompt hasta que se ingresen valores válidos
    do {
        creditoSolicitado = parseFloat(prompt("Ingrese el monto del préstamo:"));
        interesAnual = parseFloat(prompt("Ingrese la tasa de interés anual (%):"));
        plazoDeMeses = parseInt(prompt("Ingrese el plazo del préstamo (meses):"));
        
        if (!valores(creditoSolicitado, interesAnual, plazoDeMeses)) {
            alert("Por favor, ingrese valores válidos y positivos.");
        }
    } while (!valores(creditoSolicitado, interesAnual, plazoDeMeses));

    // Aquí calculo la tasa de interés mensual
    const interesMensual = interesAnual / 12 / 100;

    // Aquí calculo el pago mensual usando la fórmula de pagos de un préstamo
    const pagoMensual = (creditoSolicitado * interesMensual) / (1 - Math.pow(1 + interesMensual, -plazoDeMeses));

    // Aquí calculo el monto total a pagar y los intereses totales
    const montoTotal = pagoMensual * plazoDeMeses;
    const totalIntereses = montoTotal - creditoSolicitado;

    // Aquí muestro los resultados en la consola
    console.log(`Monto del Préstamo: $${creditoSolicitado.toFixed(2)}`);
    console.log(`Tasa de Interés Anual: ${interesAnual.toFixed(2)}%`);
    console.log(`Plazo del Préstamo: ${plazoDeMeses} meses`);
    console.log(`Pago Mensual: $${pagoMensual.toFixed(2)}`);
    console.log(`Total de Intereses: $${totalIntereses.toFixed(2)}`);
    console.log(`Monto Total a Pagar: $${montoTotal.toFixed(2)}`);
}

// Algoritmo condicional para validar valores positivos
function valores(monto, interes, meses) {
    return monto > 0 && interes > 0 && meses > 0;
}

// Aquí ejecuto la función para calcular el crédito cuando se carga la página
calcularCredito();
