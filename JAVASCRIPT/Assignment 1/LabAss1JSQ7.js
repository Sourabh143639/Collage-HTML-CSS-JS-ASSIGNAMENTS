function calculate(num1, num2, operator) {
    let result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break;

        case "*":
            result = num1 * num2;
            break;

        case "/":
            if (num2 === 0) {
                return "Cannot divide by zero";
            }
            result = num1 / num2;
            break;

        default:
            return "Invalid operator";
    }

    return result;
}


let num1 = 10;
let num2 = 5;
let operator = "*";

console.log("Result:", calculate(num1, num2, operator));
