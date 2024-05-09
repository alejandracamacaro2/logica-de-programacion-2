function convertirTemperatura() {
    let celsius = prompt("Ingrese la temperatura en grados Celsius:");

    // Verificar si la entrada es un número
    while (isNaN(celsius)) {
        celsius = prompt("Error: Por favor ingrese un valor numérico para la temperatura en grados Celsius:");
    }

    // Convertir a números
    celsius = parseFloat(celsius);

    // Convertir Celsius a Fahrenheit
    let fahrenheit = (celsius * 9/5) + 32;

    // Convertir Celsius a Kelvin
    let kelvin = celsius + 273.15;

    // Imprimir resultados
    console.log("Temperatura en grados Fahrenheit:", fahrenheit);
    console.log("Temperatura en grados Kelvin:", kelvin);
}

// Llamar a la función para iniciar el programa
convertirTemperatura();