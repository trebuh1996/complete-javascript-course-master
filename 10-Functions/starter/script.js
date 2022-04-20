'use strict';

//////////////////////////////////////////////////////////////////////////////
//128. Default Parameters
//////////////////////////////////////////////////////////////////////////////

// const bookings = [];

// // ES6 defualut values are written in arguments after equal(=) sign
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // numPassengers = numPassengers || 1; //ES5(old) default param = 1
//   // price = price || 199; //ES5(old) default param = 199

//   const booking = { flightNum, numPassengers, price };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2);
// createBooking('LH123', undefined, 1000);

//////////////////////////////////////////////////////////////////////////////
//129. How Passing Arguments Works: Value vs. Reference
//////////////////////////////////////////////////////////////////////////////

// const flight = 'H234';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 123456789,
// };

// const checkIn = function (flightNum, passsenger) {
//   flightNum = 'LH999';
//   passsenger.name = 'Mr. ' + passsenger.name;

//   if (passsenger.passport === 123456789) {
//     alert('Check in');
//   } else {
//     alert('Wrong passport!');
//   }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

////// Primitve as an argument in the function
// When you passing an argument to function, and you change it, it change only a variable inside of a function
// Passing a primitive type to a function is really just the same as creating a copy of that variable inside of a function (whatever we change in the copy, will NOT change in the original)

////// Object as an argument in the function
// When you passing an object to function, and you change it, it will change object outside of a function.
// Passing object to a function it is just like copying an object (whatever we change in the copy, will change in the original)

//passing by value
//passing by reference
// JS does not have passing by reference, only by value.
// in C++ you can pass by reference to any value instead of the value itself

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

//////////////////////////////////////////////////////////////////////////////
//130. First-Class and Higher-Order Functions
//////////////////////////////////////////////////////////////////////////////

//FIRST-CLASS FUNCTIONS is just a feature that a programming language either has or does not have.
//All it means that all functions are values, there are no first-class functions in practice.
// it's just a concept

//FIRST-CLASS FUNCTIONS
//JavaScript treat functions as a first-class citizens and this mean, that functions are simply values
//Functions are just ano

//////////////////////////////////////////////////////////////////////////////
//131. Functions Accepting Callback Functions
//////////////////////////////////////////////////////////////////////////////

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase(); // Do a global search for space ' ':
//   // return str.replace(' ', '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Trasnsforem string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('Java is the best!', upperFirstWord);
// transformer('Java is the best!', oneWord);

// const high5 = function () {
//   console.log('👌');
// };
// document.body.addEventListener('click', high5); //example of higher-order function in real life

// ['Jonas', 'Martha', 'Adam'].forEach(high5);

// //Highder-Order function (takes a functions)
// //"Higher-order" means that this function operate in higher level of abstraction

//////////////////////////////////////////////////////////////////////////////
//132. Functions Returning Functions
//////////////////////////////////////////////////////////////////////////////

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');

greeterHey('Jonas');
greeterHey('Steven');
greet('witaj')('grubasie');

const greetArr2 = greeting => name2 => console.log(`${greeting} ${name2}`);
greetArr2('hello')('pablito');

const greetArr = greeting => name1 => console.log(`${greeting} ${name1}`);
greetArr('Hi')('Jonas');
