const BUTTON = document.querySelector(".buttonChange")
const BUTTONALERT = document.querySelector(".buttonAlert")
const BODYY = document.body

BUTTON.addEventListener("click", colorChange )
BUTTONALERT.addEventListener("click", showAlert)

function colorChange() {

    BODYY.style.backgroundColor = "red"
}

function showAlert() {
    alert("stop eeeeeet")
}