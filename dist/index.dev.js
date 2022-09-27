"use strict";

// We start with a screen where:
//  1.- display is blank
//  2.- the key is nothing/null:
//  3.- operator is null
//
// User clicks the ON key:
// 1.-the display turn to 0
// User clicks OFF key:
// 1.- display is zero & with time a pop up with animated image sayoing "Thank for trying our Calculator" Come in the future when more features will be ready!"
// User eneter a key:
// 1.- keys will be display
// 2.- if user presses "key-operator"
// 4.- check decimal and operator are not pressed more than once
// Additional:
// -no more than 9 characters per number
// -value rounded to 4 decimals
var keyValNum = document.querySelectorAll(".keyNum");
console.log(keyValNum);
var keyValMath = document.querySelectorAll(".keyMath");
console.log(keyValMath);
var inputScreen = document.getElementById("inputScreen");
console.log(inputScreen);
var keyValOn = document.querySelector(".keyOn");
console.log(keyValOn);
var keyValOff = document.querySelector(".keyOff");
console.log(keyValOff);
var keyValResult = document.querySelector(".keyResult");
console.log(keyValResult);
var keyValDec = document.querySelector(".keyDec");
console.log(keyValDec);
var num1, num2, opMath, opMathVal; //If ON/C is not click no numbers will show, and will reset exsisting values

keyValOn.addEventListener("click", function () {
  inputScreen.innerHTML = "0";
  num1 = 0;
  num2 = 0; // num2Val = false;

  opMath = "";
  opMathVal = false;
  console.log(inputScreen.textContent);
  console.log(num1, opMath, num2, opMathVal);
}); //If OFF is click no numbers will show

keyValOff.addEventListener("click", function () {
  inputScreen.innerHTML = "";
  num1, num2, opMath = "";
  alert("Thank you for using My Basic Pocket Calculator");
});

var checkIfOn = function checkIfOn() {
  if (inputScreen.textContent != "") {
    return true;
  } else {
    alert("Please click the ON/C button");
    return false;
  }
}; // Number Values


keyValNum.forEach(function (keyNum) {
  keyNum.addEventListener("click", function () {
    if (!checkIfOn()) {
      return;
    } // remove the 0 from the ON/C buttom


    if (inputScreen.innerHTML === "0") {
      inputScreen.innerHTML = "";
    }

    var keyNumValue = keyNum.textContent;
    inputScreen.innerHTML += keyNumValue;
  });
}); // Handeling Math key input

keyValMath.forEach(function (keyMath) {
  keyMath.addEventListener("click", function () {
    if (!checkIfOn()) {
      return;
    } // Set num1 or take what is in display (i.e. math result) as Num1


    num1 = Number(inputScreen.textContent); // Set  display and opMath

    var keyMathValue = keyMath.textContent;
    inputScreen.textContent = keyMathValue;

    if (!opMathVal) {
      console.log("check value op");
      opMath = inputScreen.textContent;
      opMathVal = true;
    } // Check where are we
    // console.log(num1, opMath, num2, opMathVal);

  });
}); // -take decimal and check

keyValDec.addEventListener("click", function () {
  if (!checkIfOn()) {
    return;
  }

  inputScreen.innerHTML += ".";
});
keyValResult.addEventListener("click", function () {
  if (!checkIfOn()) {
    return;
  }

  console.log(inputScreen.innerHTML);
  num2 = Number(inputScreen.textContent.substring(1));
  console.log(num1, opMath, num2, opMathVal);
  inputScreen.innerHTML = "=";
  inputScreen.textContent = calculate(num1, opMath, num2);
  console.log(num1, opMath, num2, opMathVal);
  opMathVal = false;
  num1 = 0;
  num2 = 0;
}); // Calauclate the result

var calculate = function calculate(num1, operator, num2) {
  switch (operator) {
    case "+":
      // console.log(num1, num2, operator);
      return num1 + num2;
      break;

    case "-":
      return num1 - num2;
      break;

    case "X":
      return num1 * num2;
      break;

    case "%":
      return num1 * (num2 / 100);
      break;

    case "√":
      return Math.SQRT(num1);
      break;

    case "/":
      if (num2 === 0) {
        return "#DIV/0!";
      } else {
        return num1 / num2;
      }

      break;

    default:
      "unsupported operator: ".concat(operator);
  }
};