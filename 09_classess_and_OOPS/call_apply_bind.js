function setUsername(username, ...rest) {
  console.log("inside setUsername function", this, rest);
  this.username = username;
}

const object = {};

console.log("before any method the value of object is ", object);
// console.log("this object is", this);
setUsername.call(object, "usernameFrom.call", 11, 12);
console.log("After .call object is ", object);
setUsername.apply(object, ["usernamefrom.apply", 101, 102]);
console.log("After .apply object is ", object);
setUsername.bind(object, "usernamevia.bind", 45, 67).bind(23, "New@@")();
// setUsername("Aman");
console.log("After .bind() object is", object);
// console.log("this object is", this);
