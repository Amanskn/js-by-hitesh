const obj = {
  log: ["example", "test"],
  get latestInLog() {
    return this.log.at(-1);
  },
  set latestInLog(latestValue) {
    this.log.push(latestValue);
  },
};
console.log("obj.log is ", obj.log); // we can access log directly
console.log("obj.latestInLog is:", obj.latestInLog); // getter is called here
obj.latestInLog = "Aman"; // Setter is invoked here
console.log("obj.latestInLog after setter invocation is:", obj.latestInLog);
console.log(obj.log);
