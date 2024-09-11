// Stack and Heap memory in JS

let myName1 = "Aman";
let myName2 = myName1;
myName2 = "Rahul";
let user1 = {
  name: "Aman Maddhesia",
};
let user2 = user1;
user2.name = "Navneet";
console.log(myName1);
console.log(myName2);
console.log(user1);
console.log(user2);
let arr1 = [11, 12, 13];
let arr2 = arr1;
arr2[0] = 90;
console.log(arr1);
console.log(arr2);
