Ternary Operator :
-> This is nothing but extension of our if-else only
-> If we had a condition -

if(condition)
{
    //Action
}
else 
{
    //Action
}
-> One alternative came for this if-else in the form of "ternary Operator"
-> It says whatever condition we have that one we test then we have to put a "?" then after putting the "?" whatever we have to execute in //Action, that one we can put that is i.e. Statement.

condition ? statement
-> Here only one statement is going to work for one-if and one-statement for one-condition.
    condition ? statement-1 : statement-2
-> If we observe -
1) Firstly we have give a condition (it's like a general question) -
    Do you have a pen ? Yes : No
2) Responses - Yes : No
   -> We use "colon" to separate responses
Note : Short form of our "if-else" condition

Example : 
->  Do you have a pen ? Yes : No

// even-odd using ternary operator
num%2 == 0 ? console.log("even") : console.log("odd");

Question-2 :
const num =21;

num>7 ? (num%3 == 0 ? console.log(num+10) : console.log(num+20)) : console.log(num+40)

-> If 6 is greather than 7 -
1) if 7 is not greater than 7 then print (num+40)

-> If 10 is greater then 7 -
1) then check 10 is divisible by 10 or not. So, if this is divisible by 3 print (num+10) and if falsew then print(num+20).