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

--> Function Component :
    // JSX -> JS + XML
    function Element(){
        return(
            <h1>Hello</h1>
        )
    }



JSX : JS + XML
-> JSX allows us to write HTML inside of JS and place them in DOM without using functions like createElement() or appendChild()

-> Hum HTML+CSS+JS likhte h aur wo chup chap browser pe render ho jaati hai lekin hm jaise hi browser pe JSX likhte h to browser ko smjh hi nai aata. Tb "babel" as a middle men aata h jo JSX ko JS m convert kr deta h aur browser usko smjh jaata h aur fir browser pe render ho jaata h.
-> [JSX --> Babel --> JS --> Browser]


    //Code reusability
    function Main(){
        return(
            <div>
            <Element/>
            <Element/>
            <Element/>
            <Element/>
            <Element/>
            </div>
        )
    }
-> But ye keh rha h ki jo tm return kr rhe ho na use wrapper hona chaiye means ekhi banda mujhe return kro aur uss bande k andr jitne marji log daal k de do. So, we will wrap it inside <div> container.

    //Code reusability - we can only return one element inside return
    // Soln : Wrap the components in <div> or use React.Fragment
    function Main(){
        return(
            // <div>
            //     <Element/>
            //     <Element/>
            //     <Element/>
            //     <Element/>
            //     <Element/>
            // </div>

            <React.Fragment>
                <Element/>
                <Element/>
                <Element/>
                <Element/>
                <Element/>    
            </React.Fragment>
        )
    }

    // ReactDOM.render(<Element/>, document.getElementById('root'));
    // Ab mujhe <Element/> nai, <Main/> render karwana h
    ReactDOM.render(<Main/>, document.getElementById('root'));
    /* Ye render <Main/> wale component pe gya aur return kr diya 5 element. Fir wo internally
    puchega ye 5 element h kya. To fir wo element() function/component k andr jaa k dekhega
    "Hello" likha hua h to wo "Hello" print kr dega.*/

Q) Hum ReactDOM ek baar likhte h, agar koi puche ki ReactDOM kitne baar likh skte h?
-> Agar humne 2 ReactDOM.render() chalaya to jo last wala ReactDOM.render() wahi persist krega aur niche wala upar wale ko override kr dega.

Rules for using JSX : Jb hum return(JSX) likhte h tb open-close bracket k bich m hum JSX likhnge, to ye sb usi k rules h -
-> Not allowed -
1) var declaration not allowed 
2) function declaration not allowed
3) Loop (for, while, do-while etc..) not allowed
4) if-else statements not allowed
5) Object render not allowed 
-> Agar ye sb allowed nai h to inke alternatives kya h?
1&2)function declaration and variable declaration means hum return k andr  ek function nai likh skte ya let a = 2 nai likh skte. So, variable and function declare nai kr skte. To in dono ka alternative h we will see later
3) loops k jagha HOF(higher order functions) like map, filter, reduce etc use kr skte h
4) if-else k jagha "ternary operator" use kr skte h
5) Object ki rendering k jagha hum arrays ki rendering use krte h

=> Wo function h kya jisme hum apna argument naa de pae. Jo hum function k andr argument dete h to wo ab function nai h functional component h to wo argument nai hoga, uss argument ko react m hm "props" bolte h.
--> function => argument
--> functional Component => props

 <React.Fragment>
                <Element name = "Sidhu Moosewala"/>
                <Element/>
                <Element/>
                <Element/>
                <Element/>    
            </React.Fragment>
-> Ab mai chah rha hu ki "Hello" k saath "Siddhu Moosewala" print ho. Maine maje m apne function ko argument bhj diya (ye ek tarike se functional component ki call h). To jb function call krte h wo parameter v to leta h to usko hum "props" likh denge
    // JSX -> JS + XML
    function Element(props){
        //props ko print kr lete h
        console.log(props);
        return(
            <h1>Hello</h1>
        )
    }

    function Main(){
        return(

            <React.Fragment>
                <Element name = "Sidhu Moosewala"/>
                <Element/>
                <Element/>
                <Element/>
                <Element/>    
            </React.Fragment>
        )
    }
->Ye console m object k tarah aaya
Console : 
{name: 'Sidhu Moosewala'}
{}
{}
{}
{}
-> But bakki sb k liye empty object gya

-> Ab variable likhne k liye {} k andr likhte h -
{props.name}

