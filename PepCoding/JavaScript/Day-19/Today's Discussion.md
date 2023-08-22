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

