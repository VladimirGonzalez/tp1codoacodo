let menu= document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');

const boton = document.getElementById("mostrar-formulario");
const formulario = document.getElementById("formulario");


menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

boton.addEventListener("click", () => {
  formulario.classList.toggle("oculto");
});