UI :
Hello Sidhu Moosewala
Hello
Hello
Hello
Hello

-> To kya mai isko aise likh skta hu -
    function Element(name){
        //props ko print kr lete h
        console.log(name);
        return(
            <h1>Hello {name}</h1>
        )
    }

    function Main(){
        return(

            <React.Fragment>
                <Element name = "Sidhu Moosewala"/>
                <Element/>
                <Element/>
                <Element/>
                <Element/>    
            </React.Fragment>
        )
    }
--> Isko hum destructuring bolnge

-> Ab maine destructure kr k nikaal liya, to har kisi k aage kuch aa ni rha ek ko chor k.
-> Ab name k aage by default "myName" likh dete h -
    function Element({name = "myName"}){
        console.log(name);
        return(
            <h1>Hello {name}</h1>
        )
    }
-> Isse ye hoga ki jo khali the unke aage myName print ho jagea -
Output :
Hello Sidhu Moosewala
Hello myName
Hello myName
Hello myName
Hello myName

-> Hum aur v chije de skte h -
    function Element({name = "myName", city}){
        console.log(name);
        return(
            <h1>Hello {name}</h1>
            <h2> {city} </h2>       //ye error de rhi. <div> k andr dono ko krne se thk ho jaega
        )
    }
        function Main(){
        return(

            <React.Fragment>
                <Element name = "Sidhu Moosewala" city = "Punjab"/>
                <Element/>
                <Element/>
                <Element/>
                <Element/>    
            </React.Fragment>
        )
    }
Solution :
    function Element({name = "myName", city}){
        console.log(name);
        return(
            <div>
            <h1>Hello {name}</h1>
            <h2> from {city} </h2>
            </div>
        )
    }
            function Main(){
        return(

            <React.Fragment>
                <Element name = "Sidhu Moosewala" city = "Punjab"/>
                <Element/>
                <Element/>
                <Element/>
                <Element/>    
            </React.Fragment>
        )
    }
-> <div> sbko ek block level element m daal dega
-> <ReactFragment> as a wrapper kaam krega
Note : Humne functional component sikh liye, ab hum class component sikhnge

Agenda :
1) Class Component
2) To do app

=> Functional Component tb banate h jb humein static UI banana ho, aur jb humein dynamic UI banana ho to hum class compoenent banaenge.
Note : But ab function ko v use kr k dynamic UI bana skte h using "Hooks"
Class Component :
-> 

"+" button aur ek "-" button aur bich m kuch number hoga "30" to jb mai "+" click karunga to "31" aa jaega aur fir "-" click karunga to wapas se "30" aa jaana chaiye. So, basically hum ek counter banana chah rhe h.
Note : Common ReactJS Interview Question -
-> Using function component or class component create Counter

    class Counter extends React.Component{
        constructor(){
            
        }
    }
1) state :  
-> Stores information of React Components (Consider it as React Object)
-> class component k andr ek chij hoti h "state". Jo state hoti h wo information store krta h humare component ki (React Object). To humare component k andr kuch information display krna h aur wo display change hoti h to wo "state" k andr change krnge.
2) render() : Jb v mera "state" change hoga, humara render method call hoga
   
=> "state" har ek react component k liye hota h. To maine ek react component banaya aur uske andr "state" rakhi, aur agar meri uss react component k andr "state" change hoti to "render" method call hoga and that component is re-rendered -
    class Counter extends React.Component{
        constructor(){
            this.state={
                count: 0
            }
        }
    }
=> Ab humne "extends" kiya h to "super()" keyword call krna padta h ko ki parent ki property ko pehle chalaega (React.Component). Ab humne "React.Component" extend kiya h to ye hmko ek method deti h "render()", aur ye render() method hi saara jaadu karti h. Ye dhyan rkhti h ki "state" chnage hua ya nai. Agar "state" change hue h to ye fatafat aaegi aur uss wale component ko re-render kr degi. (Poori website re-render ni hogi sirf ek particular component isliye react fast hoti h)

        render(){
            return(
                <button></button>
            )
        }
-> Ab iske andr button banani h "+" wala, fir "h1" tag likhna h aur uske andr {this.state.count} likhna h aur isse yha hum apna count print kr skte h. Similarly, "-" k liye krnge -
 render(){
            return(
                <button>+</button>
                <h1>{this.state.count}</h1>
                <button>-</button>
                <h1>{this.state.count}</h1>
            )
        }
