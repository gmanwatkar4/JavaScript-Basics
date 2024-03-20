// Primitive data types
// 7 types : String, Number, Boolean, Null, Undefined, BigInt, Symbol

// Examples of primitive datat types

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
