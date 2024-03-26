// global scope example
let a = 10
const b = 20
var c = 30

console.log(a);
console.log(b);
console.log(c);

// block scope example

if(true){
    let a1 = 10
    const b1 = 20
    var c1 = 30   
}
// console.log(a1); // it will giving an error cause its defined outside the scope
// console.log(b1); // it will giving an error cause its defined outside the scope
console.log(c1); // 30 will be print because the variable is declared as var
