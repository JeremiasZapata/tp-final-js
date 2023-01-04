// Seats
const colorModeButton = document.querySelectorAll(".color-mode");
const body = document.body;

colorModeButton.forEach((button) => {
    button.addEventListener("click", () => cambiarModoColor(button));
});

function cambiarModoColor(button) {
    button.classList.toggle("darkmode");
}
