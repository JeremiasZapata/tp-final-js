
// login
//abre el formulario de login
document.querySelector("#login").addEventListener("click", function(e){
  e.preventDefault();
  document.querySelector(".loginPopup").classList.remove("hide");
});

//cierra el formulario de login y lo resetea
document.querySelector(".loginPopup .close-btn").addEventListener("click",function(){
  document.querySelector(".loginPopup").classList.add("hide");
  datosFormularioLogin.reset();
});


//Sign Up
//abre el formulario de sign up y resetea formulario login

document.querySelector("#signUp").addEventListener("click",function(){
  document.querySelector(".popup").classList.remove("hide");
  document.querySelector(".loginPopup").classList.add("hide");
  datosFormularioLogin.reset();
});

//cierra el formulario de sign up y resetea formulario login y signup
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
userLoing = new Users(loginUser, loginPass)
console.log(userLoing);
localStorage.setItem("usuarios", JSON.stringify(userLoing));


const userLogged = localStorage.getItem("usuarios");
console.log(userLogged);
const userOject = JSON.parse(userLogged);

  userloged.innerHTML = `
  <li class="nav-item">
  <a class="nav-link" href="#"> Welcome ${userOject.user} </a>
</li>
    `
    logout.innerHTML = `
    <li class="nav-item">
    <a class="nav-link" href="#"> Logout </a>
  </li>
      `
    document.querySelector(".logintrigg").classList.add("hide");
    document.querySelector(".loginPopup").classList.add("hide");
    
    datosFormularioLogin.reset();

});

  
//Sign up

//clase constructora de nuevos usuarios en global Scope


class SignUsers {
  constructor(signUpName, signUpUserName, signUpPassword,ConfirmPassword){
    this.name = signUpName;
    this.userName = signUpUserName;
    this.signUpPass = signUpPassword;
    this.confirmPass = ConfirmPassword;
  }
}

//lectura de datos del signUp y guardado en objeto
let baseDatosUsuarios = JSON.parse(localStorage.getItem('Nuevousuarios')) || [];
const signUpButton = document.querySelector("#signUpFormSubmit");


signUpButton.addEventListener("click",function(){
  // e.preventDefault(); // no me borra todos los datos del array
let signUpName = document.querySelector("#signUpName").value; //capturo los datos
let signUpUserName = document.querySelector("#signUpUserName").value;
let signUpPassword = document.querySelector("#signUpPassword").value;
let ConfirmPassword = document.querySelector("#ConfirmPassword").value;
document.querySelector(".popup").classList.add("hide");




//modal passmisstaken
const closeButton = document.querySelector("#closePassMisstaken");
closeButton.addEventListener("click", function(){
  document.querySelector(".passMisstaken").classList.add("hide");
})

document.querySelector(".passMisstaken .close-btn").addEventListener("click",function(){
  document.querySelector(".passMisstaken").classList.add("hide");
  datosFormularioSignUp.reset();
  datosFormularioLogin.reset();
  });

//Comprobacion de coincidencia de pass y confirmPass

if (signUpPassword !== ConfirmPassword) {
  console.log("las contraseñas no coinciden");
  document.querySelector(".popup").classList.add("hide");
  datosFormularioSignUp.reset();
  datosFormularioLogin.reset();

  document.querySelector(".passMisstaken").classList.remove("hide");

}

const nuevoUsuario = new SignUsers(signUpName, signUpUserName, signUpPassword, ConfirmPassword )
agregarNuevoUser(nuevoUsuario);
datosFormularioSignUp.reset();
});


function agregarNuevoUser(nuevoUsuario){
  console.log(nuevoUsuario);
  baseDatosUsuarios.push(nuevoUsuario);
  console.log(baseDatosUsuarios);
  localStorage.setItem("Nuevousuarios", JSON.stringify(baseDatosUsuarios));
}





  /* Capturamos el valor del boton de la card */

  document.querySelectorAll(".btn-test").addEventListener("click", function(){
    // e.preventDefault();
    let backGroundToLs = "matrix";
    localStorage.setItem("backGroundOnLs", backGroundToLs);
    });





















