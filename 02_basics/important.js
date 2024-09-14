// class Person {
//   // Constructor is a special method for creating and initializing an object instance
//   static age1 = 334;
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   // Method defined inside the class
//   greet() {
//     console.log(
//       `Hello, my name is ${this.name} and I am ${this.age} years old.`
//     );
//   }

//   // Static method, accessible on the class itself (not the instance)
//   static describe() {
//     console.log("This is a Person class.", this.age1);
//   }
// }

// // Creating an instance of the Person class
// const person1 = new Person("Alice", 25);

// // Accessing instance method
// person1.greet(); // Output: Hello, my name is Alice and I am 25 years old.

// // Accessing static method
// Person.describe(); // Output: This is a Person class.

// =======================Above stuff using constructor function methodology
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Static property (equivalent to class static property)
Person.age1 = 334;

// Instance method (using prototype)
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Static method
Person.describe = function () {
  console.log("This is a Person class.", this.age1);
};

// Creating an instance of the Person function
const person1 = new Person("Alice", 25);

// Accessing instance method
person1.greet(); // Output: Hello, my name is Alice and I am 25 years old.

// Accessing static method
Person.describe(); // Output: This is a Person class. 334
