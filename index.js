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

const keyValNum = document.querySelectorAll(".keyNum");
console.log(keyValNum);
const keyValMath = document.querySelectorAll(".keyMath");
console.log(keyValMath);
const inputScreen = document.getElementById("inputScreen");
console.log(inputScreen);
const keyValOn = document.querySelector(".keyOn");
console.log(keyValOn);
const keyValOff = document.querySelector(".keyOff");
console.log(keyValOff);
const keyValResult = document.querySelector(".keyResult");
console.log(keyValResult);
const keyValDec = document.querySelector(".keyDec");
console.log(keyValDec);

let num1, num2, opMath, opMathVal;

//If ON/C is not click no numbers will show, and will reset exsisting values
keyValOn.addEventListener("click", () => {
  inputScreen.innerHTML = "0";
  num1 = 0;
  num2 = 0;
  // num2Val = false;
  opMath = "";
  opMathVal = false;
  console.log(inputScreen.textContent);
  console.log(num1, opMath, num2, opMathVal);
});

//If OFF is click no numbers will show
keyValOff.addEventListener("click", () => {
  inputScreen.innerHTML = "";
  num1, num2, (opMath = "");
  alert("Thank you for using My Basic Pocket Calculator");
});

const checkIfOn = () => {
  if (inputScreen.textContent != "") {
    return true;
  } else {
    alert("Please click the ON/C button");
    return false;
  }
};

// Number Values
keyValNum.forEach((keyNum) => {
  keyNum.addEventListener("click", () => {
    if (!checkIfOn()) {
      return;
    }
    // remove the 0 from the ON/C buttom
    if (inputScreen.innerHTML === "0") {
      inputScreen.innerHTML = "";
    }
    const keyNumValue = keyNum.textContent;
    inputScreen.innerHTML += keyNumValue;
  });
});

// Handeling Math key input
keyValMath.forEach((keyMath) => {
  keyMath.addEventListener("click", () => {
    if (!checkIfOn()) {
      return;
    }
    // Set num1 or take what is in display (i.e. math result) as Num1
    num1 = Number(inputScreen.textContent);
    // Set  display and opMath
    const keyMathValue = keyMath.textContent;
    inputScreen.textContent = keyMathValue;

    if (!opMathVal) {
      console.log("check value op");
      opMath = inputScreen.textContent;
      opMathVal = true;
    }
  });
});

// -take decimal and check
keyValDec.addEventListener("click", () => {
  if (!checkIfOn()) {
    return;
  }
  inputScreen.innerHTML += ".";
});

keyValResult.addEventListener("click", () => {
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
  // num1 = 0;
  // num2 = 0;
});

// Calauclate the result
const calculate = (num1, operator, num2) => {
  switch (operator) {
    case "+":
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
      `unsupported operator: ${operator}`;
  }
};
