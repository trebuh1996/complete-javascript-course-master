'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(element => element.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////////////////////////////////////////////////////////////
//// 186. Selecting, Creating, and Deleting Elements
console.log('\n 186. Selecting, Creating, and Deleting Elements');
//////////////////////////////////////////////////////////////////

// SELECTING ITEMS ============================================

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.sections');

document.getElementById('section--1');

// live collection
// getElementsByTagName - pozwala na zebranie całej kolekcji przycisków.
// Kolekcja (collection) jest dynamiczna i po usunięciu przycisku ze strony usunięty zostanie także z collections
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);
// console.log(document.getElementsByClassName('btn'));

// CREATING AND INSERTING ELEMENTS =============================

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookied for improved functionality and analytics.';
message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// // If you try to append and prepend message object at the same time in multiple places then it will be overwritten by last, beacuse it's LIVE DATA (the place of message will be changed)

header.prepend(message); // on top in header
// header.append(message);  // on bottom in header
// header.append(message.cloneNode(true)); // second message in the same time
// header.before(message);  // before header
// header.after(message);   // after header

// DELETE ELEMENTS =============================================
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
    // OR use DOM traversing
    // message.parentElement.removeChild(message); // this one was the old way
  });

//////////////////////////////////////////////////////////////////
//// 187. Styles, Attributes and Classes
console.log('\n 187. Styles, Attributes and Classes');
//////////////////////////////////////////////////////////////////

// STYLES
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

// inline style - style that we set manually ourselves
console.log(message.style.height); //this don't work, works only for inline types
console.log(message.style.backgroundColor); // this is inline style

console.log(getComputedStyle(message)); // Object containing all of the properties
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

// document.documentElement  <--> :root in CSS
document.documentElement.style.setProperty('--color-primary', 'orangered');

// ATTRIBUTES
// in HTML src, alt, class, id itp are all attributes

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

// Non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log(logo.src); // absoluth address path
console.log(logo.getAttribute('src')); // relative address path

const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

// DATA ATTTRIBUTES
console.log(logo.dataset.versionNumber);

// CLASSES
logo.classList.add('c', 'j');
logo.classList.remove('c', 'b');
logo.classList.toggle('c');
console.log(logo.classList.contains('c'));
console.log(logo.classList.contains('xD'));

// Don't use
logo.className = 'jonas'; // Don't use
