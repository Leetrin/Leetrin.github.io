"use strict";

function calculator() {

  const firstAnswer = prompt("What is a first number?", "");
  const secondAnswer = prompt("What is a second number?", "");
  const operatorAnswer = prompt("What do you do with this numbers? Enter +, -, * ,/ ,**", "");

  if (operatorAnswer !== "+" && operatorAnswer !== "-" && operatorAnswer !== "*" && operatorAnswer !== "/" && operatorAnswer !== "**") {
    return "Not available operator";
  }

  const firstNumber = Number(firstAnswer);
  const secondNumber = Number(secondAnswer);

  if(isNaN(firstNumber) && isNaN(secondNumber)) {
    return "Not a number!";
  }

  if (operatorAnswer == "/" && secondNumber === 0) {
    return "You can't divide by zero";
  }

  if (operatorAnswer == "+") {
    return firstNumber + secondNumber;
  }

  if (operatorAnswer == "-") {
    return firstNumber - secondNumber;
  }

  if (operatorAnswer == "*") {
    return firstNumber * secondNumber;
  }

  if (operatorAnswer == "/") {
    return firstNumber / secondNumber;
  }

  if (operatorAnswer == "**") {
    return firstNumber ** secondNumber;
  }

}

alert(calculator());






