const arr = [12, 34, 56];
console.log(arr[2]);
console.log(arr.at(2));
console.log(arr[arr.length - 1]);
console.log(arr["1"]);
console.log(arr.at(-1));

console.log(arr);
console.log(arr.splice(1)); //  without providing the deletion count, it will remove all elements starting from the startIndex
console.log(arr);
