const num1 = 8, num2 = 2;
let result;

const operator = "+";

switch(operator){
    case "+" :
        result = num1 + num2;
        console.log("Perform Addition");
        break;
    case "-" :
        result = num1 - num2;
        console.log("Perform Subtraction");
        break;
    case "*" :
        result = num1 * num2;
        console.log("Perform Multiplication");
        break;
    case "/" :
        result = num1 / num2;
        console.log("Perform Division");
        break;
    default :
        console.log("invalid operation")
}
console.log(result);
