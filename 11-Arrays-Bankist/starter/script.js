'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const ffdisplayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  // create copy of array using slice and then sort
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${acc.balance} €`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes} €`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)} €`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest} €`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);
  // Display balance
  calcDisplayBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
};

//Event handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault(); // prevent from refreshing site (from submitting)
  // console.log('LOGIN');

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log('LOGIN');
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault(); // prevetn default behaviour
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  // Clean input transfer fields
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    //wartość wpisana musi być wieksza niż 0
    amount > 0 &&
    //odbiorca musi istnieć
    receiverAcc &&
    //zawartość zalogowanego konta musi być większa niz zadeklarowana wartość do wysłania
    currentAccount.balance >= amount &&
    //odbiorca musi istnieć, a jego nazwa nie może się pokrywać z nazwą konta nadawcy
    receiverAcc?.username !== currentAccount.username
  ) {
    //Do the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //Update UI
    updateUI(currentAccount);
    console.log('Transfer valid');
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add the movement
    currentAccount.movements.push(amount);

    // update UI
    updateUI(currentAccount);
  }
  // clear the input field
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    console.log('action for deletion');
    const i = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    // Delete account
    accounts.splice(i, 1);

    // Hide UI
    containerApp.style.opacity = 0;

    // Clean input transfer fields
    inputCloseUsername.value = inputClosePin.value = '';
  }
});

let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault;
  displayMovements(currentAccount.movements, !sorted);
  //flip sorting after next button click
  sorted = !sorted;
});
// console.log(containerMovements.innerHTML);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// 142.
/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// //slice - not mutates array
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);

// //splice - mutates array
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// // console.log(arr2.splice(2));
// // console.log(arr2.splice(-1));

// //reverse - mutates array
// console.log(arr2.reverse());
// console.log(arr2);

// //concat - not mutates array
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// //join - not mutates array
// console.log(letters.join(' - '));

/////////////////////////////////////////////////
// 143. The new at Method
/////////////////////////////////////////////////

// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0)); //new method

// // getting last array element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));
// console.log('jonas'.at(-1));

/////////////////////////////////////////////////
// 144. Looping Arrays: forEach
/////////////////////////////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// console.log('----- STANDARD ------');
// //standard type of for loop
// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdraw ${Math.abs(movement)}`);
//   }
// }

// //standard type of for loop with entries
// console.log('----- ENTRIES ------');
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdraw ${movement}`);
//   }
// }

// //forEach type of for loop
// console.log('----- FOREACH ------');
// movements.forEach(function (movement) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdraw ${Math.abs(movement)}`);
//   }
// });

// //forEach with index type of for loop
// console.log('----- FOREACH, index, array ------');
// //the order of params in function always must be like this
// movements.forEach(function (movement, index, array) {
//   if (movement > 0) {
//     console.log(`Movement ${index + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${index + 1}: You withdraw ${movement}`);
//   }
// });

/////////////////////////////////////////////////
// 145. forEach With Maps and Sets
/////////////////////////////////////////////////

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // Set
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

/////////////////////////////////////////////////
// 147. Creating DOM Elements
/////////////////////////////////////////////////

/////////////////////////////////////////////////
// Coding Challenge #1
/////////////////////////////////////////////////

// /*
// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

// Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

// 1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
// 2. Create an array with both Julia's (corrected) and Kate's data
// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
// 4. Run the function for both test datasets

// HINT: Use tools from all lectures in this section so far 😉

// TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// GOOD LUCK 😀
// */

// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];
// const dogsJulia1 = [3, 5, 2, 12, 7];
// const dogsKate1 = [4, 1, 15, 8, 3];

// const checkDogs = function (arr1, arr2) {
//   const arr1Dog = arr1.slice(0, -2).slice(1);
//   const arrDogs = [...arr1Dog, ...arr2];
//   console.log(arrDogs);

//   arrDogs.forEach(function (mov, i, arr) {
//     if (mov > 3) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${mov} years old`);
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//     }
//   });
// };

// console.log('---- 1 ----');
// checkDogs(dogsJulia, dogsKate);
// console.log('---- 2 ----');
// checkDogs(dogsJulia1, dogsKate1);

/////////////////////////////////////////////////
// 150. The map Method
/////////////////////////////////////////////////

// const eur2usd = 1.1;

// const movUSD = movements.map(function (mov) {
//   return mov * eur2usd;
// });

// //replace callback with arrow function
// const movUSD2 = movements.map(mov => mov * eur2usd);

// console.log(movements);
// console.log(movUSD);
// console.log(movUSD2);

// const movDesc = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
// );

// console.log(movDesc);

/////////////////////////////////////////////////
// 152. The filter Method
/////////////////////////////////////////////////

// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });

// console.log(movements);
// console.log(deposits);

// const withdrawals = movements.filter(mov => mov < 0);

// console.log(withdrawals);

/////////////////////////////////////////////////
// 153. The reduce Method
/////////////////////////////////////////////////

