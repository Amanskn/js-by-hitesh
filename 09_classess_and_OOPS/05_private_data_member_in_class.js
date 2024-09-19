class Employee {
  // Private fields
  #name;
  #salary;

  // Constructor to initialize private fields
  constructor(name, salary) {
    this.#name = name;
    this.#salary = salary;
  }

  // Getter for name
  get name() {
    return this.#name;
  }

  // Setter for name
  set name(newName) {
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
    if (typeof newSalary === "number" && newSalary > 0) {
      this.#salary = newSalary;
    } else {
      console.log("Invalid salary. It must be a positive number.");
    }
  }
}

// Create an instance of the Employee class
const emp = new Employee("John Doe", 50000);

console.log(`Employee Name: ${emp.name}`); // Access name via getter
console.log(`Employee Salary: ${emp.salary}`); // Access salary via getter

// Update the employee's name and salary using setters
emp.name = "Jane Smith"; // Use setter to update the name
emp.salary = 60000; // Use setter to update the salary

console.log(`Updated Employee Name: ${emp.name}`); // Access updated name via getter
console.log(`Updated Employee Salary: ${emp.salary}`); // Access updated salary via getter

// Attempting to set invalid values
emp.name = ""; // Invalid name
emp.salary = -1000; // Invalid salary

console.log(Employee.#name); // error
