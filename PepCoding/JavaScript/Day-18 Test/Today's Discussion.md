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