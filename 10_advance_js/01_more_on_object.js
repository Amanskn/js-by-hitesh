// // Why cannot we change the calue of PI in Math.PI

// console.log(Math.PI); // 3.141592653589793
// Math.PI = 89; // No change. WHY?? Ans:-- refer below
// console.log(Math.PI); // Still the out put is : 3.141592653589793

// const propertyDescription = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(propertyDescription);
// /*
// The output will be:-
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }
// which says that on PI writeable is false. Now you got the answer
//  */

const info = {
  name: "Aman",
  age: 22,
};
const allPropDescriptionCollectively = Object.getOwnPropertyDescriptors(info);
console.log(allPropDescriptionCollectively);
info.name = "Aman Maddhesia"; //allowed as of now
// Making writable and configurable to false
Object.freeze(info);
info.name = "Aman Maddhesia"; //this line has no effect because of Object.freeze(info);

const allPropDescriptionCollectivelyAfterFreeze =
  Object.getOwnPropertyDescriptors(info);
console.log(allPropDescriptionCollectivelyAfterFreeze);
