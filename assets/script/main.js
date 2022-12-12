let interaction = document.querySelector('a:nth-of-type(12)')
interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)
function jumpHandler() {
  interaction.classList.toggle('jump')
}


// Eigen animaties

// Rotate
let rotate = document.querySelector('a:nth-of-type(1)');
rotate.addEventListener('click', () => {
  rotate.classList.toggle('rotate')
})

// Scale
let scale = document.querySelector('a:nth-of-type(2)');
scale.addEventListener('click', () => {
  scale.classList.toggle('scale')
})

// TranslateY
let translateY = document.querySelector('a:nth-of-type(3)');
translateY.addEventListener('click', () => {
  translateY.classList.toggle('translateY')
})

// TranslateX
let translateX = document.querySelector('a:nth-of-type(4)');
translateX.addEventListener('click', () => {
  translateX.classList.toggle('translateX')
})

// Keydown
let keydown = document.querySelector('a:nth-of-type(5)');
keydown.addEventListener('keydown', () => {
  keydown.classList.toggle('keydown')
})
