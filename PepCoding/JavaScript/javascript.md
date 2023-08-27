Day-10 : Agenda :
1) get ignore, supporting cmd
2) Js
3) Homework

Javascript :
------------
-> 1995
-> WebPages k andr programme daalne k liye banayi gyi thi (like conditions,loops. 
Agr user ne ye dabaya to ye aaega wo dabaya to wo aaega)
-> Developed by NETSCAPE -> Navigator(Broswer tha iska). 
To jo websites m JS use hota tha wo Navigator broswer m bahut bdhiya chlti thi
Qki ab inke paas conditins thi agr user ne ye kiya to ye hoga which gives
a complete new user experience.
-> Other browsers uss time pe like Mozilla, Explorer etc ne apne aap ko
compatible kr liya JS k liye but sb ne khud m thode thode changes lae.
But sbko ek standard procedure follow krna tha jisko dkh k bola jae ki ye
feature aise kaam krna chaiye to uss time aae ECMAScipt. So, ECMAScript uss 
standardized procedure ka naam ho gya tha. (JS ya ECMAScipt same hi baat h)

What is JS?
-> JS is a synchronous (line by line) & single threaded (in a specific order) language.

Note : Compilation means code ko pdh k uska output nikaalna

JavaScript -> Programming Language
NodeJs/ReactJs -> Technologies jisme JS prog. lng. use kr k app. bnate h

Note : Vanilla JavaScript means 'Basic JavaScript'

JS m 3 tarike se variable declare kr skte h -
1) var
2) let
3) const
Note : JS m variable ka datatype ni btana pdta h
But by using typeof we can see the datatype name

Datatypes -
(a) Number
(b) String
(c) Boolean
(d) null object



Assignment : Learn Grid
For Practice : Link : cssgridgarden.com
Assignment : Youtube, LinkedIn 
Website for icons : favicon.io

Day-11 : Later

Function :
3 types of functions in JS -

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

(3) IIFE - Immediately Invoked Function Expression (3rd Function) -
-> Wo function jisse jaise hi humne define kiye wo tabhi k tabhi call ho jae
aur humein unko alag se call na krna pde*/

function add(a, b) {
    return a + b;
}
add(2, 3);

// Instead of this we can write it as (immediate invoke) -
let additionIIFE = (function add(a, b) {
    return a + b;
})(20, 30);
console.log(""+additionIIFE);
/* Inko maine brackets m enclosed kr diya fir main ek variable banaya 
i.e additionIIFE 
-> (function add(a, b) {
    return a + b;
    })(20, 30);
-> Iss bracket k andr puri function ko wrap kr dene se ekhi baar m poori
function ekhi baar m call ho jaati h declare hote hi
-> Less code

Arrays :
// 2nd problem with var keyword -
var num = 10;

for(var j=0; j < num; j++){
    if(j % 2 == 0){
        console.log(j);
    }
}
console.log("value of j is "+j);
/*
Maine jo i banaya wo iss for loop k andr banaya fir v mujhe iss for loop
k bahar accessible h. Why?
-> Qki jo var keyword h na wo function scoped hota hai. Function Scoped
    means wo apne curly braces { ---- } k bahar accessible h.

Example ->
            {
                this space between opening and closing of curly braces is a block
            }

*/

for(let i=0; i < num; i++){ //Iss block k bich m i milega, iske bahar non-accessible h
    if(i % 2 == 0){
        console.log(i);
    }
}
// console.log("value of i is "+i); //ReferenceError: i is not defined


/*
for loop k andr m block h uske bich m sirf i accessible h, uske bahar accessible nai h
Agar hm 'i' ko access krna chahte h to 'i' ko bahar laana pdega
*/

let i;  //'i' ko access krne k liye bahar declare krna pdega
for(i=0; i < num; i++){ //Iss block k bich m 'i' milega, iske bahar non-accessible h
    if(i % 2 == 0){
        console.log(i);
    }
}
console.log("value of i is "+i); 

// Example of Global Scoped -> we can access outside for loop also
for(var k=0; k < num; k++){ //Iss block k bich m 'i' milega, iske bahar non-accessible h
    if(k % 2 == 0){
        console.log(num); //var num ko if loop k andr v print kra skte h bcoz it is global variable
        console.log(k);
        var hello = 1000;
        console.log(k);
    }
}
console.log("value of k is "+k); 
console.log(hello);


/* 
(a) var keyword is a function scoped
-> Agar maine koi function likha aur uske andr {curly braces ko 
    block kehte h} mere blocks h. To agar mai var keyword iss function 
    k andr bana rha hu to wo uss function k andr har jagha available hoga
-> Jb hum function nahi likh rhe hote h to var keyword global scoped hote hai
    aur jb function likh rhe hote hai to function scoped
-> var num ko if loop k andr v print kra skte h bcoz it is global variable
    So agar hum var keyword ko loop k andr initialize krte h to usko loop k
    bahar se v print kra skte h.

Note : index.js file k andr jo v code likhe h usko hm bolnge global scoped
    like mai koi v variable kahi v likhu to usko kahi se v access kr skta hu
    because jb hum var keyword ko initialize krta hu kisi value se to wo 
    globally banta hai, ye ni ki if k andr bn rha h.  Isliye ye if k
    bahar m print ho paa rha h

 (b) let keyword is blocked scoped -
-> Agar mai let keyword banata hu ek function k andr {let a = 10;}. To jo
    let kryword hoga na wo sirf iss block m available hoga
-> But agar 'i' ko access krne k liye bahar declare krna pdega.
-> Cruly braces {-------} jo v chijo ko wrap kr leta h wo area block scoped 
    kehlata hai.
    Example -
            if(k % 2 == 0){
                var hello = 1000;
                console.log(k);
            }
    Aur ye for loop k andr jo braces h usme sama rha h isliye isko block bolte h.
-> let keyword is block scoped to hm bolte h let jis block k andr defined hua h
    wo sirf usi braces k andr accessible hoga.
    */

let m = 20;
for(var k=0; k < num; k++){
    let m = 200;
    if(k % 2 == 0){
        var hello = 1000;
        // let bye = 2000;     //ReferenceError: bye is not defined
        console.log(k);
    }
    console.log("inner "+m);
    console.log("inner "+hello);
    // console.log(bye);   //ReferenceError: bye is not defined
}
console.log("value of k is "+k); 
console.log(hello);    
console.log("Outer "+m);

/* Two different 'let' keywords with one name -

Humne pdha tha 'let' keyword reinitialize nhi hota fir v let m = 20;
fir for loop k andr let m = 200; kaise ho gya?
-> Yaha 'm' redeclare nhi hua h. Jo for ka block hai iske andr declare hua h
let m = 200; aur isko andr use hua aur isi k andr khtm v ho jaega. Ye bahar
nhi aata. 
Agar mai bahar console.log(m) krwa rha hua to 200 thode print ho rha h.
Output : 20 aa rha.
Aur agar m andr k console.log(m); likhta hu to 
Output : 200
It means let m = 20; and let m = 200; dono different different container h.
*/


// Array-> is a collection of elements
// In JS, we can store anything in an array

let cars = ["BMW", "AUDI", "MG", 1, 2, 3, true];
console.log(cars);
/*
In JS, we can store different values of different types in an Array
*/

//Accessing the elements of an array
console.log(cars[0]);
console.log(cars[3]);


//replacing elements in arrays
cars[3] = "Mahindra";
console.log(cars[3]);

//adding elements in an array
cars[7] = "Tata";
console.log(cars);


//Methods/Properties of an Array -

// (1) pop method -> This method removes the element from the last of an array

cars.pop();
console.log("after poping the element-\n"+cars);

// (2) push method -> It pushes a new element at the end of an array

cars.push("Honda");
console.log("after pushing an element -\n"+cars);

// (3) unshift method -> This adds element at the starting of an array

cars.unshift("JLR");
cars.unshift("Mustang");
console.log(cars);

// (4) shift method -> It removes element from 0th index of an array

cars.shift();
cars.shift();
console.log(cars);
//Note : Phle Mustang udega fir JLR udega then print hoga

// (5) find length of an array
console.log(cars.length);


// 2-D Array -
let array2d = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(array2d);
console.table(array2d); //it will print array in table format
console.log(array2d[1][2]);



Day-12 :
Today's Session -
(1) Some properties/method of an array
(2) Strings
(3) Objects
Ye teeno khtm krne k baad around 120 questions milnge.


Array is a group of container jiske andr hum continuous samaan daal skte hai
and wo as a whole ek array kehlati hai.
-> JS k andr koi v jo bucket h usme datatypes fix ni h like ek bucket m sirf
    int hi daal skte ho. isme kuch v daal skte h, eksaath integer, boolean, string etc
    daal skte hai. Hum koi v bucket m koi v tarah ka samaan daal skte hai.


// Array-> is a collection of elements
// In JS, we can store anything in an array

let cars = ["BMW", "AUDI", "MG", 1, 2, 3, true];
console.log(cars);
/*
In JS, we can store different values of different types in an Array
*/

//Accessing the elements of an array
console.log(cars[0]);
console.log(cars[3]);


//replacing elements in arrays
cars[3] = "Mahindra";
console.log(cars[3]);

//adding elements in an array
cars[7] = "Tata";
console.log(cars);


//Methods/Properties of an Array -

// (1) pop method -> This method removes the element from the last of an array

cars.pop();
console.log("after poping the element-\n"+cars);

// (2) push method -> It pushes a new element at the end of an array

cars.push("Honda");
console.log("after pushing an element -\n"+cars);

// (3) unshift method -> This adds element at the starting of an array

cars.unshift("JLR");
cars.unshift("Mustang");
console.log(cars);

// (4) shift method -> It removes element from 0th index of an array

cars.shift();
cars.shift();
console.log(cars);
console.table(cars);
//Note : Phle Mustang udega fir JLR udega then print hoga

// (5) find length of an array
console.log(cars.length);


