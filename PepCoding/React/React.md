Agenda :
1) React : React m module m hm kya kya krnge?
   (a) movie app
        -> components
   (b) shopping cart
        -> redux
   (c) full stack app
        -> functional components
        -> hooks

Pre-requisites :
-> Basic ES6 (recap)

Article : Learn ES6 the dope way part II : Arrow functions and the 'this' keyword?
Q) What the heck is =>;?
-> You’ve probably seen these strange Egyptian-looking hieroglyphics symbols here and there, especially in someone else’s code, where you’re currently debugging a ‘this’ keyword issue. After an hour of tinkering, you’re now roaming the Google search bar and stalking Stack Overflow. Sound familiar?

-> Together, let’s cover three topics in Learn ES6 The Dope Way Part II:
(a) How the ‘this’ keyword relates to =>.
(b) How to migrate functions from ES5 to ES6.
(c) Important quirks to be aware of when using =>.

Arrow Functions :
-> Arrow functions were created to simplify function scope and make using the ‘this’ keyword much more straightforward. They utilize the =&gt; syntax, which looks like an arrow. Even though I don’t think it needs to go on a diet, people call it “the fat arrow” (and Ruby enthusiasts may know it better as the “hash rocket” ) — something to be aware of.
-----------------------------------------------------
Q) How the ‘this’ keyword relates to Arrow Functions?
-----------------------------------------------------
-> If the ‘this’ keyword were inside an object’s method (a function that belongs to an object), what would it refer to?

var bunny = {
  name: 'Usagi',
  showName: function() {
    alert(this.name);
  }
};

bunny.showName(); // Usagi

-> Correct! It would refer to the object. 
-------------------------------------------------------------------------
Q) Now what about if the ‘this’ keyword were inside of method’s function?
-------------------------------------------------------------------------
Note : Basically ye keh rha h ki hum apna 'this' keyword showTasks wale function k andr use kre (this.name)
-> bunny naam ka object h, jiske andr name, tasks  aur ek showTasks naam ka function h.
-> Ab bunny.showTasks() krte h to showTasks() wala function uske andr 'this' keyword attach hoga lekin kiska? bunny ka. To jb mai 'this.tasks' krta hu na to ye ['transform', 'eat cake', 'blow kisses'] aa jaata h Aur jb forEach krte h to uske upar loop chlega aur har baar ek ek task aaega. Tb mai iske andr alert krwa rha hu (this.name + " wants to " + task).
-> forEach apne aap m ek callback function leta h -
(function(task) {
      alert(this.name + " wants to " + task);
    });
-> Ab ye wale function ka this kisko point krega? Ye function jb call kiya gya to iska jo 'this' h wo kisi ko point ni krta (to bunny ko point ni krga, bunny ko point krne k liye showTasks ka 'this' lr rha h lekin ye wale function ka nhi krega) to ye this 'window' ko point krega. 
-> Ab 'this.name' krne jaega to window k andr koi name naam ka object h nhi to 'undefined' dega.
-> Ye aisa isliye hote h q ki forEach wala callback function h aur jb callback function hoga to jb usko jarurat hogi tb call kiya jaega (like jb jarurat hoga tb print krwane jaega) to uss case m callback function ka scope alag chala gya na to isliye uska this global m chala gya.
Note : Inshort, forEach k callback ka andr ka 'this' window.object ko point krta h.

var bunny = {
  name: 'Usagi',
  tasks: ['transform', 'eat cake', 'blow kisses'],
  showTasks: function() {
    this.tasks.forEach(function(task) {
      alert(this.name + " wants to " + task);
    });
  }
};

bunny.showTasks();
// [object Window] wants to transform
// [object Window] wants to eat cake
// [object Window] wants to blow kisses


1) Agar hum 'this' ko ek variable m save krwa le to? Ye code v wahi keh rha ki humne ek variable banaya 'var _this' aur uske andr m actually m apna 'this' ka scope jo humein usse bunny object h uske variable k andr save krwa diye fir hum ' this.tasks' kr rhe h aur uske baad humne '(_this.name + " wants to " + task)' kr diye to usse 'name' aa jaega. (Inshort, humne indirectly/reference 'this' use kiya h).

