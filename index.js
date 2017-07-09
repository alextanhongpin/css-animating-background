
const background = document.getElementById('background')

const squares = document.querySelectorAll('.square')

const x = window.innerWidth - 40
const y = window.innerHeight - 40
let start

function scatterSquares () {
  squares.forEach((square) => {
    square.style.background = Math.random() < 0.5 ? '#FF4444' : 'red'
    square.style.left = (Math.floor(Math.random() * x / 40) * 40) + 'px'
    square.style.top = (Math.floor(Math.random() * y / 40) * 40) + 'px'
  })
}
function animateSquares (timestamp) {
  if (!start) {
    start = timestamp
  }
  const progress = timestamp - start
  if (progress < 2000) {
    window.requestAnimationFrame(animateSquares)
  }
  // Animate every second
  if (progress > 1000) {
    squares.forEach((square) => {
      square.style.background = Math.random() < 0.5 ? '#FF4444' : 'red'
      const moveX = Math.random() < 0.5
      if (moveX) {
        const oldX = parseFloat(square.style.left || 0, 10)
        const newX = (oldX + 40)
        if (newX > x) {
            // Random scatter
          square.style.left = (Math.floor(Math.random() * x / 40) * 40) + 'px'
        } else {
          // Randomize direction
          const isPositive = Math.random() < 0.5
          if (isPositive) {
            square.style.left = newX + 'px'
          } else {
            square.style.left = (newX - 2 * 40) + 'px'
          }
        }
      } else {
        const oldY = parseFloat(square.style.top || 0, 10)
        const newY = (oldY + 40)
        if (newY > y) {
            // Random scatter
          square.style.top = (Math.floor(Math.random() * y / 40) * 40) + 'px'
        } else {
          const isPositive = Math.random() < 0.5
          if (isPositive) {
            square.style.top = newY + 'px'
          } else {
            square.style.top = (newY - 2 * 40) + 'px'
          }
        }
      }
    })
    start = timestamp
  }
}

window.requestAnimationFrame(animateSquares)
scatterSquares()
// window.setInterval(() => {
//   animateSquares()
// }, 1000)
