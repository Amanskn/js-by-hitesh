// Let see setTimeout vs promise
const githubURL = "https://api.github.com/users/Amanskn";

// setTimeout(() => {
//   console.log("Inside setTimeout callback");
// });
// console.log("before promise");

// const promiseObject = new Promise((resolve, reject) => {
//   console.log("inside promise");
//   setTimeout(() => {
//     console.log("Inside setTimeout callback inside promise before resolve");
//     resolve(45);
//     console.log("Inside setTimeout callback inside promise after resolve");
//   });
// });

// console.log("promiseObject is ", promiseObject);
// promiseObject.then((data) => {
//   console.log("inside then and the data is", data);
// });
// console.log("outside");

// =============without internet fetch will not be able to get the data  from the API
fetch(githubURL)
  .then((response) => {
    console.log("Inside first then ");
    return response.json();
  })
  .then((data) => {
    console.log("data is ", data);
  });
