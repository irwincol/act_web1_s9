// 8️⃣ Eventos Básicos
// Archivos: src/ejercicio8.html y src/ejercicio8.js
// Crea elementos interactivos:

// Usa addEventListener() para eventos de click
// Maneja eventos de mouseover y mouseout
// Cambia elementos cuando ocurran los eventos

// Obtener los elementos del DOM
const caja = document.getElementById('miCaja');
const boton = document.getElementById('miBoton');

// Evento de click en el botón
boton.addEventListener('click', () => {
    caja.textContent = '¡Hiciste clic en el botón!';
    caja.style.backgroundColor = 'lightblue';
});

// Evento de mouseover en la caja
caja.addEventListener('mouseover', () => {
    caja.style.backgroundColor = 'yellow';
    caja.textContent = 'Estás sobre la caja';
});

// Evento de mouseout en la caja
caja.addEventListener('mouseout', () => {
    caja.style.backgroundColor = 'white';
    caja.textContent = 'Saliste de la caja';
});