Note : (Create a variable outside of the method’s inner function. Now the ‘forEach’ method gains access to ‘this’ and thus the object’s properties and their values. This is because ‘this’ is being stored in a variable while it is still within the scope of the object’s direct method ‘showTasks’.)

var bunny = {
  name: 'Usagi',
  tasks: ['transform', 'eat cake', 'blow kisses'],
  showTasks: function() {
    var _this = this;
    this.tasks.forEach(function(task) {
      alert(_this.name + " wants to " + task);  //_this.name == bunny.name
    });
  }
};

bunny.showTasks();
// Usagi wants to transform
// Usagi wants to eat cake
// Usagi wants to blow kisses

2) Dusra kaam ye kr skte h ki hum bind attach kr skte h. bind koi v function pe jaa k uske scope ko jiss v object m bolnge uska this usse bind ho jaega
Note : Use bind to attach the ‘this’ keyword that refers to the method to the method’s inner function.

var bunny = {
  name: 'Usagi',
  tasks: ['transform', 'eat cake', 'blow kisses'],
  showTasks: function() {
    this.tasks.forEach(function(task) {
      alert(this.name + " wants to " + task);
    }.bind(this));
  }
};

bunny.showTasks();
// Usagi wants to transform
// Usagi wants to eat cake
// Usagi wants to blow kisses

3) Arrow function ka khud ka koi 'this' hota hi nhi h. Agar hum code m dekhe to iske case m 'usagi' chal rha h aur hum pehle aise krte the to nhi chlta tha. Qki arrow function m khud ka 'this' nhi hota to uske andr to maine 'this' use kiya h -
 alert(this.name + " wants to " + task);
 To agar hum arrow function k saath 'this' use krte h to uska apna 'this' ni hota h lekin uske bahar/outer m jo v scope hota h (function, object etc) uske andr 'this' jisko point kr rha h to arrow function usi ko point krne lgta h.
 -> To iss arrow function k outer m 'showTasks()' wala function h aur iska 'this' kisko point kr rha h? 'buny' ko to mera arrow function ka 'this' v bunny ko point krega.
 Note : Yhi same code m arrow function k jagha normal function likha tha to '[Object Window] print ho rha tha.

var bunny = {
  name: 'Usagi',
  tasks: ['transform', 'eat cake', 'blow kisses'],
  showTasks() {
    this.tasks.forEach((task) => {
      alert(this.name + " wants to " + task);
    });  
  }
};

bunny.showTasks();
// Usagi wants to transform
// Usagi wants to eat cake
// Usagi wants to blow kisses


OOPs :
class Penguin{
    constructor() {
        this.habitat = "Antartica"
    }
    printPlaceOfOrigin() {
        console.log(this.habitat);
    }
}
//Isse habitati print ho jaega

Q) What is constructor()?
-> Jb v hum koi class banate h, usko instantiate krte h (ek object banate h) tb ye constructor by default fire ho jaega -

const myPenguin = new Penguin();
console.log(myPenguin);

Output :
Penguin {habitat: 'Antartica'}
habitat : "Antartica"
[[Prototype]] : Object

-> Yha output m Penguin aa gya, aur Penguin k andr Habitat aur Antratica aaya sirf qki wo constructor chala. Aur humein pta h constructor chlega aur constructor chlega to wo this.habitat = "Antartica" krega.
-> Aur humien ye malum h jb hum const myPenguin = new Penguin(); krte h to ek new object aata h jo empty hota h aur jo 'this' hota h wo uss empty object ko point kr rha hota h to uss empty object k andr habitat = "Antartica"  dal jaega q ki ye constructor by default run hua. Aur jb humne 'myPenguin' print kiya to ye aa gya -
Output :
Penguin {habitat: 'Antartica'}
habitat : "Antartica"
[[Prototype]] : Object
Note : Constructor aur class name java m same hota h JavaScript m nhi.

Q) myPenguin.printPlaceOfOrigin(); //Antartica ye function kaise chl rha h?
class Penguin{
    constructor() {
        this.habitat = "Antartica"
    }
    printPlaceOfOrigin() {
        console.log(this.habitat);
    }
}

const myPenguin = new Penguin();
myPenguin.printPlaceOfOrigin(); //Antartica
console.log(myPenguin);

