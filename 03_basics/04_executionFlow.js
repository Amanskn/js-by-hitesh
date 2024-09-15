// ===============Below steps happen in sequence when a js programs runs

// 1. Parsing & Compilation: JavaScript code is parsed and JIT compiled.
// 2. Execution Context Creation: Global and function-level contexts are created with memory hoisting.(Execution context = Memory Phase(Hoisting happens here) + Execution Phase)
// 3. Call Stack: Functions are executed one at a time, with execution contexts pushed onto the Call Stack.
// 4. Memory Heap: Memory for objects and arrays is managed dynamically.
// 5. Event Loop & Callback Queue: Asynchronous operations are handled through the Event Loop, which processes tasks from the Callback Queue and Microtask Queue.
// 6. Microtask Queue: Promises and other microtasks are processed before tasks in the Callback Queue.

//================= This process ensures that both synchronous and asynchronous code can run efficiently in a single-threaded environment.

const num1 = 23;
const num2 = 12;
console.log(add);
function add(n1, n2) {
  console.log("Inside add function");
  return n1 + n2;
}
console.log(add(num1, num2));
