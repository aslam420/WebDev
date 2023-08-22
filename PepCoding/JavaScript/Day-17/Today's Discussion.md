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