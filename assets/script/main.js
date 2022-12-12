let interaction = document.querySelector('a:nth-of-type(12)')
interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)
function jumpHandler() {
  interaction.classList.toggle('jump')
}


// Eigen animaties

// Rotate
let rotate = document.querySelector('a:nth-of-type(1)');
rotate.addEventListener('click', rotateHandler)
rotate.addEventListener('animationend', rotateHandler)
function rotateHandler() {
  rotate.classList.toggle('rotate')
}

// Scale
let scale = document.querySelector('a:nth-of-type(2)');
scale.addEventListener('click', scaleHandler)
scale.addEventListener('animationend', scaleHandler)
function scaleHandler() {
  scale.classList.toggle('scale')
}

// TranslateY
let translateY = document.querySelector('a:nth-of-type(3)');
translateY.addEventListener('click', translateYHandler)
translateY.addEventListener('animationend', translateYHandler)
function translateYHandler() {
  translateY.classList.toggle('translateY')
}

// TranslateX
let translateX = document.querySelector('a:nth-of-type(4)');
translateX.addEventListener('click', translateXHandler)
translateX.addEventListener('animationend', translateXHandler)
function translateXHandler() {
  translateX.classList.toggle('translateX')
}

// Keydown
let keydown = document.querySelector('a:nth-of-type(5)');
keydown.addEventListener('keydown', keydownHandler)
keydown.addEventListener('animationend', keydownHandler)
function keydownHandler() {
  keydown.classList.toggle('keydown')
}

// Keyup
let keyup = document.querySelector('a:nth-of-type(6)');
keyup.addEventListener('keyup', keyupHandler)
keyup.addEventListener('animationend', keyupHandler)
function keyupHandler() {
  keyup.classList.toggle('keyup')
}

// Longpress
let longpress = document.querySelector('a:nth-of-type(7)');
let timeout;

longpress.addEventListener('mousedown', function () {
  timeout = setTimeout(function () {
    longpressHandler();
  }, 2000);
});
longpress.addEventListener('mouseup', function () {
  clearTimeout(timeout);
});
longpress.addEventListener('animationend', longpressHandler)

function longpressHandler() {
  longpress.classList.toggle('longpress')
}

// Device rotate
let deviceRotate = document.querySelector('a:nth-of-type(8)');

if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', orientationHandler)
  deviceRotate.addEventListener('animationend', orientationHandler)
}

function orientationHandler() {
  deviceRotate.classList.toggle('deviceRotate')
}