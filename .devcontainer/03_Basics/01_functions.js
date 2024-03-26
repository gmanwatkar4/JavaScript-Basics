// Simple function

function sayMyName(){
    console.log("F");
    console.log("a");
    console.log("i");
    console.log("z");
    console.log("a");
    console.log("l");
}

sayMyName(); // prints each letter of Faizal on the new line

// function to add 2 numbers

function addTwoNumbers(num1, num2){ // here num1 and num2 are parameters
    console.log(num1 + num2)
}
addTwoNumbers(5, 5);  // prints 10 -> here 5, 5 are arguments

const result = addTwoNumbers(5, 6) // prints 11

console.log("Result : ", result) // prints the result value as undefined cause the value was not returned by addTwoNumbers function

// returning the value by the function

function addThreeNumbers(num1, num2, num3){
    const result = num1 + num2 + num3
    return result
}
const result1 = addThreeNumbers(5, 5, 5)
console.log(result1);

// print the parameter

function loginUserMessage(username){
    return `Hi, ${username} you just logged in!`
}
console.log(loginUserMessage("Faizal")); // prints Hi, Faizal you just logged in!

// when you doesn't pass any argument to the function it returns undefined

function sheLovesMe(answer){
    return `She loves me ? ${answer}`
}
console.log(sheLovesMe()); // prints She loves me ? undefined

// add multiple parameters to the function (...(rest operator))

function calculateCartPrice(...num) {
    return num
}
console.log(calculateCartPrice(10, 200, 500, 700));

// passing object to the function

const user = {
    username: "faizal",
    price: 199
}

function handleObject(myObj){
    console.log(`username is ${myObj.username} and the price is ${myObj.price}`);
}
handleObject(user) // prints username is faizal and the price is 199

// another way of passing the object
handleObject({
    username: "sam",
    price: 399
}) // prints username is sam and the price is 399

// passing array to the function

const myNewArray = [23, 56, 76, 65, 93]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray)); // prints 56 
console.log(returnSecondValue([1, 2, 3, 4])); // prints 2
