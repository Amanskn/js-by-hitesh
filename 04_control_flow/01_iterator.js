// Done with basic three loop i.e for loop, while loop, do while loop

// =======For of loop
// console.log("@@@@@@@@@ For of loop on an array");
// const arr = [12, "January", "Feb", "March", "April"];
// for (const value of arr) {
//   console.log(value);
// }

// // =========== .entries() on array gives an array of arrays and he inner array contains index and value pairs
// for (const value of arr.entries()) {
//   console.log(value);
// }

// // ============for in loop
// const obj = {
//   name: "Aman",
//   age: 22,
//   state: "Uttar Pradesh",
// };

// console.log("@@@@@@@ for in loop over an object");
// for (let key in obj) {
//   console.log(key, obj[key]);
// }

// console.log("#######for in loop over an array");
// for (let index in arr) {
//   console.log(index, arr[index]);
// }

// =========for each loop
// console.log("@@@@@@@@@@foreach loop over an array");
// console.log("#########");
// const arr = ["Apple", "Orange", "Pant", 12, null, undefined];
// arr.forEach((value, index, array) => {
//   console.log(value, index, array);
// });

// =====Important
// JavaScript's Array#forEach() function lets you iterate over an array, but not over an object.
// ===Error:- obj.forEach is not a function
// obj.forEach((i) => {
//   console.log(i);
// });
// console.log("#########");

// // ==================MAp method on an array
// const returnedArray = arr.map((value, index, array) => {
//   console.log("%#%", value, index, array);
//   return `${value}-${index}`;
// });
// console.log(returnedArray);

// ++++++++++++ can we use break and continue in for-of or in for-in loop
// +++++++Ans is :- Yes We can use break and continue in for-of and for-in loop
// const arr = [1, 2, 12, 34];
// for (const value of arr) {
//   if (value == 2) continue;
//   console.log(value);
// }

// const obj = {
//   name: "Aman",
//   age: 22,
//   state: "UP",
// };
// for (const key in obj) {
//   if (key == "age") continue;
//   console.log(key);
// }
