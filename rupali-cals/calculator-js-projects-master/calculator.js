// Store HTML elements in variables

// const operator = document.querySelectorAll(".opr");
// const numArray = document.querySelectorAll(".num");
// testing new change

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

// console.log("numbers and operators %,/,*,-,+,√ working");

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
let isPercentClickedAfter = false; // 0928

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
    isPercentClickedAfter = false; // 0928

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
    switch (operation) {
        case "+":
            results = (first + second);
            break;
        case "-":
            results = (first - second);
            break;
        case "*":
            results = (first * second);
            break;
        case "/":
            if (second === 0) {
                errorMsg = 1;
                resultsDisplay.style.color = "#e63946";
                // resultsDisplay.style.font = "italic normal x-large arial,sans-serif";
                // // resultsDisplay.style.backgroundColor = "blue";
                resultsDisplay.style.fontSize = "20px";
                results = "Division by 0 not permitted";
                break;
            } else {
                results = first/second;
            }
            break;
        case "%":
            results = (first*(second/100));
            break;
        case "√":
            results = Math.pow(first, 1/second).toFixed(0);
            break;      
    } 
    return results;
}

// Get OPERATOR values
oprAdd.addEventListener("click", () => {
    if (!isOperatorClicked) {
        operator = "+";
        operatorDisplay = "+";
        isOperatorClicked = true;
        isDecimalClicked = false;
        inputDisplayText = inputDisplayText + operator;
    }
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
    inputDisplay.innerHTML = inputDisplayText;
});
oprPercentage.addEventListener("click", () => {
    if (!isOperatorClicked && !isPercentClickedAfter) { // 0928
        // if (!isOperatorClicked) {
        operator = "%";
        operatorDisplay = "%";
        isOperatorClicked = true;
        isDecimalClicked = false;
        inputDisplayText = inputDisplayText + operator;
    } else if (isOperatorClicked && !isPercentClickedAfter) { //0928
        // operator = "%";
        // operatorDisplay = "%";
        isOperatorClicked = true;
        isDecimalClicked = false;
        inputDisplayText = inputDisplayText + "%";
        isPercentClickedAfter = true;
    }
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
    inputDisplay.innerHTML = inputDisplayText;
});
actionCancel.addEventListener("click", () => {
    inputDisplayText = "0";
    resultsDisplayText = "0";
    resultsDisplay.style.fontSize = "25px";
    resultsDisplay.style.color = "#457b9d";
    inputDisplay.innerHTML = inputDisplayText;
    resultsDisplay.innerHTML = resultsDisplayText;
    initializeParam();
});

actionChangeSign.addEventListener("click", () => {
    let firstInputSign, secondInputSign, newFirstInput, newSecondInput = "";
    if (!isOperatorClicked) {
        firstSignCount = firstSignCount + 1;      
        if ((firstSignCount % 2) != 0)  { //odd clicks, -ve number
            firstInputSign = "-";
            // firstSignCount = firstSignCount + 1;
        } else {
            firstInputSign = "";
            // firstSignCount = firstSignCount + 1;
        };
        newFirstInput = firstInputSign + firstInput;
        inputDisplayText = newFirstInput;
    } else if (isOperatorClicked) {
        secondSignCount = secondSignCount + 1; 
        if ((secondSignCount % 2) != 0)  { //odd clicks, -ve number
            secondInputSign = "-";
            // secondSignCount = secondSignCount + 1;
        } else {
            secondInputSign = "";
            // secondSignCount = secondSignCount + 1;
        };
        newSecondInput = secondInputSign + secondInput;
        inputDisplayText = inputDisplayText.slice(0,-secondInput.length) + newSecondInput;
    }
    inputDisplay.innerHTML = inputDisplayText;
});

