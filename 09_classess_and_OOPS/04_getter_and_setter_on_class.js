class LogManager {
  #log = ["example", "test"]; // Private field

  get latestInLog() {
    return this.#log.at(-1);
  }

  set latestInLog(latestValue) {
    this.#log.push(latestValue);
  }
}

const logManager = new LogManager();
console.log("Latest in log:", logManager.latestInLog); // Access via getter
logManager.latestInLog = "Aman"; // Use setter to modify
console.log("Latest in log after setter:", logManager.latestInLog);
// console.log(logManager.#log); // Not allowed because we cannot access private fields outside the class body
