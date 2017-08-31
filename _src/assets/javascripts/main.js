const fastclick = require('fastclick')
fastclick.attach(document.body)

const boxes = Array.from(document.querySelectorAll('.box'))

boxes.forEach(button => button.addEventListener('mousedown', mouseDown))
boxes.forEach(button => button.addEventListener('mouseup', mouseUp))
boxes.forEach(button => button.addEventListener('touchstart', mouseDown))
boxes.forEach(button => button.addEventListener('touchend', mouseUp))

function mouseDown(e) {
  const clip = e.srcElement.dataset.clip

  e.target.classList.add('clicked')
  playSound(clip)
}

function mouseUp(e) {
  e.target.classList.remove('clicked')
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-clip="${e}"]`)

  audio.currentTime = 0
  audio.play()
}
