// armstrong number
let rem, sum = 0; 
let num = 153;

// for loop
for(let temp = num; temp > 0; temp = parseInt(temp/10)) 
{
    rem = temp % 10;
    sum = sum + (rem * rem * rem);
}

if(num == sum)
{
    console.log("armstrong number");
}
else
{
    console.log("not an armstrong number");
}