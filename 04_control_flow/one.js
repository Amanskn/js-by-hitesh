// const num = -0;
// if (num > 0) {
//   console.log("Positive number");
// } else if (num < 0) {
//   console.log("Negative number");
// } else {
//   console.log("Number is 0");
// }

// if (BigInt(0)) {
//   console.log("Inside if");
// } else {
//   console.log("Inside else");
// }

// ============Switch case
// const choice = 3;
// switch (choice) {
//   case 1: {
//     console.log("January");
//     break;
//   }
//   case 2: {
//     console.log("February");
//     break;
//   }
//   case 3: {
//     console.log("March");
//     break;
//   }
//   case 4: {
//     console.log("April");
//     break;
//   }
//   case 5: {
//     console.log("May");
//     break;
//   }
//   case 6: {
//     console.log("June");
//     break;
//   }
//   case 7: {
//     console.log("July");
//     break;
//   }
//   case 8: {
//     console.log("August");
//     break;
//   }
//   case 9: {
//     console.log("September");
//     break;
//   }
//   case 10: {
//     console.log("October");
//     break;
//   }
//   case 11: {
//     console.log("November");
//     break;
//   }
//   case 12: {
//     console.log("December");
//     break;
//   }
//   default: {
//     console.log("Invalid choice. Please enter a number between 1 and 12.");
//   }
// }

// ==============Important
// falsy values in JS are
// false, 0, +0, -0, 0n i.e Bigint(0), '' (empty string), null, undefined, and NaN.

// ==============Important
// truthy values in JS are
// "0", " ", [], {}, true, "false", function(){}

// if (function () {}) {
//   console.log("Inside if ^^^^^^");
// }

// +++++++++++++++++++++
// const arr = [];
// if (arr.length == 0) {
//   console.log("Array is empty");
// }

// // ++++++++++++++
// const obj = {};
// if (Object.keys(obj).length == 0) {
//   console.log("Object is empty");
// }

const a = "" || "Rahul";
const b = null ?? "Aman"; //The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
const c = null ?? "Bhim" ?? "Arjun";
console.log(a);
console.log(b);
console.log(c);
