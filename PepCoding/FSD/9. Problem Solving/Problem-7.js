
let rem, sum = 0; 

// for loop
for(let num = 1234; num > 0; num = parseInt(num/10)) 
{
    rem = num % 10;
    sum = sum + rem;
}

console.log(sum);   //10