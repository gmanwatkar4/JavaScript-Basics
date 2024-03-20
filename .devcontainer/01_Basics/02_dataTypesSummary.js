// Primitive data types
// 7 types : String, Number, Boolean, Null, Undefined, BigInt, Symbol

// Examples of primitive data types

const score = 100 
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail = undefined
const bigNumber = 123456789098765849n

const id = Symbol('123')
const anotherID = Symbol('123')

console.log(id === anotherID); // returns false

// Reference Type (Non primitive)
// Array, Objects, Functions

// Examples of Non primitive datat types

const heros = ["Shaktiman", "Spiderman", "Superman"]
let myObj = {
    name : "Faizal",
    age : 25
}

const myFunction = function(){
    console.log("Hello, world!");
}

console.log(typeof bigNumber); // return type of bigNumber is bigint
console.log(typeof scoreValue); // return type of scoreValue is number
console.log(typeof heros); // return type of heros is object
console.log(typeof myObj); // return type of myObj is object
console.log(typeof myFunction); // return type of myFunction is function also called object function

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Types of memories - Stack, Heap
// Stack memory is used in primitive data types
// Heap memory is used in non primitive data types

// When the stack memory is used, you will get a copy of the declared variable
// when the heap memory is used, you will get a reference of the declared variable or original value 

// Examples of non primitive data type
// Examples of Stack
let myYoutubeName = "javascript.com"

let anotherName = myYoutubeName // you will get a copy of myYoutubeName
anotherName = "myjavascript.com"

console.log(myYoutubeName); // prints javascript.com 
console.log(anotherName); // prints myjavascript.com

// Examples of Heap
let userOne = {
    email : "user@google.com",
    upiID : "123@ybl" 
}

let userTwo = userOne // you will get a reference of userOne 

userTwo.email = "faizal@yahoo.com"

console.log(userOne.email); // returns faizal@yahoo.com
console.log(userTwo.email); // returns faizal@yahoo.com

// In stack changes will be done in the copy of a variable, original value remains same
// In heap changes will be done in the original value