// Note :- use string interpolation instead of + to concatenate string
let name1 = "Aman Maddhesia";
let name2 = new String("Navneet");
console.log(name1.charAt(2));
console.log(name2.length);

console.log(name1.slice(-4, -2));

let name3 = "RahRul";
// console.log(name3);
// console.log(name3.trimStart(), "5");
console.log(name3);
console.log(name3.includes("R", 4));
console.log(name3.replace(/R/g, "W"));
console.log(name3.replace("R", "W"));

let name4 = "Aman-Kumar-Maddhesia";
console.log(name4.split("-", 0));
