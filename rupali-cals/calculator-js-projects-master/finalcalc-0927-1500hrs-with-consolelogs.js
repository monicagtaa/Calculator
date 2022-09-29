// Store HTML elements in variables

// const operator = document.querySelectorAll(".opr");
// const numArray = document.querySelectorAll(".num");

const numberZero = document.querySelector("#num-0");
const numberOne = document.querySelector("#num-1");
const numberTwo = document.querySelector("#num-2");
const numberThree = document.querySelector("#num-3");
const numberFour = document.querySelector("#num-4");
const numberFive = document.querySelector("#num-5");
const numberSix = document.querySelector("#num-6");
const numberSeven = document.querySelector("#num-7");
const numberEight = document.querySelector("#num-8");
const numberNine = document.querySelector("#num-9");
const decimal = document.querySelector("#num-decimal");

const oprAdd = document.querySelector("#opr-add");
const oprSubstract = document.querySelector("#opr-substract");
const oprMultiply = document.querySelector("#opr-multiply");
const oprDivide = document.querySelector("#opr-divide");
const oprPercentage = document.querySelector("#opr-percentage");
const oprRoot = document.querySelector("#opr-root");
const actionBkSpace = document.querySelector("#opr-bkspace");
const actionCancel = document.querySelector("#opr-cancel");
const actionChangeSign = document.querySelector("#changesign");
const actionCalculate = document.querySelector("#opr-calculate");

const inputDisplay = document.querySelector(".input-display");
const resultsDisplay = document.querySelector(".results-display");

console.log("numbers and operators %,/,*,-,+,√ working");

// initialize variables
// let results = 0;
let firstInput = "";
let secondInput = "";
let inputDisplayText = "";
let newInputDisplayText = "";
let resultsDisplayText = "";
let operator = "";
let operatorDisplay = "";

let firstSignCount = 0;
let secondSignCount = 0;
let operatorPosition = 0;
let operatorCount = 0;
let backspaceCount = 0;

let isFirstNumber = false;
let isDecimalClicked = false;
let isOperatorClicked = false;
let isChangeSignClicked = false;
// resultsDisplay.style.fontSize = "25px";
// resultsDisplay.style.color = "#457b9d";

// intializeParam() FUNCTION initialize all parameters after calculation
const initializeParam = () => {
    firstInput = "";
    secondInput = "";
    inputDisplayText = "";
    newInputDisplayText = "";
    resultsDisplayText = "";
    operator = "";
    operatorDisplay = "";
    
    firstSignCount = 0;
    secondSignCount = 0;
    operatorPosition = 0;
    operatorCount = 0;
    backspaceCount = 0;
    
    isFirstNumber = false;
    isDecimalClicked = false;
    isOperatorClicked = false;
    isChangeSignClicked = false;

    // resultsDisplay.style.fontSize = "25px";
    // resultsDisplay.style.color = "#457b9d";
};

// changeFirstClick() FUNCTION to check if a number has been clicked for first time
const changeFirstClick = () => {
    if (!isFirstNumber) {
        isFirstNumber = true;
        return;
    }
}
// calculateNow FUNCTION using two numbers and operator when opr-Calculate clicked and changes text for HTML classes input-display and results-display
const calculateNow = (first, second, operation) => {
    //change to return a variable and not explicit return
    let errorMsg = 0;
console.log(`Operator is ${operation}`);
console.log(`first input in func ${first} (${typeof first})`);
console.log(`second input in func ${second} (${typeof second})`);
    switch (operation) {
        case "+":
            results = (first + second);
// console.log("in case addition " + results);
            break;
        case "-":
            results = (first - second);
// console.log("in case multiplication");
            break;
        case "*":
// console.log("in case multiplication");
            results = (first * second);
            break;
        case "/":
            console.log("in case division");
            if (second === 0) {
console.log("in division by 0");
                errorMsg = 1;
                resultsDisplay.style.color = "#e63946";
                // resultsDisplay.style.font = "italic normal x-large arial,sans-serif";
                // // resultsDisplay.style.backgroundColor = "blue";
                resultsDisplay.style.fontSize = "20px";

console.log(`fontsize=${resultsDisplay.style.fontSize}`);
                results = "Division by 0 not permitted";
console.log("in div" + results);
                break;
            } else {
// console.log("in non-zero division")
                results = first/second;
            }
            break;
        case "%":
// console.log("in case percentage");
            results = (first*(second/100));
            break;
        case "√":
// console.log("in case power")
            results = Math.pow(first, 1/second).toFixed(0);
            break;      
    } 
    return results;
}