// 2-D Array -
let array2d = [
    ['BMW', 2, null, 45],
    [4, true, 6],
    [7, '8', 9]

];  //array of arrays

["a", "b", "c"]     //array of string
[1, 2, 3]           //array of numbers

console.log("Printing 2d array");
console.log(array2d);   //it prints 2d array

console.log("Printing 2d arrayin table format"); 
console.table(array2d);//it will print array in table format

console.log("Printing elements of 2d array");
console.log(array2d[1][2]); //means 1st index pe jaa k 2nd cmma k baad wali value select krni hai

let res = array2d[2];
console.log("printing of res array");
console.log(res);

console.log("res of 2nd index");
console.log(res[2]);
console.log(array2d[1][2]);
console.log(array2d[1][3]);   //undefined -> means waha pe koi value ni hai
console.log(array2d);
console.log(array2d[0]);
console.log(array2d.length); //number of rows in a 2d array
console.log(array2d[0].length);    //numbers of columns in a 2d array


//Note : JS m koi v chij jiski koi value ni hai wo undefined print hoti hai

//Memory Allocation in 2dArray - (done)


//2d mai value kaise daale?
array2d[1][1] = false;  //true -> false
console.table(array2d);

//How to change directory?
//cd -> change directory(folder)
//ls -> listing of project files
// .. -> double dot means go back
// command -> cd folder_name 1:19:15



Strings :
/*
string is a sequence of characters
-> String m bahut characters hote hai like - 'h' is one character, blank space
    is also one character.

-> slice method - Isme ek start index dete h aur ek end index aur uske bich
                    ki jo string hote h isse wo kaat deti hai.
*/ 

var str = "Hello future coder";
// H  e  l  l  o  <space>  f  u  t  u  r  e  <space>  c  o  d  e  r 
// 0, 1, 2, 3, 4,    5,    6, 7, 8, 9, 10,11,   12,   13,14,15,16,17
console.log(str);
console.log(str[4]);
console.log(str.length);

//String methods -

// (1) Extraction method
// (a) slice method -
//  -> slice(start, end+1); -> start index is inclusive(shuru hoti h) and end index is exclusive(Isko exclude kr deti h)
//jo string kt rhi wo slicedStr k andr store ho rhi aur original string (str) change ni hoti(usko harm ni pahuchata)
//so it means agr mujhe kisi string ki koi part chaiye to without hamper kiye mai uska part kaat k le aaunga

let slicedStr = str.slice(6, 12); //6th index se shuru hoga aur 12th index se ek phle string tk kategi
console.log(slicedStr); //without hampering original string we can use their part of string
console.log(str);   //original source of information will not changed


let slicedStr1 = str.slice(6); //6th index se shuru hoga jo last index tk jaega
console.log(slicedStr1);

let slicedStr2 = str.slice(6, -2); //6th index se shuru krni h lekin last k 2 index chorni h
console.log("minus "+slicedStr2);

// (b) substring method - 
// substr(start, length); start index se shuru hoga fir btaenge aage k kitne characters capture krna h (6 characters)
let slicedStr3 = str.substr(2, 6);
console.log(slicedStr3);
console.log(str);
//Note : Ye method aisa isliye aa rha bcoz this method is no longer in use

//changing to lowercase
let slicedStr4 = "YOLO";
console.log(slicedStr4);
console.log(slicedStr4.toLowerCase()); //yolo

//changing to uppercase
let slicedStr5 = "fomo";
console.log(slicedStr5) //information is intact and has not been tampered with
console.log(slicedStr5.toUpperCase()); //FOMO

//(c) concatenation method -> concatenation means kisi do chijo ko jodna
let firstStr = "Believe in ";
let secondStr = "yourself";

let concatenationedStr = firstStr+secondStr;
console.log(concatenationedStr);

let concatStr = firstStr.concat(secondStr, " and me");
console.log(concatStr);


//(d) trim method -> removes all the whitespaces of starting and ending of a string

let trimStr = "        Hello    World       ";
console.log("Before triming, count of characters are -")
console.log(trimStr.length);
console.log(trimStr); //space aa gya isme

console.log("After triming, count of characters are -")
console.log(trimStr.trim().length);
console.log(trimStr.trim()); //string k andr k shuru and last k jitne spaces h sb nikal dnge


//Note : String is Immutable -> 
var immutableStr = "Hi String";
console.log(immutableStr);    //Hi String
console.log(immutableStr.length); //9

immutableStr[9] = "s"; //strings are immutable
console.log(immutableStr);    //Hi String
console.log(immutableStr.length); //9

Assignment : Complete 113 question from freeCodeCamp
Link : freecodecamp.org/learn/javascript-algorithms-and-data-structures/
Note : From start upto COUNTING CARDS question, and iske notes bana lene hai.

Day-13 :

Concept of Bottleneck -
 __________________________
 |                         \
 |                          \_______
 |                          (Bottleneck)
 |                           _______
 |                          /
 |_________________________/

 5 MAANG companies hai jisme ek lakh se v jyda log kaam krte hnge aur shuru
 mai sb bootle k ekdm niche hote hai but with experience wo upar jaate hai.
 But bahut saare log hai aur sb iss bottleneck se sb nahi nikal paate. Aur agar
 humein iss bottle neck ko cross krni hai to sincere rehna pdega.

-----------------------------
Objects - (objects smjhne k liye humein 2 chije pdhna pdega isme)
(a) Properties - 
-> Agar hum koi string bnate h -
    var str = "Hello";
    str.length  //5
    Agar mai str.length krta hu to output 5 aaega qki string ki length 5 hai. 
-> String ki property hoti hai .length naam ki jo humain btata hi ki string ki length 5 hai.

    str.length         -> //5       (property)
    str.toUpperCase(); -> //HELLO   (method)

JS Values -
(a) Number
(b) String
(c) Boolean
(d) null
(e) undefined
(f) NAN
Note : Lagbhag har JS values ki property hoti hai, sirf null or undefined ko chor k.

Properties can be accessed in two ways -
1) dot notation
2) square bracket notation


(1) DOT NOTATION -> Maine str likha fir property access krne k liye humne dot laga k property name likha (.length).

(2) SQUARE BRACKET NOTATION -> str["length"] likhu to isse v answer aaega.

Note : Humari ye dono chij objects m use hoti hai.

What is object?
-> Object wo chij h jaha par hum apna data rakhte hai.
    Or,
-> Objects consists of properties and methods which are represented in key: values pairs. It is collection of data.
-> In JS, everything is Objects.


Objects ->
variable <------------------> property (means variable inside object)
function <------------------> method (means function inside object)

Jb mai variable ko aur function ko object k andr daalta hu na to variable ka naam property h jaata h aur function ka naam method ho jaata hai.

dot notation
bracket notation

let car = {
    key     value
    name  : Ferrari",  //properties
    model : 2022,      //properties
    hp    : 4000       //properties
};

(1) Dot Notation ->
Ab mujhe car k baare m janna h to (object name)cars fir ek dot lagate h (.) aur fir uss (object ki property)model ka name.
Syntax : obj_name.obj_ki_property_name
Ex : car.model  //car ka kn sa model h
Aur mai ye tbhi pta lga paa rha hu jb mujhe object ki property name pta hai.

(2) Bracket Notation ->
Hum aise v likh skte h -
car["model"] -> ye v humein 2022 print kr k dega
Humne model ko strings m daal diya q ki mujhe maalum h ki mere object ki property h uska naam kya h.

Iski jarurat kya hai? Aur isse kaise use kre? Kb use kre?
Humne ek array banaya -
let arr = ["Hello", "how", "are"]

Ab hum array ko kaise access krte hai?
arr[0];
arr[1];
arr[2]; //ye sb bracket notation hi to hai
Aur humein ye dkh k pta chl rha ki bracket notation kb use krte hai?
Jb bracket k andr dalne wali chij ek variable ho

or we can write it as -
let arr = {
    0: "Hello",
    1: "how",
    2: "are"
}

Hum arr.0 q ni likh skte?
-> Qki humne key value pair m jo key banayi hai wo ek numbers likhe hue  hai to isliye usme humein bracket notation use krni hoti hai.

Hum bracket notation kb use krte hai?
-> Hum bracket notation tb use krnge jb ek variable k andr humari property name padi ho. (means humein property ka naam direct ni pta chl rha ho).

for(let hathi in car) {
    console.log(hathi); //agar mujhe sirf object ki proprty name dega
    console.log(car[hathi]); // obj property ki value dega
}

Note : console.log(car[hathi]);
-> isme car khud dot mai convert ho jaata h like car.name -> Ferrari
-> Fir se for loop m agli baar hathi k jagha model aaega -> 2022


