// class Vehicle {
//   constructor(companyName, noOfWheel) {
//     this.companyName = companyName;
//     this.noOfWheel = noOfWheel;
//   }
//   // ===== Static data member , can be accessed only by class Name i.e Vehicle here
//   static type = "Automobile";
//   static staticDataMember2 = "staticDataMember2 value";

//   // ===== Static methods, can be accessed only by class Name i.e Vehicle here
//   static internalMechanismInfo() {
//     console.log("inside internalMechanismInfo ");
//   }
//   getVehicleInfo() {
//     console.log(
//       `Company is ${this.companyName} and it has ${this.noOfWheel} wheels`
//     );
//   }
// }

// creating a static data member
// Vehicle.staticDataMember3 = "@@@staticDataMember3 value";

// const truck = new Vehicle("Mahindra", 4);
// console.log(truck);
// truck.getVehicleInfo();
// Vehicle.internalMechanismInfo();
// console.log(Vehicle.type);
// console.log(Vehicle.staticDataMember2);
// console.log(Vehicle.staticDataMember3);

// ++++++++++++++++++++++++++++Above stuff using constructor function

// function Vehicle(companyName, noOfWheel) {
//   this.companyName = companyName;
//   this.noOfWheel = noOfWheel;
// }

// // Instance method (shared via prototype)
// Vehicle.prototype.getVehicleInfo = function () {
//   console.log(
//     `Company is ${this.companyName} and it has ${this.noOfWheel} wheels`
//   );
// };

// // Static data member
// Vehicle.staticDataMember3 = "@@@staticDataMember3 value";

// // Static method (attached directly to the constructor function)
// Vehicle.internalMechanismInfo = function () {
//   console.log("inside internalMechanismInfo");
// };

// // // Usage:
// const truck = new Vehicle("TATA", 4);
// console.log(truck);
// truck.getVehicleInfo(); // Outputs: Company is TATA and it has 4 wheels

// Vehicle.internalMechanismInfo(); // Outputs: inside internalMechanismInfo
// console.log(Vehicle.staticDataMember3);

// ++++++++++++++++++++++++++++++++++++++=====
// Common Use Cases for Static Data Members
// Counters for Tracking Instances: Static properties can be used to keep track of the number of instances of a class or constructor function that have been created.
function Vehicle(companyName, noOfWheel) {
  this.companyName = companyName;
  this.noOfWheel = noOfWheel;

  // Increment the counter each time a new instance is created
  Vehicle.count++;
}

// Static property to track the number of instances
Vehicle.count = 0;

Vehicle.prototype.getVehicleInfo = function () {
  console.log(
    `Company is ${this.companyName} and it has ${this.noOfWheel} wheels`
  );
};

// Usage:
const car = new Vehicle("Tesla", 4);
const truck = new Vehicle("TATA", 6);

console.log(Vehicle.count); // Outputs: 2