// console.log(movements);

// //acc - accumulator -> SNOWBALL
// // zero at the end is for initialize value for acc
// const balance = movements.reduce((acc, cur, i, arr) => acc + cur, 0);
// console.log(balance);

// //Maximum value
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);
// console.log(max);

/////////////////////////////////////////////////
// 154. Coding Challenge #2
/////////////////////////////////////////////////

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const ages1 = [5, 2, 4, 1, 15, 8, 3];
// const ages2 = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge = function (ages) {
//   const agesAsHuman = ages.map(function (age) {
//     // return age <= 2;
//     if (age <= 2) {
//       return 2 * age;
//     } else {
//       return 16 + age * 4;
//     }
//   });

//   const adults = agesAsHuman.filter(age => age >= 18);

//   // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
//   const average = adults.reduce(
//     (acc, age, i, arr) => acc + age / arr.length,
//     0
//   );

//   console.log(agesAsHuman);
//   console.log(adults);

//   return average;
// };

// console.log('====HERE====');
// console.log(ages1);
// console.log(calcAverageHumanAge(ages1));
// console.log(calcAverageHumanAge(ages2));

/////////////////////////////////////////////////
// 155. The Magic of Chaining Methods
/////////////////////////////////////////////////

// const eur2usd = 1.1;

// // PIPELINE
// // const totalDepositsUSD = movements
// //   .filter(mov => mov > 0)
// //   .map(mov => mov * eur2usd)
// //   .reduce((acc, mov) => acc + mov, 0);

// // PIPELINE with log inside
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map((mov, i, arr) => {
//     console.log(arr);
//     return mov * eur2usd;
//   })
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositsUSD);

/////////////////////////////////////////////////
// 154. Coding Challenge #3
/////////////////////////////////////////////////

// // The same as #2 but with chaining

// const ages1 = [5, 2, 4, 1, 15, 8, 3];
// const ages2 = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge = ages =>
//   ages
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

// console.log('====HERE====');
// console.log(ages1);
// console.log(calcAverageHumanAge(ages1));
// console.log(calcAverageHumanAge(ages2));

/////////////////////////////////////////////////
// 157. The find Method
/////////////////////////////////////////////////

// console.log('====HERE====');
// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(firstWithdrawal);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

/////////////////////////////////////////////////
// 161. some and every
/////////////////////////////////////////////////

// console.log(movements);

// // EQUALITY
// console.log(movements.includes(-130));
// // SOME: CONDITION
// console.log(movements.some(mov => mov === -130));

// const anyDeposits = movements.some(mov => mov > 1500);
// console.log(anyDeposits);

// // EVERY
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

// // Separate callback
// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));

/////////////////////////////////////////////////
// ES2019
// 162. flat and flatMap
/////////////////////////////////////////////////

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat()); // output: [1, 2, 3, 4, 5, 6, 7, 8]

// // flat metod goes one level deep
// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat()); // output: [Array(2), 3, 4, Array(2), 7, 8]

// //using depth param we can go as deep as we want
// const depth = 2;
// console.log(arrDeep.flat(depth)); // output: [1, 2, 3, 4, 5, 6, 7, 8]

// // // flat accounts movements to separate arrays
// // const accountMovements = accounts.map(acc => acc.movements);
// // console.log(accountMovements);
// // // flat all movements from all accounts
// // const allMovements = accountMovements.flat();
// // console.log(allMovements);
// // // reducing to one value
// // const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// // console.log(overalBalance);

// // making this all in one line
// const overalBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

// // makint this all using only flatMap
// // but flatMap goes only 1 level deep
// const overalBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance2);

/////////////////////////////////////////////////
// 163. Sorting Arrays
/////////////////////////////////////////////////

// // STRINGS
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];

// // using sort (mutates original array)
// console.log(owners.sort());

// //NUMBERS
// // sorting numbers dont works this way
// // sort always uses string (numbers are converted do strings)
// console.log(movements);
// console.log(movements.sort());

// // SORTING NUMBER ASC ORDER
// // for sorting numbers need to use callback function
// // return > 0 then B, A (switch order)
// // return < 0 then A, B (keep order)
// movements.sort((a, b) => {
//   if (a > b) return 1; // switch order of two values in array
//   if (b > a) return -1; // keep order
// });
// console.log(movements);

// // SORTING NUMBER DESC ORDER
// movements.sort((a, b) => {
//   if (a > b) return -1; // switch order of two values in array
//   if (b > a) return 1; // keep order
// });
// console.log(movements);

// // SORTING NUMBER ASC ORDER (SHORT WAY)
// movements.sort((a, b) => a - b);
// console.log(movements);

// // SORTING NUMBER DESC ORDER (SHORT WAY)
// movements.sort((a, b) => b - a);
// console.log(movements);

/////////////////////////////////////////////////
// 164. More Ways of Creating and Filling Arrays
/////////////////////////////////////////////////

// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// // creates Array with empty positions
// const x = new Array(7);
// console.log(x);

// // only fill metod can do smt with this type of array
// //x.fill(1);      // just fill with all values with 1
// // x.fill(1, 3);  // what value, where you want to start to fill
// // x.fill(1, 3, 5); // value, where_to_start, where_to_stop
// x.fill(1, 3, 5); // value, where_to_start, where_to_stop
// console.log(x);

// arr.fill(23, 2, 6);
// console.log(arr);

// // a better way to create an Array and fill it with values at start
// // or from loop
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// // a better way to fill Array with param and condition
// const z = Array.from({ length: 7 }, (cur, i) => i + 1);
// console.log(z);

// // dice rolls
// const max = 6 + 1;
// const min = 1 - 1;
// const diceRolls = Array.from(
//   { length: 100 },
//   () => Math.floor(Math.random() * (max - min)) + min
// );
// console.log(diceRolls);

// // get value from list of balance from web UI
// // 1. get object
// // 2. delete '€' sign
// // 3. convert to Number and return as 'el'
// // 4. pass data to movementsUI
// labelBalance.addEventListener('click', function () {
//   // first method
//   // everything done with one variable

//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', ''))
//   );
//   console.log(movementsUI);

//   // second method
//   // need to use second array to use map()
//   const movementsUI2 = [...document.querySelectorAll('.movements__value')];
//   const movementsUI3 = movementsUI2.map(el =>
//     Number(el.textContent.replace('€', ''))
//   );
//   console.log(movementsUI3);
// });

/////////////////////////////////////////////////
// 166. Array Methods Practice
/////////////////////////////////////////////////

// // const bankDepositSum = accounts.map(acc => acc.movements).flat();
// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((sum, cur) => sum + cur, 0);
// console.log(bankDepositSum);

// // how many deposits there have been in a bank with at least 1000$
// // 1st method
// const numDeposit1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 1000).length;
// console.log(numDeposit1000);

// // 2st method
// const numDeposit1000_2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
// console.log(numDeposit1000_2);

// // incrementing by ++
// console.log('===here===');
// let a = 10;
// console.log(a++);
// console.log(a);

// // 3.
// // const sums = accounts
// const { deposits, withdrawals } = accounts

//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       // notation with dot (.)
//       // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
//       // notation with [squere brackets]
//       sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );

// console.log(deposits, withdrawals);

// // 4.
// // this is a nice title -> This Is a Nice Title
// const convertTitleCase = function (title) {
//   const capitilize = str => str[0].toUpperCase() + str.slice(1);
//   const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with', 'and'];

//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word =>
//       exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join(' ');
//   return capitilize(titleCase);
// };

// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a LONG title but not too long'));
// console.log(convertTitleCase('and here is another title with an EXAMPLE'));

/////////////////////////////////////////////////
// 167. Coding Challenge #4
/////////////////////////////////////////////////

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)

console.log(dogs);
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
// console.log('');
// console.log('==== 2.a. ======');

// const dogSarah = function (name) {
//   dogs.forEach((dog, i, arr) => {
//     dog.owners.forEach(owner => {
//       if (name === owner) {
//         dog.curFood > dog.recFood
//           ? console.log(`${owner} dog za dużo żre`)
//           : console.log(`${owner} Żre ok`);
//       }
//     });
//   });
// };
// dogSarah('Sarah');

// console.log('');
// console.log('==== 2.b. ======');

const dogSarah2 = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
  `Sarah's dog is eating too ${
    dogSarah2.curFood > dogSarah2.recFood ? 'much' : 'little'
  }`
);

// 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
// console.log('');
// console.log('==== 3.a. ======');

// const a = [];
// const b = [];

// dogs.forEach((dog, i, arr) => {
//   if (dog.curFood > dog.recFood) {
//     a.push(dog.owners);
//   } else if (dog.curFood < dog.recFood) {
//     b.push(dog.owners);
//   }
// });

// const ownersEatTooMuch = a.flat();
// const ownersEatTooLittle = b.flat();

// console.log(ownersEatTooMuch);
// console.log(ownersEatTooLittle);

console.log('');
console.log('==== 3.b. ======');

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
console.log('');
console.log('==== 4. ======');
console.log(ownersEatTooLittle.join(' and ').concat("'s dogs eat too little!"));
console.log(ownersEatTooMuch.join(' and ').concat("'s dogs eat too much!"));
console.log(dogs);

//5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
console.log('\n==== 5 ======');

console.log(dogs.some(dog => dog.curFood === dog.recFood));

// 6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)

// console.log('');
console.log('\n==== 6. ======');

const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(checkEatingOkay));
console.log(dogs);

// 7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)

console.log('');
console.log('==== 7. ======');

const dogsOk = dogs.filter(checkEatingOkay);
console.log(dogsOk);

// 8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

console.log('');
console.log('==== 8. ======');

const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);

//
