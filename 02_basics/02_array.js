// let arr1 = ["thor", "ironman", "spiderman"];
// let arr2 = ["shaktiman", "aaryaman", "bongo"];
// console.log(arr1.push(arr2, "Qwe", "Aman")); // push method returns the newlength of the array after the element addition
// console.log(arr1);
// console.log(arr1.push(arr2));
// console.log(arr1.length);

// console.log(arr1.push(...arr2));
// console.log(arr1.concat("AMan", arr2, "Madd", arr2)); //concat method Combines two or more arrays/items. This method returns a new array without modifying any existing arrays.
// console.log(arr1);

// let newArray1 = [1, 2, 3, [4, 5], [6, 7, [8, 9, 10]]];
// console.log(newArray1);
// console.log(newArray1.flat(Infinity));
// console.log(newArray1.flat());   // default value as the argument in flat() goes to 1
// console.log(newArray1);

// console.log(Array.isArray(23));
// console.log(Array.isArray("Aman"));
// console.log(Array.from("Aman"));
// console.log(Array.isArray({ a: "Apple", b: "Ball" }));
// console.log(Array.from({ a: "Apple", b: "Ball" }));

// const animal = {
//   first: "The",
//   last: "Lion",
// };
// const propertyNames = Object.keys(animal); // making array from an object's keys
// const valuesOfObject = Object.values(animal); // making array from an object's values
// console.log(propertyNames);
// console.log(valuesOfObject);

let arr1 = [2, 3, "Apple", null, Infinity];
let arr2 = Array.of(2, 3, "Apple", null, Infinity);
console.log(arr1);
console.log(arr2);
