const num1 = 8, num2 = 2;
let result;

const operator = "*";

if(operator == "+")
{
    result = num1 + num2;
} 
else if(operator == "-")
{
    result = num1 - num2;
}
else if(operator == "*")
{
    result = num1 * num2;
}
else if(operator == "/")
{
    result = num1 / num2;
}
else {
    console.log("invalid operation")
}
console.log(result);