// Get OPERATOR values
oprAdd.addEventListener("click", () => {
    // oprAdd.value;
    if (!isOperatorClicked) {
        operator = "+";
        operatorDisplay = "+";
        isOperatorClicked = true;
        isDecimalClicked = false;
        inputDisplayText = inputDisplayText + operator;
    }
console.log(`opr variable on click is ${operator}`);
    inputDisplay.innerHTML = inputDisplayText;
});
oprSubstract.addEventListener("click", () => {
    if (!isOperatorClicked) {
        operator = "-";
        operatorDisplay = "-";
        isOperatorClicked = true;
        isDecimalClicked = false;
        inputDisplayText = inputDisplayText + operator;
    }

console.log(`opr variable on click is ${operator}`);
    inputDisplay.innerHTML = inputDisplayText;  
});
oprMultiply.addEventListener("click", () => {
    if (!isOperatorClicked) {
        operator = "*";
        operatorDisplay = "x";
        isOperatorClicked = true;
        isDecimalClicked = false;
        inputDisplayText = `${inputDisplayText}x`;
    }
console.log(`opr variable on click is ${operator}`);
    inputDisplay.innerHTML = inputDisplayText;

});
oprDivide.addEventListener("click", () => {
    if (!isOperatorClicked) {
        operator = "/";
        operatorDisplay = "/";
        isOperatorClicked = true;
        isDecimalClicked = false;
        inputDisplayText = inputDisplayText + operator;
    }
console.log(`opr variable on click is ${operator}`);
    inputDisplay.innerHTML = inputDisplayText;
});
oprPercentage.addEventListener("click", () => {
    if (!isOperatorClicked) {
        operator = "%";
        operatorDisplay = "%";
        isOperatorClicked = true;
        isDecimalClicked = false;
        inputDisplayText = inputDisplayText + operator;
    }
  
console.log(`opr variable on click is ${operator}`);
    inputDisplay.innerHTML = inputDisplayText;
});
oprRoot.addEventListener("click", () => {
    if (!isOperatorClicked) {   
        operator = "√";
        operatorDisplay = "√";
        isOperatorClicked = true;
        isDecimalClicked = false;
        inputDisplayText = inputDisplayText + operator;
    }        
console.log(`opr variable on click is ${operator}`);
    inputDisplay.innerHTML = inputDisplayText;
});
actionCancel.addEventListener("click", () => {
    inputDisplayText = "0";
    resultsDisplayText = "0";
    resultsDisplay.style.fontSize = "25px";
    resultsDisplay.style.color = "#457b9d";
// console.log(`input display text on click is ${inputDisplayText}!`);
    inputDisplay.innerHTML = inputDisplayText;
    resultsDisplay.innerHTML = resultsDisplayText;
    initializeParam();
// console.log(`isFirstNumber= ${isFirstNumber}`);
});

actionChangeSign.addEventListener("click", () => {
    let firstInputSign, secondInputSign, newFirstInput, newSecondInput = "";
console.log(`in changesign isOprclicked=${isOperatorClicked}`);
console.log(`firstinput=${firstInput}`);
console.log(`secondinput=${secondInput}`);
console.log("before");
console.log(`before firstcount=${firstSignCount} secondcount=${secondSignCount}`);

console.log("start logic")
    if (!isOperatorClicked) {
console.log(`orig firstcount=${firstSignCount}`);  
        firstSignCount = firstSignCount + 1;
console.log(`new firstcount=${firstSignCount}`);       
        if ((firstSignCount % 2) != 0)  { //odd clicks, -ve number
            firstInputSign = "-";
            // firstSignCount = firstSignCount + 1;
console.log(`is-odd firstcount=${firstSignCount}`);  
console.log(`firstSign= ${firstInputSign}`);
        } else {
console.log(`is-even firstcount=${firstSignCount%2}`);
            firstInputSign = "";
            // firstSignCount = firstSignCount + 1;
console.log(`firstSign= ${firstInputSign}`);
        };
        newFirstInput = firstInputSign + firstInput;
console.log(`after firstsign=${firstInputSign} firstinput=${newFirstInput}`)
        inputDisplayText = newFirstInput;

console.log(`in changesign  firstnum=${newFirstInput}`);
console.log(`in changesign firstnumber inputdisp=${inputDisplayText}`);
    } else if (isOperatorClicked) {

console.log(`orig secondcount=${secondSignCount}`);
        secondSignCount = secondSignCount + 1;
console.log(`new secondcount=${secondSignCount}`);  
        if ((secondSignCount % 2) != 0)  { //odd clicks, -ve number
console.log(`is-odd secondcount=${secondSignCount%2}`)
            secondInputSign = "-";
            // secondSignCount = secondSignCount + 1;
console.log(`secondSign= ${secondInputSign}`);
        } else {
            secondInputSign = "";
console.log(`is-even secondcount=${secondSignCount%2}`)
            // secondSignCount = secondSignCount + 1;
        };
        newSecondInput = secondInputSign + secondInput;
console.log(`len of secondinput=${secondInput.length}`);
console.log(`slice inputdisplay=${inputDisplayText.slice(0,-secondInput.length)}`);
        inputDisplayText = inputDisplayText.slice(0,-secondInput.length) + newSecondInput;
console.log(`in changesign  secondnum=${newSecondInput}`);
console.log(`in changesign secondnum inputdisp=${inputDisplayText}`);
    }
console.log(`firstinput=${firstInput} & newFirstInput=${newFirstInput}`);
console.log(`secondinput=${secondInput} & newSecondInput=${newSecondInput}`);
    inputDisplay.innerHTML = inputDisplayText;
});

