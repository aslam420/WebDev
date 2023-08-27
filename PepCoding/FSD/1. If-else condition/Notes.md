Flow of lecture :
1) Theory
2) Code Snippets
3) Coding
4) Understand how the code is working
Note : Talk to ourself before starting any topic.

We have 3 tiers of company -
1) Tier-1 : Well established comapnies likes Microsoft, Amazon, Google etc... 
2) Tier-2 : Well established MNCs like Infosys, IBM, Siemens etc..
3) Tier-3 : Startups
Note : For Tier-1 interview, they will ask : DS + Algo + System Design

Roles :
1) Frontend Developer
2) Backend Developer
3) Full Stack Developer

Conditional Statements -
-> Based upon some conditions we have to make our decisions -
1) if condition
2) if-else
3) ternary operators
4) switch statements

If-else condition -
-> We have conditions like -
(a) multiple if
(b) if-else
(c) nested if-else

Multiple If :
-> Suppose we are going to a pen shop. We have to buy a -
    (a) green pen if it is available
    (b) blue pen if it is available
So, here in this case we are testing against two conditons -
    1) Green pen if it going to be available
    2) Blue pen if it is going to be available

Pseudo Code ->
    -> if(green pen)    
                ----> Buy it
    -> if(Blue pen)
                ----> Buy it
This is the condition we are going to do.

Syntax :
if(condition)
{
    //Action
}


=> if(pen == blue pen)
    {
        Buy it
    }

Q) Check if the number is less than 5, if it is less tha 5 then print - "Number is less than 5"
-> if(number > 5)
    {
        Nummber is less than 5
    }

Solution :

const num = 3;

if(num < 5){
    console.log("Number is less than 5");
}

-> if-condition where we are just checking for only one condition. 
-> For more than one condition we have to use "if-else" condition.

if-else :
-> It says if a conditon is true then run this part, but if the condition is false then you run "else" part.
-> For example, if we are going to market we want to buy chips so we will get a condition - if lays are available then buy it otherwise don't.
-> In if-else we are providing a condition - if it true we are going to take some corresponding action to it, if it is not true then do the other part.
-> If pen is available then buy otherwise don't buy.
Q) Check if the number is less than 5 or greater than 5?
Solution :

const pen = 6;

if(pen > 5){
    console.log("Pen is greater then 5");
} else {
    console.log("Pen is less than 5");
}

NOte : JavaScript allows only 2 types of datatypes :
1) const : constant value which is not going to change
2) let : let value can be updatable


Multiple-if : 
-> If a num = 1 then print "one"
-> If a num = 5 then print "five"
We can see the condition is actually changing but it is not just going to do if-else part, we are very specific that if a num = 1 in such case print "one" and if a number is going to be 5 then print "5".

Q) Where we use multiple-if?
-> Where we actually have to test it against two conditions.

let num = 2;

if(num == 1) {
    console.log("one");
} 
if(num == 5){
    console.log("five");
}

// This is only going to work if the number is 1 or 5

Q) Even-odd :
-> Even : Divisible by 2 

Q) How do we check if the number is divisible by 2?
-> Through its remainder. If remainder = 0 then it is even number.
-> And it the remainder != 0 then it is odd number.

Q) How we can find remainder in programming language?
-> "%" this is nothing but our modulus operator. 
-> "%" is going to return us remainder.

This will work like - I want to check if a number 5 is divisible by 2 or not. So, we will put that in modulus operator like this-
->  5 % 2
-> This one going to divide this number '5' by '2' => 1 (remainder)
Note : Divide 5 by 2 and return remainder. 

-> And 5/2 will return divisor = 2.5
-> Means 2 will take 2.5 to divide the 5 completely.

//Dividend-remainder  :
let num = 5;

console.log("Dividend will be " + num/2);
console.log("Remainder will be " + num%2);

Even-odd Solution :
let num = 5;    //odd

if (num % 2 == 0){
    console.log(num + " is even number");
} else {
    console.log(num + " is odd number");
}


Nested-if :
-> nested-if means one inside another
-> means if-else inside another if-else.

Q) If a number is even number then check it is divisible by 3 or not.
Solution : let num = 18;

if(num % 2 == 0){
    console.log("Number is even");

    if(num % 3 == 0){
        console.log("And Yes! it is divisible by 3 also");
    } else {
        console.log("But it is not divisible by 3");
    }
} else{
    console.log("Number is odd number");
}

-> Here, we are checking against two conditions -
1) even number
2) divisible by 3


If-else :
-> if a num = 1 then print "one"
-> if num = 5 then print "five"
-> otherwise print "number is neither one nor five"

Example :
let num = 8;

if(num ==1 ){
    console.log("one");
}
else if(num == 5){
    console.log("five");
}
else{
    console.log("Neither one nor five");
}

