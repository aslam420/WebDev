const num1 = 20, num2 = 30, num3 = 50;

if((num1 > num2) && (num1 > num3))
{
    console.log(`${num1} is greatest`);
} 
else if((num2 > num1) && (num2 > num3))
{
    console.log(`${num2} is greatest`);
} 
else 
{
    console.log(`${num3} is greatest`);
}