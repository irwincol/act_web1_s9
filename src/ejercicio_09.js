// 9️⃣ Formularios y Validación Simple
// Archivos: src/ejercicio9.html y src/ejercicio9.js
// Crea un formulario simple y:

// Obtén valores de inputs con value
// Valida que los campos no estén vacíos
// Muestra mensajes de error o éxito

// Obtener los elementos del DOM
const formulario = document.getElementById('miFormulario');
const inputNombre = document.getElementById('nombre');
const mensaje = document.getElementById('mensaje');

// Agregar un evento al formulario
formulario.addEventListener('submit', (event) => {
    event.preventDefault(); // Evitar que se recargue la página

    // Obtener el valor del input
    const nombre = inputNombre.value.trim();

    // Validar que el campo no esté vacío
    if (nombre === '') {
        mensaje.textContent = 'Por favor, ingresa un nombre.';
        mensaje.style.color = 'red';
    } else {
        mensaje.textContent = `¡Hola, ${nombre}!`;
        mensaje.style.color = 'green';
    }
});

