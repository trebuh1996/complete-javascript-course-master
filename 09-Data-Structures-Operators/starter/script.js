'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   //numGuests: 11,
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     mon: {
//       open: 15,
//       close: 17,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = '20:00',
//     address,
//   }) {
//     console.log(
//       `Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },

//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };

///////////////////////////////////////
// 112. Enhanced Object Literals PART I
///////////////////////////////////////

// ES6 first
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

//third  enhancement of ES6 in 112. Enhanced Object Literals
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  mon: {
    open: 15,
    close: 17,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// const hours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   mon: {
//     open: 15,
//     close: 17,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //numGuests: 11,
  //openingHours: openingHours, //restoring variable of outside as an object
  openingHours, // ES6 enhanced object literals

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  // old way
  // orderPasta: function (ing1, ing2, ing3) {
  //   console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  // },
  // new way ES6 definig methods
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

///////////////////////////////////////
// 113. Optional Chaining (?.)
///////////////////////////////////////
// EXAMPLE
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}
//When you have multiple chains, and you dont want to check each link in that chain like this VVV
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}
// instead of this, you can do optional chaining, that check is that part of chain
// available, and if not then it will return undefined VVV
console.log(restaurant.openingHours?.mon?.open);
// it works like that:
// only if the property(właściwość) that is before that question mark, only then the property open will be read

// Methods
console.log(restaurant.order?.(0, 1) ?? 'this method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'this method does not exist');

//const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
const users = [];

console.log(users[0]?.name ?? 'User array empty');

///////////////////////////////////////
// 112. Enhanced Object Literals PART II
///////////////////////////////////////

// // enter an object that's outside of the object 'restaurant'
// //check for restaurant.hours or hours in search menu
// console.log(restaurant.hours);
// console.log(restaurant);

// // second enhancement: you can write methotds without : function

// // compute property names instead of having to write them out manualy and literally
// // compute means calculate

// ///////////////////////////////////////
// // 111. Looping Arrays: The for-of Loop
// ///////////////////////////////////////
// // const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// // //if you want just to iterate elements in the menu array
// // for (const item of menu) console.log(item);

// // //if you want to iterate element with it's index of an array
// // for (const item of menu.entries()) console.log(item);

// // // then you have array of arrays of index and element
// // // console.log(menu.entries());\
// // console.log([...menu.entries()]);

// // //final one (with destructed array and incremented index)
// // for (const [i, el] of menu.entries()) {
// //   console.log(`${i + 1}: ${el}`);
// // }

///////////////////////////////////////
// Coding Challenge #1
///////////////////////////////////////

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// //console.log(game);

// // 1. Create one player array for each team (variables 'players1' and 'players2')
// // const players1 = [game.players[0]];
// // const players2 = [game.players[1]];
// const [players1, players2] = game.players;
// // console.log(players1);
// // console.log(players2);

// // 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// const [gk, ...fieldPlayers] = players1;
// // console.log(gk, fieldPlayers);

// // 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// const allPlayers = [...players1, ...players2];
// // console.log(allPlayers);

// // 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// // console.log(players1Final);

// // 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// // console.log(game.odds);
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// // console.log(team1, draw, team2);

// //6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// const printGoals = function (...playerNames) {
//   //for (let i = 0; i < playerNames.length; i++) {
//   //console.log(playerNames[0][i]);
//   // }
//   console.log(playerNames);
//   console.log(playerNames.length);
// };
// printGoals(...game.scored);

// // 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
// console.log(team1);
// console.log(team2);

// // first condition is false, second is true (string is true until theres no '')
// team1 > team2 && console.log('team 1 is greater');
// // first and second condition are true so it will log to console
// team1 < team2 && console.log('team 2 is greater');

// // ===================================================================
// // 109. Logical assignment operator ||=, &&= and nullish assignment operator ??=
// // ===================================================================
// const rest1 = {
//   name: 'Capri',
//   numGuests: 20,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// // rest1.numGuests = rest1.numGuests || 10; //if first value is true then
// // rest2.numGuests = rest2.numGuests || 10;

// // rest1.numGuests ||= 10;
// // rest1.numGuests ||= 10;
// rest1.numGuests ??= 10;
// rest1.numGuests ??= 10;

// // rest1.owner = rest1.owner && '<ANONIM>';
// // rest2.owner = rest2.owner && '<ANONIM>';
// rest1.owner &&= '<ANONIM>';
// rest2.owner &&= '<ANONIM>';

// console.log(rest1);
// console.log(rest2);

// ===================================================================
// XXX. some first stuff =============================================
// ===================================================================

// const arr = [1, 2, 3];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// const [x, y, z] = arr;

// // const [first, second] = restaurant.categories;
// let [first, , second] = restaurant.categories;

// console.log('first: ', first, 'second: ', second);

// //swapping values in table WRONG WAY
// const temp = first;
// first = second;
// second = temp;
// console.log('first: ', first, 'second: ', second);

// //swapping values in table using RIGHT WAY
// [first, second] = [second, first];
// console.log('first: ', first, 'second: ', second);

// //
// const [starter, main] = restaurant.order(2, 0);
// console.log('first: ', first, 'second: ', second);

// //nesting and destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// const [i, , [j, k]] = nested;
// console.log('i: ', i, 'j: ', j, 'k: ', k);
// console.log(nested);

// // Default values
// const [f = 1, g = 1, h = 1] = [2, 2, 2];
// console.log(f, g, h);

// // ===================================================================
// // 104. Destructing objects ==========================================
// // ===================================================================

// //assigning values from the object restaurant to variable object outside of the object
// const { name, categories, openingHours } = restaurant;
// console.log('104: ', name, categories, openingHours);

// // variable names different from the property names / nazwa zmiennej różna od zmiennej wewnątrz obiektu po przypisanu z obiektu
// // use coolon ":" after property name and then specify name of new variable
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // Default values
// // for variables eg. when theres no "menu" variable in object restaruant
// const { menu = [], starterMenu: starters = [] } = restaurant;

// //Mutating variables
// //if need to set value from obj to variables outside of obj then
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 }; // in object we have properity

