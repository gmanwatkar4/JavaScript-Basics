const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

marvel_heros.push(dc_heros) // adds dc_heros in the marvel_heros (array in array)
console.log(marvel_heros); // prints marvel_heros

const heros = marvel_heros.concat(dc_heros)
console.log(heros);

const allheros = [...marvel_heros, ...dc_heros]
console.log(allheros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [8, 9, [0, 1]]]

let realArray = anotherArray.flat(Infinity)
console.log(realArray);

console.log(Array.isArray("Faizal"));
console.log(Array.from("Faizal"));
console.log(Array.from({name: "Faizal"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));