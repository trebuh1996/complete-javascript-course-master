'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2022-06-11T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  switch (daysPassed) {
    case 0:
      return 'Today';
    case 1:
      return 'Yesterday';
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
      return `${daysPassed} days ago`;
    default:
      // const day = `${date.getDate()}`.padStart(2, 0);
      // const month = `${date.getMonth() + 1}`.padStart(2, 0);
      // const year = date.getFullYear();
      // return `${day}/${month}/${year}`;
      return new Intl.DateTimeFormat(locale).format(date);
  }
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const formatedMov = formatCur(mov, acc.locale, acc.currency);

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formatedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
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
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // when 0 sec, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Log in to get started`;
      containerApp.style.opacity = 0;
    }
    time--; // decrese 1s
  };
  let time = 10; // set time to 5 min

  // Call the timer every second
  tick();
  const timer = setInterval(tick, 1000);

  return timer;
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// // FAKE ALWAYS LOGGED IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Experiment with date internationalization API
    const now = new Date();
    const options = {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      // weekday: 'long',
    };
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = +Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // timer
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);
      // Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());
      // Update UI
      updateUI(currentAccount);
    }, 2500);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// 170. Converting and Checking Numbers

// console.log(23 === 23.0);

// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 === 0.3);

// // Conversion
// console.log(Number('23'));
// console.log(+'23');

// // Parsing
// console.log(Number.parseInt('30px', 10));
// console.log(Number.parseInt('e23', 10));
// //for binary 2 instead of 10

// console.log(Number.parseFloat('2.5rem'));
// console.log(Number.parseInt('2.5rem'));
// // dont need to pass "Number" becasue it's global function
// // but you can

// //
// console.log(Number.isNaN(20));
// console.log(Number.isNaN('  20'));
// console.log(Number.isNaN(+'20'));
// console.log(Number.isNaN(23 / 0));

// // isFinite (is it a number?)
// // the best method to check is value a number
// console.log(Number.isFinite(20));
// console.log(Number.isFinite('20'));
// console.log(Number.isFinite(+'20x'));
// console.log(Number.isFinite(23 / 0));

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// 171. Math and Rounding
console.log('\n171. Math and Rounding');

// console.log(Math);
// // pierwiastkowanie
// console.log(25 ** (1 / 2));
// console.log(8 ** (1 / 3));

// // max/min
// console.log(Math.max(5, 18, 23, 11, 2));
// console.log(Math.min(5, 18, 23, 11, 2));
// console.log(Math.PI * Number.parseFloat('10px') ** 2);

// // Random
// console.log(Math.trunc(Math.random() * 6) + 1);
// const randomInt = (min, max) =>
//   Math.trunc(Math.random() * (max - min) + 1) + min;
// console.log(randomInt(10, 20));

// // Round integers
// console.log(Math.round(23.3));
// console.log(Math.round(23.9));

// console.log(Math.ceil(23.3));
// console.log(Math.ceil(23.9));

// console.log(Math.floor(23.3));
// console.log(Math.floor('23.9'));
// console.log(Math.floor(-23.9));

// console.log(Math.trunc(23.3));
// console.log(Math.trunc(23.9));

// // Rounding decimals (STRING)
// console.log((2.7).toFixed(0));
// console.log((2.7).toFixed(3));
// console.log((2.7).toFixed(2));
// console.log(+(2.345).toFixed(0));

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// 172. The Remainder Operator

console.log('\n172. The Remainder Operator');
// // remain - reszta, pozostawić

// console.log(5 % 2);
// console.log(5 / 2);

// const isEven = n => n % 2 === 0; // sprawdza czy reszta z dzielenia jest równa zero
// console.log(isEven(8));

// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
//     if (i % 2 === 0) row.style.backgroundColor = 'orangered';
//     if (i % 3 === 0) row.style.backgroundColor = 'blue';
//   });
// });

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// 173. Numeric Separators

console.log('\n173. Numeric Separators');
// // underscore is used as a separator for large numbers
// const diameter = 123_456_789;
// console.log(diameter); //123456789

