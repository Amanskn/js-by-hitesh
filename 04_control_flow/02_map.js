// const myMap = new Map();
// myMap.set("name", "John");
// myMap.set("age", 30);

// // Using for...in on a Map (not recommended)
// for (let key in myMap) {
//   console.log(key); // This won't work as expected, nothing will log
// }

// Note : for...in does not iterate over the keys and values in a Map. It is more appropriate for plain JavaScript objects.

// ++++++++++++
const myMap = new Map();
myMap.set("name", "John");
myMap.set("age", 30);

// Using for...of to iterate over the Map
for (let [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}
console.log(myMap.size); //myMap.size: This will give you the number of key-value pairs in the Map

console.log(myMap);

// =======ForEach method on map
console.log("++++++++++forEAch method on map");
myMap.forEach((value, index, arr) => {
  console.log(value, index, arr);
});
