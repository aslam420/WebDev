// starting JS -> JavaScript
// var let cont


//variable declaration
var a;   //means mera variable ka naam 'a' h

// variable initialization
// 1) number type
a = 10;
console.log(typeof a);
console.log(a);

// 2) String
a = "hello";    //re-initialize of variable 'a'
console.log(a);

// 3) Type of operator -> It tells us the type of data stored in a variable
console.log(typeof a);


// 4) boolean
a = true;
console.log(a);
console.log(typeof a);

// 5) null object
a = null;
console.log(a);
console.log(typeof a);

// ------------------------------------------------------------//

// Type of Number
var num = 10;
console.log(num);
var float = 2.4;
console.log(float)

// Type of Boolean
var t = true;
var f = false;
console.log(t);
console.log(f);

// Type of Strings -> we can use all -> 'a'(single quote) "a"(double quote) `a`(backtick)
var str = 'a';
console.log(typeof str);
str = "How you doin ? I am fine, what about you?"
console.log(str);

// String m line alag krne ka tarika -
// 1st way ->
var str = "How you doin ?"
var str2 = "I am fine, what about you?"
console.log(str);
console.log(str2);

// 2nd way -> (Smart way) -> we use \n (backslash n)
str = "How you doin ? \nI am fine, what about you?"
console.log(str);

// magic to backtick (`b`) -> isme backslash use krne ki jrurt ni hoti
var b = `hi hope you guys are able to grasp the concepts`
console.log(b);
var b = `hi hope you guys are 
able to grasp the concepts`
console.log(b);

// Agar hum chahte hi ki console.log m diye gye variable change ho jae jb v hm num ki value change kre
var num = 4500;
console.log("half of 100 is 50");
//Pehle bracket k andr k chije compute hoti h, fir jaa k puri string print hoti h
// Aurr isse chije dynamic hui means jaise jaise input dete jaa rhe waise output change hote jaa rha
console.log(`half of ${num} is ${num/2}`);





//--------------------------------------------------------------------//


//var has some problem -
// 1) Redeclaration is allowed ->
var r = "hello";
console.log(r);

var r = 100;
console.log(r);

//We can do re-initialize -> var hata k sirf variable name likhnge to pta chlega ki variable kahi aur declared h aur hm re-initialize kr rhe h
r = 500;
console.log(r);
// Temp soln 

// (Solution) -> 'let' keyword is introduced -> redeclaration problem overcome krne k liye
let l = 100;
console.log(l);

// let l = "200";  // SyntaxError: Identifier 'l' has already been declared
// console.log(l);
// Note : 3 types of erros in JS and one of them is Syntactical Error.

l = 300;
console.log(l); //This will work bcoz we can reinitialize but we cannot redeclare

//-----------------------------------------------------------------//



//Loops in JS ->
var num = 10;

for(var i=1; i < num; i++){
    if(i % 2 == 0)
        console.log(`${i} num is even`);
}



// const keyword
const z = 2;
console.log(z)
;// naa hi redeclare kr skte h aur naa hi reinitialize
// const z = 5; //SyntaxError: Identifier 'z' has already been declared
z = 4; //TypeError: Assignment to constant variable.
//Note : Three types of errors in JS -> 2nd type of error -> TypeError
console.log("hey");