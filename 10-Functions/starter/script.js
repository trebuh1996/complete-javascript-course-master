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

const flight = 'H234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 123456789,
};

const checkIn = function (flightNum, passsenger) {
  flightNum = 'LH999';
  passsenger.name = 'Mr. ' + passsenger.name;

  if (passsenger.passport === 123456789) {
    alert('Check in');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

////// Primitve as an argument in the function
// When you passing an argument to function, and you change it, it change only a variable inside of a function
// Passing a primitive type to a function is really just the same as creating a copy of that variable inside of a function (whatever we change in the copy, will NOT change in the original)

////// Object as an argument in the function
// When you passing an object to function, and you change it, it will change object outside of a function.
// Passing object to a function it is just like copying an object (whatever we change in the copy, will change in the original)

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(jonas);
checkIn(flight, jonas);
