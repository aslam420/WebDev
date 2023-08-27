Switch Case :

const num = 5;

if (num == 1)
{
    console.log("one");
}
else if (num == 2)
{
    console.log("two");
}
else if(num == 5)
{
    console.log("five");
}
else
{
    console.log("number invalid");
}
-> If we observe we have put a lot of curly braces. So, if we loose such a code there will be a situation when we will see some error because it is difficult to deal with these many curly braces and opening braces. Also this reduces the speed of operation.

Note : In order to speed up the operation we can use 'switch-statement' -
switch(num)         //on the basis of num we are going to test
{
    case 1: 
        console.log("one");
    case 2:
        console.log("two");
    case 5:
        console.log("five");
    default:
        console.log("number invalid");
}

Output :
-> five
-> number invalid   //this is the else part which is going to work when nothing is working out

Q) Q) Why break is required?
-> Since we are not breaking from here means we are not coming out of it so it is going to check in these conditions as well. 
-> If we want to stop our execution from there we have to use "break" statement.

Note : If we don't want to execute all the statement we use "break" statement.
-> So, the break will stop from there came out of it

const num = 5;

switch(num)         //on the basis of num we are going to test
{
    case 1: 
        console.log("one");
        break;
    case 2:
        console.log("two");
        break;
    case 5:
        console.log("five");
        break;
    default:
        console.log("number invalid");
        break;
}

Output : five


Q) If we are going to do a calculator then what are the operations we are targeting in that?
1) Add (+)
2) Subtract (-)
3) Multiply (*)
4) Divide (/)

Solution :
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


Q) vowels = a, e, i, o, u
   consonants val = "b"

Check the value of val variable and based upon that print if it is a vowel or consonant.
1) using if-else
2) using switch statement