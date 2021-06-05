const startButton = document.getElementById('button')
const square = document.querySelectorAll(".grid-item")
let result = 0
const scoreDisplay = document.getElementsByClassName("final-score")
const finishButton = document.querySelector(".finish-game")

let timer = 60
let stopTime
let time

function startMole() {
    time = setInterval(moveMole, 800)
    stopTime = setInterval(countDown, 1000)

}

let countdown
const timerId = document.querySelector(".timer")

function countDown() {
    timer--
    timerId.innerHTML = timer
    if (timer === 0) {
        clearInterval(countDown)
        clearInterval(time)
        clearInterval(stopTime)
        timer = 0
        finishButton.style.display = 'flex'
    }

}

let molePosition
const score = document.querySelector(".score")

function moveMole() {
    square.forEach(square => {
        square.classList.remove('mole-alive')
    })

    let randomSquare = square[Math.floor(Math.random() * 16)]
    randomSquare.classList.add('mole-alive')
    molePosition = randomSquare.id

}

square.forEach(square => {
    square.addEventListener('click', () => {
        if (square.id == molePosition) {
            result++;
            score.textContent = result
            molePosition = null


        }
    })

})


function gridClick(id) {
    console.log(id)
}

startButton.addEventListener('click', startMole)