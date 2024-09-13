let arr = [23, 34, 56, 67, 89, 43];
console.log(arr.join("#"));
console.log(arr.join());

console.log(arr.slice(0, 2)); // do not changes the original array
console.log(arr.splice(0, 3, 78)); // changes the original array
console.log(arr);
