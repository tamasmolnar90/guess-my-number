const checkButton = document.querySelector('.check')
const againButton = document.querySelector('.again')
const message = document.querySelector('.message')
const number = document.querySelector('.number')
const score = document.querySelector('.score')
const highscore = document.querySelector('.highscore')
const body = document.querySelector('body')

let secretNumber = Math.trunc(Math.random() * 20) + 1
let scoreNumber = 20
let highscoreNumber = 0

console.log(secretNumber)

checkButton.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value)

  if (!guess) {
    message.textContent = '⛔ No number'
  } else if (guess === secretNumber) {
    message.textContent = '🎉 Correct Number!'
    body.style.backgroundColor = '#60b347'
    number.style.width = '30rem'
    number.textContent = secretNumber
    if (scoreNumber > highscoreNumber) {
      highscoreNumber = scoreNumber
      highscore.textContent = highscoreNumber
    }
  } else if (guess > secretNumber && scoreNumber > 0) {
    message.textContent = '📈 Too high!!'
    scoreNumber--
  } else if (guess < secretNumber && scoreNumber > 0) {
    message.textContent = '📉 Too low!!'
    scoreNumber--
  }

  score.textContent = scoreNumber

  if (scoreNumber === 0) {
    message.textContent = '💣 You lost the game!'
    body.style.backgroundColor = '#b34747'
    number.style.width = '30rem'
    number.textContent = secretNumber
  }
})

againButton.addEventListener('click', () => {
  document.querySelector('.guess').value = ''
  secretNumber = Math.trunc(Math.random() * 20) + 1
  scoreNumber = 20
  score.textContent = scoreNumber
  number.textContent = '?'
  number.style.width = '15rem'
  message.textContent = 'Start guessing...'
  body.style.backgroundColor = '#222'
  console.log(secretNumber)
})

// againButton.addEventListener('click', () => location.reload())