actionBkSpace.addEventListener("click", () => {
//backspace code
let newFirstInput = firstInput;
let newSecondInput = secondInput;
console.log(`in bkspace isOprclicked=${isOperatorClicked} bkspacecount=${backspaceCount}`);
console.log(`firstinput=${firstInput} newfirst=${newFirstInput}`);
console.log(`secondinput=${secondInput} newsecond=${newSecondInput}`);
console.log(`oprpostion=${operatorPosition}`);
console.log("start logic")
    if (!isOperatorClicked) {
console.log(`in not oprclicked before bkspacecount=${backspaceCount}`);  
        backspaceCount = backspaceCount + 1;
console.log(`new bkspacecount=${backspaceCount}`);       
 
console.log(`newfirstinput= ${firstInput.substring(0,firstInput.length-1)}`);
        newFirstInput = firstInput.substring(0,firstInput.length-1);
        firstInput = newFirstInput;
console.log(`after bkspace count=${backspaceCount} newfirst=${newFirstInput}`)
        if (newFirstInput != "") {
            inputDisplayText = newFirstInput;
        } else {
            inputDisplayText = 0;
            isFirstNumber = false;
        }

console.log(`in bkspace not oprclicked inputdisp=${inputDisplayText}`);
    } else if (isOperatorClicked) {
        operatorPosition = inputDisplayText.indexOf(operatorDisplay);
console.log(`opr postion=${operatorPosition}`);
console.log(`in Oprclicked before bkspacecount=${backspaceCount}`);  
        backspaceCount = backspaceCount + 1;
console.log(`new bkspacecount=${backspaceCount}`);       
        
console.log(`newsecondinput=${secondInput.substring(0,secondInput.length-1)}`);
        newSecondInput = secondInput.substring(0,secondInput.length-1);
        secondInput = newSecondInput;
console.log(`after bkspace count=${backspaceCount} secondinput=${newSecondInput}`)
        if (inputDisplayText.length - 1 >= operatorPosition + 1) {
            inputDisplayText = newFirstInput + operatorDisplay + newSecondInput;
        } else {
            inputDisplayText = newFirstInput;
            isOperatorClicked = false;
        }
console.log(`in bkspace secondnum=${newSecondInput}`);
console.log(`in bkspace secondnumber inputdisp=${inputDisplayText}`);
console.log(`is oprclicked=${isOperatorClicked}`);
    };
    
console.log(`firstinput=${firstInput} & newFirstInput=${newFirstInput}`);
console.log(`secondinput=${secondInput} & newSecondInput=${newSecondInput}`);
    inputDisplay.innerHTML = inputDisplayText;
});

// Get NUMBER values

