var ans = "5" + 1;  //"5"+"1"-> 51 //Number to String
var ans = 1 + "5";  //"1"+"5"-> 15 //Number to String

console.log(ans);

/*
Null -> This value is just like undefined.
Jo JS bana rhe the unhe pta ni tha aur unhone 2 value likh di
(a) Undefined
(b) Null
Note : Dono ka matlab ekhi hai.
An by default jb koi variable hum banate hai, usko memory jb allocate hoti hai
to uski value by default undefined kahi jaati hai, null ni hoti. Lekin
null or undefined ek hi hoti hai or we can say almost same.

+ is a sign or addition and concatenation
- means only subtraction*/ 

//null is converted to zero. Hence, output is zero
console.log(null * 5);  //o/p-> 0 
//5 converted to number then multiply with null. Hence, converted to zero
console.log(null * "5"); //o/p-> 0
console.log(undefined * 5); //o/p-> NaN(Not a Number)

console.log("5" - 1); //"5"-1-> 4 //String to Number

//"ten" string cannot be mapped to a number like "5" can be mapped to Number 5
//Hence the output is NaN
console.log("ten" * 3); //NaN (String cannot be multiply)
console.log("10" * 3); //30

