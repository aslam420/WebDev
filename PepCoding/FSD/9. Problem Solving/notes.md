Question-1 :
Create a program which gives output for children to go out in park if the tempreature is between 20 degrees Celsius to 25 degree Celsius and if it's not raining outside, ask them to be in play school if the temperature is between 18 degrees Celsius to 20 degrees Celsius and raining otherwise, they should not step out of the home.
Solution :
-> So, they are giving two conditions -
1) based upon temperature
2) based on raining

-> If temperature is between 20-25 degree Clesius and if it is not raining - children can go outside and play in the park.
-> If temperature is between 18 to 20 degress Celsius and if it is raining - children should stay in the playschool.
-> Otherwise they should not setp ou of the home.

Note : Here we will use "if, else-if, else"

Code :
const temp = 10;
const isRaining = true;

if((temp >= 20 && temp <= 25) && isRaining == false){
    console.log("Children can go outside and play in the park");
}
else if((temp >= 18 && temp <= 20) && isRaining == true){
    console.log("Children should stay in the play school");
}
else{
    console.log("Do not step out of the house");
}

Note : && (AND) Operator
-> Let's say we have 2 conditions -
    condition-1 && condition-2

Table : AND Operator
--------------------------------------------------------------------
|condition-1         condition-2         Condition-1 & Condition-2 |
--------------------------------------------------------------------
|True                True                True                      |
|True                False               False                     |
|False               True                False                     |
|False               False               False                     |
--------------------------------------------------------------------
-> If both are true then only overall it should be true.
-> If one condition is true and other is false, then it has to be false.
-> If both are flase then overall it should be false.

Note : || (OR) Operator --> condition-1 || condition-2
--------------------------------------------------------------------
|condition-1         condition-2         Condition-1 & Condition-2 |
--------------------------------------------------------------------
|True                True                True                      |
|True                False               True                      |
|False               True                True                      |
|False               False               False                     |
--------------------------------------------------------------------
OR is actually opposite to AND Operator -
-> -> If both are true then only overall it should be true.
-> If one condition is true and other is false, then it has to be true.
-> If both are flase then overall it should be false.

Example :
const num1 = -10, num2 = 20;

if(num1 > 0 && num2 > 0){
    console.log("num1 and num2 both are positive numbers");
}
else if(num1 < 0 && num2 < 0){
    console.log("num1 and num2 both are negative numbers");
}
else if(num1 == 0 && num2 == 0){
    console.log("both numbers are zero");
}
else if(num1 == 0 || num2 == 0){
    console.log("either num1 is 0 or num2 is zero");
}
else if(num1 > 0 || num2 > 0){
    console.log("either num1 is positive number or num2 is positive number");
}
else if(num1 < 0 || num2 < 0){
    console.log("either num1 is negative number or num2 is negative number");
}

Question-2 : Create a program to print the result as pass if the marks obtained is greater than or equal to 40 using ternary operator.
Solution :
-> If marks obtained is greater than or equal to 40 - print "pass"
-> Otherwise - print "fail"

Note : 
-> If you have a condition only condition to check then you can use if-else or ternary.
-> If you have more than one condition to check then either if-else if or switch statement.

Question-3 : Create a program to find if the number is positive, negative or zero.
Solution : Check for condition with 0 with a switch case.
Q) How we can do condition check in our switch?
-> switch(true) { --> As long as switch is true, execute it.

    }
-> Now for every case we are going to check -
(a) case(num > 0) :
(b) case(num < 0) :
(c) case(num == 0) :
(d) default :
-> We are setting "true" here because since we have to do a "comparison" and this comparison is actually different in all the cases.

Code :
const num = -4;

switch(true){
    case(num > 0) :
        console.log("Positive");
        break;
    case(num == 0) :
        console.log("Zero");
        break;
    case(num < 0) :
        console.log("Negative");
        break;
    default :
        console.log("invalid input");
        break;
}

Output : Negative

Note : We will cover this topic in recursion -
Question-4 : Write a program to find the HCF or GCD of two integers.
Solution : HCF and GCD of two numbers -
-> Let's say we have two numbers -
(a) num1 = 36
(b) num2 = 60

36) 60 (1
   -36
   ----
    24) 36 (1
       -24
       ----
        12) 24 (2
           -24
           ----
             0      || Remainder = 0, GCD = 12
-> It says once you get your remainder as zero (0), in such a case this is going to be our "HCF" -> Highest Common Factor or "GCF" -> Greatest Common Divisor.

-> num1 = 36, num2 = 60
->We have to keep one moving from i = 1 to 36 & 60.
Q) Why are we taking "&"?
-> Because we don't know which number is going to be greater or either we can pick it with a condition.

-> We will have a for loop which ranges from i = 1 to (i <= num1 && i <= num2) 

