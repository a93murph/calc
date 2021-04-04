// const button = document.querySelector(".calculator");
// button.addEventListener("click", function () {
//   alert(`You've clicked on button ${event.target.innerText}`);
// });

const input = document.querySelector(".calculator");
const display = document.querySelector(".screen");

input.addEventListener("click", function () {
  display.innerText = event.target.innerText;
});
