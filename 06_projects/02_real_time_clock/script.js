const timerDiv = document.getElementById("timer-div");
currentDate = new Date();
timerDiv.innerText = `${currentDate.toDateString()}, ${currentDate.toLocaleTimeString()}`;

setInterval((num1, num2) => {
  console.log("setInterval running", num1, num2);
  currentDate = new Date();
  timerDiv.innerText = `${currentDate.toDateString()}, ${currentDate.toLocaleTimeString()}`;
}, 1000);