decimal.addEventListener("click", () => {
console.log(`decimal clicked is ${isDecimalClicked}`)
    if (!isDecimalClicked) {
console.log(`in decimal operator clicked is ${isOperatorClicked}`)
        if (!isOperatorClicked) {
console.log(`in decimal before if first input is ${firstInput}`);
            if (firstInput === "") {
console.log(`in first input ="" before assigment firstinput=${firstInput}`);
                firstInput = firstInput + "0.";
                inputDisplayText = inputDisplayText + "0.";
console.log(`in first input="" new firstinput =${firstInput}`);
            } else {
console.log(`in first input !="" before assigment firstinput=${firstInput}`);
                firstInput = firstInput + ".";
                inputDisplayText = inputDisplayText + ".";
console.log(`in first input!="" new firstinput =${firstInput}`);
            }
        } else {
console.log(`in decimal before if second input is ${secondInput}`);
            if (secondInput === "") {
console.log(`in second input ="" before assigment secondinput=${secondInput}`);
                secondInput = secondInput + "0.";
                inputDisplayText = inputDisplayText + "0.";
console.log(`in second input="" new secondinput =${secondInput}`);
            } else {
console.log(`in second input !="" before assigment secondinput=${secondInput}`);
                secondInput = secondInput + ".";
                inputDisplayText = inputDisplayText + ".";
console.log(`in second input !="" new secondinput =${secondInput}`);
            }
        }
    };
    isDecimalClicked = true;
console.log(`in decimal first input on click-1 is ${firstInput} data value is ${typeof firstInput}`);
console.log(`in decimal second input on click-1 is ${secondInput} data value ${typeof secondInput}`);
console.log(`in decimal inputDisplayText = ${inputDisplayText}`);
    inputDisplay.innerHTML = inputDisplayText;
});
numberZero.addEventListener("click", () => {
console.log(`0 isFirstNumber= ${isFirstNumber}`);
console.log(`0 firstInput= ${firstInput}`);
console.log(`0 isOperatorClick= ${isOperatorClicked}`);
    if (isFirstNumber) {
        if (firstInput != "" && isOperatorClicked) {
console.log("updating second input");
            secondInput = secondInput + "0";
            inputDisplayText = inputDisplayText + "0";
        } else {
console.log("updating first input");
            firstInput = firstInput + "0";
            inputDisplayText = inputDisplayText + "0";
        };
        inputDisplay.innerHTML = inputDisplayText;
        changeFirstClick();
    } 
    else {
console.log(`0 isFirstNumber= ${isFirstNumber} do not append`);
        inputDisplay.innerHTML = 0;
    }
// console.log(`first input on click-1 is ${firstInput} data value is ${typeof firstInput}`);
// console.log(`second input on click-1 is ${secondInput} data value ${typeof secondInput}`);
// console.log(`inputDisplayText = ${inputDisplayText}`);
});
numberOne.addEventListener("click", () => {
console.log(`1 isFirstNumber= ${isFirstNumber}`);
    if (firstInput != "" && isOperatorClicked) {
        secondInput = secondInput + "1";
        inputDisplayText = inputDisplayText + "1";
    } else {
        firstInput = firstInput + "1";
        inputDisplayText = inputDisplayText + "1";
    }
    changeFirstClick();
    console.log(`1 after func isFirstNumber= ${isFirstNumber}`);
// console.log(`first input on click-1 is ${firstInput} data value is ${typeof firstInput}`);
// console.log(`second input on click-1 is ${secondInput} data value ${typeof secondInput}`);
    inputDisplay.innerHTML = inputDisplayText;
// console.log(`inputDisplayText = ${inputDisplayText}`);
});
numberTwo.addEventListener("click", () => {
console.log(`2 isFirstNumber= ${isFirstNumber}`);
    changeFirstClick();
    if (firstInput != "" && isOperatorClicked) {
        secondInput = secondInput + "2";
        inputDisplayText = inputDisplayText + "2";
    } else {
        firstInput = firstInput + "2";''
        inputDisplayText = inputDisplayText + "2";
    }    
// console.log(`first input on click-1 is ${firstInput} data value is ${typeof firstInput}`);
// console.log(`second input on click-1 is ${secondInput} data value ${typeof secondInput}`);
    inputDisplay.innerHTML = inputDisplayText;
});
numberThree.addEventListener("click", () => {
console.log(`3 isFirstNumber= ${isFirstNumber}`);
    changeFirstClick();
    if (firstInput != "" && isOperatorClicked) {
        secondInput = secondInput + "3";
        inputDisplayText = inputDisplayText + "3";
    } else {
        firstInput = firstInput + "3";
        inputDisplayText = inputDisplayText + "3";
    }      
// console.log(`first input on click-1 is ${firstInput} data value is ${typeof firstInput}`);
// console.log(`second input on click-1 is ${secondInput} data value ${typeof secondInput}`);
    inputDisplay.innerHTML = inputDisplayText;
});
numberFour.addEventListener("click", () => {
console.log(`4 isFirstNumber= ${isFirstNumber}`);
    changeFirstClick();
    if (firstInput != "" && isOperatorClicked) {
        secondInput = secondInput + "4";
        inputDisplayText = inputDisplayText + "4";
    } else {
        firstInput = firstInput + "4";
        inputDisplayText = inputDisplayText + "4";
    }
// console.log(`first input on click-1 is ${firstInput} data value is ${typeof firstInput}`);
// console.log(`second input on click-1 is ${secondInput} data value ${typeof secondInput}`);
    inputDisplay.innerHTML = inputDisplayText;
});
numberFive.addEventListener("click", () => {
console.log(`5 isFirstNumber= ${isFirstNumber}`);
    changeFirstClick();
    if (firstInput != "" && isOperatorClicked) {
        secondInput = secondInput + "5";
        inputDisplayText = inputDisplayText + "5";
    } else {
        firstInput = firstInput + "5";
        inputDisplayText = inputDisplayText + "5";
    }
// console.log(`first input on click-1 is ${firstInput} data value is ${typeof firstInput}`);
// console.log(`second input on click-1 is ${secondInput} data value ${typeof secondInput}`);
    inputDisplay.innerHTML = inputDisplayText;
});
numberSix.addEventListener("click", () => {
console.log(`6 isFirstNumber= ${isFirstNumber}`);
    changeFirstClick();
    if (firstInput != "" && isOperatorClicked) {
        secondInput = secondInput + "6";
        inputDisplayText = inputDisplayText + "6";
    } else {
        firstInput = firstInput + "6";
        inputDisplayText = inputDisplayText + "6";
    }
// console.log(`first input on click-1 is ${firstInput} data value is ${typeof firstInput}`);
// console.log(`second input on click-1 is ${secondInput} data value ${typeof secondInput}`);
    inputDisplay.innerHTML = inputDisplayText;
});
numberSeven.addEventListener("click", () => {
console.log(`7 isFirstNumber= ${isFirstNumber}`);
    changeFirstClick();
    if (firstInput != "" && isOperatorClicked) {
        secondInput = secondInput + "7";
        inputDisplayText = inputDisplayText + "7";
    } else {
        firstInput = firstInput + "7";
        inputDisplayText = inputDisplayText + "7";
    }
// console.log(`first input on click-1 is ${firstInput} data value is ${typeof firstInput}`);
// console.log(`second input on click-1 is ${secondInput} data value ${typeof secondInput}`);
    inputDisplay.innerHTML = inputDisplayText;
});
numberEight.addEventListener("click", () => {
console.log(`8 isFirstNumber= ${isFirstNumber}`);
    changeFirstClick();
    if (firstInput != "" && isOperatorClicked) {
        secondInput = secondInput + "8";
        inputDisplayText = inputDisplayText + "8";
    } else {
        firstInput = firstInput + "8";
        inputDisplayText = inputDisplayText + "8";
    }
// console.log(`first input on click-1 is ${firstInput} data value is ${typeof firstInput}`);
// console.log(`second input on click-1 is ${secondInput} data value ${typeof secondInput}`);
    inputDisplay.innerHTML = inputDisplayText;
});
numberNine.addEventListener("click", () => {
console.log(`9 isFirstNumber= ${isFirstNumber}`);
    changeFirstClick();
console.log(`after func isFirstNumber= ${isFirstNumber}`);
    if (firstInput != "" && isOperatorClicked) {
        secondInput = secondInput + "9";
        inputDisplayText = inputDisplayText + "9";
    } else {
        firstInput = firstInput + "9";
        inputDisplayText = inputDisplayText + "9";
    }
// console.log(`first input on click-1 is ${firstInput} data value is ${typeof firstInput}`);
// console.log(`second input on click-1 is ${secondInput} data value ${typeof secondInput}`);
    inputDisplay.innerHTML = inputDisplayText;
});
// numArray.forEach((num) => {
//     num.addEventListener("click" , () => num.append());
// });

// Calculate RESULTS on = click; initialize parameters
actionCalculate.addEventListener("click",function() {

console.log(`calculate input values are num1 ${firstInput} (${typeof firstInput}), opr ${operator}, oprdisplay ${operatorDisplay} num2 ${secondInput} (${typeof secondInput})`);
console.log(`inputstring=${inputDisplayText}`);
    const myNumbers = inputDisplayText.split(operatorDisplay);
console.log(`myNumbers= ${myNumbers}`);
    const firstInputNumber = Number(myNumbers[0]);
    const secondInputNumber = Number(myNumbers[1]);
console.log(`from inputtext values are num1 ${firstInputNumber} (${typeof firstInputNumber}), opr ${operator}, num2 ${secondInputNumber} (${typeof secondInputNumber})`);
    // const firstInputNumber = Number(firstInput);
    // const secondInputNumber = Number(secondInput);
    resultsDisplayText=calculateNow(firstInputNumber,secondInputNumber,operator);

console.log(`calculate results = ${resultsDisplayText}`);

    resultsDisplay.innerHTML = resultsDisplayText;
    initializeParam();

});