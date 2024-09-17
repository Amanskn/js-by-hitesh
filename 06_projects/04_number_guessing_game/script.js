let attemptLeft = 10;
let previousGuessess = [];
const resultBoard = document.querySelector("#resultBoard");
const randomNumber1to100 = Math.floor(Math.random() * 100) + 1;
const submitButton = document.querySelector('input[type="submit"]');
const form = document.querySelector("form");
// =============this is the function to create a restart button and attaching click event listener on it
function createRestartButton() {
  const restartButton = document.createElement("button");
  restartButton.setAttribute("id", "restart");
  restartButton.innerText = "Restart";
  restartButton.style.cursor = "pointer";
  form.appendChild(restartButton);
  document.getElementById("restart").addEventListener("click", function () {
    // ======logic to reload the page
    window.location.reload();
  });
}

// ================attaching click event listener on submit button
submitButton.addEventListener("click", (e) => {
  const numberInput = document.querySelector("#number-input").value;
  e.preventDefault();

  if (numberInput) {
    if (numberInput == randomNumber1to100) {
      resultBoard.innerHTML = `👏 You won because you guessed it right in ${
        10 - attemptLeft + 1
      } attempt
      
      `;
      createRestartButton();
      //   document.body.style.backgroundColor = "pink";
    } else if (numberInput < randomNumber1to100) {
      previousGuessess.push(numberInput);
      resultBoard.innerHTML = ` Guess is less than the target <br>Previous guess were: ${previousGuessess} <br> Attempts left: ${--attemptLeft}`;
      if (attemptLeft <= 0) {
        resultBoard.innerHTML = `You lost it because total attempts over`;
        createRestartButton();
      }
    } else {
      previousGuessess.push(numberInput);
      resultBoard.innerHTML = ` Guess is greater than the target <br>Previous guess were: ${previousGuessess} <br> Attempts left: ${--attemptLeft}`;
      if (attemptLeft <= 0) {
        resultBoard.innerHTML = `You lost it because total attempts over`;
        createRestartButton();
      }
    }
  } else {
    resultBoard.innerHTML = "Please enter a number";
  }
});