-> Ye code error de rha h q ki multiple chije hm return ni kr skte to sbko wrap kr denge -
render(){
            return(
                <React.Fragment>
                <button>+</button>
                <h1>{this.state.count}</h1>
                <button>-</button>
                </React.Fragment>
            )
        }
Note : Hum "+" pe click kr rhe h to kuch ho ni rha h. Aur humari expectation h ki jb mai "+" dabau to "state" change ho. State change krne k liye hum ek "increment" function banaenge, ab iss "increment" function kaam ye hoga ki ye mere state ko change krega -

-> "setState" ek method hota hai jiske andr hum object ppass krnge {this.state.count} -> aur iski value kya hogi? Jo puraani valiue thi usme +1 => count: this.state.count+1. To mera puraana wala "Count" + "1".

        increment=() => {
            this.setState({
                count: this.state.count+1
            })
        }

-> Ab "button" pe ek "onClick" naam h event listener lagaynge aur usme curly braces denge - onClick{}. Curly braces isliye q ki humein apna function iske andr call krna h. Means batana h ki jb click ho to ye "this.increment"pe call ho jaega.
        render(){
            return(
                <React.Fragment>
                <button onClick={this.increment}>+</button>
                <h1>{this.state.count}</h1>
                <button>-</button>
                </React.Fragment>
            )
        }
-> Similar chij ab "-" k liye banaenge -
        decrement=() => {
            this.setState({
                count: this.state.count-1
            })
        }

Code :
    class Counter extends React.Component{
        constructor(){
            super()
            this.state={
                count: 0
            }
        }

        increment=() => {
            this.setState({
                count: this.state.count+1
            })
        }

        decrement=() => {
            this.setState({
                count: this.state.count-1
            })
        }

        render(){
            return(
                <React.Fragment>
                <button onClick={this.increment}>+</button>
                <h1>{this.state.count}</h1>
                <button onClick={this.decrement}>-</button>
                </React.Fragment>
            )
        }
    }
-----------
todo App :|
-----------
Extension install : ES7+ React/Redux/React-Native/JS snippets

todo App k andr -
1) Node Modules
2) public folder
3) src folder - Iske andr 2-3 chije hoti h -
        (a) app.js -> Isme function component likha hua h jo kuch return kr rha. Aur isi k wajah se UIm humein display ho rha h
        Note : Remove all functio() code
        (b) app.css -> react k css k liye use krte h
        (c) index.js -> iske andr ek code h -
            <React.StrictMode>
                <App />
            </React.StrictMode>
        -> Ye <React.StrictMode> ko hata dena h, isse testing wale file run hote h
        -> At last iske andr <App /> bacha h

=> Now we will create our app -
Q) Iske andr kya kya krnge?
-> Humein component banana h to ek "Components" naam ka folder banaenge
-> Iss Components k andr jo v humare components k naam honge wo banaenge.
-> Ab humein class components banana h - "rcc" -> press enter -
rcc -> react class component
rfc -> react functional component

import React, { Component } from 'react'

export default class Todo extends Component {
  render() {
    return (
      <div>Todo</div>
    )
  }
}

-> Ye code ban k aa jaega
-> Humein React.Component nai likhna pda qki hum react k todo naam ka folder h uske andr sb react k chije h.
-> Ab mai isko import karunga "app.js" k andr jisse app.js 

Flow :
1) index.js -> kn sa element render ho rha h wo pta chlta h (<App/>)
            -> Hum todo ko <App/> k andr render karwana chahte h to Todo.js ko import kr lenge App.js m aur fir todo ko render krwa denge -

import logo from './logo.svg';
import './App.css';
import Todo from '../Components/Todo';

function App() {
  return (
    // <h1>Hello from the other side</h1> 
    <Todo/>
  );
}

export default App;

-> Ab maine Todo k andr jo v likha hua hoga wo aaega -

import React, { Component } from 'react'

export default class Todo extends Component {
  render() {
    return (
      <div>Todo</div>
    )
  }
}

Screen : Todo

-> remove Todo and add button and input type=text -
  render() {
    return (
      //<div>Todo</div>
      <div>
        <input type = "text"/>
        <button>Submit</button>
      </div>
    )
  }
}
-> Ab mera task ka jo state hoga i.e. this.state jo meri hogi, iske andr ek chij banaenge "tasks" aur wo array[] type hoga aur usko andr [{}. {}, {}] aise objects honga -> Array of objects. 
this.state={
    tasks: [{}, {}]
}
-> Ab iss object ka andr 2 chij store krnge -
(a) id: 1
(b) task: studyJS (task kya h? jaise StudyJS)
(c) id: 2
(d) task: studyDSA