-> Humne prototype pdh rkha h to hm prototype m gye to waha hum dekhnge uske this ne ye function store kr hi rkha h -
Antartica
Penguin {habitat: 'Antartica'}
  habitat : "Antartica"
  [[Prototype]] : Object
      constructor : class Penguin
      printPlaceOfOrigin : ƒ printPlaceOfOrigin()
      [[Prototype]] : Object


Inheritance : (extends keyword)
-> JavaScript m ek extends keyword hoti h jo 

class Bird {
    constructor() {
        this.eats = true;
    }

    printHabits() {
        console.log(this.eats);
    }
}

class Penguin{
    constructor() {
        this.habitat = "Antartica"
    }
    printPlaceOfOrigin() {
        console.log(this.habitat);
    }
}

const myPenguin = new Penguin();
console.log(myPenguin);

-> Humein Penguin k andr extend krwana h Bird ko to hum likhnge "extends Bird" -
class Bird {
    constructor() {
        this.eats = true;
    }

    printHabits() {
        console.log(this.eats);
    }
}

class Penguin extends Bird{
    constructor() {
        this.habitat = "Antartica"
    }
    printPlaceOfOrigin() {
        console.log(this.habitat);
    }
}

const myPenguin = new Penguin();
console.log(myPenguin);

-> It means hum Bird class k andr jo v properties, methods honge wo accessible honge Penguin k andr
-> Jb hum run kr k dekhnge to error throw krega ki -
"Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor at new Penguin"
-> To Penguin meri derived class ho gyi na qki isko andr humne chije derive kri h
-> Ye keh rha h ki jo class k andr chije derive kr rhe h na means Penguin class k andr Bird naam ki class h unki saari chije le k aa rhe h to uske constructor k andr super() call krna pdta h. To isse ye hoga ki Bird wale 'this.eats' ko access kr paenge Bird class ka.
class Bird {
    constructor() {
        this.eats = true;
    }

    printHabits() {
        console.log(this.eats);
    }
}

class Penguin extends Bird{
    constructor() {
        super();
        this.habitat = "Antartica"
    }
    printPlaceOfOrigin() {
        console.log(this.habitat);
    }
}

const myPenguin = new Penguin();
console.log(myPenguin);

Output :
Penguin {eats: true, habitat: 'Antartica'}
    eats : true
    habitat : "Antartica"
    [[Prototype]] : Bird

-> Jo constructor tha wo Bird wale ka chala to 'this.eats = true' aana chaiye the aur aaya. Fir constructor chala 'this.habitat = Antartica" to mera habitat 'Antartica' aa gya.
-> Ab dono aane chaiye -
1) printPlaceOfOrigin()
2) printHabitat()
  -> Ye dono methods hmare milne chaiye -
Output :
Penguin {eats: true, habitat: 'Antartica'}
    eats : true
    habitat : "Antartica"
    [[Prototype]] : Bird
        constructor : class Penguin
        printPlaceOfOrigin : ƒ printPlaceOfOrigin()
    [[Prototype]] : Object

-> printPlaceOfOrigin() mujhe mil gya 
-> Ab m ye wala prototype kholta hu  [[Prototype]] : Object, iske andr humara class hoga Bird wala , uske andr humein method mil gya printHabit -
Output -
Penguin {eats: true, habitat: 'Antartica'}
    eats : true
    habitat : "Antartica"
    [[Prototype]] : Bird
        constructor : class Penguin
        printPlaceOfOrigin : ƒ printPlaceOfOrigin()
    [[Prototype]] : Object
        constructor : class Bird
        printHabits: ƒ printHabits()
        [[Prototype]] : Object

-> 2 more functions print kr k dkhte h -
class Bird {
    constructor() {
        this.eats = true;
    }

    printHabits() {
        console.log(this.eats);
    }
}

class Penguin extends Bird{
    constructor() {
        super();
        this.habitat = "Antartica"
    }
    printPlaceOfOrigin() {
        console.log(this.habitat);
    }
}

const myPenguin = new Penguin();
console.log(myPenguin);
myPenguin.printPlaceOfOrigin();
myPenguin.printHabits();

