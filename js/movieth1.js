// Seats
const colorModeButton = document.querySelectorAll(".color-mode");
const body = document.body;

colorModeButton.forEach((button) => {
    button.addEventListener("click", () => cambiarModoColor(button));
});

function cambiarModoColor(button) {
    button.classList.toggle("darkmode");
}

// Recuperamos el valor de backGrooundOnLs que enviamos desde index con el id

let classBackGround = localStorage.getItem("backGroundOnLs");

console.log(classBackGround);

// cambio de imagen de background segun tarjeta elegida

document.querySelector("#background").classList.add(classBackGround);





//dias por peliculas

const avatar = [
    {
        dia: "Lunes"
    },
    {
        dia: "Miércoles"
    },
    {
        dia: "Vierners",
    },
]
const thor = [
    {
        dia: "Martes"
    },
    {
        dia: "Jueves"
    },
    {
        dia: "Sábados"
    },
]
const ironman = [
    {
        dia: "Lunes"
    },
    {
        dia: "Miércoles"
    },
    {
        dia: "Vierners",
    },
]
const backToTheFuture = [
    {
        dia: "Martes"
    },
    {
        dia: "Jueves"
    },
    {
        dia: "Sábados"
    },
]
const pulpFiction = [
    {
        dia: "Domingos"
    },
]
const avenger = [
    {
        dia: "Lunes"
    },
    {
        dia: "Miércoles"
    },
    {
        dia: "Vierners",
    },
]
const blackPanther = [
    {
        dia: "Martes"
    },
    {
        dia: "Jueves"
    },
    {
        dia: "Sábados"
    },
]
const james = [
    {
        dia: "Lunes"
    },
    {
        dia: "Miércoles"
    },
    {
        dia: "Vierners",
    },
]
const indianaJones = [
    {
        dia: "Martes"
    },
    {
        dia: "Jueves"
    },
    {
        dia: "Sábados"
    },
]
const taxidriver = [
    {
        dia: "Domingos"
    },
]
const pegasus = [
    {
        dia: "Lunes"
    },
    {   
        dia: "Miércoles"
    },
    {
        dia: "Vierners",
    },
]
const wolverine = [
    {
        dia: "Martes"
    },
    {
        dia: "Jueves"
    },
    {
        dia: "Sábados"
    },
]
const matrix = [
    {
        dia: "Lunes"
    },
    {   
        dia: "Miércoles"
    },
    {
        dia: "Vierners",
    },
]
const starWars = [
    {
        dia: "Martes"
    },
    {
        dia: "Jueves"
    },
    {
        dia: "Sábados"
    },
]
const godFather = [
    {
        dia: "Domingos"
    },
]



const dayCreator = document.querySelector('#day');


//Formulario de dias






function formularioDias() {
    godFather.forEach(x => {
        const diasHorarios = document.createElement('option');
        diasHorarios.innerHTML = `
        ${x.dia}
        `
        dayCreator.appendChild(diasHorarios)
    })
    console.log(classBackGround)
}

formularioDias();





// seleccion de dia

////--------OPCIONES MULTIPLES--------------//////

let optionSelected = document.querySelectorAll(".form-select");
let btnreservar = document.querySelector(".btn-reservar");

btnreservar.addEventListener("click", function () {
    let dia = document.querySelector("#day").value;
    let hora = document.querySelector("#hr").value;

    let selector = document.querySelector(".selector");
    selector.innerHTML = `
<div class="alert alert-success" role="alert">
<h5>Vas a asistir el dia ${dia} a las ${hora} hs.</h5>
</div>`;
});
