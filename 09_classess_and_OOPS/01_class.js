// ================= class vs constructor function

// class Vehicle {
//   constructor(companyName, noOfWheel) {
//     this.companyName = companyName;
//     this.noOfWheel = noOfWheel;
//   }
//   getVehicleInfo() {
//     console.log(
//       `Company is ${this.companyName} and it has ${this.noOfWheel} wheels`
//     );
//   }
// }
// const truck = new Vehicle("TATA ", 4);
// const trailer = new Vehicle("TATA ", 18);
// console.log(truck);
// truck.getVehicleInfo();
// console.log(truck.getVehicleInfo == trailer.getVehicleInfo); // true (because getVehicleInfo is there in Vehicle.prototype)

// ++++++++++++++++++=doing the above stuff using constructor function
// function Vehicle(companyName, noOfWheel) {
//   this.companyName = companyName;
//   this.noOfWheel = noOfWheel;
//  important : By attaching  getVehicleInfo via below method we are making unnecessary wastage of memory. Why?? by this way every object/instance now will have this member function
//   it is better to attach this member function in the Vehicle prototype
//   it is better to avoid this
//   this.getVehicleInfo = function () {
//     console.log(
//       `Company is ${this.companyName} and it has ${this.noOfWheel} wheels`
//     );
//   };
// }

// ================ it is recommended to attach member function to the prototype. Why?? Ans:- if we attach them as a property then they are going to be present in every object/instance
// of Vehicle constructor function which is unnecessary and redundant. Now by the prototype way all object/instance will have access to a common member function
// ========Conclusion:-- All instances of Vehicle share the same getVehicleInfo function by below methodology
// Vehicle.prototype.getVehicleInfo = function () {
//   console.log(
//     `Company is ${this.companyName} and it has ${this.noOfWheel} wheels`
//   );
// };
// const truck = new Vehicle("TATA ", 4);
// const trailer = new Vehicle("TATA ", 18);
// console.log(truck);
// truck.getVehicleInfo();
// console.log(Vehicle.prototype);
// console.log(truck.getVehicleInfo == trailer.getVehicleInfo); // true (if getVehicleInfo is there in Vehicle.prototype), false ( if getVehicleInfo is made inside Vehicle constructor function as a member function for all instances )

// Summary:
// Classes in JavaScript are just syntactic sugar for the prototype-based inheritance model.
// Behind the scenes, a class is transformed into a constructor function, and methods are attached to the prototype of that function.
// The use of new creates a new object and assigns the constructor's properties and methods to it. Methods defined in the class are added to the prototype to ensure they are shared among instances.
