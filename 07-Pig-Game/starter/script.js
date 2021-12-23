'use strict'

const score0El = document.querySelector('#score--0')
const score1El = document.getElementById('score--1')
const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')

let scores, currentScore, activePlayer, playing

const init = function () {
    scores = [0, 0]
    currentScore = 0
    activePlayer = 0
    playing = true

    document.getElementById(`current--0`).textContent = currentScore
    document.getElementById(`current--1`).textContent = currentScore

    document.querySelector(`.player--0`).classList.remove('player--winner')
    document.querySelector(`.player--1`).classList.remove('player--winner')
    player0El.classList.add('player--active')
    player1El.classList.remove('player--active')
    score0El.textContent = 0
    score1El.textContent = 0
    diceEl.classList.add('hidden')
}

init()

const nextPlayer = function () {
    currentScore = 0
    document.getElementById(`current--${activePlayer}`).textContent =
        currentScore
    activePlayer = activePlayer === 0 ? 1 : 0
    // if (activePlayer === 0) {
    //     player0El.classList.add('player--active')
    //     player1El.classList.remove('player--active')
    // } else {
    //     player1El.classList.add('player--active')
    //     player0El.classList.remove('player--active')
    // }
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')
}

btnRoll.addEventListener('click', function () {
    if (playing) {
        // 1. Generating a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1
        // 2. Display dice
        diceEl.classList.remove('hidden')
        diceEl.src = `dice-${dice}.png`
        console.log(dice)
        // 3. switch to another player
        if (dice !== 1) {
            // add dice to current score
            currentScore += dice
            document.getElementById(`current--${activePlayer}`).textContent =
                currentScore
        } else nextPlayer()
    }
})

btnHold.addEventListener('click', function () {
    if (playing) {
        // if (activePlayer === 0) {
        //     scores[0] += currentScore
        //     score0El.textContent = scores[0]
        // } else {
        //     scores[1] += currentScore
        //     score1El.textContent = scores[1]
        // }
        scores[activePlayer] += currentScore
        document.getElementById(`score--${activePlayer}`).textContent =
            scores[activePlayer]

        if (scores[activePlayer] >= 20) {
            playing = false
            console.log('playing: ', playing)
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.remove('player--active')
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.add('player--winner')
        } else nextPlayer()
    }
})

// btnNew.addEventListener('click', function () {
//     init()
// })

btnNew.addEventListener('click', init)

console.log(1)
setTimeout(() => console.log(2), 0)
Promise.resolve(3).then(res => console.log(res))
console.log(4)