this keyword :
let car = {
    name: "Ferrari",
    startengine: function() {
        console.log("starting the car $(`this.name`);
    }
}

Yha pe this keyword means hum jis object k andar hai. 
Avi hum car keyword k andar h na to this means -> car hai, aur hum this keyword tabhi use kr skte hai jb hm uss object k andar ho. 
To this.name -> car.name -> "Ferrari" aa jaegi


//JS Objects are always in key value pair

let obj = {};   //empty object
console.log(obj);

let person = {
//  key :   value
    name : "Abhishek",  //Key=name, Value="Abhishek", comma for next key value pair
    age : 26,
    phone : 9999999999,
    gender : "male",
    height : "170cm"
};

console.log(person);
console.log(person.name);
console.log(`Hey ${person.name}, thanku you for standing up`);
console.log(person.gender);


let str = "Hello";
console.log(str.length);    //dot notation
console.log(str["length"]); //square bracket notation

// nesting of objects
let captainAmerica = {
    firstName : "Steve",
    lastname : "Rogers",
    friends : ["Buckey", "Tony Stark", "Bruce Banner"],
    age : 102,
    isAvenger : true,
    address: {
        state: "Manhattan",
        city: "New York",
        country: "USA"
    },
    sayHi: function () {
        console.log(`Hello my name is ${this.firstName}`);
    }
};
console.log(captainAmerica);
console.log(captainAmerica.friends);
console.log(captainAmerica.friends[0]);
console.log("print using bracket notation - "+captainAmerica["friends"][0]);
captainAmerica.sayHi();    //method accessing
// nested objects
console.log(captainAmerica.address.city);
// verify boolean, functions etc...
console.log(typeof captainAmerica.isAvenger);
console.log(typeof captainAmerica.sayHi);
// deleting the key of an object
delete captainAmerica.lastname;
console.log(captainAmerica.lastname);


// methods -> objects k andr functions
console.log(str.toLocaleUpperCase());


// -> In JS, everything is Objects.
// arr v ek object hai
let arr = ["a", "b", 1, true];

let arrr = {
    0: "a",
    1: "b",
    2: 1,
    3: true
}
// actually m js aise bnta h internally


// arr & arr1 bhi ek object hai
// JS m array jaisa kuch ni hota, wo andr ek object bna hua hota hai
// Jb aise likhte hai let arr = ["a", "b", 1, true]; to wo actually mai aisa bnta h -
// let arr1 = {
//     0: "a",
//     1: "b",
//     2: 1,
//     3: true


// for loop kaise lagate hai - (keys dekhne ka tarika)
// in keyword in JS is used to get keys from that object
for(let haathi in captainAmerica) {
    console.log(haathi);//(isme sirf property name print hogi)
    // humien directly pta h ki uske andr key(friends) pdi hui h isliye hm direclty dot notation use krte hai
    // console.log(captainAmerica.friends); 

    //means captainAmerica k andr jao aur ek haathi naam ki key/keyword dhund k lao
    // Lekin andr hathi naam ki key h hi nhi to print hoga hi nhi
    // console.log(captainAmerica.haathi); 

    //agar hum [] bracket notation use krte hai to iska mtlb hathi variable k andr jo value pdi h wo laa k yha daal do
    //humein maalum hi ki captain america k frnds h unke value print kr k laani h
    console.log(captainAmerica[haathi]); //(isme property value print hogi )
    // ye captainAmerica m jaega aur ek baar key ko uthaega aur haathi m daal k print kr dega
    // fir wo value ko uthaega aur hathi m daal dega aur print kr dega
    // dhire dhire sb ko waise hi uthaega captainAmerica se loop khtm hone tk
}


// ------------------------------------------------------------------

// this keyword
let car1 = {
    name: "Ferrari",
    model: 2022,
    startEngine: function() {
        console.log(`Starting the engine of the ${this.name}`);//car.name
    }
};

car1.startEngine();

Day-14, 15 & 16 :
Today's Session -

Agenda -
1) JS -> Execution
2) JS -> let, var, const
3) Node

How does code executes in JS?
1) var num = 5;
2) function cube (num) {
3) var res = num*num*num;
4) return res;
5) }
6) var cube1 = cube(num);
7) var cube2 = cibe(10);

JS m ek chij hoti hai -> Execution Context.
Execution Context k andr two phases hote hai -
(a) Memory Creation phase              (b) Code execution phase
-> num = undefined


Phase-1 -> Memory Creation
JS mainly 2 parts m chalti hai. First part m hota ye h ki, humein memory jo chaiye hoti hai variables ko, ye wo leta hai. So isko basically 'MEMORY CREATION' phase bolte hai.
Ye jo 6 line ki code h JS phle aa k isko scan kr k pdhega aur isme dekhega yha kaha kaha variable ki jarurat hui hai, to humein unki memory allot krni hai.

MEMORY CREATION PHASE -> skims(fatafat pdh lena) through the code and allocates memory to all variables and functions. 

Ye pehle line-1 pe aaya, yaha usne value set kr diye 'undefined' ( a type of value in JS -> means yha pe ek value aaegi lekin avi ni malum ki kn si value aaegi so avi wo decided ni h to wo 'undefined' hai). Fir ye code aur pdhega aur line-2 pe jaega aur dkhega cube() naam ka ek function hai. To cube k liye mjhe kya krni pdegi? Thodi jgha save krni pdegi, to variable banaunga cube naam se aur iske andar entire function uth k allot ho jaega -
    function cube (num) {
        var res =  num*num*num;
        return res;
    }
Basically in do curly braces k bich m jitne v code hai na wo sb uth k ek variable m allot ho jaega.
    cube = {......
        entire funtion 
    }
Ab fir ye niche aaega aur next line pdhega jaha ek variable bana hua hai 'cube1'  aur iski value 'undefined' hai qki avi humne decide ni kiya ki iski value kya aaegi because memory creation phase m h jisme hum sirf variable dkhte h ki isme humein memory kitni lagegi. Fir humare paas ek aur variable h cube2 aur uski value humein ni pta qki isne avi wo janne ki koshish v ni kri to we will set it as 'undefined'. (Isme variable ko kuch specific memory allocate hoti h like 4 byte so ye sbko utni allot krte jaega creation phase, ab value aate rhegi apne aap)

Phase-2 -> Code Execution Phase
2) Code Execution Phase 
   -> JS runs the code line-by-line.
   -> This is the point where all the functions and calculations (like variables m value daalna) are executed. 
   -> Whenever there is a function call, a new execution context is created.
(JS saari code ko line by line run krega to har point pe wo calculate krega aur har variable ko value allocate krega, function ko jo value chaiye wo usko value allocate krega)

To ye first line pe aaega aur dkha num=5;, to ye undefined to hata k value 5 kr dega. Fir wo niche aaya aur dkha ye to function hai, aur function kuch krega nai jbtk usko koi call naa kre, isliye ye poora part skip ho gya. Jbtk function call nai hoga ye part execute hi ni ho skta.
To fir wo line-6 m aata hai aur waha dekhta hai -
var cube1 = cube(num);
iske andar ek function call hua hai that is line-6 jisme humne dekha cube1 ek variable bn rha hai aur uske andr cube function husko call kiya jaa rha hai, aur humein pta h ki  jb v koi function call hota h na tb function call pe uss function ka execution context banta hai means wapas se memory creation phase & code creation phase banega -> 'new execution context'. Ab jb 2 new execution context create hua to wahi 2 procedure honge -
(i) Memory Creation
(ii) Code Execution 
To memory creation phase m wo line number 2 se chalna shuru karega, fir dekhega cube naam ka koi variable nahi h but usse koi fark ni padega. Basically iske baad se jo v variable aaenge like 'num', 'res', memory creation unka variable bna dega aur usme undefined likh dega. Fir niche aaega aur dekhega 'res' naam ka variable h to usko v undefined kr dega. Hum pehle dekhte h ki kn kn se variable k liye jagha allot krni h wo hmne kr diya. Ab agla phase chala i.e. Code Execution Phase, to ab ye execute hoga. Ab ye aaega aur dekhega 'num', iske aas paas num ki koi value h ni t ye bahar wale se puchega koi num variable h jiski ye value le skta h, to ye bahar aata h aur dekhta h 5 hai, to ye num ka value change kr k undefined se 5 kr deta hai. Fir wo next line pe aata h aur dekhta hai 'res' = num*num*num;. Ab isko pta hai ki num variable ki value kya h, to ye phle apni memory wale phase m dekhega ki mere paas koi num variable hai, agar hai to ye usko use kr lega. Ab 'res'= num*num*num; ye ek tarah ka calculation ho gya and we have learnt that calculations and functions are executed, to 5*5*5 = 125 ho gya. Then res = 125.
Ab agla likha hua h return res;. To jb v hm return krte hai na to jo execution context hai na particular function ka wo destroy ho jaata h. To Memory Creation & Code Execution destroy ho jaega aur iss result ko return kr dega.
Ab ye result kisko return krega?
cube1 ko, to ye answer h na  125, ye cube(num) m aa jaega aur cube1 = 125 aa jaega.
Ab hum next line pe jaenge - var cube2 = cube(10);
Isme humne dobara se function call kr diya, aur function ko call kiye to new Execution Context. To memory creation hoga aur num = undefined, and res =  undefined banega then code execution hoga to isme function ko num ki value chaiye, aur isne jb yha se 10 pass kr diya na to function ko value mil jaegi to ye variable num = 10 kr dega, aur ye upar dhundne ni jaega (5 ni uthaega) qki iske saath value 10 pass hui hai. Fir res = num * num*num; to res bolega mere paas num hai to ye bolega usko calculate kr lo -> 10*10*10=1000. Fir humari next line thi ki jo result hai usko hum return kr do uske paas jisne bulaya tha., to cube2 m value aaegi qki cube2 ne function invoke/call/bulaya kiya tha. To cube2 = 1000;, aur jaise hi ye aayi humari function destroy/khtm ho jaegi means wo wali 'LOCAL EXECUTION CONTEXT' khtm ho jaega. Program k saare code khtm ho jaegi to 'GLOBAL EXECUTION CONTEXT' khtm ho jaega aur isi tarah JS ki saari memory destroy ho jaegi.
-> Execution Content is destroyed after function ends.
Note : Function k andar variable ki execution context ko 'LOCAL EXECUTION CONTEXT' bolte hai aur jo function k bahar hota hai usko 'GLOBAL EXECUTION CONTEXT' (iske andr chote chote local hote hai).
-> Console.log(cube1); -> Ye wali part baaki hai dekhna (we skipped)
-> console.log(cube2); 

Note : Agar hum var cube2 = cube(), jisme parameter khali rkhnge to kya print hoga?
Agar hum parameter khali rkhte h to wo 'undefined' hoga memory creation k time aur during code execution waha kuch bhjnge hi nahi to value dobara undefined ho jaega.
res = undefined*undefined*undefined
To fir res k andr ek special value ban jaati hai i.e. NaN (Not a number)
aur ye uss chij ko denote krta hai jb v hm koi non-sensical calculation krte hai. (means jiske krne se koi sense hi ni bnta)



NOTE : JS BOOK -> JavaScript (2 books) -> O'REILLY
(a) JavaScript : The Good Parts
(b) JavaScript : The Definitive Guide
(Isko avi nhi pdhna hai)



