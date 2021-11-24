'use strict'

// select items and assign them to a variable
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnsOpenModal = document.querySelectorAll('.show-modal')

// console.log(btnsOpenModal)
// for (let i = 0; i < btnsOpenModal.length; i++)
//     console.log(
//         btnsOpenModal[i].addEventListener('click', function () {
//             console.log('Button clicked')
//             modal.classList.remove('hidden')
//             overlay.classList.remove('hidden') // blur site
//         })
//     )

const showModal = function () {
    console.log('Button clicked')
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden') // blur site
}
const closeModal = function () {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

// console.log(btnsOpenModal)
for (let i = 0; i < btnsOpenModal.length; i++)
    console.log(btnsOpenModal[i].addEventListener('click', showModal))

btnCloseModal.addEventListener('click', closeModal) //here you dont use () after calling function!
overlay.addEventListener('click', closeModal) //here you dont use () after calling function!

// ++++++++++++++++++++++++++++++++++++
// 81. Handling an "Esc" Keypress Event
// ++++++++++++++++++++++++++++++++++++

document.addEventListener('keydown', function (e) {
    // function(e) - return which key was pressed
    // console.log(e.key)
    // if (e.key === 'Escape') console.log('Esc was pressed')
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        // if pressed 'Esc' and modal does NOT contain the hidden class
        closeModal() // then close modal
    }
})
