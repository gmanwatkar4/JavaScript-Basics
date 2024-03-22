// singleton object - made from constructor

Object.create // constructor method

// object literals
// object values access via . notation
// object values changed via = operator

const mySymbol = Symbol("key1") // defining Symbol

const JsUser = {
    name: "Faizal",
    "full name": "Faizal khan",
    [mySymbol]: "mykey1",
    age: 18,
    location: "Nagpur",
    email: "faizal@yahoo.com",
    isLoggedIn: false,
    lstLoginDays: ["Monday", "Tuesday"] 
}

console.log(JsUser.email); // 1st way to print object - accessing object values
console.log(JsUser["email"]); // 2nd way to print object
console.log(JsUser["full name"]); 
console.log(JsUser[mySymbol]); // prints symbol
console.log(typeof mySymbol); // prints its type symbol

JsUser.email = "faizal@gmail.com" // changing object values
console.log(JsUser.email); // prints faizal@gmail.com

JsUser.greeting = function(){        // creating new object value called greeting 
    console.log("Hello JS users!");   
}

console.log(JsUser.greeting()); // printing object value greeting

JsUser.greetingTwo = function(){
    console.log(`Hello JS users, ${this.name}`); // printing object value from JsUser via this
}

console.log(JsUser.greetingTwo());
