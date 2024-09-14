const course = {
  courseName: "js in hindi",
  price: "999",
  courseInstructor: "Hitesh",
};

const { courseName } = course; // normal destructuring
const { courseName: courseTitle } = course; // renaming while  destructuring
console.log(courseName);
console.log(courseTitle);
let arr = ["Apple", "Grape", "Orange"];
const [a, b, ...c] = arr; // destructuring in array
console.log(a, b, c);
