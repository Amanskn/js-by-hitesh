const innerDivs = document.querySelectorAll(".inner");
const bodyTag = document.querySelector("body");

innerDivs.forEach((eachDiv) => {
  eachDiv.style.backgroundColor = eachDiv.getAttribute("id");
  eachDiv.style.color = "black";
});
innerDivs.forEach((eachDiv) => {
  eachDiv.addEventListener("click", () => {
    bodyTag.style.backgroundColor = eachDiv.style.backgroundColor;
  });
});
