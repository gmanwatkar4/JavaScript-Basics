// Arrays

// JS arrays are resizable, can be mixed of data types
// arrays are not accassible via arbitory string
// array indexing starts from the 0
// arrays copy operation creates shallow copies 
// shallow copy makes the changes in original value in the array with reference values
// deep copy did not makes any changes in the original value

const myArr = [0, 1, 2, 3, 4]
console.log(myArr);

const myHeroes = ["Superman", "Batman", "Spiderman"]
console.log(myHeroes[0]); // prints Superman

// Methods

myArr.push(6) // adding 6 in myArr
myArr.push(7) // adding 7 in myArr
console.log(myArr); // prints myArr

myArr.pop()
console.log(myArr); // remove the last element of myArr

myArr.unshift(9) // adding 9 at the biginning of myArr
console.log(myArr);

myArr.shift() // removed the first index element from myArr
console.log(myArr);

console.log(myArr.includes(9)); // returns false

console.log(myArr.indexOf(3)); //prints 4th index value as 3

const newArr = myArr.join() // joins the 2 arrays myArr and newArr and cnverts the newArr into string
console.log(myArr);
console.log(newArr);

// slice, splice

// splice manupulates the original array

console.log("A ", myArr) // prints complete myArr

const myNewArr1 = myArr.slice(1, 3) // only keeps the values of 1st and 2nd index
// slice operation copy and excludes last index from the range and does not modifies the original array
console.log(myNewArr1);

console.log("B ", myArr); // prints complete myArr

const myNewArr2 = myArr.splice(1, 3) // only keeps the values of 1st and 2nd and 3rd index 
// splice operation completely moves the selected index values from the original array and only non selected values left
console.log(myNewArr2);

console.log("C ", myArr)
