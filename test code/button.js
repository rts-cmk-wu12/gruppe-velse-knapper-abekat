const buttonskew = document.querySelector(".buttonSkew")

const showtext = document.querySelector(".showText")

const fontchange = document.querySelector(".fontChange")

const BODY = document.body

const rotate = document.querySelector(".imgRotate")
const image = document.querySelector (".imgPlacehold")


const buttonLink = document.querySelector('#button-youtube');
let hiddenVideo = document.querySelector('#myFrame');

const buttonShow = document.querySelector('#button-show');
let hiddenText = document.querySelector('.displayHidden');

const displayEl = document.getElementById('random-number');
const buttonEl = document.getElementById('generate-number-btn');

const updateRandomNumber = () => {displayEl.innerHTML = Math.random();

}



buttonskew.addEventListener("click", skew)
showtext.addEventListener("click", textShow)
fontchange.addEventListener("click", changeFont)
rotate.addEventListener("click", rotation)
buttonEl.addEventListener('click', () => updateRandomNumber());
buttonLink.addEventListener('click', youtube);
buttonShow.addEventListener('click', showText);




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

function youtube(){
    hiddenVideo.removeAttribute("hidden")
}

function showText(){
    hiddenText.removeAttribute("hidden")
}






textchange.addEventListener("click", changeText)
const textchange = document.querySelector(".text")
function changeText() {

}