// Base class
class Person {
  // Constructor to initialize properties
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to display basic information
  getInfo() {
    return `${this.name} is ${this.age} years old.`;
  }
}

// Derived class
class Employee extends Person {
  // Constructor to initialize properties including base class properties
  constructor(name, age, position, salary) {
    // Call the parent class constructor
    super(name, age);
    this.position = position;
    this.salary = salary;
  }

  // Method to display employee-specific information
  getEmployeeInfo() {
    return `${this.name} is ${this.age} years old, works as a ${this.position}, and earns ${this.salary} annually.`;
  }
}

// Create an instance of the Employee class
const emp = new Employee("Jane Doe", 30, "Software Engineer", 75000);

console.log(emp.getInfo()); // Inherited method from Person class
console.log(emp.getEmployeeInfo()); // Method from Employee class
