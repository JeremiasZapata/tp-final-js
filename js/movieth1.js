// Seats
// Hacemos nodelist para luego recorrerlas y sacar la info necesaria
const colorModeButton = document.querySelectorAll(".color-mode");
const seatSelector = document.querySelectorAll(".seat-sel");

//Recorremos el nodeList seatSelector y le agregamos un listener que llame a la funcion
seatSelector.forEach((el) => {
    el.addEventListener("click", cargarIdAlArray);
});
const IdArray = [];


// Cambiamos el color del asiento cada vez que se hace click agregandole la clase.
colorModeButton.forEach((button) => {
    button.addEventListener("click", () => cambiarModoColor(button));
});

function cambiarModoColor(button) {
    button.classList.toggle("darkmode");
}




//****************************************************************************************************** */
//recupero el valor de la fecha de las entradas
function fechaEntradas() {
    let selectDay = document.getElementById("funcion");
    selectDay.addEventListener("change", () => {
        console.log(selectDay.value);
    })
    return selectDay;

}
fechaEntradas()


//**************************************************************************************************** */

//recupero el valor de la cantidad de entradas
function cantidadEntradas() {
    let selectSeat = document.getElementById("cantidadButacas");
    selectSeat.addEventListener("change", () => {
        console.log(selectSeat.value);
    })
    return selectSeat
}
const cantSeats = cantidadEntradas()


//*********************************************************************************************** */
// Cargamos ID butacas seleccionadas en el IdArray si no esta la agrega,

function cargarIdAlArray (e) {

    // si no está, lo agregamos
    if(!IdArray.includes(e.target.id)){
        IdArray.push(e.target.id);
        console.log(IdArray);
    }
    // sino lo eliminamos
    else{
        let index = IdArray.indexOf(e.target.id);
        IdArray.splice(index, 1);
        console.log(IdArray);
    }
    if(IdArray.length > cantSeats.value){
        Swal.fire({
            title: 'Warning',
            text: 'No more seats to be select',
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    }
}


//************************************************************************************************** */

// Recuperamos el valor de backGrooundOnLs que enviamos desde index con el id

let classBackGround = localStorage.getItem("backGroundOnLs");

// cambio de imagen de background segun tarjeta elegida

document.querySelector("#background").classList.add(classBackGround);

//Formulario de dias

//dias por peliculas

const peliculas = [
    {
        movie: "avatar",
        fechas: [
            { dia: "Lunes 09/01 14:00hs" },
            { dia: "Miércoles 11/01 18:00hs" },
            { dia: "Viernes 13/01 11:00hs" },
        ],
    },
    {
        movie: "thor",
        fechas: [
            { dia: "Martes 10/01 13:30hs" },
            { dia: "Jueves 12/01 17:15" },
            { dia: "Sábados 14/01 19:00hs" },
        ],
    },
    {
        movie: "ironman",
        fechas: [
            { dia: "Lunes 09/01 14:00hs" },
            { dia: "Miércoles 11/01 18:00hs" },
            { dia: "Viernes 13/01 11:00hs" },
        ],
    },
    {
        movie: "backToTheFuture",
        fechas: [
            { dia: "Martes 10/01 13:30hs" },
            { dia: "Jueves 12/01 17:15" },
            { dia: "Sábados 14/01 19:00hs" },
        ],
    },
    { movie: "pulpFiction", fechas: [{ dia: "Domingos 15/01 21:00hs" }] },
    {
        movie: "avengers",
        fechas: [
            { dia: "Lunes 09/01 14:00hs" },
            { dia: "Miércoles 11/01 18:00hs" },
            { dia: "Viernes 13/01 11:00hs" },
        ],
    },
    {
        movie: "wakanda",
        fechas: [
            { dia: "Martes 10/01 13:30hs" },
            { dia: "Jueves 12/01 17:15" },
            { dia: "Sábados 14/01 19:00hs" },
        ],
    },
    {
        movie: "james",
        fechas: [
            { dia: "Lunes 09/01 14:00hs" },
            { dia: "Miércoles 11/01 18:00hs" },
            { dia: "Viernes 13/01 11:00hs" },
        ],
    },
    {
        movie: "indianaJones",
        fechas: [
            { dia: "Martes 10/01 13:30hs" },
            { dia: "Jueves 12/01 17:15" },
            { dia: "Sábados 14/01 19:00hs" },
        ],
    },
    { movie: "taxiDriver", fechas: [{ dia: "Domingos 15/01 21:00hs" }] },
    {
        movie: "caballeros",
        fechas: [
            { dia: "Lunes 09/01 14:00hs" },
            { dia: "Miércoles 11/01 18:00hs" },
            { dia: "Viernes 13/01 11:00hs" },
        ],
    },
    {
        movie: "wolverine",
        fechas: [
            { dia: "Martes 10/01 13:30hs" },
            { dia: "Jueves 12/01 17:15" },
            { dia: "Sábados 14/01 19:00hs" },
        ],
    },
    {
        movie: "matrix",
        fechas: [
            { dia: "Lunes 09/01 14:00hs" },
            { dia: "Miércoles 11/01 18:00hs" },
            { dia: "Viernes 13/01 11:00hs" },
        ],
    },
    {
        movie: "starWars",
        fechas: [
            { dia: "Martes 10/01 13:30hs" },
            { dia: "Jueves 12/01 17:15" },
            { dia: "Sábados 14/01 19:00hs" },
        ],
    },
    { movie: "godFather", fechas: [{ dia: "Domingos 15/01 21:00hs" }] },
];

const dayCreator = document.querySelector("#funcion");

//Formulario de dias

function formularioDias(arraydias) {
    arraydias.forEach((x) => {
        const dayMovie = document.createElement("option");

        dayMovie.innerHTML = `${x.dia}`;

        
        dayMovie.value = x.dia;

        dayCreator.appendChild(dayMovie);
    });
}
// Revisa si existe el local storage
if (!Object.is(classBackGround, null)) {
    // busca en el array una peli con el nombre del pasado en local storage
    peliculas.forEach((x) => {
        // si encuentra la peli ejecuta la función
        x.movie === classBackGround && formularioDias(x.fechas);
    });
} else {
    console.log("Error: no se selecciono ninguna película");
}

////--------OPCIONES MULTIPLES--------------//////

let optionSelected = document.querySelectorAll(".form-select");
let btnreservar = document.querySelector(".btn-reservar");

btnreservar.addEventListener("click", function () {
    let dia = document.querySelector("#day").value;

    let selector = document.querySelector(".selector");
    selector.innerHTML = `
<div class="alert alert-success" role="alert">
<h5>Vas a asistir el dia ${dia} a las ${hora} hs.</h5>
</div>`;
});
