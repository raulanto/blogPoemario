// Función para obtener y mostrar la fecha actual en una etiqueta HTML
function mostrarFechaActual() {
  // Obtener la fecha actual
  var fechaActual = new Date();
  var año = fechaActual.getFullYear();

  // Crear una cadena de texto con la fecha en el formato deseado (por ejemplo, "DD/MM/AAAA")
  var fechaFormateada = año;

  // Mostrar la fecha en la etiqueta con el id "fecha"
  document.getElementById("fecha").innerHTML = fechaFormateada;
}

// Llamar a la función para mostrar la fecha actual cuando la página se cargue
window.onload = mostrarFechaActual;

// Define la función procesarParrafo
function procesarParrafo(claseParrafo) {
  // Obtén la referencia a la etiqueta <p> por su clase
  const parrafo = document.querySelector(claseParrafo);

  if (parrafo) {
    // Obtén el contenido actual del párrafo
    const contenidoOriginal = parrafo.innerHTML;

    // Reemplaza las comas y puntos con comas y puntos seguidos de un salto de línea
    const contenidoModificado = contenidoOriginal.replace(/([,.])/g, "$1<br>");

    // Establece el contenido modificado en la etiqueta <p>
    parrafo.innerHTML = contenidoModificado;
  } else {
    console.error("No se encontró un elemento con la clase proporcionada.");
  }
}
procesarParrafo(".cuerpo-texto");

procesarParrafo(".cuerpo-texto2");
