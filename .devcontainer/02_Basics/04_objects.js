const tinderUser1 = Object() // singleton object
console.log(tinderUser1);

const tinderUser2 = {} // object literal
console.log(tinderUser2);

tinderUser2.id = "12345"
tinderUser2.name = "Miya"
tinderUser2.isLoggedIn = false
console.log(tinderUser2); // prints entire values from tinderUser2

const regularUser = {
    emai : "email@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Faizal",
            lastname : "Khan"
        }
    }
}

console.log(regularUser.fullname); // prints fullname

const objOne = {1: "a", 2: "b"}
const objTwo = {3: "a", 4: "b"}
const objThree = {5: "a", 6: "b"}

const objFour = {objOne, objTwo}
console.log(objFour); // prints objOne and objTwo

const objFive = Object.assign({}, objOne, objTwo, objThree)
console.log(objFive); // prints entire keys from both objects

const objSix = {...objOne, ...objTwo, ...objThree}
console.log(objSix) // prints entire values from input objects

const user = [
    {
        id: 1,
        email: "faizal@gmail.com"
    },
    {
        id: 2,
        email: "faizal@gmail.com"
    },
    {
        id: 3,
        email: "faizal@gmail.com"
    }
]

user[1].email
console.log(tinderUser2)

console.log(Object.keys(tinderUser2)); // prints keys from tinderUser2
console.log(Object.values(tinderUser2)); // prints values from tinderUser2
console.log(Object.entries(tinderUser2)); // prints arrays elements in the key : value pairs

console.log(tinderUser2.hasOwnProperty('isLoggedIn')); // return the requested property exists or not
