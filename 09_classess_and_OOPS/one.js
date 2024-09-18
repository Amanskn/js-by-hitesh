// // =================This is a constructor function
// function User1(username, age, city) {
//   this.username = username;
//   this.age = age;
//   this.city = city;
//   return "Hello"; // This will be ignored
//   return { a: "apple" };  // new keyword will return the newly created object only if we do not return any object from the constructor function
//   ===============So it is best to avoid returning any object from constructor function
// }

// // ======this is a normal/regular function
// function User2(username, age, city) {
//   const user = {
//     username: username,
//     age: age,
//     city: city,
//   };
//   return user;
// }

// const user1 = new User1("Aman", 22, "Khalilabad");
// const user2 = new User2("Aman", 22, "Khalilabad");

// console.log(user1);
// console.log(user2);

// ++++++++++++++++++++++++===

// console.log(typeof fun);
// function fun() {
//   console.log("inside fun function");
// }
// console.log(fun);
// // In JavaScript, functions are treated as objects, which means they can have properties and methods just like any other object.
// // we can assign properties (a and b in our case) to the function itself.
// fun.a = "Apple";
// fun.b = "Banana";
// console.log(typeof fun);
// console.log(new fun());
// console.log(fun.length);

// ++++++++++++++++++
// const obj = {
//   name: "Aman",
//   age: 23,
// };
// console.log(obj.length);

const arr = [1, 2, 3];
// arr.check();
// ========== using Array.prototype we can add any property to all Arrays
Array.prototype.check = function () {
  console.log("Check function is running", this);
};

arr.check();
[23, 34].check();
