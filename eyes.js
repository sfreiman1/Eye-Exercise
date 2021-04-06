// eyes.js - variables and functions related to the eye exercise

const balls = document.getElementsByClassName("pupil");  // array of "pupils"
const eyeColors = ['blue', 'green', 'red', 'brown','purple','yellow']; // possible eye colors
  
let currentEyeColor = 0; // current eye color (initialized to 0 [blue])

// changeEyeColor -- takes a number between 0 and the number of colors - 1 and sets the pupils to that color
function changeEyeColor(newEyeColor) {
  let pupils = document.getElementsByClassName('pupil');

  for (let i = 0; i < pupils.length; i++) {
    pupils[i].classList.remove(eyeColors[currentEyeColor]);
    pupils[i].classList.add(eyeColors[newEyeColor]);
  }

  currentEyeColor = newEyeColor;
}

// blink -- change eye color to a random color
function blink() {
  let rndColor = Math.floor(Math.random() * (eyeColors.length - 1) + 1);
  changeEyeColor(rndColor);
}

// Start blinking every half second
var startBlinking = setInterval(blink, 500);

// Have the pupils move when the mouse moves -- the pupils follow the movement of the mouse
document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + "%";
  const y = (event.clientY * 100) / window.innerHeight + "%";

  for (let i = 0; i < balls.length; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transform = "translate(-" + x + ",-" + y + ")";
  }
};