New Concept : Call Stack
-> It is used to manage execution context in JS.
-> Global Execution Context is pushed inside call stack (box inside which having multiple cells), local execution. After a return statement is occurs. Local Execution Context get destroyed. 
-> After all the lines of code (LOC) are executed Global Execution Context is destroyed.

(Pehle GEC push hua fir jb maine cube ko num variable k saath call kiya tb ek LEC ban gya fir jb LEC ka kaam ho gya aur uske andr return statement aa gyi to 125 return krne lga, return k just baad hi ye LEC destroy ho gya aur wo 125 wla ans GEC ko bhj diya. Fir wapas se humara function call hua aur iss baar humne 10 pass kiya wo fir wo apna kaam kiya aur fir LEC ne wapas se GEC ko 1000 ans bhj diya aur fir jb return statement execute hui to ye LEC v destroy ho gya). Aur jaise jaise aur aage gye to aur kuch code ni lilkha to automatically ye GEC v destroy/POP(use this term for interview) ho jaegi. So, ultimately STACK emplty ho jaegi and iss tarah humari call stack kaam karti hai.)

Note : Call Stacks k different different names hote hai -
(a) Call Stack
(b) Program Stack
(c) Control Stack

New Concept : Automatic Type Conversion
Jaise humara datatype hai like Integer, String, Boolean, Undefined (ye 4 chije pdh chuke hai). To hum aise kuch combinations banaenge ki kvi String Integer m convert ho jaega to kvi String Integer m ho jaega, boolean kisi m v ho jaega, automatic type convert ho jaega inska.

Day-17 :
Today's Session -
(a) Hoisting
(b) let var const flow


New Concept : Hoisting
jb humne likha -
var a = 10;
console.log(a); //10
Aur fir humne isko run kra diya to mujhe pta hai 10 print hoga.
Lekin Hositing m agar mai ye likh du -
console.log(a);
var a = 10;
to iske andr v mera 10 print ho jaata hai.
Humne variable define baad m kiya initialize baad m kiya lekin value pehle use kr skte hai aur isi ko Hoisting bolte hai.
02:41

Note : Pehle humne pdha tha ki Call Stack banti hai fir usme GEC jaati hai fir humari v jo v LEC h wo jaati hai aur fir return statement aati hai to wo LEC khatm ho jaati hai.
Note : Fir humne ye padha tha during memory creation phase m pehle a = undefined aata hai fir code execution phase mai yhi a = undefined value kat k 10 ho jaegi.

1. var x = 1
2. function greet() {
3. console.log("Hello");
4. }
5. console.log(x);
6. greet();
Memory Creation
Step-1 : Memory is allocated to x variable and set it as 'undefined'
Step-2 : console.log(x) box k andr x = undefined ho jaega
Step-3 : greet() function ki variable bnega, uske andr function poori aa as it is aa jaegi 
Code Execution -
Step-1 : variable x = undefined -> 1 ho jaega
Step-2 : console.log box k andr x ki value 1 print ho jagei
Step-3 : greet variable k andr search krega lekin isko koi variable allot ni hua then ye function k liye search krne lgega. Fir function k andr console.log("Hello") to wo print kr dega console box pe.
Output :
1
Hello

1. console.log(x);
2. greet();
3. var x = 10;
4. function greet() {
5.     console.log("Hello"); 
6. }
Note : Step-1 Variable aaega then function So, variable x ko line-1 m 
already memory allot ho chuki hai to uske var x = 10; k liye dobara memory
allot ni hoga. So, line-3 skip ho jaega qki ek variable k liye ek memory h
Step-2 function aaega -> greet() function ka ek greet variable memory
banega aur uske andar poori function utha k as it is daal di jaegi -
    function greet() {
    console.log("Hello"); 
    }
Note : Now in Code Execution -> console.log(x); (line-1) par gye, to yha
code console krne bol rha, to hum x pe gye to dikha undefined h ye to 
humne console box k andr undefined print kr diya. 
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
Aur jaise hi bahar aae to dekhe program hi khatm ho gya to mera execution context global wala v destroy ho gya aur humara console m undefined and hello print ho gya.
Output :
Undefined
Hello


Hoisting : (Online Definition)
----------
-> JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.
(Normally jb hum coding krte hai to usme ye hote hai ki koi variable declare krne se pehle console.log kr dete to wo bolta hm print ni kr skte qki ye to defined hi nhi h or cannot find variable likha aaega.
But in JS jitni v declarations hoti h variables and functions ki unko upar pahucha diya jaata hai, means phle JS saare declarations pdh leta whether it is variable or function hai fir code chalta hai.)
-> Hoisting allows functions to be safely used in code before they are declared.
-> Variables and class declarations are also hoisted, so they too can be referenced before they are declared. 
Note : Doing so can lead to unexpected error, and is not generally recommended.

Note : Hoisting was thought up as a general way of thinking about how execution contexts (specifically the creation and execution phases) work in JavaScript.

Example : 
//bcoz of this undefined, hoisting error ni deta aur code chlte rehta hai
console.log(a); //undefined 
greet();
var a = 10;
function greet() {
    console.log("hello pepcoders");
}

Hoisting (Our Definition) :
---------------------------
-> We can access the variables and functions even before we have declared it.

(a) Variables Hoisting :
------------------------
-> We can access the variables even before we have declared its value
//variable hoisting




1. function outer() {
2.    inner();
3.    function inner() {
4.        console.log(b);
5.    }
6. }
7. var b = 10;
8. outer();
9. console.log(b);

Call Stack k andar GEC ek box banegi usme two parts create hnge
(a) Memory
(b) Code
-------------------------
Memory Creation Context -
-------------------------
Line-1 : function outer() {
    -> Mujhe memory allocate krni hai aur function outer aaya. To ye ek variable bana dega outer k naam se aur uske andar poora function ka code de dnge -
                    inner();
                    function inner() {
                        console.log(b);
                    }
Line-7 : var b = 10;
    -> Next variable is b, to maine 'b' ko 'undefined' kr diya.
Line-8 : outer();
    -> Memory creation m function call ho ni skta to skip
Line-9 : console.log(b);
    -> skip
------------------------
Code Execution Context -
------------------------
Step-1 var b = undefined -> 10
Step-2 outer();
    -> Whenever we call a new function, a new Local Execution Context (LEC) box will be created inside call stack-
    (a) Memory Creation Context 
    (b) Code Execution Context
    -> Ab hum outer k andar dekhnge humein kaha kaha memory allocate krni hai
    -----------------------
    Memory Creation Phase - Outer Execution Context
    -----------------------
    1) inner(); -> iska avi kaam nhi hai
    2) function inner () {...} dekhnge -> ye function outer k andar ban rha hai jiska naam hai inner. To hum inner naam ka variable bana k uske andar inner function poora ka poora store kr dnge. Fir aage aaye to kuch v nahi h to wahi tk khatm ho gya.
    ----------------------
    Code Execution Phase -
    ----------------------
    Ab hum code execution phase m aae. To ab wapas se dkhe to inner(); call hua hai. Aur jb new function call hota hai to execution context banta hai. To Call Stack k andar ek aur Local Execution Context (LEC) create hoga -
            -----------------------
            Memory Creation Phase - (Inner Execution Context)
            -----------------------
            -> Iss Memory Creation mai humein koi variable nahi mila mjhe. Ab next line pe aaya to waha console tha, to humein ek v variable nahi mila memory allocate krne k liye aur ye memory creation process khatm ho jaega.
            -----------------------
            Code Execution Phase -
            -----------------------
            -> Ab code execution dkhnge i.e. console.log(b);
            Note : Ab kahani m twist hai.
            -> Ab pehle ye check krega apne 'LOCAL SCOPE' mai. But iske local scope m kuch v nahi hai to ye apne parent k local scope m check krega ki uske andar koi memory h -> 'b' naam ki variable.
            -> Agar usme v nahi h to wo apne parent k andar dekhega. Outer k parent k andar 'b' variable ki value hai, to ye value Outer apne parent se lega then inner apne parent outer se lega, then mere console m 10 print ho jaega.
            
            Note : Jaise hi ye complete hua to iski LEC destroy ho jaega then fir wo apne parent k paas jaega but wo v complete ho gya to Outer ki LEC v destroy ho jaega.
            Ab hum outer k baad console.log(b); pe jaenge
    
    Note : We call this 'LEXICAL sCOPE LEXICAL ENVIRONMENT CHAINING' (vvi)

Step-3 : console.log(b);
        -> humare paas 'b' to hi to hum 10 print kr dnge.
        Now program v complete ho gya h to GEC v destroy ho jaega.


NOTE : LEXICAL sCOPE LEXICAL ENVIRONMENT CHAINING (Explanation) :
Jb GEC se koi function call hoga to uska Child LEC banta h na to wo Execution COntext apni Local Memory ko saath m leta hai aur saath m apne parent ki lexical environment(local memory) le k chalta hai. Ab iss outer function se inner function call hua to inner function k paas apni local memory 
Note : Local Environment -
-> It means jiss environment se isko call kiya gya hai uss environment ko kehte hai Lexical Environment
-> Scope means waha par jo jo (parent variables) variables the ye unko inherit kr lete hai.

->To fir outer k paas apni khud ki local memory aur apne parent ka lexical environement mil gya.
-> To Inner wale ko apni local memory + parent ka lexical environment(outer ka lexical environment-> aur outer ki local memory + GEC ka lexical environment = all these are combined together and knows as 'Scope Chaining')

Example -
---------
Grandparent - House
Parent - House + Property
Me - My money + House + Property -> Scope Chaining

Day-18 :
//<----------------------------Question-1------------------------------->
155
let randomValue = { name: "Lydia"};
randomValue = 23;

if (!typeof randomValue === "string") {
    console.log("It's not a string!");
} else {
    console.log("Yay it's a string!");
}


A: It's not a string!
B: Yay it's a string!   -> Ans
C: TypeError
D: undefined


