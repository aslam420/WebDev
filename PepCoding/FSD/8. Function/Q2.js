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