-> Iske liye pehle constructor() banaenge -
  constructor(){
    super();
    this.state={
      tasks:[
        {id:1, task:"Revise JS"}, 
        {id:2, task:"ReviseDSA"}]
    }
  }
  render() {
    return (
      //<div>Todo</div>
      <div>
        <input type = "text"/>
        <button>Submit</button>
      </div>
    )
  }
-> Ab mujhe ye frontend pe display karwana h -
-> To hum tasks wale array pe loop lagaenge aur usko baari baari render krnge (agar task wala array change hoga to re-render hoga isliye loop lagaenge)
Note : Loop lagane k liye "map" use krnge -
 render() {
    return (
      //<div>Todo</div>
      <div>
        <input type = "text"/>
        <button>Submit</button>
        {
          this.state.tasks.map()
        }
      </div>
    )
  }
NOte :
        {
          this.state.tasks.map()
        }
-> This curly braces means jb v mai apne jsx k andr pure JS likhna chahta hu tb mai {} braces ka use krta hu
-> Har baar hmko tasks ka ek object milega -
 { //use when need to write JS in JSX
          this.state.tasks.map((taskObj) => {
            <p>{ taskObj.task}</p>
          })
        }
-> Ye likhne se mera "Revise JS" aa jaega
Note L <p>{ taskObj.task}</p> Ye HTML element mujhe bhejna g to mai return use krunga aur wrap kr denge.
      <div>
        <input type = "text"></input>
        <button>Submit</button>
        { //use when need to write JS in JSX
          this.state.tasks.map((taskObj) => {
            return(
            <p>{ taskObj.task}</p>
            // <button>Submit</button>
            )
          })
        }
      </div>

Note :
1) this.state.tasks kye to upar wala "tasks" mil gya.
2) map() function lagae to humare "tasks" k ek ek index pe jaega aur har index pe ek object pda hua to ({id:1, task:"Revise JS"}) iss poori line ko humne "taskObj" ka naam de diya. Ab iss object k andr se mujhe "task" chaiye isliye maine likha { taskObj.task}

-> But ye warning de rha ki humne jo list banai h usme sbki ki unique key honi jaruri h.
-> Unique Key k benefits ye h jb mai todo pe delete button dabaunga to to usse aasani se pta chl jaega ki jo ye delete button daba h ye kn si wali id ka daba h -
-> For example,
Delete
Delete  -> click
Delete
-> 3 delete button h usme se ek m click kr deta hu to mere react ko mujhe btana hoga ki maine kn sa delete button pe click kiya h. To react bolega tm jo itne saare elements render kr rhe ho, unn sb elements k aage ek naam de do jisse aasni se pta chlega kn si button clcik hui and kn si element delete hogi. (isse rendering fast hogi)

-> Ab <li> k andr id denge -
            return(
              <li key={taskObj.id}>
                <p>{ taskObj.task}</p>
                <button>Delete</button>
            </li>
            );

-> Ab mai ye chahta hu ki jb mai input text pe kb kuch likh k submit pe click kru to wo niche appear ho jae mere list k andr. But kaise krnge?
=> Input k andr kuch v likhte h to wo input box change hota h to ek event hota h jiska naam h "onChange". To main apne input ko bolunga "onChange{}" fir ek function banaenge jiska naam rkhte h "handleChnage" -> "onChange={this.handleChange}" -

render() {
    return (  //jsx starts from here
      //<div>Todo</div>
      <div>
        <input type="text" onChange={this.handleChange}/>
        <button>Submit</button>
        { //use when need to write JS in JSX
          this.state.tasks.map((taskObj) => {
            return(
              <li key={taskObj.id}>
                <p>{ taskObj.task}</p>
                <button>Delete</button>
            </li>
            );
          })
        }
      </div>
    )
  }

-> Ab hum constructor k bahar ek method banaenge "handleChange" -

  handleChange = ()=> {
    
  }

-> Ab mai ye chah rha hu ki jb mai ye function call kr rha hu to automatically iske andr ek "e" aa jaata h. Pehle log kr k dekhte h -

  handleChange = (e)=> {
    console.log(e.target.value);
  }
