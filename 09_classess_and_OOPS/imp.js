class Employee {
  // Private fields
  #name = "default";
  #salary = "default";

  // Constructor to initialize private fields
  constructor(name, salary) {
    console.log("Inside constructor");
    // this.#name = name; // direct initialization is happening here and no setter invocation happens here and hence we can assign empty string
    // this.#salary = salary; // direct initialization is happening here and no setter invocation happens here and hence we can assign negative number
    this.name = name; // This calls the setter for 'name' // RECOMMEMDED(Best Practice)
    this.salary = salary; // This calls the setter for 'salary' // RECOMMEMDED(Best Practice)
    // This approach ensures that both the name and salary fields are validated when the Employee instance is created,
    //  providing a consistent state right from the start.
  }

  // Getter for name
  get name() {
    return this.#name;
  }

  // Setter for name
  set name(newName) {
    console.log("inside setter for name@@");
    if (typeof newName === "string" && newName.trim() !== "") {
      this.#name = newName;
    } else {
      console.log("Invalid name. It must be a non-empty string.");
    }
  }

  // Getter for salary
  get salary() {
    return this.#salary;
  }

  // Setter for salary
  set salary(newSalary) {
    console.log("inside setter of salry $$$");
    if (typeof newSalary === "number" && newSalary > 0) {
      this.#salary = newSalary;
    } else {
      console.log("Invalid salary. It must be a positive number.");
    }
  }
}

// Create an instance of the Employee class
// const emp = new Employee("Aman", 50000);

// console.log(`Employee Name: ${emp.name}`); // Access name via getter
// console.log(`Employee Salary: ${emp.salary}`); // Access salary via getter

// Update the employee's name and salary using setters
// emp.name = "Jane Smith"; // Use setter to update the name
// emp.salary = 60000; // Use setter to update the salary

// console.log(`Updated Employee Name: ${emp.name}`); // Access updated name via getter
// console.log(`Updated Employee Salary: ${emp.salary}`); // Access updated salary via getter

// Attempting to set invalid values
// emp.name = ""; // Invalid name
// emp.salary = -1000; // Invalid salary

// console.log(Employee.#name); // error

// console.log(emp);
// console.log(emp.name);

// ++++++++++++++++++++++++++++++++

// class User {
//   #email;
//   constructor(name, email) {
//     console.log("inside constructor");
//     this.name = name; // setter is getting invoked here
//     this.email = email; // setter is getting invoked here
//   }
//   //   ====getter and setter for name
//   get name() {
//     console.log("inside getter of name@@@");
//     return this._name.toUpperCase();
//   }
//   set name(nameValue) {
//     console.log("inside setter of name!!!!!!!!!");
//     this._name = nameValue; // _name is a normal property and we can access it directly via a User's instance, So it is better to user this.#name
//   }
//   //   ====getter and setter for email
//   get email() {
//     console.log("Inside getter of email########", this.#email);
//     return this.#email.toUpperCase();
//   }
//   set email(emailValue) {
//     console.log("inside setter of email^^^^^^^^^^^");
//     this.#email = emailValue; // #email is a private property and cannot be accesed directly
//   }
// }

// const user1 = new User("Aman", "aman@gmail.com");
// console.log(user1);
// console.log(user1.name); // getter of name is invoked
// console.log(user1._name); // directly accessing _name
// console.log(user1.email); // getter of email is invoked here

// +++++++++++++++++++++++++++++++++++++++++

// const User = {
//   _email: "Aman@gmail.com",
//   _name: "Aman",
//   get email() {
//     return this._email.toLowerCase();
//   },
//   set email(valueOfEmail) {
//     this._email = valueOfEmail;
//   },
// };
// console.log(User._email);
// console.log(User.email);
// console.log(User);

// ++++++++++++++++++++++++++++++++++==
const User = {
  _email: "Aman@gmail.com",
  _name: "Aman",
  get email() {
    return this._email.toLowerCase();
  },
  set email(valueOfEmail) {
    this._email = valueOfEmail;
  },
};

const user1 = Object.create(User);
const user2 = Object.create(User);
console.log(Object.getPrototypeOf(user1));
console.log(Object.getPrototypeOf(user1).hasOwnProperty("_email"));
console.log(Object.getPrototypeOf(User));
console.log(user1);

console.log(user2._email);

console.log(user1.hasOwnProperty("_email"));
console.log(user2.hasOwnProperty("_email"));
console.log(user1.email);
user1.email = "NEW@gmail.com";
console.log(user1._email);
console.log(user1.email);
console.log(user1.hasOwnProperty("_email"));
console.log(user1);
