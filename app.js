const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const calc = document.querySelector(".number-pad");
const display = document.querySelector(".screen");
// const clear = document.querySelector(".key-clear");
const clear = ["C"];
const symbols = ["/", "+", "-", "*"];
const equals = ["="];
let equation = "";

// calc.addEventListener("click", function () {
//   if (numbers.indexOf(event.target.innerText) >= 0) {
//     let result = parseInt((display.innerText += event.target.innerText));
//     console.log(result);
//   }
// });

calc.addEventListener("click", function () {
  if (numbers.indexOf(event.target.innerText) >= 0) {
    display.innerText += event.target.innerText;
    equation += event.target.innerText;
    console.log("display", display.innerText);
    console.log("equation", equation);
  }
  if (symbols.indexOf(event.target.innerText) >= 0) {
    equation += event.target.innerText;
    display.innerText = "";
  }
  if (clear.indexOf(event.target.innerText) >= 0) {
    display.innerText = "";
    equation = "";
  }
  if (equals.indexOf(event.target.innerText) >= 0) {
    let result = eval(equation);
    display.innerText = result;
    console.log(result);
  }
});

// for (let i = 0; i < display.length; i++) {
//   let result = [];
//   while (numbers.indexOf(display[i]) >= 0) {
//     result += parseInt((display.innerText += event.target.innerText));
//   }
// }

// calc.addEventListener("click", function () {
//   if (symbols.indexOf(event.target.innerText) >= 0) {
//     equation += event.target.innerText;
//   }
// });
