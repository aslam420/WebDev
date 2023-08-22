// var x = 10;
// function greet() {
//     console.log("hello pepcoders");
// }

// console.log(x);
// greet();

/*Note : Step-1 Variable aaega then function So, variable x ko line-1 m 
already memory allot ho chuki hai to uske var x = 10; k liye dobara memory
allot ni hoga. So, line-3 skip ho jaega qki ek variable k liye ek memory h
Step-2 function aaega -> greet() function ka ek greet variable memory
banega aur uske andar poori function utha k as it is daal di jaegi -
    function greet() {
    console.log("Hello"); 
    }
Note : Now in Code Execution -> console.log(x); (line-1) par gye, to yha
code console krne bol rha, to hum x pe gye to dikha undefined h ye to 
humne console box k andr undefined print kr diye. 
Then hum greet pe aae to dekhe function call hai aur mujhe pta h ki 
mere greet k andr poori function daali hui h to hm usko call kr dnge, 
aur jb call hoga to LEC banega jiske andr local memory and code banega. 
Ab isme memory execution ka jb phase chlega to ye dhundega lekin 
koi variable h ni to humari iss function k andr kisi ko koi memory 
allocate hui nai, now wo code execution m aa jaega jaha wo
dekhta h console.log("Hello"). To console box k andar hello print kr dega.
Now comes the var x = 10; yaha x = undefined se 10 ho jaega leki humein
dikhega nai qki console ne x ki value pehle hi print kr di uske baad x 
ki value change hui.
To fir humara answer 'undefined' and 'Hello' print ho jaega.
*/
console.log(x); //Memorycreation m box bna k x = 'undefined' daal diya
greet(); // greet variable bna k box k andr puri function as it is daal di
console.log(hello); //undefined
// hello(); //TypeError : Hello is not a function
var x = 10;
//function
function greet() {
    console.log("Hello"); 
}
//function expression
var hello = function() {        
    console.log("You guys rock");
}
hello();    //ab hello varible k andr poori function aa chuki hai to print ho gya

/*
Maine variable k andar poori function daal rakhi hai. To ye variable h 
aur jb memory creation phase hogi na to variable ko undefined milega
qki hai to ye variable \ aur andar function h isko kya maalum. Wo to bss
itna janta h andar variable h usko undefined dena hai. Qki console.log(hello)
command dete tb to wo print krta.
But jb maine variable hello k baad hello() function call kiya to 
print ho gya  qki ye function expression hai naa ki function. */