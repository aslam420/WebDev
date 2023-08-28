let num = 1234; //initialization
let rem, sum = 0; 

// while loop
while(num > 0) //condition check
{
    rem = num % 10;
    num = parseInt(num / 10); //updating the value - decrementing the value 
    sum = sum + rem;
}

console.log(sum);   //10