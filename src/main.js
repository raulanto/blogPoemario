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
window.onload = mostrarFechaActual;

// Define la función procesarParrafo
function procesarParrafo(claseParrafo) {

  const parrafo = document.querySelector(claseParrafo);

  if (parrafo) {
    // Obtén el contenido actual del párrafo
    const contenidoOriginal = parrafo.innerHTML;

    // Reemplaza las comas y puntos con comas y puntos seguidos de un salto de línea
    const contenidoModificado = contenidoOriginal.replace(/([,.])/g, "$1<br>");


    parrafo.innerHTML = contenidoModificado;
  } else {
    console.error("No se encontró un elemento con la clase proporcionada.");
  }
}
procesarParrafo(".cuerpo-texto");

procesarParrafo(".cuerpo-texto2");
procesarParrafo(".content-full");


function procesarTarjeta(cardSelector, contentSelector, button) {
  const card = document.querySelector(cardSelector);
  const contentFull = document.querySelector(contentSelector);

  if (contentFull.style.display === "none" || contentFull.style.display === "") {
      contentFull.style.display = "block";
      button.textContent = "Leer menos";
      card.style.maxHeight = "none"; // Quita la altura máxima para que se ajuste al contenido
  } else {
      contentFull.style.display = "none";
      button.textContent = "Leer más";
      card.style.maxHeight = "160px"; // Establece la altura máxima nuevamente
  }
}
