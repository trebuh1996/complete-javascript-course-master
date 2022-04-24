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

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');

// greeterHey('Jonas');
// greeterHey('Steven');
// greet('witaj')('grubasie');

// const greetArr2 = greeting => name2 => console.log(`${greeting} ${name2}`);
// greetArr2('hello')('pablito');

// const greetArr = greeting => name1 => console.log(`${greeting} ${name1}`);
// greetArr('Hi')('Jonas');

//////////////////////////////////////////////////////////////////////////////
//133. The call and apply Methods
//////////////////////////////////////////////////////////////////////////////

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   // book: function() {}
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push(`flight ${this.iataCode}${flightNum}`, name);
//   },
// };

// lufthansa.book(239, 'Jonas Schmedtmann');
// lufthansa.book(635, 'Jon Smith');
// console.log(lufthansa);
// console.log();

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// // call method
// // book(23, 'Sarah')
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 583, 'Mary Cooper');
// console.log(swiss);

// // Apply method - gets array of parameters
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);
// // Call method
// book.call(swiss, ...flightData); // the same result call as apply

// //Bind method
// //not imediatelly call the function but return a new function where the THIS keyword is bound

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);
// bookEW(23, 'Stever Williams');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Jonas Schmedtmann');
// bookEW23('Martha Cooper');

// lufthansa.planes = 300;

// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);

//   console.log('   ');
//   console.log('   ');
// };

// // In event handler action the THIS keyword always points to the element on witch that hanlder is attached, so:

// //this will work but not on a button press
// lufthansa.buyPlane();

// //that will NOT work, because THIS keyword is attached directly to a button element
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);

// //that will WORK, because THIS will be a function from lufthansa binded to lufthansa (get a function from lufthansa and bind context to object lufthansa)
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // PARTIAL APPLICATION
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// //here we dont care with THIS keyword, so pass null
// //return new function exacly the same as addTax, but with different tax percentage value
// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(100));
// console.log(addVAT(23));

// // create a function that can return a function which will do what addVAT does
// const dupa = function (rate) {
//   return function (value) {
//     console.log(addTax(rate, value));
//   };
// };

// const dupa2 = dupa(0.5);
// dupa2(100);

//////////////////////////////////////////////////////////////////////////////
//135. Coding Challenge #1
//////////////////////////////////////////////////////////////////////////////

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer: function () {
    const promptVal = prompt(`${this.question}\n${this.options.join('\n')}`);
    const numLang = parseInt(promptVal);

    if (!isNaN(numLang)) {
      if (numLang >= 0 && numLang <= 3) {
        console.log(`you choose: ${numLang}`);
        this.answers[numLang]++;
        this.displayResults();
      } else {
        alert('Wrong number.\nChoose beetwen 0 and 3');
      }
    } else {
      alert('Pass number, not character');
    }
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(',')}`);
    }
    // console.log(this.answers);
  },
};

// poll.registerNewAnswer();

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'array');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