-> Mai apne input text pe "swiggy" likhta hu to console m aise aa rha h -

Todo.js:14 s
Todo.js:14 sw
Todo.js:14 swi
Todo.js:14 swig
Todo.js:14 swigg
Todo.js:14 swiggy

-> "e.target.value" se ye hoga ki jitni baar mai input daal rha hu utni baar se change/update ho rha h and at last "swiggy" show kr rha

Note : Humne pdha tha jb v state change hogi to humara render method baar baar call hoga -
-> Agar hum "s" likhnge to "s" show rkna chaiye fir agar "w" likhnge to "sw" show krna chaiye -
(ek curTask: "" bana k empty string de diye qki isi k andr to mai record karunga. Means Input tag k andr kuch v likhnge to wo mere "curTask" k andr record hona chaiye)
=> curTask: e.target.value -> krne se hoga
-> Ab input tag m value ki bana lenge -
    "value={this.state.curTask}"

Console : Ab jaise jaise mera state change ho rha to re-render ho rha h -
Note : Jb v state change hogi to humara render method call hoga
---------------------------------------------------------------------------------------------------
Note : We will see later
-> Hum spread operator use krnge qki imagine humne ek task likha to mai chahta hu ki mera jo "tasks" naam ka array of object h tasks=[{},{}] wo to aae hi aae aur uske andr new wala object add ho jae - "task=[{},{},{}]". So, mere paas ek aisa task aae jiske andr mere puraane tasks ho aur new wale tasks v ho.
Way-1 : Puraane task ko likh dena aur spread operator kr k new ko daal dena fir ek array m enclosed kr denge -> task=[...{}]
(ek curTask: "" bana k empty string de diye qki isi k andr to mai record karunga. Means Input tag k andr kuch v likhnge to wo mere "curTask" k andr record hona chaiye)
---------------------------------------------------------------------------------------------------

Debouncing & Throttling:
-> Jb hm flipkart pe search kr rhe hote h like we search "iphone" ab jaise hm "i" likhte h to isme v "onChange" wala event listener laga hota h to ye ja k "i" se bahut saare result le kr aata h lekin problem ye h ki isse server ko bahut saare calls lg rhe h qki ye "i" krega aur database m jaa k search kr k aaega ki kaha pe use ho rha h aur "i" se kya kya aata h. "i" se start hone wale top results laa k show kr dega but agar user bina pause k likhega to uske baad result fetch ho k aata h. So, this debouncing and throttling makes our calls to database very less so humare server ki cost km ho jaati h qki jitne baar hm call krnte h server wale company se waise paise lete h.

-> Ab code likhnge ki button ko jb click krnge to submit krnge to handleSubmit naam ka ek function bana lete h -

handleSubmit = ()=> {
    
  }
-> Ab isko "this.setState" aur isko bolnge tasks k aage poora spread kra denge -
    this.setState({
        tasks:[...this.state.tasks, {task:this.state.curTask, id:this.state.tasks.length+1}]
    })
-> Aur id mai maine ye kiya ki jo mere tasks k array k length h na usme +1 qki maine shuru mai Id=1, Id=2 diya h to avi tk length =2 thi to ab length = 2+1 -> 3 hoga

export default class Todo extends Component {
  constructor(){
    super();
    this.state={
      tasks:[
        {id:1, task:"Revise JS"}, 
        {id:2, task:"ReviseDSA"}
      ],
      curTask:""
    }
  }

  handleChange = (e)=> {
    console.log(e.target.value);
    this.setState({
      curTask: e.target.value
    })
  }

  handleSubmit = ()=> {
    this.setState({
      tasks:[...this.state.tasks, {task:this.state.curTask, id:this.state.tasks.length+1}]
  }) 
  }

  render() {
    console.log("render method is calling");
    return (  //jsx starts from here
      //<div>Todo</div>
      <div>
        <input type="text" value={this.state.curTask} onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>Submit</button>
        { //use when need to write JS in JSX
          this.state.tasks.map((taskObj) => {
            return(
              <li key={taskObj.id}>
                <p>{ taskObj.task}</p>
                <button>Delete</button>
            </li>
            );
          })
        }
      </div>
    )
  }
}



Note : "this.setState" ek inbuilt function jo humare state ki value ko change kr skta h. To jb isko bulaya jaata h tb render() ko pta chl jaata h ki agli baari meri h