console.log("2" > 1); // prints true
console.log("02" > 1); // prints true

console.log(null > 0); // prints false
console.log(null == 0); // prints false
console.log(null >= 0); // prints true

/*
    The reason is that an equality check == and comparision > < >= <= works differently.
    Comparision converts null to a number, trating it as 0.
    Thats why (null >= 0) is true and (null > 0) is false.
*/

console.log(undefined == 0); // prints false 
console.log(undefined > 0); // prints false
console.log(undefined < 0); // prints false