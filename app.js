// const button = document.querySelector(".calculator");
// button.addEventListener("click", function () {
//   alert(`You've clicked on button ${event.target.innerText}`);
// });

const calc = document.querySelector(".calculator");
const display = document.querySelector(".screen");
const clear = document.querySelector(".key-clear");

calc.addEventListener("click", function () {
  display.innerText += event.target.innerText;
});
