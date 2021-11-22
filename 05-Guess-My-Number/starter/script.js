'use strict'

/*
//++++++++++++++++++++++++
// lesson 70. Guess my number
//++++++++++++++++++++++++

//get the value from html - DOM
console.log(document.querySelector('.message').textContent)
console.log(document.querySelector('.message'))

//++++++++++++++++++++++++
// 71. What's the DOM and DOM Manipulation
//++++++++++++++++++++++++

// javascript interract with the web page (hmtl) -> DOM manipulation


//++++++++++++++++++++++++
// 72. Selecting and Manipulating Elements
//++++++++++++++++++++++++

document.querySelector('.message').textContent = 'BAJO JAJO'
console.log(document.querySelector('.message').textContent)

document.querySelector('.number').textContent = 21
document.querySelector('.score').textContent = 10

document.querySelector('.guess').value = 23
console.log(document.querySelector('.guess' ).value)

*/

//++++++++++++++++++++++++
// 73. Handling Click Events
//++++++++++++++++++++++++
//++++++++++++++++++++++++
// 74. Implementing the Game Logic
//++++++++++++++++++++++++
//++++++++++++++++++++++++
// 75. Implementing CSS style
//++++++++++++++++++++++++
//++++++++++++++++++++++++
// 76. Coding challenge
//++++++++++++++++++++++++

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

//const number = Math.trunc(Math.random() * numberTo) // here is code from 0 to 19
const numberTo = 20
let secretNumber = Math.trunc(Math.random() * numberTo + 1) // here is code from 1 to 20
let score = 20
// document.querySelector('.number').textContent = secretNumber

const reset = function (score, secretNumber) {
    score = 20
    secretNumber = '?'
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.guess').value = ''
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.number').textContent = secretNumber
    secretNumber = Math.trunc(Math.random() * numberTo + 1)
    return [score, secretNumber]
}

const logScore = function (score, text) {
    if (score > 1) {
        score = score - 1
        document.querySelector('.score').textContent = score
        document.querySelector('.message').textContent = text
    } else document.querySelector('.message').textContent = 'YOU LOST THE GAME'
    return score
}

const winner = function () {
    document.querySelector('.message').textContent = 'BAJO JAJO'
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem'
    document.querySelector('.number').textContent = secretNumber
}

//console.log(secretNumber)
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)
    console.log(typeof guess, guess)

    if (!guess) {
        score = logScore(score, 'No number!')
    } else if (guess === secretNumber) {
        winner()
    } else if (guess > secretNumber) {
        score = logScore(score, 'to high')
    } else if (guess < secretNumber) {
        score = logScore(score, 'to low')
    }
})

document.querySelector('.again').addEventListener('click', function () {
    ;[score, secretNumber] = reset(score, secretNumber)
})