actionBkSpace.addEventListener("click", () => {
//backspace code
let newFirstInput = firstInput;
let newSecondInput = secondInput;
    if (!isOperatorClicked) {
        backspaceCount = backspaceCount + 1;  
        newFirstInput = firstInput.substring(0,firstInput.length-1);
        firstInput = newFirstInput;
        if (newFirstInput != "") {
            inputDisplayText = newFirstInput;
        } else {
            inputDisplayText = 0;
            isFirstNumber = false;
        }
    } else if (isOperatorClicked) {
        operatorPosition = inputDisplayText.indexOf(operatorDisplay);  
        backspaceCount = backspaceCount + 1;
        newSecondInput = secondInput.substring(0,secondInput.length-1);
        secondInput = newSecondInput;
        if (inputDisplayText.length - 1 >= operatorPosition + 1) {
            inputDisplayText = newFirstInput + operatorDisplay + newSecondInput;
        } else {
            inputDisplayText = newFirstInput;
            isOperatorClicked = false;
        }
    };
    inputDisplay.innerHTML = inputDisplayText;
});

// Get NUMBER values

decimal.addEventListener("click", () => {
    if (!isDecimalClicked) {
        if (!isOperatorClicked) {
            if (firstInput === "") {
                firstInput = firstInput + "0.";
                inputDisplayText = inputDisplayText + "0.";
            } else {
                firstInput = firstInput + ".";
                inputDisplayText = inputDisplayText + ".";
            }
        } else {
            if (secondInput === "") {
                secondInput = secondInput + "0.";
                inputDisplayText = inputDisplayText + "0.";
            } else {
                secondInput = secondInput + ".";
                inputDisplayText = inputDisplayText + ".";
            }
        }
    };
    isDecimalClicked = true;
    inputDisplay.innerHTML = inputDisplayText;
});
numberZero.addEventListener("click", () => {
    if (isFirstNumber) {
        if (firstInput != "" && isOperatorClicked) {
            secondInput = secondInput + "0";
            inputDisplayText = inputDisplayText + "0";
        } else {
            firstInput = firstInput + "0";
            inputDisplayText = inputDisplayText + "0";
        };
        inputDisplay.innerHTML = inputDisplayText;
        changeFirstClick();
    } 
    else {
        inputDisplay.innerHTML = 0;
    }
});
numberOne.addEventListener("click", () => {
    if (firstInput != "" && isOperatorClicked) {
        secondInput = secondInput + "1";
        inputDisplayText = inputDisplayText + "1";
    } else {
        firstInput = firstInput + "1";
        inputDisplayText = inputDisplayText + "1";
    }
    changeFirstClick();
    inputDisplay.innerHTML = inputDisplayText;
});
numberTwo.addEventListener("click", () => {
    changeFirstClick();
    if (firstInput != "" && isOperatorClicked) {
        secondInput = secondInput + "2";
        inputDisplayText = inputDisplayText + "2";
    } else {
        firstInput = firstInput + "2";''
        inputDisplayText = inputDisplayText + "2";
    }    
    inputDisplay.innerHTML = inputDisplayText;
});
numberThree.addEventListener("click", () => {
    changeFirstClick();
    if (firstInput != "" && isOperatorClicked) {
        secondInput = secondInput + "3";
        inputDisplayText = inputDisplayText + "3";
    } else {
        firstInput = firstInput + "3";
        inputDisplayText = inputDisplayText + "3";
    }      
    inputDisplay.innerHTML = inputDisplayText;
});
numberFour.addEventListener("click", () => {
    changeFirstClick();
    if (firstInput != "" && isOperatorClicked) {
        secondInput = secondInput + "4";
        inputDisplayText = inputDisplayText + "4";
    } else {
        firstInput = firstInput + "4";
        inputDisplayText = inputDisplayText + "4";
    }
    inputDisplay.innerHTML = inputDisplayText;
});
numberFive.addEventListener("click", () => {
    changeFirstClick();
    if (firstInput != "" && isOperatorClicked) {
        secondInput = secondInput + "5";
        inputDisplayText = inputDisplayText + "5";
    } else {
        firstInput = firstInput + "5";
        inputDisplayText = inputDisplayText + "5";
    }
    inputDisplay.innerHTML = inputDisplayText;
});
numberSix.addEventListener("click", () => {
    changeFirstClick();
    if (firstInput != "" && isOperatorClicked) {
        secondInput = secondInput + "6";
        inputDisplayText = inputDisplayText + "6";
    } else {
        firstInput = firstInput + "6";
        inputDisplayText = inputDisplayText + "6";
    }
    inputDisplay.innerHTML = inputDisplayText;
});
numberSeven.addEventListener("click", () => {
    changeFirstClick();
    if (firstInput != "" && isOperatorClicked) {
        secondInput = secondInput + "7";
        inputDisplayText = inputDisplayText + "7";
    } else {
        firstInput = firstInput + "7";
        inputDisplayText = inputDisplayText + "7";
    }
    inputDisplay.innerHTML = inputDisplayText;
});
numberEight.addEventListener("click", () => {
    changeFirstClick();
    if (firstInput != "" && isOperatorClicked) {
        secondInput = secondInput + "8";
        inputDisplayText = inputDisplayText + "8";
    } else {
        firstInput = firstInput + "8";
        inputDisplayText = inputDisplayText + "8";
    }
    inputDisplay.innerHTML = inputDisplayText;
});
numberNine.addEventListener("click", () => {
    changeFirstClick();
    if (firstInput != "" && isOperatorClicked) {
        secondInput = secondInput + "9";
        inputDisplayText = inputDisplayText + "9";
    } else {
        firstInput = firstInput + "9";
        inputDisplayText = inputDisplayText + "9";
    }
    inputDisplay.innerHTML = inputDisplayText;
});
// numArray.forEach((num) => {
//     num.addEventListener("click" , () => num.append());
// });

