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
const datosFormularioSignUp = document.querySelector("#signUpForm");
let signUpName = document.querySelector("#signUpName");
let signUpUserName = document.querySelector("#signUpUserName");
let signUpPassword = document.querySelector("#signUpPassword");
let ConfirmPassword = document.querySelector("#ConfirmPassword");



//login

//lectura de datos del login y guardado en objeto
let baseDatos = [];
document.querySelector("#signIn").addEventListener("click",function(e){
  e.preventDefault(); // no me borra todos los datos del array
let loginUser = document.querySelector("#loginUser").value; //capturo los datos
let loginPass = document.querySelector("#loginPassword").value;

//clase constructora
class Users {
  constructor(loginUser, loginPass){
    this.user = loginUser;
    this.pass = loginPass;
  }
}
persona = new Users(loginUser, loginPass)
console.log(persona);
aagregar();
});

  function aagregar(){
    baseDatos.push(persona);
    console.log(baseDatos);
    localStorage.setItem("usuarios", JSON.stringify(baseDatos));
  }





//Sign up

//lectura de datos del signUp y guardado en objeto
let baseDatosUsuarios = [];
document.querySelector("#signUpFormSubmit").addEventListener("click",function(e){
  e.preventDefault(); // no me borra todos los datos del array
let signUpName = document.querySelector("#signUpName").value; //capturo los datos
let signUpUserName = document.querySelector("#signUpUserName").value;
let signUpPassword = document.querySelector("#signUpPassword").value;
let ConfirmPassword = document.querySelector("#ConfirmPassword").value;


nuevoUsuario = new SignUsers(signUpName, signUpUserName, signUpPassword, ConfirmPassword )
console.log(nuevoUsuario);
agregarNuevoUser();
});

//clase constructora de nuevos usuarios en global Scope
class SignUsers {
  constructor(signUpName, signUpUserName, signUpPassword,ConfirmPassword){
    this.name = signUpName;
    this.userName = signUpUserName;
    this.signUpPass = signUpPassword;
    this.confirmPass = ConfirmPassword;
  }
}

  function agregarNuevoUser(){
    baseDatosUsuarios.push(nuevoUsuario);
    console.log(baseDatosUsuarios);
    localStorage.setItem("Nuevousuarios", JSON.stringify(baseDatosUsuarios));
  }















//sign up
// signUpName.addEventListener("input", function () {
//   console.log(signUpName.value);
// })
// signUpUserName.addEventListener("input", function () {
//   console.log(signUpUserName.value);
// })
// signUpPassword.addEventListener("input", function () {
//   console.log(signUpPassword.value);
// })
// ConfirmPassword.addEventListener("input", function () {
//   console.log(ConfirmPassword.value);
// })

//login
// loginUser.addEventListener("input", function () {
//   console.log(loginUser);
// })
// loginPass.addEventListener("input", function () {
//   console.log(loginPass.value);
// })



/* loggin crea usuario y lo guardamos en el Localstorage */
  
// let usuario=prompt("ingrese un su nombre");
// const passUser=prompt("ingrese su password");

// localStorage.setItem("usuario", usuario)

// let usuarioLocalstorage = localStorage.getItem("usuario");















