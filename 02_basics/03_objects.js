let symbolNum = Symbol(287);
let a = "Apple";
// console.log("@@@@", Symbol(12));
const user = {
  name: "Aman",
  "full name": "Aman Maddhesia",
  age: 22,
  email: "aman@gmail.com",
  [symbolNum]: 89, // When we write [] then the content inside [] is evaluated and the evaluated result becomes the key.Here symbolNum is  Symbol(287)
  [a]: "Sweet", //  [] gives an excellent way to use actual value of variable as key/property while creating JavaScript objects.
  [Symbol(99)]: 87,
  fun1() {
    console.log("Hello");
  },
  fun2: function () {
    console.log("Hello");
  },
  fun3: function abc() {
    console.log("Hello");
  },
  fun4: () => {
    console.log("Hello");
  },
};
console.log(user.email);
console.log(user["email"]);
console.log(user["full name"]);
console.log(user[symbolNum]);
console.log(typeof user[symbolNum]);
console.log(user);

Object.freeze(user); //Prevents the modification of existing property attributes and values, and prevents the addition of new properties
user.email = "newAman@gmail.com";
user.new = "qwerty";
console.log(user);
