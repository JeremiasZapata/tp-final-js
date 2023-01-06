// Seats
const colorModeButton = document.querySelectorAll(".color-mode");
const body = document.body;

colorModeButton.forEach((button) => {
    button.addEventListener("click", () => cambiarModoColor(button));
});

function cambiarModoColor(button) {
    button.classList.toggle("darkmode");
}


// Recuperamos el valor de backGrooundOnLs

let classBackGround = localStorage.getItem("backGroundOnLs");

console.log(classBackGround);

// cambio de imagen de background segun tarjeta elegida

document.querySelector("#background").classList.add(classBackGround);


