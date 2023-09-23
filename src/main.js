 // Función para obtener y mostrar la fecha actual en una etiqueta HTML
 function mostrarFechaActual() {
    // Obtener la fecha actual
    var fechaActual = new Date();
    var año = fechaActual.getFullYear();

    // Crear una cadena de texto con la fecha en el formato deseado (por ejemplo, "DD/MM/AAAA")
    var fechaFormateada = año;

    // Mostrar la fecha en la etiqueta con el id "fecha"
    document.getElementById('fecha').innerHTML = fechaFormateada;
}

// Llamar a la función para mostrar la fecha actual cuando la página se cargue
window.onload = mostrarFechaActual;