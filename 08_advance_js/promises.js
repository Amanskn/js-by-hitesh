const githubURL = "https://api.github.com/users/Amanskn";

let fun1 = async () => {
  console.log("top line inside iife");
  const response = await fetch(githubURL);
  console.log("Inside iife function after first await ", typeof response);
  const data = await response.json();

  console.log("Inside fun1 function and the data is ", data);
  return data;
};
console.log("outside and the value of fun1() is", fun1());

// =================promise handling using .then
// fetch(githubURL)
//   .then((data1) => {
//     console.log("Inside first then and data1 is ", data1);
//     return data1.json();
//   })
//   .then(function (data2) {
//     console.log("Inside second then and the data is ", data2);
//   });

// ===============promise using promise object

// const promise1 = new Promise((resolve, reject) => {
//   const error = true;
//   if (!error) {
//     setTimeout(() => {
//       resolve("resolved@@");
//     }, 5000);
//   } else {
//     setTimeout(() => {
//       reject("rejected@@");
//     }, 2000);
//   }
// });
// console.log("$$ ", promise1); // Just checking what does promise1 contains

// attaching then and catch chain on promise1
// promise1
//   .then((d) => {
//     console.log("inside then", d);
//   })
//   .catch((errorValue) => {
//     console.log("inside catch of then chain", errorValue);
//   });

// =====calling async function fun1
// fun1();

// async function fun1() {
//   try {
//     const data1 = await promise1;
//     console.log("inside async fun1", data1);
//   } catch (error) {
//     console.log("inside async fun1's catch block", error);
//   }
// }
// function newFun1() {
//   console.log("Inside newFun1");
// }
// function newFun2() {
//   console.log("Inside newFun2");
// }
// newFun1();
// newFun2();

// +++++++++++++++++++++++++++++++++++++++++++++++++++=======

// async function fun1() {
//   try {
//   console.log("Inside async function fun1");
//   const a = await promise1;
//   console.log("Another line inside async function fun1", a);
//   } catch (error) {
//     console.log("Inside catch block inside async function fun1", error);
//   }
// }
// function fun2() {
//   console.log("Inside normal function fun2");
// }

// console.log("Outside", fun1());
// console.log(fun2());
