//  <!-- 5️⃣ Modificar Atributos
// Archivos: src/ejercicio5.html y src/ejercicio5.js
// Crea elementos con atributos y:

// Usa getAttribute() para leer atributos
// Usa setAttribute() para cambiar atributos
// Cambia el src de una imagen y el href de un enlace 

// Obtener los elementos del DOM
const imagen = document.getElementById('css');
const enlace = document.getElementById('mozilla');
const informacion = document.getElementById('informacion');

// Leer atributos originales con getAttribute()
const srcOriginal = imagen.getAttribute('src');
const hrefOriginal = enlace.getAttribute('href');

// Mostrar los atributos originales en el elemento "informacion"
informacion.innerHTML = `
    <p><strong>Atributos originales:</strong></p>
    <p>SRC de la imagen: ${srcOriginal}</p>
    <p>HREF del enlace: ${hrefOriginal}</p>
`;

// Cambiar atributos con setAttribute()
imagen.setAttribute('src', '../assets/images/html-5.png');
imagen.setAttribute('alt', 'HTML');
enlace.setAttribute('href', 'https://www.w3schools.com');
enlace.setAttribute('target', '_blank');

// Leer los nuevos atributos después del cambio
const srcNuevo = imagen.getAttribute('src');
const hrefNuevo = enlace.getAttribute('href');

// Mostrar los nuevos atributos en el elemento "informacion"
informacion.innerHTML += `
    <p><strong>Atributos después del cambio:</strong></p>
    <p>Nuevo SRC: ${srcNuevo}</p>
    <p>Nuevo HREF: ${hrefNuevo}</p>
`;