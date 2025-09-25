// 7️⃣ Crear y Agregar Elementos
// Archivos: src/ejercicio7.html y src/ejercicio7.js
// Crea nuevos elementos dinámicamente:

// Usa createElement() para crear elementos
// Usa appendChild() para agregarlos al DOM
// Crea una lista de elementos con un botón

// Obtener el botón y la lista del DOM
const boton = document.getElementById('btnAgregarElemento');
const lista = document.getElementById('miLista');

// Agregar un evento al botón
boton.addEventListener('click', () => {
    // Crear un nuevo elemento de lista
    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = 'Nuevo elemento';

    // Agregar el nuevo elemento a la lista
    lista.appendChild(nuevoElemento);
});