// // const {a, b}  // cannot use const {a, b} or let {a, b} because there are a and b variables
// // let {a, b}
// // {a, b} // cannot just destructurize obejct with {} braces, becasue JS expect code block
// ({ a, b } = obj); // wrap all of this into parenthesis ()
// console.log(a, b);

// // Nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// // console.log(open, close);
// console.log(o, c);

// //setting object properity in object restaurant to log it into console
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// //setting object properity in object restaurant to log it into console with default values
// restaurant.orderDelivery({
//   time: '17:30',
//   address: 'Via del Sole, 21',
// });

// ===================================================================
// 105. The spread operator ==========================================
// ===================================================================
//works on all iterables, not only on tables and objects

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// // add all the array to the newArr using spread operator "..." while values in array are separated with comma
// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// // writning new array based on restaurant mainMenu, expanding witch new dish
// const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
// console.log(newMenu);

// // Copy array - shallow copy
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join two arrays
// const joinedMenuCopy = [...restaurant.mainMenu, ...newMenu];
// console.log(joinedMenuCopy);

// // Iterables: arrays, strings, maps, sets, NOT objects
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);

// // Real world example of using spread operator
// // use " \ " backslash to let thing JS that sign " ' " is the text and not the end of the string
// const ingredients = [
//   // prompt("Let's make pasta! Ingrediens 1?"),
//   // prompt('Ingredient 2?'),
//   // prompt('ingredient 3'),
// ];
// console.log(ingredients);

// //restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); //slow one
// restaurant.orderPasta(...ingredients); // fast and sexy

// // Objects (not iterable but works with spread operator)
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Giuseppe' };
// console.log(newRestaurant);

// const restaruantCopy = { ...restaurant };
// restaruantCopy.name = 'Ristorante Roma';
// console.log(restaruantCopy.name);
// console.log(restaurant.name);

// ===================================================================
// 106. Rest pattern and Parameters ==================================
// ===================================================================

//spread patern is used to build new arrays or to pass multiple values
//in both cases we use spread operator to expand an array into into individual elements

//rest pattern have the same synthax but to collect multiple elements to array

// spread is used to unpack an array
// rest is used to pack elements into an array

//SPREAD because on the RHS of:
// const arr = [1, 2, ...[3, 4]];

//REST because on the LHS of:

//a, b will be in main table, others will be packed to array nested in main array:
// [a, b, [others]]
//so we collect others into one array
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(others);
// console.log(arr);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, risotto, otherFood);

// // OBJECTS
// //only for weekdays
// const { sat, mon, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // FUNCTIONS
// const add = function (...numbers) {
//   console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(2, 4, 5);
// add(2, 4, 5, 10, 12);
// add(2, 4, 5, 5, 5, 5, 6, 5, 5, 5, 5);

// // using spread operator for iterate all of the numbers in x table
// const x = [23, 1, 11];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');

// // ===================================================================
// // 107. Short Circuiting (&& and ||)==================================
// // ===================================================================

// restaurant.numGuests = 23;
// // if you dont know if numGuests variable exist then use below example
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// // && AND operator
// // || OR operator

// ===================================================================
// 108. The Nullish Coalescing Operator (??) =========================
// ===================================================================
// restaurant.numGuests = 0;

// const guests = restaurant.numGuests || 10; //here it will not work because numGuests = 0, so in boolean it meas FALSE
// console.log(guests);

// // nullish: null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10; // here it will work, because
// console.log(guestCorrect);
