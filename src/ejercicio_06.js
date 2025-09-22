// 6️⃣ Agregar y Quitar Clases CSS
// Archivos: src/ejercicio6.html y src/ejercicio6.js
// Crea elementos con estilos CSS y:

// Usa classList.add() para agregar clases
// Usa classList.remove() para quitar clases
// Usa classList.toggle() para alternar clases

// Obtener los elementos del DOM
const caja = document.getElementById('miCaja');
const botonAgregar = document.getElementById('btnAgregar');
const botonQuitar = document.getElementById('btnQuitar');
const botonAlternar = document.getElementById('btnAlternar');

// Agregar clase
botonAgregar.addEventListener('click', () => {
    caja.classList.add('resaltado');
});

// Quitar clase
botonQuitar.addEventListener('click', () => {
    caja.classList.remove('resaltado');
});

// Alternar clase
botonAlternar.addEventListener('click', () => {
    caja.classList.toggle('resaltado');
});