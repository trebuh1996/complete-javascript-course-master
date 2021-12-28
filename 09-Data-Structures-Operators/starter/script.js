'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
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
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

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
const arr = [1, 2, ...[3, 4]];

//REST because on the LHS of:

//a, b will be in main table, others will be packed to array nested in main array:
// [a, b, [others]]
//so we collect others into one array
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(others);
console.log(arr);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

// OBJECTS
//only for weekdays
const { sat, mon, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// FUNCTIONS
const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 4, 5);
add(2, 4, 5, 10, 12);
add(2, 4, 5, 5, 5, 5, 6, 5, 5, 5, 5);

// using spread operator for iterate all of the numbers in x table
const x = [23, 1, 11];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
