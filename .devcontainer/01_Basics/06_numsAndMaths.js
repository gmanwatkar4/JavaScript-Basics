let score = 400
console.log(score); // prints 400

const balance =  new Number(100)
console.log(balance); // prints 100 with its type as Number

console.log(balance.toString().length); // prints string length as 3
console.log(balance.toFixed(2)); // prints 2 decimal values after 100 as 100.00

const otherNumber = 23.8978

console.log(otherNumber.toPrecision(3)); // prints the 23.9 as it focused on first 3 letters and the next value will be round off

const hundreds = 10000000
console.log(hundreds.toLocaleString("en-IN")) // prints 1,00,00,000 in indian standard

// ++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math); // returns as Object
console.log(Math.abs(-4)); // prints 4 in positive
console.log(Math.round(4.3)); // prints round of value 4
console.log(Math.ceil(4.2)); // prints 5 as ceil value
console.log(Math.floor(4.9)); // prints 4 as floor value
console.log(Math.min(6, 2, 5, 8, 3)); // prints 2 as min value
console.log(Math.max(3, 5, 7, 5, 8, 4)); // prints 8 as max value

// Math.random() : value will be always between 0 and 1.
console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
