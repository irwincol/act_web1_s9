

const titulo = document.querySelector("h1");
titulo.innerHTML = "<em>HOLA BIENVENIDOS</em>";


const parrafo = document.getElementById('parrafo');
parrafo.textContent = "este es un parrafo modificado con texContent";

const boton = document.getElementById("miBoton");
boton.addEventListener("click", () =>{
    boton.innerHTML = "<strong>Haz hecho click</strong>" ;
    parrafo.innerHTML = "<b>este es un parrafo modificado con textContent</b>";
    titulo.textContent = "Gracias por seguir aquí"
} );