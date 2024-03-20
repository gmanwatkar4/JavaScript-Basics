let myDate = new Date()
console.log(myDate.toString()); // prints Wed Mar 20 2024 11:56:17 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString); // prints [Function: toDateString]
console.log(myDate.toLocaleString()); // prints 3/20/2024, 11:58:39 AM
console.log(typeof(myDate)); // return as object

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString()); // prints Mon Jan 23 2023

let myCreatedDate1 = new Date(2023, 0, 23, 5, 3, 7)
console.log(myCreatedDate1.toLocaleString()); // prints 1/23/2023, 5:03:07 AM

let myCreatedDate2 = new Date("01-21-1996")
console.log(myCreatedDate2.toLocaleString()); // prints 1/21/1996, 12:00:00 AM

let myTimeStamp = Date.now()
console.log(myTimeStamp) // returns current count from 1st jan 1970
console.log(myCreatedDate.getTime());  // returns current count from 1st jan 1970

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth()); // return current month
console.log(newDate.getDay()); // return day

console.log(newDate.toLocaleString('default', {
    weekday: "long"
})) // return current day