Output :
Penguin {eats: true, habitat: 'Antartica'}
    eats : true
    habitat : "Antartica"
    [[Prototype]] : Bird
        constructor : class Penguin
        printPlaceOfOrigin : ƒ printPlaceOfOrigin()
    [[Prototype]] : Object
        constructor : class Bird
        printHabits: ƒ printHabits()
        [[Prototype]] : Object 
Antartica
True

Note : Bird pehle chlega fir Penguin
Note : 'super()' means jo mere se upar/supreme h. To jb mai super() call krta hu to jo ye Bird class h iska constructor run hota h. Aur jb mai new Penguin bna rha hu tb constructor run hoga. Ab jb constructor() run hoga to sirf "antartica" chlta . To jb constructor run hoga to maine super() likh diya jiska mtlb h jo v chij maine derive kari h waha pe phle jao, unke constructor() chala k aao fir mere constructor() chalnge.



// Arrow Function
class Bird {
    eats = true;
    
    printHabits = () => {
        console.log(this.eats);
    };
}

class Penguin extends Bird{
   habitat = "Antartica"
    
    printPlaceOfOrigin = () => {
        console.log(this.habitat);
    }
}

const myPenguin = new Penguin();
console.log(myPenguin);
myPenguin.printPlaceOfOrigin();
myPenguin.printHabits();

-> Iss code m 'this' wali saari chije hata di qki this se super v call rkna pd rha h, constructor v use krna pd rha h, Ab ye new syntax h ki hmko kuch nhi krna, apna ek key-value pair m likhna h, arrow function m likhna h hmara kaam chlega -

Output :
Penguin {eats: true, habitat: 'Antartica', printHabits: ƒ, printPlaceOfOrigin: ƒ}
      eats: true 
      habitat: "Antartica" 
      printHabits: () => {console.log(this.eats);}
      printPlaceOfOrigin: () => {console.log(this.habitat);}
[[Prototype]]: Bird
Antartica
true

-> Ab maine extends kiya to saara kaam internally ho rha h, naa humein constructor banana pda naa super call krna pda. But output m -
eats: true 
habitat: "Antartica" 
ye dono aa rha h, aur saath hi saath printHabitat, printPlaceOfOrigin, ye dono methods Penguin m aa rhe h, ye dono Prototype m ni h.
Note : Agar hum likhnge to aise likhnge. (new syntax)

touchSpreadRest.js :
Q) Humara spread operator kisliye hota h?
-> It is used to split up array elements or object properties 
-> Maine ek array banaya -
const num = [1, 2, 3];
-> fir maine ... dot lagaya aur nums likh diya -
const newNums = [...nums];
-> Isse ye hoga ki mera jo num array tha isme jo v tha ye split ho gya means spread ho gya/khul gya for fir maine ',4' likh diya -
const newNums = [...nums, 4];
-> Isse kya hoga?
console.log(newNums);
Output : [[1,2,3],4]

Q) Ab ye object m kaise kaam krega?
-> const oObj = {
  name: "Mohammad Aslam",
  age: 26
}

-> const nobj = {...oObj, age:32}
-> Ab ye hoga ki puraani name, age aa jaegi lekin age to pehle se h to maine jo property likhi wo lega to age: 26 se 32 ho jaega

Spread operator : 
-> It is used to split up array element or object properties

const nums = [1, 2, 3];
const newNums = [...nums, 4];   //[[1,2,3],4]
console.log(newNums);

const oObj = {
    name: "Mohammad Aslam",
    age: 26
  }

const nobj = {...oObj, age:32}  //name : Mohammad Aslam, age: 32 //overidden the age
Note : Original Object m changes ni hoga

Rest Operator : 
-> It is used to merge a list of function arguments into an array.
-> Function m jo arguments h na unko ek saath daal deta h ek array k andr -
function fun(...args){
    args.forEach(arg => {
        console.log(arg);
    })
}

fun("Hello", "how", 2 , true);
-> Ab ye chaaro chije args naam k variable k andr merge kr dega aur ek array aa jaega 'args' to uske andr hum access kr paenge

Output :
Hello
how
2
true

-> Agar hum args ko log krwa de to -

function fun(...args){
    console.log(args);
    console.log(typeof args);
    args.forEach(arg => {
        console.log(arg);
    })
}

fun("Hello", "how", 2 , true);

