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
console.log(result);    //2.5