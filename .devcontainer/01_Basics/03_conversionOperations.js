let score = "faizal"

console.log(typeof score); // return type as number when value is passed 33
console.log(typeof(score)); // return type as number when value is passed 33

let valueInNumber = Number(score)
console.log(typeof(valueInNumber)); // return type as number when value is passed 33
console.log(valueInNumber); // prints value as NaN (not a number) when value is passed "33abc" to valueInNumber
console.log(valueInNumber); // prints 0 when value is passed null to valueInNumber
console.log(score) // prints null when value is passed null to score
console.log(score) // prints undefined when value is passed undefined to the score
console.log(valueInNumber); // prints NaN when value is passed undefined to the valueInNumber
console.log(valueInNumber); // prints 1 when value is passed true to the valueInNumber
console.log(valueInNumber); // prints NaN when value is passed "faizal" to the valueInNumber

// "33" -> 33
// "33abc" -> NaN
// true -> 1, false -> 0

let isLoggedIn = "faizal"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // prints as true when value is passed as 1 to isLoggedIn
console.log(booleanIsLoggedIn); // prints as false when value is passed as "" to isLoggedIn
console.log(booleanIsLoggedIn); // prints as true when value is passed as "faizal" to isLoggedIn

// 1 -> true, 0 -> false
// "" -> false
// "faizal" -> true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber); // prints 33 when 33 value is passed to the stringNumber
console.log(typeof(stringNumber)); // prints string when 33 value is passed to the stringNumber
