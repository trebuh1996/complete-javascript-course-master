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
