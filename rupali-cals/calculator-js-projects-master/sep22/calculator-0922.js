// PSEUDO CODE
    // User clicks a number button
        // User continues to click numbers
        // Each subsequent number is concatenated to previous number FIRST NUMBER clicked
        //FIRST NUMBER is shown on screen
    // User clicks an operator button
        // OPERATOR is stored in a variable
        // OPERATOR is shown on screen
    // User clicks more number buttons
        // Creating SECOND NUMBER
        // SECOND NUMBER is displayed on screen
    // User clicks equals button
        // CALCULATE function uses FIRST NUMBER, SECOND NUMBER, and OPERATOR to create the RESULT
        // RESULT is displayed on screen

    // CALCULATE FUNCTION
        // - can ADD, SUBSTRACT, DIVIDE or MULTIPLY
        // - can PERCENTAGE
        // - can SQUARE ROOT
        // - can handle 3 or more numbers inputted

let firstNumber = Number(prompt("First number: "));
let operator = prompt("Operator: ");
let secondNumber = Number(prompt("Second number: "));

// alert(`${firstNumber} ${operator} ${secondNumber}`);

// alert(`${firstNumber} is ${typeof firstNumber}`);
// alert(`${secondNumber} is ${typeof secondNumber}`);
// alert(`${operator} is ${typeof operator}`);
// // alert(`length of operator ${operator.length}`);

const calculateNow = (first, second, operation) => {
    console.log(operation);
    switch (operation) {
        case "+":
            return (first + second);
        case "-":
            return (first - second);
        case "/":
            return (second === 0) ? "Error: Division by 0 not permitted": (first / second) ;
        case "*":
            return (first * second);
        case "%":
            return (first*(second/100));
        case "√":
            if (second > 0 && second < 6) {
                return Math.pow(first, 1/second).toFixed(2);
            } else {
                return "Error: power can only be between 1 and 5 for now!";
            }         
    }
}
let calcResults = calculateNow(firstNumber,secondNumber,operator)
alert(`The results of ${firstNumber} ${operator} ${secondNumber} are ${calcResults}`);
