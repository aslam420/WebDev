/* 3 types of functions in JS -

1) Normal Function -
----------------------
function definition ->
----------------------------------------------
|-> function function_name(param1, param2){  |
|    // do something                         |
|   }                                        |                          
|                                            |
----------------------------------------------

Step-1 -> Ek task formulate kr diye aur uske andr kn se steps krne h wo bta diye that is function

function getReady() {
    console.log(brush);
    console.log(bathing);
    console.log(breakfast);
    console.log(coding);
}

Step-2 -> Ab function invoke/call krne ka tarika -

->  function_name(arg1, args2);

 Note : This is Normal function banane ka tarika aur usko call krne ka tarika

Example :-                                                   */
function add(a, b){
    return a * b;
}

let ans = add(2, 6);
console.log(ans);

/*
How this function is working?
-> Jb v mai koi function invoke/call krta hu aur function calling k time koi
    v function pass krte h like (2, 6) to isko hum bolte h function k ARGUMENT.
    And as a whole -> add(2, 6), I am calling/invoking this function.
    Note : Invoke hote h inn brackets se (2, 6). Jb kisi function k aage hum
    ye brackets lga de to it means maine function ko call kiya.
    To yaha 2, 6 pass hua h to a=2 & b=6 catch kiya. And isne a*b return
    kr diya. Fir jb 12 return hua to 'ans' k andar aaya aur maine isko
    print krwa diya.

-> Functions are also treated as first class citizens in JavaScript.
    (It is borrowed from President of USA. Like President of USA, function is 
    first class citizen of JS. It is very important and can do anything (power))

-> Functions can be passed as parameters/argument.     

(2) FUNCTION EXPRESSION - (Second type of Function)
-> means 'Variable k andr poori function daal dena.'

Example-1 of Function Expression                                      */
function calculator(str, e, f) {
    if(str == 'add') {
        return function add() {
            console.log(e + f);
        }
    }
    // else if(str == 'sub') {

    // }
}

let returnedfunc = calculator('add', 2, 3);
console.log("returned function is\n"+returnedfunc);
returnedfunc();
// It means function is a first class citizen.

/*
Explanation -
->  Normal languages m variable k aage values daalte h like int, boolean
    etc lekin JS k andar hm specify ni krte ki iss variable k andr kya
    aa skta hai. JS m int, decimal, float sb k saath saath hm function
    ko v ek value de skte h.
->  Aaj humne dekha k variable k andr hm poora poora function v de skte hai
    Jaise variable 'e' h uske andr humne poora poora function denote kr diya
    Jaise returnedfunc function h ek variable h (line-65) aur maine jb
    function return kiya na i.e. alculator('add', 2, 3);, calculator wale
    function ne i.e. functions can be returned pdhe the wo wala kaam kiya.
    Aur jb iss wale statement (let returnedfunc = calculator('add', 2, 3);) 
    ne function return kiya na to returnedfunc wale varable k andr wo function
    aa gya (line-65). To function variable m aa gya i.e. returnedfunc, to
    hm function ko call/invoke krne k liye na variable k aage brackets lgate h
    i.e. returnedfunc() aur isi chij ko hum FUNCTION EXPRESSION kehte hai.

    Example-2 -                                                 */
    let sayHi = function() {
        console.log("Hello guys! I am function expression")
    }

    sayHi();

// Note : Function Expression m function name dena important ni hota

/*Example-3 ->

    let variable_name = function() {
        //do something
    }
        //name of variable is used to invoke the function
    variable_name();


*/

// Example-4
let sayBye = function abcd() {
    console.log("Hello guys! I am new function expression")
}

sayBye();       // invoking function using variable_name+brackets
console.log("Using this we can print whole function definition -\n"+sayBye);
//(sayBye ne ek variable banaya aur usme function k poori definition daal di then humein uss function ko invoke krne k liye brackets daalne pdte h)
// abcd();     //Error abcd is not defined


// Example-4 -> we will print efgh
function efgh() {
    console.log("Hello guys! I am new function expression")
}
console.log("In this efgh is the variable under which we store the function -\n"+efgh);
//efgh k andr poori fncn pdi h means efgh ek variable bana aur uske andr poori fncn k denfn daal di
//jb fncn k defn daal di to uske baad humein uss fncn ko call krne k liye brackets daalne hote h
efgh(); //brackets daale to fncn execute ho gya aur print ho gya

//Note : All these are different examples of function expression
//Storing function in variable then adding variable+brackets to call function.



// Assignment - Calculator -> Addition, Subtraction, Division, Multiplication
function calculator1(str, g, h) {
    if(str == 'addition') {
        return function addition() {
            console.log(g + h);
        }
    }

    else if(str == 'subtraction') {
        return function subtraction(){
            console.log(g - h);
        }
    }
    else if(str == 'multiplication') {
        return function multiplication(){
            console.log(g * h);
        }

    }
    else if(str == 'division') {
        return function division(){
            console.log(g % h);
        }

    }
}

let returnedFunction = calculator1('addition', 2, 3);
console.log("returned function is\n"+returnedFunction);
returnedFunction();


