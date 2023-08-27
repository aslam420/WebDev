Type Coercion :
-> The process of converting a value from one datatype to another

DataTypes :
1) Numbers
2) Strings
3) Boolean

1) Number to String :
num1 = 5;
num2 = "2";

sum = num1 + num2;

Note : "+" sign does 2 things -
(a) Number - Add the values 
Example -   num1 = 2,  num2 = 3
            num1 + num2 = 5

(b) String 
Example : num1 = "a", num2 = "b"
          num1 + num2 = "ab"    --> merging/joining/concatinating two strings

Question :
let num1 = 5;
let num2 = "2";
const result = num1 + num2;
console.log(result);

Solution : 52   --> Because it has taken num1 as "number" but as soon as seen "+"  and then num2 came as "string". So, it will understand we have to treat both of the values as string and as a result we have tell the joining of the strings.

Question :
let num1 = 5;
let num2 = "2";

const result2 = num1 + parseInt(num2);
console.log(result2);   // 7

Q) What if we want "7" as the output?
-> Previously we have used "type coercion" but in now we have to use "type casting" which means changing the type of variable to number.
-> "pareseInt()" is going to convert string to integer value. 

Number :
(a) Integer Values
(b) Floating Values


2) String to Number :
"+" --> join/merge/concatinate
" -, *, / " --> string will not do anything

-> We have num1 as "9" and num2 as 3 -
num1 = "9"  //string
num2 = 3    //number
--> if we are going to use " -, *, / " these operator on strings, it is not going to do anything. So, even if we are going to pass one value as "string" and another as "number", it is going to consider both of the values as "number" then it is going to give the output accordingly.

Question -
const num1 = "9", num2 = 3;

// num1 will get changed to number
console.log(num1 - num2);   // 6
console.log(num1 * num2);   // 27
console.log(num1 / num2);   // 3
console.log(num2 * num1);   // 27

--> Now it is no longer a string.

1) Boolean --> True /False
-> Number  --> (1)   (0)

Question :
const num = 5;

console.log(num + true);// true     1   // 6
console.log(num + false); // false  0   // 5
console.log(true + num);    // 6
console.log(false + num);   // 5

console.log(num - true);    // 4
console.log(num - false);   // 5
console.log(true - num);    // -4
console.log(false - num);   // -5


NOte : Convert the number to string :
const num = 5;
console.log(num);
console.log(num.toString());


