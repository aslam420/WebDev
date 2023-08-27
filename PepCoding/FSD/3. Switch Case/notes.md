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