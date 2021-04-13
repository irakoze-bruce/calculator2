/** @format */

function calc() {
  let calculator;
  let value1 = parseInt(document.querySelector("#value1").value);
  let value2 = parseInt(document.querySelector("#value2").value);
  let operator = document.querySelector("#operator").value;
  if (operator == "add") {
    calculator = value1 + value2;
  } else if (operator == "minus") {
    calculator = value1 - value2;
  } else if (operator == "divide") {
    calculator = value1 / value2;
  } else if (operator == "multiply") {
    calculator = value1 * value2;
  }
  var a = (document.querySelector("#result").innerHTML = calculator);
  console.log(a);
}
calculator.addEventListener("click", calc);
