const submitButton = document.querySelector('[type = "submit"]');
const bmiRanges = [
  { classification: "Severe Thinness", min: -Infinity, max: 16 },
  { classification: "Moderate Thinness", min: 16, max: 17 },
  { classification: "Mild Thinness", min: 17, max: 18.5 },
  { classification: "Normal", min: 18.5, max: 25 },
  { classification: "Overweight", min: 25, max: 30 },
  { classification: "Obese Class I", min: 30, max: 35 },
  { classification: "Obese Class II", min: 35, max: 40 },
  { classification: "Obese Class III", min: 40, max: Infinity },
];

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const heightTag = document.querySelector("#heightInput");
  const weightTag = document.querySelector("#weightInput");

  const errorParaTag = document.querySelector("#error");
  const resultParaTag = document.querySelector("#result");

  const heightInMeter = heightTag.value / 100;
  const weightInKg = weightTag.value;

  if (!heightInMeter || isNaN(heightInMeter)) {
    resultParaTag.innerText = ``;
    errorParaTag.innerText = "Please enter a valid height";
  } else if (!weightInKg || isNaN(weightInKg)) {
    resultParaTag.innerText = ``;
    errorParaTag.innerText = "Please enter a valid weight";
  } else {
    const BMI = weightInKg / (heightInMeter * heightInMeter);
    //   let classification;
    // if (BMI < 16) {
    //   classification = "Severe Thinness";
    // } else if (BMI >= 16 && BMI < 17) {
    //   classification = "Moderate Thinness";
    // } else if (BMI >= 18.5 && BMI < 25) {
    //   classification = "Normal";
    // } else if (BMI >= 25 && BMI < 30) {
    //   classification = "Overweight";
    // } else if (BMI >= 30 && BMI < 35) {
    //   classification = "Obese Class I";
    // } else if (BMI >= 35 && BMI < 40) {
    //   classification = "Obese Class II";
    // } else if (BMI >= 40) {
    //   classification = "Obese Class III";
    // }

    // More optimised way
    const classification = bmiRanges.find(
      (range) => BMI >= range.min && BMI < range.max
    ).classification;

    errorParaTag.innerText = "";
    resultParaTag.innerHTML = `BMI is: ${BMI}<br>Classification is: ${classification}`;
  }
});
