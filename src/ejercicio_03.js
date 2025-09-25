
// Seleccionar todos los elementos con la clase "resaltado"
const elementos = document.getElementsByClassName('resaltado');

// Cambiar el estilo de todos los elementos de esa clase
for (let i = 0; i < elementos.length; i++) {
	elementos[i].style.backgroundColor = 'yellow';
	elementos[i].style.fontWeight = 'bold';
}

// Contar cuántos elementos tienen esa clase y mostrarlo
const contador = document.getElementById('contador');
contador.textContent = `Cantidad de elementos con la clase 'resaltado': ${elementos.length}`;
