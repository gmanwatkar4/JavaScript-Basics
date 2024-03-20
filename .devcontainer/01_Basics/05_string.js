const name  = "Faizal"
const repoCount = 50

console.log(name + " " + repoCount + " value"); // not recommended this to concatenate the strings

// string interpolation using backticks' `` : use ${} to insert the varibale in the output.

console.log(`hello, my name is ${name} and my repo count is ${repoCount} !`);

const gameName = new String('contra') // another way of declaring string

console.log(gameName[0]); // prints c
console.log(gameName.__proto__); // prints {}

console.log(gameName.length); // returns length 6 of gameName
console.log(gameName.toUpperCase()); // prints contra in uppercase
console.log(gameName.charAt(2)); // returns the value on 2nd position as n
console.log(gameName.indexOf('n')); // returns the position of n as 2nd position

const newString = gameName.substring(0, 4)
console.log(newString); // returns the cont, the index of contra is starting from 0th index and prints upto 3rd index, excludes 4th index

const newStringOne = gameName.substring(-8, 4)
console.log(newStringOne); // returns cont, it strictly follows the JS rules no matter what value provides

const anotherNewString = gameName.slice(-6, 4)
console.log(anotherNewString); // prints cont

const newStringTwo = "  faizal      "
console.log(newStringTwo); // prints as it is value stored in the variable with exact structure
console.log(newStringTwo.trim()); // prints faizal by removing the extra space

const url = "https://google.com/faizal%20khan"
console.log(url.replace('%20', '-')) // replace the %20 with -
console.log(url.includes('google')) // returns true as google is present in the url

const gameNameTwo = new String('candy-crush-saga') 
console.log(gameNameTwo.split('-')); // separates the strings after -
