// // IIFE (Immediately Invoked Function Expression)
// (function chai(num1, ...restParameter) {
//   console.log("Inside chai", num1);
//   console.log("Arguments is ", arguments);
//   console.log("rest parameter is ", restParameter);
// })(23, 34, 76, "Aman");

// // ============arrow function in IIFE
// (() => {
//   console.log("Arrow function using IIFE");
// })();

// // ===============Anonymous regular function inside IIFE
// (function () {
//   console.log("anonymous regular/normal function using IIFE");
// })();

// const fun = function () {
//   console.log("Inside fun");
// };

// fun();

// ++++++++++++++

const counterModule = (function () {
  // Private variable
  let count = 0;

  // Exposed methods
  return {
    increment: function () {
      count++;
      console.log(`Count: ${count}`);
    },
    decrement: function () {
      count--;
      console.log(`Count: ${count}`);
    },
    getCount: function () {
      return count;
    },
  };
})();

counterModule.increment();
counterModule.increment();
counterModule.increment();
counterModule.decrement();
console.log(counterModule.getCount());
console.log(counterModule);

// Why IIFE?
// Encapsulation: count is a private variable, not accessible from the outside, except via the methods defined within the IIFE.
// Avoid Global Pollution: count and internal logic remain confined within the function, preventing potential conflicts with other code.
// Immediate Execution: The function runs immediately, initializing the module and returning its public API without leaving any traces in the global scope.
// This pattern is especially useful in complex projects or when combining third-party scripts.