Q) Why are we take it up in this form?
-> Because we have find out the GCD (greatest value). 
-> If it was about the small value we can just do it with one value because if we are going to do it in that case, even if our "1" is going to divide the number but we don't have to find out that, we have to find out the highest value. 
-> And for every iteration we are going to check if our ((num1  %  i == 0) && (num2 % i == 0)) -> In such case our HCF is going to be the number "i".

num1 = 36, num2 = 60
i = 1 
    36/1 = 

Way-2 :
In this case we are just dividing and checking against its remainder. So, we are going to create a function for GCD and then at every step we are going to check 



Question- 5 : Create a program to reverse a string
Solution : Traverse the input string from last index and add each character  to a new string. Print the new reversed string.

Note : We will cover in Arrays
Q) What actually happens if we have to reverse a string?
-> 


Question-6 : Create a Program to find the largest amongst the 3 numbers?
-> We have to take 3 numbers -
(a) num1 = 10;
(b) num2 = 20;
(c) num3 = 30;
-> num3 > num1 && num3 > num2 --> num3 is greatest

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

Output : 50 is greatest number

Note : In case of 'if-else', if one condition is true then it will not check against remaining conditions, hence saving CPU time.
-> In case of multiple if, even if one condition is true then also it will check for remaining conditions, hence wasting CPU time.

[HW] Question-6 : Check if a number is even number and it is divisible by 3 (nested if-else)

Question-7 : Create a program to get sum of all digits of a number?
-> Let's say we have a number -
num = 123
-> If we have to findout sum of all digits of a number -
    Sum = 1 + 2 + 3 = 6

-> If we are going to divide this number by "10" -
    10) 123 (12             (sum = 0)
        10
        ---
        23
        20
        --
        3   --> Remainder = 3, Sum = Sum + Remainder = 3
-> So, we can see out of these 3 values we got value 3.
-> Now whatever value we got here in the quotient, we have to divide that quotient by 10 -
    10) 12 ( 1
        10
        --
        2   --> Remainder = 2, Sum = Sum + Remainder = 3 + 2 -> 5
-> Now again we have to divide -
    10) 1 (0
        0
       ---
        1   --> Remainder = 1,  Sum = Sum + Reaminder = Sum + Remainder -> 6
-> So, if we are going to add all these remainders, we will get the desired output.

Step-1 : Find the remainder when we will divide num by 10
            Rem = num % 10 
Step-2 : Take quotient
        Quotient = num / 10
            parseInt
            5/2 = 2.5
                = parseInt(2.5)
                = 2
So, if a num = 1234, so what all are the digits here -> 1, 2, 3, 4.
-> In order to do sum of digits we should have access to all the digits
-> Then the next step is add all digits - 1+2+3+4 = 10

Initialize :
-> Sum = 0 (Anything added 0 will return same value)
1) Divide num by 10 and calculate remainder
   10) 1234 (123
       10
       ----
       23
       20
       --   
        34
        30
        --
         4      -->Reminder = 4
    -> Sum = Sum + Remainder -> 0 + 4

Note : Whenever your result involves Addition or Subtraction, always initialize it to 0. Because anything added or subtracted to 0 is going to return the same value.
-> If result involves multiplication or divison then initialize it to 1 because any number multiplied or divide by 1 will return you the same value.

2. 10) 123 (12
       120
       ---
         3 --> Remainder = 3, Sum = Sum + Remainder -> 4 + 3 = 7

3. 10) 12 (1
       10
       --
       2  --> Remainder = 2, Sum = Sum + Remainder -> 7 + 2 = 9

4. 10) 1 (0
       0
      ----
       1  --> Remainder = 1, Sum = Sum + Remainder -> 9 + 1 = 10

=> n = 1234
   n = n/10 = 123.4
   parseInt(n/10) = 123 <-- Quotient

Way-1 :
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

Way-2 :

let rem, sum = 0; 

// for loop
for(let num = 1234; num > 0; num = parseInt(num/10)) 
{
    rem = num % 10;
    sum = sum + rem;
}

console.log(sum);   //10

Question-8 : Find if a given number is Armstrong number or not.
Hint : Armstrong number is a number that is equal to the sum of cubes of its digits
Solution Approach : Find all the digits of the number (in our example find the ones, tens and hundreds place digit) and then find their cubes and add them to validate against the original number.

Q) What is an "armstrong number"?
-> 153 -> From this number we have to find out all the digits
-> Digits = 1,5,3
-> If we take all the digits, we do the cube of that 1(cube3) + 5(cube3) + 3(cube3) = 1 + 125 + 27 = 153 <--- "equal to given number" --> Armstrong Number

-> We are using "temp" because at last we have to do the comparison -

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

Output : armstrong number

[HW] : Find out if a number is palindrome or not?
-> num = 121 
-> Reverse = 121    --> Palindrome

Q) What this question is involving?
1) Reverse of a number
2) Palindrome