//<----------------------------Question-2------------------------------->
const user = {
    email: "my@email.com",
    updateEmail: function(email) {
        this.email = email
    }
}

user.updateEmail("new@email.com")
console.log(user.email)

A: my@email.com
B: new@email.com
C: undefined
D: ReferenceError


//<----------------------------Question-3------------------------------->
const fruit = ['banana', 'orange', 'apple']

fruit.slice(0, 1)
fruit.splice(0, 1)
fruit.unshift('grape')

console.log(fruit)

A: ['banana', 'orange', 'apple']
B: ['orange', 'apple']
C: ['grape', 'orange', 'apple']
D: ['grape', 'banana', 'orange', 'apple']


//<----------------------------Question-3------------------------------->
let const = 0;
const nums = [0, 1, 2, 3];

for(var i in nums) {
    if (i) count += 1
}

console.log(count)

A: 1
B: 2
C: 3
D: 4

Concept-1 : truthy values in JS -
JS m 2 types k values hote hai -
(a) truthy values 
(b) falsy values

-> truthy value evaluates to true except 0, null, undefined, NaN and empty string (and these remaining are falsy values).


if (!typeof randomValue === "string") 
Note : Humare paas typeof randomValue se ek Number ki string aayi and wo string mai return krta hu in typeof operator. Ab qki ye empty string nahi hai to ye truthy value hui -> means it will evaluate to true.
To !true -> falsy value hoga, ye kuch aisa hoga -

    if (!"Number" === "string") //typeof humein return string m karta hai

Note : Humne truthy value m pdha ki except 0, null, undefined, NaN or ""(empty string) inko chor k sb true hote hai. To fir "Number" == "string" true ho jaega -> then the "Number" will be converted to true because of boolean condition.

if (!true === "string") 
if(false === "string") //
We are comparing boolean and string, and their typeof are different. Ab dono ka typeof alag hoga to false hoga to fir else loop chlega.

Concept-2 : === (used to )vs == (used to check value) vs = (used to assign value)

(a) = (used to assign value) ->
    var a = 10; (10 is assigned to a)

(b) == (used to check value)
    var a = 10;
    if(a == 10) {
        console.log("Hello");
    }
-> == operator check krega 'a' variable k andar 10 ha ya nahi

(c) ===
-> used to check value + checks typeof 
    a === 10 -> ye operator ye check krega -
            --------------------------
            Step-1 : typeof checking -
            --------------------------
            -> 'a' ka type number hai aur isko jisse check kr rhe i.e. 10 wo v number hona chaiye. To ye dono ki typeof check krta hai.
            -------------------------
            Step-2 : value checking -
            -------------------------
            -> Agar ye dono true hai tb uske baad ye value checking pe jaata hai -
            -> 'a' k andar 10 h ya nahi

    a === 10 -> true
Number    Number

    a === "10" 
    -> true




    Question-2 
const user = {
    email: "my@email.com",
    updateEmail: function(email) {  //parameter
        this.email = email  //user.email = "new@email.com";
    }
}

user.updateEmail("new@email.com") //argumnet
console.log(user.email)

-> Isne user object k andr jo updateEmail h uss function ko call kiya uske andar pass kr diya humara argument -> new@email.com. Fir humara function call hua -> this.email = email; -> now updateEmail ki value badal jaegi i.e. updateEmail = new@email.com. Fir humne console.log(user.email); ko print kiya then answer aaya -> new@email.com

Note : const pe keys change ni kr skte but values modify kr skte hai.
Note : Jb hum function call krte h aur jo value lete h usko argument bolte h function call k time
Note : Jb function define ho jaata hai usko kehte hai parameter
Note : this represents object of that function i.e. user.email


Question-3 :
(a) slice(0, 1) //(startIdx, num_of_elements_delete)
-> means 0th index se shuru kro aur 1 element ko hata do i.e. banana hata dega.
-> It doesn't change in the original array/object. Means ye ek copy banata hai aur uske andar changes hote hai and original array k andar koi v changes ni hua hai.

(b) splice(0, 1)
-> -> Same as slice(0, 1) method but it does change in the original array/object.

(c) unshift :
-> Ye humara 0th index pe 'grape' add kr dega.


<!-- Homework and have to read one article -->
//dense sparse array
let count = 0;
const num = [0, 1, 2, 3];
//dense sparse array

for (var i in nums) {
    if (i) {
        count += 1;
    }
}
console.log(count);


<!-- Question-5 -->
Which of the options result(s) in an error?

const emojis = ['Xmas tree', 'Santa', 'Gift', 'star'];

/*1*/ emojis.push('reindeer');
/*2*/ emojis.splice(0, 2);
/*3*/ emojis = [...emojis, 'whiskey']; //...emojis -> spread comparator
/*4*/ emojis.length = 0;

A: 1
B: 1 and 2
C: 3 and 4
D: 3        //error-> emojis is const aur usme value reassign ni kr skte


/*1*/ emojis.push('reindeer); -> reindeer add ho jaega
/*2*/ emojis.splice(0, 2); -> 0th index se 2 element delete honge

Note : ...emojis -> spread comparator
-> Spread Comparator basically array object ko khol deta h

/*3*/ emojis = [ 'Gift', 'star', 'reindeer', 'whiskey']
-> isko spread kr do aur saath mai 'whiskey' v add kr do ->
    emojis = [ 'Gift', 'star', 'reindeer', 'whiskey']
Lekin ye ek error h qki agar mai const= 10 krta hu to usko fir const = 11 nahi kr skta, means hum const variable ko dobar assign nhi kr skte.

emojis = [...emojis, 'whiskey'];
Humne isk spread kiya, spread krne m koi dikkat nhi hai lekin humne wahi variable use kr liya dobara i.e. emojis, means humne const k andar waps se reassign kra aur hum wo nhi kr skte isliye ye error throw kr diya. 
------------------
emojis.length = 0;
------------------ 
-> Ye emojis k length 0/khali kr dega
Fir jb hm console.log(emojis) krnge to array [] khali milega



<!-- Question-6 -->
// for his question, read this -
https://developer.mozilla.org.en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters

const add = function (x) {
    return x + x;
}

function myFunc(num = 2, value = add(num)) {
    console.log(num, value);
}

myFunc();
myFunc(3);
Note : myFunc(3, 34);

A: 2 3 and 3 6
B: 2 NaN nd 2 NaN
C: 2 Error and 3 6  //answer
D: 2 4 and 3 Error

    (Function Expression)
-> Ye ek add function hai -
    const add = function (x) {
        return x + x;
    }
    (Normal Function)
-> Aur ek myFunc hai -
    function myFunc(num = 2, value = add(num)) {    //default param
        console.log(num, value);
    } 
----------------------
Function-1 : myFunc();
----------------------
-> myFunc();
    Yaha myFunc(); ko call kiya to isme koi arguments nahi diya. Aur agar hum khud se koi argument pass nahi krte function call k time to jo unko bu default value mili hui hoti hai ye uss value se aage ki process shuru kr dete hai.
    //myFunc(undefined, undefined); -> ye function kuch aisa gya
    Aur ab khali gya to default parameter use ho jaenge. To num ki ek default value thi 2, to num to 2 mil gya. And values = add(num) -> humne ye function call kr diya aur prameter num pass kr diya. Num ki value 2 mil gyi thi then humne add function call kiya aur uske andar 2 pass kr diya, then add function ne 2+2 = 4 return kr diya-

        const add = function (x) {  //num = 2
            return x + x;           //2 + 2 = 4
        }
    
    To value kuch ais aa jega -
        function myFunc(2, 4)) {    //default param
            console.log(num, value); //Output -> 2, 4
        } 
-
-----------------------
Function-2 : myFunc(3);
-----------------------
-> myFunc(3);
Iss bar humne 3 ko bheja saath mai -
    num = 3
    then
        value = add(3)
        -> const add = function (3) {  //num = 3
            return 3 + 3;           //3 + 3 = 6
        }

-> To value kuch ais aa jega -
        function myFunc(3, 6)) {    
            console.log(num, value); //Output -> 3, 6
        } 

Note :
But agar hum value kuch aisa le -
myFunc(3, 34);
-> then by default num = 3 and value = 34
-> Add function tb call hota jb hum parameter m value ki liye koi argument paas ni krte tb ye call hota qki default value tb pass hoti hai jb hum koi argument pass nhi krte hai. 

<!-- Question-7 -->
137
//for this question google wht Object.freeze does

Which of the following will modify the person object?
const person = {
    name: 'Lydia Hallie',
    address: {
        street: '100 Main St',
        }
    }

Object.freeze(person);

A: person.nme = "Evan Bacon"
B: delete person.ddress
C: person.address.street = "101 Main St" //answer
D: person.pet = { name: "Mara"}

-> Object.freeze -> The Object.freeze() method freezes an object. 
-> Object.freeze -> A frozen object can no longer be changes means new properties ko add ni kr skte, existing properties ko remove ni kr skte aur uske andar kuch change v ni kr skte

C: person.address.street = "101 Main St" //ye ho skta hai
-> Object.freeze() only freezes array at level one.
Note : Level 0 -> name, address
       Level 1 -> street

    (Shallow Freeze -> means result of calling Object.freeze(object) only applies to the immediate properties of object.
    Means person object h uske andar 2 key h -
    (a) name
    (b) address
    aur unki apni values hai. To name and address change ni ho skta aur naa hi delete ho skta hai but address key k andar jo values h wo ek object hai. To uske andar jo street key h na w change ho skti hai)


<!-- Question-8 -->
136
//for this question google what Object.seal does
which of the following will modify the person object?

const person = { name: 'Lydia Hallie'};

Object.seal(person);

A: person.name = "Suresh"   //answer
B: person.age = 21
C: delete person.name
D: Object.assign(person, { age: 21})

-> Object.seal() - properties cannot be added, deleted but can be modified


Object.assign(person, { age: 21}) -> With this we can assign property in Array - 
-> Ye person ko age assign kr dega 21 
-> Iss method m ek object ka naam dnge i.e.'person'. Uss object 'person' k andar ek key : 
    key : value pair i.e. name : Evan Bacon, 
