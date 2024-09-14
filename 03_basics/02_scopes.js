// // ==================This syntax is known as a function declaration, where the function fun1 is declared using the function keyword. Function declarations are hoisted, meaning they can be invoked before they are defined in the code.
// function fun1() {
//   console.log("Inside fun1");
// }

// // ================This syntax is known as a function expression, where the function is assigned to a variable fun2. Unlike function declarations, function expressions are not hoisted, so they can only be called after they are defined.
// let fun2 = function () {
//   console.log("Inside fun2");
// };

// // ================ creating arrow function using function expression.
// // ==============Arrow function can only be created using function expression
// let fun3 = () => {
//   console.log("Inside fun3");
// };

// fun1();
// fun2();
// fun3();

// // ========Example of closure
// function outer() {
//   let outerContainer = 89;
//   return function inner() {
//     console.log(outerContainer++);
//   };
// }
// let innerFunction = outer(); // though after this line outer function is no longer existing in the RAM but we can manipulate its variable outerContainer
// // by invoking innerFunction() and this is what closure is all about
// innerFunction();
// innerFunction();
// innerFunction();

// ==============
// const fruit = {
//   name: "Apple",
//   color: "Red",
//   taste: "Sweet",
//   eat() {
//     console.log(
//       `${this.name} is finished, now buy some ${this.taste} ${this.name}`
//     );
//     console.log("#######", this);
//   },
// };
// const { eat, color, name, taste } = fruit;
// eat(); // Output is :- undefined is finished, now buy some undefined undefined
// // ========== Why?? Ans:- because here global object is the caller and it do not have those properties and hence it is giving undefined
// fruit.eat(); // Output is :- Apple is finished, now buy some Sweet Apple
// console.log(color, name, taste);
// let eatReference = fruit.eat; // Here we are only assigning the reference of eat function to eatReference variable
// eatReference(); // Here also global object is the caller and it do not have those properties and hence it is giving undefined

// ==========important :--In the global scope of a Node.js file, this does not refer to the global object (global), but instead, it refers to an empty object ({})
// console.log("@@@@@@", this); // Output is :- @@@@@@ {}

// // In Node.js, when a regular function is called (like chai()), this refers to the global object (global).
// function chai() {
//   console.log("Inside chai function ##");
// }
// // =======Since arrow function do not have their own this and they take value of this from outer context(here global scope) and in global scope we know this refers to {}(i.e. empty object) in a node environment (line no 54)
// const chai2 = () => {
//   console.log("Inside arrow function chai2 function ##", this);
// };
// const chai3 = function () {
//   console.log("Inside chai3 function ##", this);
// };
// chai();
// chai2();
// chai3();

// Note :- Use () i.e. parenthesis instead of return keyword and {} if only one statement is there in the arrow function and that too you want to return.
const add = (num1, num2) => num1 + num2; // Here parenthesis is getting omitted because of prettier
const add1 = (num1, num2) => ({ [num1 + num2]: num1 + num2 }); // Remember this ?? Making an expression's result as the key of an object
console.log(add(23, 45));
console.log(add1(212, 45));
// ======
