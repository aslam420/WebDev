Q) What is iteration?
-> Iteration means something which we are going to do in repeatition.
-> For example, if we want to say Hi(10 times) then we are going to take one value and we are going to write it down 10 times but this will consume a lot of time. So, on order to help we come up with some iterative statements - "loops".

1) for loop
2) while loop
3) do-while loop

for loop :
-> Syntax :
Step-1 : Use 'for' keyword
Step-2 : do initialization
Step-3 : Condition check
Step-4 : Increment/Decrement

for(initialization; condition check; increment/decrement)
{
    // statement
}

Q) What does 'initialization' say?
-> Let's say we have to print 'hi'5 times so we know total it has to happen 5 times -
1. hi
2. hi
3. hi
4. hi
5. hi
--------
This one is going to act like a counter (like we are noting in our copy how much we have done) because with the help of this we are checking till how many times we have written it. So, here we will have some initialization means we are going to take a variable which is going to keep a track of how many times we are doing that work.

Q) What we will do for initialization?
-> let i =  0/1     //Up to use where we want to start

Q) What is condition check?
-> If our value is becoming equal to 5, in such as case we have to run. Here we are checking against the condition 
for(let i = 0; i <= 5)
{

}
-> We can also understand it like - Humein 5 baar hello likhni h, 
let i = 1 means copy m hm hello 1 se likhna start krnge -
1. hello    //(counter humara 1 se start ho rha h)
Fir condition check (i <= 5) means hm upto 5 times tk hi hello likh skte h -
1. hello
2. hello
3. hello
4. hello
5. hello
// ye sb (i = 1; i <=5) counter/ginti ki baat kr rha h naa ki hello ki. 

Q) What is  increment and decrement?
-> i++ se ek digit counter aage chala jaega
-> i-- se ek digit counter piche chala aaega

for(let i = 1; i<=5; i++)
{
    console.log("hello");
}

-> means counter ko 1 se start kro aur upto 5 tk le k jao. Aur har counter k liye ek baar statement chalao. But first we will check if the condition is true or not -
    i = 1 --> 1 <= 5    --> Condition is true then "increment by 1"     1. hello
    i = 2 --> 2 <= 5    --> Condition is true then "increment by 1"     2. hello
    i = 3 --> 3 <= 5    --> Condition is true then "increment by 1"     3. hello
    i = 4 --> 4 <= 5    --> Condition is true then "increment by 1"     4. hello
    i = 5 --> 5 <= 5    --> Condition is true then "increment by 1"     5. hello
    i = 6 --> 6 <= 5    --> Condition is false then "break" the loop

Example :
for(let i = 1; i<=5; i++)
{
    console.log("Count : " + i + " --> hello");
}

Output :
Count : 1 --> hello
Count : 2 --> hello
Count : 3 --> hello
Count : 4 --> hello
Count : 5 --> hello


Example-2:
// decrementing loop -> print counter in reverse oder
for(let i = 5; i>=1; i--)
{
    console.log("Count : " + i + " --> hello");
}

Output :
Count : 5 --> hello
Count : 4 --> hello
Count : 3 --> hello
Count : 2 --> hello
Count : 1 --> hello


while loop :
-> Very much similar to for loop, only diff lies is how we are going to write it down -
Step-1 : Initialization
Step-2 : With the "while" put conditon inside the while loop - while(conditon)
Step-3 : then on the while loop we are going to increment/decrement
Note : Whatever we can achieve using for loop, same thing we can do using while loop as well.
-> Just two different ways to writing it.

Example :
                
let i = 5;      // Step-1 : Initialization
while(i >= 1)   //Step-2 : Conditional Check
{
    console.log("Count : " + i + " --> hi");
    i--         //Step-3 : increment/decrement
}

Output :
Count : 5 --> hi
Count : 4 --> hi
Count : 3 --> hi
Count : 2 --> hi
Count : 1 --> hi

// If we change the value. Is this going to work?
              
let j = 0;      // Step-1 : Initialization
while(j >= 1)   //Step-2 : Conditional Check
{
    console.log("Count : " + j + " --> hi");
    j--         //Step-3 : increment/decrement
}

// Output: Nothing will Come because our condition is not getting satisfied
-> But if we convert it into do while loop then in such a case we can do -

do-while loop :
-> for and while loop are similar, only difference is in the syntax.
-> do-while is different from for and while loop.
-> In this, even if our condition is true or false, this is going to execute the statement once.

Step-1 : Initialization
Step-2 : do
Step-3 : {  //statement }
Step-4 : while (condition)
Step-5 : { Increment/decrement }
Note : We can see since our condition is getting pasted at the end that is why our do while loop is going to run at least once even if our condition is not at all true.

let j = 0;      // Step-1 : Initialization

do
{
    console.log("Count : " + j + " --> hi");    //print the value
    j--                                         //decrement
}
while(j >= 1)   

-> For this one we will run and see the output is printing once because it enetered in the do{} part and prinnnted the value but later one we are testing the condition. 

Q) Where are we practically going to use it?
-> Some order if we are placing so we have seen sometimes they give us the offer like on for the 1st order your delivery fees is going to be zero and for rest of the orders they have a criteria of charging the delivery fees. So in such as case we can use do-while loop inorder to write down the code for the same.
-> In do part we are going to do - 1st time delivery fees is zero, otherwise we can put it accordingly.