aur hum keh rhe iss object ko assign kr ko ye wala key:value pair -
    key : value pair <---> name : Suresh //property can be modified
    key : value pair <---> age : 21 //new property cannot be added
---------------------------
Example of Object.assign():
---------------------------
Object.ssign() method copy the data from source and paste in target
const info = {  //source object
    age: 21,
    fruits: ["Apple", "Orange"],
    isMale: true,
}
            //target //source 
Object.assign(person, info);
console.log(person);

-> Source object k andar jo v pda hua h wo target object ki aur jaega

<!-- Question-9 -->
//read : https://developer.mozilla.org//en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat

const fruit = ['Mango', ['Guava', 'Guava', ['Lichi', 'Lichi']]];

console.log(emojis.flat(1));
A: ['Mango', ['Guava', 'Guava', ['Lichi', 'Lichi']]]
B: ['Mango', 'Guava', 'Guava', ['Lichi', 'Lichi']]  //answer
C: ['Mango', ['Guava', 'Guava', 'Lichi', 'Lichi']]
D: ['Mango', 'Guava', 'Guava', 'Lichi', 'Lichi']
---------------
emojis.flat(1):
---------------
-> Hmare paas ek fruit object h jiske andar 'Lichi' ka ek array hai, uske bahar 'Guava' ka array hai aur uske bahar 'Mango' ka array hai.
Ab emoji.flat(1) kehta hai isko flat kr do means jo humara array h na -
const fruit = ['Mango', ['Guava', 'Guava', ['Lichi', 'Lichi']]];
iss aaray ko ye flat kr k concatinate kre deta hai -
// concatinate -> means 2 chijo ko jodna-> mango+guava wala array bcoz humne ek parameter diya tha (1)

Output : [ 'Mango', 'Guava', 'Guava', [ 'Lichi', 'Lichi' ] ]

// [ 'Mango', 'Guava', 'Guava', [ 'Lichi', 'Lichi' ] ] ->fruits.flat(1)
// [ 'Mango', 'Guava', 'Guava', [ 'Lichi', 'Lichi' ] ] ->fruits.flat(2)

console.log(Infinity);
console.log(typeof Infinity);   //number 

const fruits = ['Mango',                        //Level-0
                    ['Guava', 'Guava',          //Level-1 - fruits.flat(1) -> means remove level-1 brackets
                        ['Lichi', 'Lichi']      //Level-2 - fruits.flat(2) -> means remove brackets till level-2
                    ]
                ];

Q) Agar humari nesting 8-10 level deep hota but humein ni pta wo kitni deep hai?
-> Just like num, JS m ek value hoti h - 'Infinity'
    console.log(Infinity); -> Infinite value ko represent krne k liye ye 
                              keyword use krte hai.
    console.log(emojis.flat(Infinity));
    -> Ab kitne v level ki nesting ho, ye apne aap infinite level tk ja kr
    sbko flat kr dega, aur jb sb kuch flat ho jaega to return ho jaega


<!-- Question-10 -->
const randomValue = 21;

function getInfo() {
    console.log(typeof randomValue);
    var randomValue = 'Lydia Hallie';
    console.log(randomValue);
}

getInfo();

-> Humne ek consr variable 'randomValue' banaya = 21. Fir ek answer banaya 'getInfo()', uske andar 2 chij hai. To agar hum memory diagram banaye to -
1. var randomValue = 21;
2. 
3. function getInfo() {
4.     console.log(typeof randomValue);
5.     var randomValue = 'Lydia Hallie';
6.     
7. }
8. 
9. getInfo();

A: "number"
B: "string"
C: undefined        //answer
D: ReferenceError
-------------
Memory Phase:
-------------
Line-1 -> randomValue = undefined
Line-3 -> getInfo = f{......}   //poora func aa jaega isme
Line-6 -> getInfo(); -> skipped
-----------
Code Phase:
-----------
Line-1 -> randomValue = undefined --> 21
Line-3 -> function defn -> iska avi koi kaam nahi
Line-6 -> getInfo(); -> LEC banega
        (a) Memory Phase -> 
        -> randomValue = undefined
        (b) Code Execution Phase ->
        -> console.log(typeof randomValue) -> randomValue is undefined
        then typeof becomes 'undefined'
        -> var randomValue = undefined -> 'Lydia Hallie'
        Here, function ends -> LEC ends
    -> function ends -> GEC ends


<!-- Question-11 -->
const add = function(x) {
    function inner(y) {
        function innermost(z) {
            console.log(x, y, z);
            return x+y+z;
        }
        innermost(6);
    }
    inner(5);
}

add(4);

A: 4 5 6        //answer
B: 6 5 4
C: 4 function function
D: undefined undefined 6 


<!-- Question-12 -->
//read: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf

const groceries = ['banana', 'apple', 'peanuts'];

if(groceries.indexOf('banana')) {
    console.log('We have to buy bananas!');
} else {
    console/log(`We don't have to buy bananas!`);
}

A: We have to buy bananas!
B: We don't have to buy bananas     //answer
C: undefined
D: 1

-> Humare paas groceries ka array h - banana, apple, peanuts