// Calculate RESULTS on = click; initialize parameters
actionCalculate.addEventListener("click",function() {
// console.log(`opr=${operatorDisplay} inputDisplayText.split= ${inputDisplayText.split(operatorDisplay)}`);
//     const myNumbers = inputDisplayText.split(operatorDisplay);
//     const firstInputNumber = Number(myNumbers[0]);
//     const secondInputNumber = Number(myNumbers[1]);
// console.log(`before if first=${firstInputNumber}, seond=${secondInputNumber}, oprdisp=${operatorDisplay}, opr=${operator}, results=${resultsDisplayText}`);

    if (!isPercentClickedAfter) {
        const myNumbers = inputDisplayText.split(operatorDisplay);
        const firstInputNumber = Number(myNumbers[0]);
        const secondInputNumber = Number(myNumbers[1]);
        resultsDisplayText=calculateNow(firstInputNumber,secondInputNumber,operator);
console.log(`!%clicked first=${firstInputNumber}, second=${secondInputNumber}, oprdisp=${operatorDisplay}, opr=${operator}, results=${resultsDisplayText}`);
    } else if (isPercentClickedAfter) {
        if (operatorDisplay === "x") {
            operator = "*";
        }
        const newInputDisplayText = inputDisplayText.substring(0,inputDisplayText.length-1);
console.log(`inputdisplay= ${inputDisplayText} newinput=${newInputDisplayText}`);
console.log(`opr=${operator} oprdisplay=${operatorDisplay}`);
        const myNumbers = newInputDisplayText.split(operatorDisplay);
console.log(`mynumbers=${myNumbers}`);
        const firstInputNumber = Number(myNumbers[0]);
        const secondInputNumber = Number(myNumbers[1]);

console.log(`%clicked:1 first=${firstInputNumber}, second=${secondInputNumber}, oprdisp=${operatorDisplay} opr=${operator}`);
        const percentResults = Number(calculateNow(firstInputNumber,secondInputNumber,"%"));
console.log(`%calculation first=${firstInputNumber}, second=${secondInputNumber}, percentresult=${percentResults}, oprdisp=${operatorDisplay} opr=${operator}`);
        resultsDisplayText=calculateNow(firstInputNumber,percentResults,operator);
console.log(`results first=${firstInputNumber}, second=${secondInputNumber}, oprdisp=${operatorDisplay} opr=${operator}, results=${resultsDisplayText}`);
// console.log("new code to be added")
    }

    resultsDisplay.innerHTML = resultsDisplayText;
    initializeParam();
});