// const price = 345_99;
// console.log(price);

// const transferFee = 1_500;
// console.log(transferFee);

// const PI = 3.1415;
// console.log(PI);

// // numeric separators only in variables containing countable e.g. int, bigint etc
// console.log(Number('230000'));
// console.log(Number('230_000'));

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// 174. Working with BigInt
console.log('\n174. Working with BigInt');

// // JS cannot represent correctly those numbers!!!
// // number bigger than MAX_SAFE_INTEGER is called UNSAFE
// // js can deal with them but
// // if we do calculations bigger than this then we can loose precision
// console.log(2 ** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(2 ** 53 + 1);

// // bigInt
// // 'n' at the end represents bigInt
// console.log(109283192839812301823182391803891283812038n);
// console.log(BigInt(109283192839812301823182391803891283812038));

// // Operations
// console.log(10_000n + 10_000n);
// console.log(128319023812391820398123009n * 12312123n);
// // can't mix bigInt with other types like int
// const huge = 12312312312312312n;
// const num = 23;
// // console.log(huge * num);
// console.log(huge * BigInt(num));

// // Exceptions
// console.log(20n > 15); // this work with other types
// console.log(20n === 20); // strict equality dont work
// console.log(typeof 20n);
// console.log(20n == 20);
// // console.log(Math.sqrt(16n)); // cannot do Math.sqrt to bigInt

// console.log(huge + ' is REALLY BIG!!!');

// // Divisions
// console.log(10n / 3n); // returns closest bigInt
// console.log(10 / 3);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// 175. Creating Dates
console.log('\n175. Creating Dates');

// const now = new Date();
// console.log(now);
// console.log(new Date('December 24, 2015')); // have a constructor
// console.log(new Date(account1.movementsDates[0]));

// console.log(new Date(2037, 11, 19, 15, 23, 5));
// // month in dates are from 0 to 11, where 0 is January
// console.log(new Date(2037, 10, 31));

// // begining of the UNIX time
// console.log(new Date(0)); // 01.01.1970
// console.log(new Date(3 * 24 * 60 * 60 * 1000)); // TIMESTAMP OF THE DAY NO. 3

// // Working with dates
// const future = new Date(2037, 11, 19, 15, 23);
// console.log(future);
// console.log(future.getUTCFullYear());
// console.log(future.getYear()); // DON'T USE THIS
// console.log(future.getMonth());
// console.log(future.getDay());
// console.log(future.getHours());
// console.log(future.toISOString()); // 'Z' at he end means that this is ISO
// console.log(future.getTime());

// console.log(new Date(2144845380000)); //TIMESTAMP
// console.log(Date.now()); //TIMESTAMP SHOW
// console.log(new Date(Date.now()));

// future.setFullYear(2040);
// console.log(future);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// 177. Operations With Dates
console.log('\n177. Operations With Dates');

// const future = new Date(2037, 10, 19, 15, 23);
// console.log(+future);

// const calcDaysPassed = (date1, date2) =>
//   Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));

// const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4));
// console.log(days1);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// 178. Internationalizing Dates (Intl)
console.log('\n178. Internationalizing Dates (Intl)');
// Easyly format numbers and strings according to different languages

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// 179. Internationalizing Numbers (Intl)
console.log('\n179. Internationalizing Numbers (Intl)');
// // Easyly format numbers and strings according to different languages

// const num = 121212.12;

// const options = {
//   style: 'currency',
//   // unit: 'mile-per-hour',
//   unit: 'celsius',
//   currency: 'EUR',
//   // useGrouping: true,
// };

// console.log(new Intl.NumberFormat('en-US', options).format(num));
// console.log(new Intl.NumberFormat('de-DE', options).format(num));
// console.log(new Intl.NumberFormat(navigator.language, options).format(num));

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// 180. Timers: setTimeout and setInterval
console.log('\n180. Timers: setTimeout and setInterval');

// make smt once after time
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
  3000,
  ...ingredients
);
console.log('Waiting...');
if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// setInterval - make smt multiple times after time
setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000);