Output :

['Hello', 'how', 2, true]

0 : "Hello"
1 : "how"
2 : 2
3 : true
length : 4
[[Prototype]] : Array(0)

Object
Hello
how
2
true


destructuring :
-> Two types of destructuring in array -

//Type-1 of array destructuring
[a, b] = ["FJP", 5];
console.log(a); //FJP
console.log(b); //5

// Type-2 of array destructuring
[n1, ,n3] = [1, 2, 3];
console.log(n1);    //1
console.log(n3);    //3
-> n2 k jagha maine space daal diya to koi variable assign nai kiya to ye khali chala gya n1=1, agal to khali h fir n3=3

-> Object destructuring - Array destructuring m kuch v naam likh do  aur value aata chlega lekin obejct destructuring m humein actually key ka naam likhna pdta h like -
let obj = {
  name: "Suhana",
  age: 23
}
-> Ab mujhe iss wale object m se age nikaalni h
let { abc } = obj; 
console.log(age);

Output : undefined

-> To jo humara naam h object k andr humein wahi likhna h -
//Object destructuring
let obj = {
    name: "Suhana",
    age: 23
  }

let { age } = obj; 
console.log(age);   //23 //'age' is the key 


Create react app command -
-> npx create-react-app reactapp


Today's Agenda :
1) React CDN Link
2) Basics of React
3) todo app using react
4) Movies App using React

Note : July end tk humare paas 3 projects ready ho jaenge -

-> React JS is a JavaScript Library (not framework)
-> It is used for building UI (User Interface)
-> Developed by Meta (Facebook)

Q) Jb hm HTML+CSS+JS use kr rhe the to humein ReactJS ki jarurt q padi?
-> Humne HTML+CSS+JS likha, to iska DOM (Document Object Model) banta h aur browser pe render (display) hota h
-> HTML+CSS+JS --> DOM --> Render on Browser (Normal Flow)
-> Maine ek code likha to mere paas ReactJS ka ek algo h "Diffing Algo" -> It identifies changes made in code.
-> Iske baad ek chij banti h known as "Virtual DOM" -> Identifies the required changes.
-> Fir humara DOM banta h 
-> At last Browser render hota h
-> Code --> React Algo (Diffing) --> Virtual DOM --> Render on Browser

=> Maine "code" likha aur maine code m dynamically kuch change ho rha h to ye "Diffing Algorithm" ko pta lgega ki humne kn si line m change kiya h, fir ye ek "Virtual DOM" banega aur wo bolega mai pta lga lunga changes kaha kaha hue h aur fir ye DOM banega.

Example, Meri ek "Shopping List" h jisme maine kuch item daale -
1) Banana
2) Apples
3) Oranges
4) Pineapple -> Maine suddenly pineapple delete kiya, uske jagha "Blueberry" daala
-> Conventional Method m agar hum frontend m kuch change krte h to poora page reload hota h, fir wapas se DOM create hota h then humara rbowser dekhta h then browser render krta h ye saari chije -
1) Banana
2) Apples
3) Oranges
4) Blueberry
-> But in case of ReactJS, Shopping list m se agar Blueberry change hu h to sirf mera Blueberry wala area hi update ho k aaega.
-> So, ReactJS k case m maine code likha, changes kiya to mera "Diffing" algo changes ko identify kr lega jo changes maine banae. To usne identify kr liye "Pineapple" delete ho k "Blueberyy" ho gya. Fir Virtual DOM required changes kr deta h. Fir DOM sirf "Blueberry" jitna hi DOM banata h aur baaki k DOM k saath chipka k browser m render kr deta h. (That's why it is fast)

Advantages :
1) Very fast (Qki waha jo sirf changes ko load krega, baaki waise hi rhega)
2) Easy Event Handling (shortcuts)
3) Small Library --> Easy to learn (Compare to Angular etc...)
4) Manages UI by state (-> on state change, UI changes accordingly 
--> Conside state as variable for now. Ab koi variable change hoga (x=10), agar x = 11 ho gyi na to UI v uske accordingly change hoga.


Components :
-> ReactJS m ek chij hota h "components" which is -
1) isolated, reusable, independent piece of code.

Two types of Components :
1) Functional Component
2) Class Component