-> if(groceries.indexOf('banana')) {
-> indexOf() ek method hai jo mujhe batata hai ki jo mera groceries hai uske andar jo banana hai uska index kya hai i.e.0. To banana k jagha 0 aa jaega -
    if(0) { //ye aa jaega
-> Ab humne ek concept padhi thi - truthy-falsy values
So, according to turthy-falsy value - 0 is falsy values.
-> Then this '0' becomes false -> else part print i.e.-
Output:  `We don't have to buy bananas!`


<!-- Question-13 -->
const person = {
    firstName: 'Lydia',
    lastName: 'Hallie',
    pet: {
        name: 'Mara',
        breed: 'Dutch Tulip Hound',
    },
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

console.log(person.pet?.name);          //mara
console.log(person.pet?.family?.name);  //undefined
console.log(person.getFullName?.());    //Lydia Hallie
console.log(member.getLastName?.());    //ReferenceError

A: undefined undefined undefined undefined
B: Mara undefined Lydia Hallie ReferenceError
C: Mara null Lydia Hallie null
D: 
Note : Optional Chaining -> Errors ko bachane k liye ki jaati hai
-> Optional Chaining hm react m bahut use karenge
-> ? -? agar aage wali property h to value access kr lunga nhi to undefined return kr dunga.

(a) console.log(person.pet?.name);
-> Isme search krnge ki person object k andar koi pet naam ka property h ya ni? Hai!, To wo bolta h kya mai check kr lu ki name naam ki property h ya nai? Hai! -> Tb ye bolta h to fir mai print kr deta hu aur isme 'Mara' print ho jaega //mara
-> ? ye qstn mark ye bolta h ki agar name naam ki property ni hoti to return krata aur undefined print kr deta, error ni deta.

(b) console.log(person.pet?.family?.name);
-> Isme ye check krega person object hai, then person.pet? h to hm dhundnge pet property, fir ye bolta kya uski koi family hai? Nai!, to ye erroe throw krna chaiye to error se bachane k liye humne pet? laga diya -> means agar family h to do warna undefined print kr do //undefined

(c) console.log(person.getFullName?.());
-> Ye keh rha person object k andar koi getFullName() function exist krta hai? Haan!, to ye return krega- `${this.firstName} ${this.lastName}`
//Lydia Hallie

(d) console.log(member.getLastName?.());
-> Ab ye bolta h ki member object k andar koi getLastName() function hai. But yaha member naam ka koi object hi nai h to ye error hi hoga to humara code fatt jaega qki humne question mark ni lagaya tha.
//ReferenceError -> wo error jb hm kisi chij ko access krna chah rhe lekin wo chij exist hi ni krti

<!-- Question-14 -->
let num = 1;
const list = ['Smile', 'Sad', 'Happy', 'Love'];

console.log(list[(num += 1)]);

A: Sad
B: Happy    //answer
C: SyntaxError
D: ReferenceError

-> Ye qstn bolta hai ki num humara 1 hai, to ye bolta hai num = num+1 -> 1+1 = 2. To ye evaluate ho k aisa aa jaega -
console.log(list[2]); -> Now list of 2nd index kya hai?
-> Happy

<!-- Question-15 -->
read: https://www.w3schools.com/react/react_es6_spread.asp

function sumValues(x, y, z) {
    return x + y +z;
}

A: sumValues([...1, 2, 3])      //error
B: sumValues([...[1, 2, 3]])
C: sumValues(...[1, 2, 3])      //answer
D: sumValues([1, 2, 3])

-> Humne pdha tha spread operator kaise use hota hai-
...[array_name] -> 3 dot then uske array ka naam

let arr = [1, 2, 3];        //array
...arr -> ...[1, 2, 3]      //spread operator

D: sumValues([1, 2, 3])
-> It means x k andar [1,2,3] ek poora array chala jaega and y, z ko kuch mile nai to uske andar undefined chala jaega. And + operator h to concatinate ho jaega because of automatic type conversion.
console.log(sumValues(1, 2, 3));


B: console.log(sumValues([...[1, 2, 3]]));
-> Isme 1,2,3 ko humne bola spread ho jao aur jo spread result h na usko array result k daal diya to ultimatelt ye aisa ho gya -
    sumValues([1, 2, 3])


<!-- Question-16 -->
//revise default parameters and spread operator
const person = {
    name: 'Lyndia',
    age: 21,
};

const changeAge = function(x = {...person}) {
    x.age += 1;
}

const changeAgeAndName = function(x = {...person}) {
    x.age += 1;
    x.name = 'Sarah';
};

changeAge(person);
changeAgeAndName();

console.log(person);

A: {name: "Sarah", age: 22}
B: {name: "Sarah", age: 23}
C: {name: "Lydia", age: 22} //answer
D: {name: "Lydia", age: 23}

-> Isme ek object h person, uska name and age diya hua h. To humne ek function call kiya i.e. changeAge(person); jiske andar humne ek person naam ka object pass kr diya i.e. argument. To humne person naam ka argument bheja to -
const changeAge = function(x = {...person}) {
const changeAgeAndName = function(x = {...person}) {
'x' jo humara parameter h usme default value de rkhi h person ki aur maine ...person krwa di to ye mera object khul gya to ye value iske andar aa gyi -
    name: 'Lyndia',
    age: 21
Lekin fir maine iske andar daal diya i.e. {...person}. To basically iski x k andar ye mila -
const person = {
     name: 'Lyndia',
     age: 21
}
   
Fir maine     x.age += 1; kiya but jb maine already argument bheja hai aur usme value chli gyi to x.age += 1 krega to person object k andar directly change ho jaega - age = 22

Aur jb main ye function call krta hu -
changeAgeAndName();
To isme kuch v pass nai krte to wo default parameters pe lie krega -
const changeAgeAndName = function(x = {...person}) {
To (x = {...person}) pe lie krega to ab k andar aise property aa gyi hai -
x = {
        name: 'Lyndia',
        age: 21,
    };
means x k andar copy ho gya hai aur pichle wale k andar v same hua h but qki humne pichle wale k andar person object bheja tha to x = {...person} ye wala kaam hua hi nai.
-> To x -> ne point kiya person object ko 
Second wale case m x object alag hi ban gya aur aisa ho gya - 
x = {
        name: 'Sarah',
        age: 22,
    };

Note : 
----------
Function-1
----------
const person = {
     name: 'Lyndia',
     age: 21
}
----------
Function-2
----------
x = {
        name: 'Sarah',
        age: 22,
    };

Aur fir humne ye command chalaya -
console.log(person);
to ye print hoga -
-> const person = {
         name: 'Lyndia',
         age: 21
    }

Explanation : 
Humara ek person object hai to dekhte hau ye kaise banega -
  { name: 'Lyndia',
    age: 21  }      //samajh lo ye ek alag chij hai 
Jb hum likhnge person = {.....} ye ek alag variable hai, to person variable point krta hai name, age k taraf.

Jaise var a = 10; to humare computer k andar ek 'a' variable banta hai alag jagha aur ek 10 number hota h alag jagha to 'a' -> 10 point kr rha hota hai.
Agar mai variable 'b' = 10 krta hu na to 'b' ek alag jagha pe banega.

Lekin object k andar pointing chalti hai to iske andar humne person bheja (default parameter) -
changeAge(person);
To x = person ho gya -> const changeAge = function(x = {...person}) {
aur humein ye sb krne ki jarurat hi ni padi -> {...person} i.e. default parameter humne liye hi nahi. So, ab x -> person ki aur point kr rha hai aur person is pointing towards -
                                    { name: 'Lyndia',
                                      age: 21  }

Lekin Case-2 m changeAgeAndName();
Jo person ka saara samaan h na wo x k andar copy ho gya i.e. {...person} isme. To x k liye alag sa copy ban gyi.
x = {
        name: 'Sarah',
        age: 22,
    }; 
Fir jb maine x.age += 1; kiya ->
Case-1 : x -> person -> { name: 'Lyndia',
                          age: 22  }
to person object k andar change ho gya.

Case-2 : changeAgeAndName();
Jb maine ye chalaya to iske andar maine koi argument pass ni kiya to spread operator se ye  {...person} ki jo v person object k andr ye properties thi na -
{ name: 'Lyndia',
  age: 21  }
ye copy ho gyi aur opening and closing bracket k wjah se new object k andr copy ho gyi to ek new object bana jo x k equal ho gya to x -> new object ko point krne lg gya to fir ye -
{
        name: 'Sarah',
        age: 22,
    }; 

Lekin jb humne console.log(person); kiya na to person to x ko isko print kr rha h
{ name: 'Lyndia',
  age: 21  }
to ye print hua.


<!-- Question-17 -->
const food = ['pizza', 'chocolate', 'mango', 'burger']
const info = { favouriteFood: food(0) };

info.favouriteFood = 'omlete'

console.log(food);

A: ['pizza', 'chocolate', 'mango', 'burger'] //answer bcoz food change hi ni hua
B: ['omlete', 'chocolate', 'mango', 'burger']
C: ['omlete', 'pizza', 'chocolate', 'mango', 'burger']
D: ReferenceError


-> Ek info object h uske aage h property favouriteFood uske aage food[0]-> pizza. To favouriteFood k aage pizz likha hua h.
Ab ye bolt hi agar mai info.fvouriteFood ko 'omlete' lr dunga to kya hoga? FavouriteFood k aage 'omlete' aa jaega
-> But yha food puch rha to wo to nswer same rhega bcoz food copy kr k chnges to humne info m kiya hai


<!-- Question-18 -->
const colorConfig = {
    red: true,
    blue: false,
    green: true,
    black: true,
    yellow: false,
}

const colors = {'pink', 'red', 'blue'};

console.log(colorConfig.colors[1]);

A: true     //red->true
B: false
C: undefined
D: TypeError


<!-- Question-19 -->
function nums(a, b) {
    if (a>b) console.log('a is bigger');
    else console.log('b is bigger');
    return a+b;
}

console.log(nums(4, 2));
console.log(nums(1, 2));

A: a is bigger, 6 and b is bigger, 3
B: a is bigger, undefined and b is bigger, undefined    //answer
C: undefined and undefined
D: SyntaxError

return and a+b are in different lines to ye a+b statement tk to kvi reach hi ni kr paega qki upr m return pdh k hi wo return kr jaega. Fir 'a is bigger' print hoga fir -> (nums(4, 2)) ye jo function hai isne yha pe return kuch v ni kiya to humara 'undefined' kr diya q ki empty value aayi hai.


<!-- Question-20 -->
//read: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

const person = {
    name: 'Lydia',
    age: 21,
}

for(const [x, y] of Object.entrie(person)) {
    console.log(x, y);
}

A: name Lydia and age 21            //answer
B: ["name", "Lydia"] and ["age", 21]
C: ["name", "age"] and undefined
D: Error

-> Object.entries works like for...in loop
-> Ye entry deta hai to ek baar loop karega to name and 'Lydia' dega aur uske agle baar jb loop karega to age and 21 dega.

for(const [x, y] of Object.entrie(person)) {
-> Yaha pe x jo h wp name catch karega and y 'Lydia' catch krega. Fir wapas se loop chleaga to x->age, y->21.
-> Fir console.log(x, y); 
    name Lydia
    age  21


<!-- Question-21 -->
let newList = [1, 2, 3].push(4);    //[1, 2, 3, 4]

console.log(newList.push(5));
A: [1, 2, 3, 4, 5]
B: [1, 2, 3, 5]
C: [1, 2, 3, 4]
D: Error        //answer


let newList = [1, 2, 3].push(4);    //[1, 2, 3, 4]
//push method ki khas baat ye h ki it return in arr.length
//then newList will be equal to 4
//ab hm krte h newList.push(5) but iski value ab array rahi nahi to aisa hoga -> console.log(4.push(5)); aur ye koi accha method nai hai. Means 4 is a number and number.push(5) to kuch hota nai h -> ReferenceError.

<!-- Question-22 -->
console.log('I want pizza'[0]); //print "I"
A: """
B: "I"      //answer
C: SyntaxError
D: undefined

<!-- Question-23 -->
function checkAge(age) {
    if(age < 18) {
        const message = "Sorry, you're too young.";
    } else {
        const message = "Yay! You're old enough!";
    }

    return message;
}

console.log(checkAge(21));
A: "Sorry, you're too young."
B: "Yay! You're old enough!"
C: ReferenceError -> means jo exist ni krti usko use krne ki koshish 
//answer
D: undefined

-> console.log(checkAge(21));
-> function checkAge(age) {
->     if(age < 18) {       //else condition
-> {         const message = "Yay! You're old enough!"; }
-> return message;  ----> but message return ni hoga qki const message else{...} k andar rehta h. Ab jb hum return message krte h na to return krne k liye kuch hota hi ni h qki const message else{...} k andar rehta h aur bracket k andr hi create hota hai aur uski k andar khtm ho jaata hai -> iss block k baad ni bachta const i.e. block scoping, we will see later. Message to marr gya else k anadar to message naam ka koi variable hi nahi h to return message m error aa jaega.


<!-- Question-24 -->
const person6 = {
    name: 'Lydia',
};

let city = person.city; //undefined -> doesn't exist
city = 'Amsterdam';

console.log(person);    //no change

A: { name: "Lydia", age: 21 }   //answer
B: { name: "Lydia", age: 21, city: "Amsterdam" }
C: { name: "Lydia", age: 21, city: undefined}
D: "Amsterdam"

<!-- Question-25 -->
const user = { name: 'Lydia', age: 21};
const admin = { admin: true, ...user };

console.log(admin);

A: { admin: true, user: { name: "Lydia", age: 21 }}
B: { admin: true, name: "Lydia", age: 21 }  //answer
C: { admin: true, user: ["Lydia", 21]}
D: { admin: true}

-> ek admin bana uske andar ek property dal gyi admin: true, ...admin -> and user ki saari properties dall gyi i.e. name: 'Lydia', age: 21. Ab humara const admin actually aisa ho gya -
const admin = { 
                admin: true,
                name: 'Lydia', 
                age: 21,
            };

<!-- Question-26 -->
console.log(3 + 4 + '5');
A: "345"
B: "75" //answer
C: 12
D: "12"


<!-- Question-27 -->
const person = {
    name: 'Lydia',
    age: 21,
};

for (const item in person) {
    console.log(item);
}

A: { name: "Lydia" }, { age: 21 }
B: "name", "age"                //answer
C: "Lydia", 21
D: ["name", "Lydia"], ["age", 21]

<!-- Question-28 -->
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);
A: [1, 2, 3, 7 x null, 11]
B: [1, 2, 3, 11]
C: [1, 2, 3, 7 x empty, 11]//answer
D: SyntaxError

<!-- Question-29 -->
function syHi(age) {
    return `${this.name} is ${age}`;
}

console.log(sayHi.call(person, 21));
console.log(sayHi.bind(person, 21));

A: undefined is 21 Lydia is 21
B: function function
C: Lydia is 21 Lydia is 21
D: Lydia is 21 function

<!-- Question-30 -->
var num = 8;
var num = 10;

console.log(num);
A: 8
B: 10           //answer -> redeclaration & reinitialization is allowed
C: SyntaxError
D: ReferenceError


Note : https://javascript-questions.vercel.app

Day-19 :
Today's Session -
1. Windows Global
2. this keyword
3. let, var, const -> temporal dead zone, block scope
4. shadowing
5. closures 
6. TDZ
7. bind, call with NodeJS
--------------------------
Concept-1 : Window Global:
Concept-2 : this keyword :
--------------------------
Humne padha tha GEC (Global Execution Context). To kuch steps hota hai jb v hum JS ki file run krte hai browser pe -
(Q) Mere pass ek JS ki file hai, mai usko browser pe run krta hu to kya kya chije hongi/what all event will take place?
Step-1 : GEC create hota hai
Step-2 : Usko CallStack pe push kiya jaata hai
Step-3 : JS Broswer Engine ek 'Window Object' banata hai.
Step-4 : 'this keyword' Object ko point karta hai.
        Note : Windows Object bahut saare functions/methods, variables contain krta hai. Aur ye sara 'Global Space' m banta hai -> means isko koi v use kr skta hai.
-> JS Engine ek 'this keyword' create krta hai aur ye 'this' keyword Global Level pe banta hai and 'this' points to the window object.
-> Jo JS h wo broswer m run krta hai to har browser ka apna alag engine hota hai aur har engine k apne alag naam hota hai, aur jo JS h wo bahut saare devices pe run krta hai to engine responsible hota hai apna khud ka ek 'window object' banane ki. Ab jb JS ka code browser m chalta hai to wo jo object banata hai usko bolte hai 'Windows Object' lekin JS Code hum apne browser se bahar v chala skte hai using 'Node JS Environment'.
-> 'NodeJS' k case m jo 'Window Object' banta hai 'Global Level' pe uska naam kuch aur hota hai -> we will see later.

So, jb v JS ka code chalta hai browser pe to JS ki engine ki zimmedari hai ek Windows Object banana, Window Object k andar methods/functions, bahut saare variables attached hote hai Global Level pe. Global Level means poore k poore JS code m kahi se v unn variables, functions/methods ko access kr skte hai.
-> Ab 'this keyword' Global Level pe create kiya jaata hai aur jo 'this keyword' hai wo 'Window Object' ko point krta hai.
Note : Agar mai blank JS file i.e. abc.js run karu broswer m to wo v run hoga, wo saare in-built methods k liye memory allocate hogi hi hogi, aur window object banega hi banega by default, aur humare broswer k andar k engine ka ye kaam h.
Note : Window Object is created for each tab and whenever we refresh.

Note : GEC -> Jo humne JS Code likha hai uska functions & variables ko jo memory allocate hoti hai, aur jis jagha m memory allocate hoti hai usse Global Execution Context (GEC) bolte hai.

Note : 'Window' Object-> Every Broswer m unki apni JS Engine hote hai, aur wo JS Engine 'Winodow' Object banata hai -> Window Object ka andar in-built methods hote hai aur jo v variables & functions banate hai.
Ab ye variables & functions kaha bante hai?
-> Variables & functions ki jo memory allocate hui thi wo GEC m hui thi. So, we can say our Window object k andar in-built method and GEC h. Jb GEC khtm ho jaata h to ye window se udd jaati h aur sirf in-built methods bachte hai.


Concept-3 : let, var, const
var -> redeclaration is possible but not reinitialization
(a) hoisting - In JS, memory is allocated to variables and functions even without executing a single line of code (LOC).
    (i) Memory Creation - This is hoisting. Code execute kiye bina hi jitne v variables/functions h unko memory allocate/reserve ho jaati hai i.e. hoisting 
    (ii) Code Execution

Now we will see hoisting let & const m kaise hoti h?
let -> let variable ki jb v memory allocate hoti h na to uska ek Script object banta hai naa ki window object m aur uske andr uski memory allocate hoti hai [b: undefined] naa ki window object m. To memory to allocate ho rhi hai bina code execute kre, then obviously let & const hoist hote hai.
[And hoisting is memory allocate krna bina code execute kre]

Hoist ho gya, undefined aa rha hai but fir v jb console krwa rhe hai to fir q error throw kr rha hai? [var k case m aisa ni ho rha tha]
-> let & const wo thode jyda strict hote hai var se
Note : In let & const, neither redeclaration nor reinitialization is possible.

Strict : const > let > var


Concept-4 : TDZ (Temporal Dead Zone)
TDZ : It is the time between when a variable is allocated memory and when it is initialized. 
(means jb maine apne let b = 100; likha tha , jb mera memory creation phase ho rha hai to mere Script object k andar 'b: undefined' ho gya fir mai niche aaya creation complete, fir jb code execution ki baari aayi aur let b = 100; wali line hit hogi ->'b: 100 hogi to the wo time period jb ye undefined hua aur memory allocate hui thi tbse shuru hokar wo time tbtk khtm ni hoga jbtk undefined kat k uski value ni mil jaati/initialized ni ho jaata i.e. 100. To in dono k bich ki jo duration hoti h usse 'Temporal Dead Zone (TDZ)' bolte hai.) And when a variable is in temporal dead zone, it cannot be accessed. Aur humare temporal dead zone m wahi variable aa skte h jo let & const se declare kiye gye h. So, jbtk wo TDZ m rehta h uss variables ko use ni kr skte isliye var ki hoisting kr k console pe check kr rhe the to show kr rha tha but jb hm let & const ki hositing kr rhe the to wo v ho rha tha but jb console pe print kra rhe to error throw kr rha tha qki wo 'Temporal Dead Zone' m tha.

Concept-5 : Block Scope
What is block?
Anything which is between these {.....} open and close curly braces i.e. statements.

What is the use of block?
-> It is used to compound statements
    if(10 > 0) {
        //do something
        //2nd statement
        //3rd statement
    }
(multiple statements ko compound krne k liye block m daalte hai)

What is block scope?
-> Variables declared in a block are accessible inside that block, so those variables are known to be block scoped.
-> Variables declared using let and const are block scoped.
-> var is function scoped
(means jo variables declare hue h block k andar hum unko access unn block k andar hi kr skte hai, to unn variables ko bolte h ye block scoped variable hai)

<!-- Block Scope Example -->
{
    var a = 10;
    let b = 20;
    const c = 30;

    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(a);
console.log(b);

var ki memory creation Global m hogi and let & const ki memory creation block scope m hogi (not in Script scope-> we will see later). 
-----------------
Memory Creation :
-----------------
Global -> a -> undefined    (var)
Block -> b -> undefined     (let)
Block -> c -> undefined     (const)
Humare teeno variables ko memory mil gyi 
----------------
Code Execution :    (Using console inside brackets)
----------------
Global -> a -> 10
Block -> b -> 20
Block -> c -> 30
----------------
Code Execution :    (Using console outside brackets)
----------------
Global -> a -> 10   (var is Global)
Block -> b -> (block scope hi udd gya) //RefError : 'b' is not defined
Ab ye Global m 'b' dhundne jaega lekin 'b' milega hi nahi -> aur error milega. Qki jo 'b' defined hua tha curly braces/block scope k andar hua tha aur ab jb wo block scope bacha hi nahi to wo 'b' usko milega hi nhi.


Concept-6 : Shadowing
var a = 100;
{
    var a = 10;
    let b = 20;
    const c = 30;

    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(a);
console.log(b);

Memory Creation :
1. Global->Window Object
2. var a = undefined
3. let b = undefined
4. const c = undefined
Code Execution :
5. var a = 100
6. var a = 10 //means andr wale 'a' ne bahar wale 'a' ko shadow kr liya// global scope h isliye
7. let b = 20
8. const = 30
9.  console.log(a) //inside curly braces -> 10
10. console.log(b) //inside curly braces -> 20
11. console.log(c) //inside curly braces -> 30
=> Block Scope ends here
12. console.log(a) //outside curly braces //we know var is global scoped -> 10 
13. console.log(b) //outside curly braces // we know curly braces k baad variable khtm ho jaega qki hmara block udd gya -> ReferenceError

Example-2
let b = 10;
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a); //10
    console.log(b); //20
    console.log(c); //30
}
console.log(b);     //10

1. Script : let b: undefined
2. Global -> Window : var a: undefined
3. block : let b: undefined
4. block: let c: undefined
5. Script: let b: 10    
6. Global: var a: 10
7. Block: let b: 20
8. Block: let c: 30
Inside curly braces -
9.  console.log(a); //10
10. console.log(b); //20
11. console.log(c); //30
Outside curly braces (Block Scoped Memory Destroyed)
12. console.log(b); //10 -> Script Scoped

Q) Script is global scoped or local scoped?
-> Block jaise hi khtm hota h wo waise hi khatm ho jaata hai lekin humara Script destroy ni hua. Means it is similar to global or global but ye tbhi use hota hai jb hum globally let & const ko declare krne k liye use krte hai tb humare script k andar memory leta hai.



Concept-7 : Closures
-> Function along with it's lexical scope forms a closure.
(means function aur apne saath uske aas paas ka jo v lexical scope h wo dono mil k closure banata hai)

function outer() {
    var a = 10;
    function inner() {
        console.log(a);
    }
    inner();
}
outer();
--------------------------------------------------------------
function i.e.  function inner() { 
                console.log(a);
                }
                      +
along with its lexical scope i.e. var a = 10; forms a closure.
--------------------------------------------------------------
Example of Closure -
--------------------
function outer() {
    var a = 10;
    function inner() {
        console.log(a);
    }
    return inner();
}
var z = outer();
console.log(z);

