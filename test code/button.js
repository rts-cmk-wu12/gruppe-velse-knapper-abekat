const buttonskew = document.querySelector(".buttonSkew")

const showtext = document.querySelector(".showText")

const fontchange = document.querySelector(".fontChange")

const BODY = document.body

const rotate = document.querySelector(".imgRotate")
const image = document.querySelector (".imgPlacehold")



const displayEl = document.getElementById('random-number');
const buttonEl = document.getElementById('generate-number-btn');
const updateRandomNumber = () => {displayEl.innerHTML = Math.random();
}



buttonskew.addEventListener("click", skew)
showtext.addEventListener("click", textShow)
fontchange.addEventListener("click", changeFont)
rotate.addEventListener("click", rotation)
buttonEl.addEventListener('click', () => updateRandomNumber());




function skew() {
BODY.style.transform = "skew(70deg)"
}

function textShow() {
showtext.style.display = "none"
}

function changeFont() {
BODY.style.fontSize = "x-large"
}

function rotation () {
image.style.transform = "rotate(90deg)"
}










textchange.addEventListener("click", changeText)
const textchange = document.querySelector(".text")
function changeText() {

}