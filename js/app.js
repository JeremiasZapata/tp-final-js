// Seats
const colorModeButton = document.querySelectorAll(".color-mode");
const body = document.body;


colorModeButton.forEach(button => {
  button.addEventListener("click", () => cambiarModoColor(button));
})

function cambiarModoColor(button){
  button.classList.toggle("darkmode");
}


// login
//abre el formulario de login
document.querySelector("#show-login").addEventListener("click",function(){
  document.querySelector(".loginPopup").classList.remove("hide");
});

//cierra el formulario de login
document.querySelector(".loginPopup .close-btn").addEventListener("click",function(){
  document.querySelector(".loginPopup").classList.add("hide");
  datosFormularioLogin.reset();
});


//Sign Up
//abre el formulario de sign up

document.querySelector("#signUp").addEventListener("click",function(){
  document.querySelector(".popup").classList.remove("hide");
  document.querySelector(".loginPopup").classList.add("hide");
  datosFormularioLogin.reset();
});

//cierra el formulario de sign up
document.querySelector(".popup .close-btn").addEventListener("click",function(){
document.querySelector(".popup").classList.add("hide");
datosFormularioSignUp.reset();
datosFormularioLogin.reset();
});


const datosFormularioLogin = document.querySelector("#loginForm");
const datosFormularioSignUp = document.querySelector("#signUpnForm");
let signUpName = document.querySelector("#signUpName");
let signUpUserName = document.querySelector("#signUpUserName");
let signUpPassword = document.querySelector("#signUpPassword");
let ConfirmPassword = document.querySelector("#ConfirmPassword");
let loginUser = document.querySelector("#loginUser");
let loginPass = document.querySelector("#loginPassword");

signUpName.addEventListener("input", function () {
  console.log(signUpName.value);
})
signUpUserName.addEventListener("input", function () {
  console.log(signUpUserName.value);
})
signUpPassword.addEventListener("input", function () {
  console.log(signUpPassword.value);
})
ConfirmPassword.addEventListener("input", function () {
  console.log(ConfirmPassword.value);
})
loginUser.addEventListener("input", function () {
  console.log(loginUser);
})
loginPass.addEventListener("input", function () {
  console.log(loginPass.value);
})



/* loggin crea usuario y lo guardamos en el Localstorage */
  
// let usuario=prompt("ingrese un su nombre");
// const passUser=prompt("ingrese su password");

// localStorage.setItem("usuario", usuario)

// let usuarioLocalstorage = localStorage.getItem("usuario");















