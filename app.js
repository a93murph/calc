// const button = document.querySelector(".calculator");
// button.addEventListener("click", function () {
//   alert(`You've clicked on button ${event.target.innerText}`);
// });
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const calc = document.querySelector(".number-pad");
const display = document.querySelector(".screen");
// const clear = document.querySelector(".key-clear");
const clear = ["C"];
const divide = ["÷"];

calc.addEventListener("click", function () {
  if (numbers.indexOf(event.target.innerText) >= 0) {
    let num = parseInt(event.target.innerText)
    display.innerHTML += num;
    console.log(typeof num);
  }
});

calc.addEventListener("click", function () {
  if (clear.indexOf(event.target.innerText) >= 0) {
    display.innerText = "";
  }
});

// calc.addEventListener("click", function () {
//   if (divide.indexOf(event.target.innerText) >= 0) {
//     return (display /
//   }
// });
