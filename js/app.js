const colorModeButton = document.querySelectorAll(".color-mode");
const body = document.body;


colorModeButton.forEach(button => {
  button.addEventListener("click", () => cambiarModoColor(button));
})

function cambiarModoColor(button){
  button.classList.toggle("darkmode");
}

document.querySelector("#show-login").addEventListener("click",function(){
  document.querySelector(".popup").classList.remove("active");
});

document.querySelector(".popup .close-btn").addEventListener("click",function(){
  document.querySelector(".popup").classList.add("active");
});

/* loggin crea usuario y lo guardamos en el Localstorage */
  
// let usuario=prompt("ingrese un su nombre");
// const passUser=prompt("ingrese su password");

// localStorage.setItem("usuario", usuario)

// let usuarioLocalstorage = localStorage.getItem("usuario");















