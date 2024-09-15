// const check = undefined;
// console.log(check);

// =========Above stuff is just a check

// .map() on array
// const arr = [1, 2, 3, 4, 6, 7, 9];
// const mappedArr = arr.map((value, index, array) => {
//   return value + 10;
// });
// console.log("mappedArr is ", mappedArr);

// =========.filter() on array
// const arr = [1, 2, 3, 4];
// const filteredArray = arr.filter((value, index, array) => {
//   console.log(value, index, array);
//   return value % 2 == 0; // returning only those values which are even numbers
// });
// console.log("filteredArray is ", filteredArray);

// =========.reduce() on array

// ++++++++++++Imporant: if no initial value is supplied then arr[0] is considered as the initial value and passed to the accumulator and the iteration starts from index 1 instead of index 0
const arr = [1, 2, 3, 4];
const reducedValue = arr.reduce((acc, currenValue, index, array) => {
  console.log(acc, currenValue, index, array);
  return currenValue + acc; // returning only those values which are even numbers
});
console.log("reducedValue is ", reducedValue);
