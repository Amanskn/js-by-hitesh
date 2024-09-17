const [startBtn, stopBtn] = document.querySelectorAll("button");
let setIntervalReference;
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
// ========this is the function to chnage the background color
function changeBGColor() {
  startBtn.innerText = "Started";
  stopBtn.innerText = "Stop";
  //   const tempReference = setInterval(() => {
  //     document.body.style.backgroundColor = getRandomColor();
  //   }, 1000);
  setIntervalReference =
    setIntervalReference ??
    setInterval(() => {
      const randomColor = getRandomColor();
      document.body.style.backgroundColor = randomColor;
      document.querySelector("code").innerText = randomColor;
    }, 1000);
}

//======== function to stop the background color change
function stopBGColor() {
  startBtn.innerText = "Start";
  stopBtn.innerText = "Stopped";
  console.log("setIntervalReference is ", setIntervalReference);
  clearInterval(setIntervalReference);
  setIntervalReference = null;
}

// =========attaching click event listener to start button
startBtn.addEventListener("click", changeBGColor);

// =========attaching click event listener to stop button
stopBtn.addEventListener("click", stopBGColor);
