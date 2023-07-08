'use strict';

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  booking: function (starterIndex, starterMain) {
    return [this.starterMenu[starterIndex], this.mainMenu[starterMain]]
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
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const arr = [1, 2, 3]

// Example of destructarization

const [a, b, c] = arr;
console.log(a, b, c);
console.log(arr);

let [first, second] = restaurant.categories;
console.log(first, second);
// Example without destructarization by switching variables

// const temp = first
// first = second
// second = temp

// Example with destructarization (necessary to add ; after cnlog)

[first, second] = [second, first];
console.log(first, second)

// Returning 2 arr values from a func in object
const [main, secondary] = restaurant.booking(2, 0)
console.log(main, secondary)

// Nested array (array in array) destructuring
const nestedArr = [1, 2, [3, 4]]
const [q, , [w, e]] = nestedArr;
console.log(q, w, e)

// Default values (if we don't know how much values in arr)
const [f, s, d = 1] = [1, 2]
// Will be undefined on d because of no value in arr, to fix this we can set every value in arr to 1
console.log(a, s, d)