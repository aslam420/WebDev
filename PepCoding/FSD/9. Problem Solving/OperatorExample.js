const num1 = -10, num2 = 20;

if(num1 > 0 && num2 > 0){
    console.log("num1 and num2 both are positive numbers");
}
else if(num1 < 0 && num2 < 0){
    console.log("num1 and num2 both are negative numbers");
}
else if(num1 == 0 && num2 == 0){
    console.log("both numbers are zero");
}
else if(num1 == 0 || num2 == 0){
    console.log("either num1 is 0 or num2 is zero");
}
else if(num1 > 0 || num2 > 0){
    console.log("either num1 is positive number or num2 is positive number");
}
else if(num1 < 0 || num2 < 0){
    console.log("either num1 is negative number or num2 is negative number");
}