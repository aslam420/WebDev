Function :
-> Sometimes when we are doing something like print a value of 3 variables. So, for every value we have to write a console statement.
-> So, function says we put everything at one place and whenever we want to run those statements, we can just call this functions.
-> So, in this particular one, we are going to put all our code in the set of one entity and that particular thing we can say we are putting everything at one place and that one we can use at multiple places like printing the values.

Note : We will see how we write functions earlier and how we write it according to the latest javascript.

Functions : Set of statements which can be reused.

Design Principle : DRY --> Do not Repeat Yourself
-> If you have something which is actually repeating then put it in a function and reuse it multiple times.
-> Let's say we have 3 variables -
(a) num1 = 1
(b) num2 = 3
(c) num3 = 7
-> If you want to print all the values you will have to write separate statement for all.
console.log(num1);
console.log(num2);
console.log(num3);
-> So, it says you can create one function which is actually going to work for all of these situations.

Q) How can we create a function?
Syntax :
function function_Name(parameters)
{
    // set of instruction
}

Q) Why are we using functions?
-> When we are going to work in a company, we are not going to deal with some 10-20 lines of code, we have to deal with 10,000 lines of code.
-> For the printing things, instead of writing down some set of statements, we can create a function and that function we can call any number of times so our repeated code is going to avoided and that is what this principle says - "Do not repeat yourself".
Note : When you are creating a function functionName should have a meaningful name. 
-> function name should be meaningful.
-> function name should not have a space in between.

Function call/Invoking a function :
-> We are in a room where we are 50 people. How can we call a particular person in that room?
-> We will call him/her by their name.
-> So, if we are creating a function, if we not going to call it, this function will never going to get executed -
    function Fabme()
    {
        // set of instruction
    } 
Note : If we will not call it, it will never executed.

-> To call a function we have to use the same functionName(); and put a semicolon. This will become a function call. So, it going to look into the entire file that do we have a function with this name, if yes! then we have to start its execution.
Note : We can call it as "invoking a function"

-> Now we are saying that if we have a room one some people are there. If we are not going to say that come out of that room but return with with that. If we are not adding that return thing - he/she is ever going to take his/her bag? No!

Return statement :
-> In the function when we run a function we use one return statement and with that return statement it returns some value out of it.
    function Fabme()
    {
        return;
    } 
-> Anything written after this is not going to get executed and if is not getting executed then there is no point of writing it.

Q) Why do we need it?
-> Bag can have some important document which he/she can use later. Similarly, here if we are inside a function we might be doing some operation, after doing the operation we want that updated value to get used somewhere else. So, inorder to achieve that we use return statement there.

Question :
function TempFunction1()    // function call
{
    console.log("HI");
    return "a";             
    console.log("hi");       //unreachable code -> after return nothin will run
}
function TempFunction2()     // function call
{
    return 1;                
}
function TempFunction3()     // function call
{
    return true;             
}
console.log(TempFunction1());   //a
console.log(TempFunction2());   //1
console.log(TempFunction3());   //true

// add two numbers
function Add()
{
    const num1 = 2;
    const num2 = 3;
    let sum = num1 + num2;
    return sum;
}

// call or invoking a function
let result = Add();
result = result/2;
console.log(result);

Output :
HI
a
1
true
2.5

Parameters :
-> A function can have one or more parameters.
-> So far we are just creating a function but we are not passing value to it. As long as we are not passing value we cannot reuse it because reuse can happen but its can be limited. How we can enhance its scope? By passing some values to it.
Syntax :
function function_Name(parameters)  //function declaration
{
    // set of instruction
}

-> functionName(num1, num2);  //invoke function //arguments
-> The values that we are passing here can be referred as "arguments"

Note : When we are declaring a function, whatever values are there in the bracket (comma separated) those ones are known to be "function parameter". And the values which we are going to pass at the time of function call is called as "function argument".


//function parameter - n1, n2
function Add(n1, n2)   
{
    return n1+n2;
}
const num1 = 3, num2 = 5, num3 = 10;

function Print(num)
{
    console.log(num);
}

// adding num1 & num2 and storing it in sum1
let sum1 = Add(num1, num2); //function arguments     // num1<--> n1, num2<--> n2
Print(sum1);

// adding num2 & num3 and storing it in sum2
let sum2 = Add(num2, num3); //function arguments 
Print(sum2);

// add sum1 and sum2 and storing it in sum3
let sum3 = Add(sum1, sum2);
Print(sum3);


Arrow function (function expression):
-> -> With the advanced JavaScript they say whatever function we have instead of writing it down in that way we can convert it into a arrow function.

// arrow function
let Add = (n1, n2) => n1+n2;

// arrow function
let Print = (num) => console.log(num);

const num1 = 3, num2 = 5, num3 = 10;

// adding num1 & num2 and storing it in sum1
let sum1 = Add(num1, num2); //function arguments 
Print(sum1);

// adding num2 & num3 and storing it in sum2
let sum2 = Add(num2, num3); //function arguments 
Print(sum2);

// add sum1 and sum2 and storing it in sum3
let sum3 = Add(sum1, sum2);
Print(sum3);

Output :
8
15
23

Note : variableName = (parameter) => return value; 
NOte : For more than one returnType use curly braces -
variableName = (parameter) => 
{
    console.log(num);
    console.log("hi");
}