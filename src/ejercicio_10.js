// 🔟 Navegación entre Elementos
// Archivos: src/ejercicio10.html y src/ejercicio10.js
// Crea una estructura HTML y demuestra:

// Usa parentElement para acceder al elemento padre
// Usa children para acceder a elementos hijos
// Usa nextElementSibling para el siguiente hermano
// Muestra la información de navegación en la página

// Obtener los elementos del DOM
const elemento = document.getElementById('miElemento');
const info = document.getElementById('info');

// Mostrar el elemento padre
const padre = elemento.parentElement;
info.innerHTML += `<p>Elemento padre: ${padre.tagName}</p>`;

// Mostrar los elementos hijos
const hijos = elemento.children;
info.innerHTML += '<p>Elementos hijos:</p><ul>';
for (let hijo of hijos) {
    info.innerHTML += `<li>${hijo.tagName}</li>`;
}
info.innerHTML += '</ul>';

// Mostrar el siguiente hermano
const siguienteHermano = elemento.nextElementSibling;
if (siguienteHermano) {
    info.innerHTML += `<p>Siguiente hermano: ${siguienteHermano.tagName}</p>`;
} else {
    info.innerHTML += '<p>No hay siguiente hermano</p>';
}