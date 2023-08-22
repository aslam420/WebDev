//Question-1
let randomValue = { name: "Lydia"};
randomValue = 23;

if (!typeof randomValue === "string") { //false -> boolean === string 
    console.log("It's not a string!");
} else {
    console.log("Yay it's a string!"); //this will print
}

/*
typeof operator return value in string  //"Number"
! operator booleans m hota hai // "Number" ko false kr dega
*/
// Example
var a = 10;
console.log(a === 10);    //true
console.log(a === "10");  //false

// Example-2 :
var b = 10;
console.log(a == "10"); //automaticType Conversion -> true

// Question-2
const user = {
    email: "my@email.com",
    updateEmail: function(email) {
        this.email = email
    }
}

user.updateEmail("new@email.com")
console.log(user.email)


// Question-3
const fruit = ['banana', 'orange', 'apple']

fruit.slice(0, 1)
fruit.splice(0, 1)
fruit.unshift('grape')

console.log(fruit)


// Question-4
let count = 0;
const nums = [0, 1, 2, 3];

for(var i in nums) {
    if (i) count += 1
}

console.log(count)


// Question-5
const emojis = ['Xmas tree', 'Santa', 'Gift', 'star'];

// /*1*/ emojis.push('reindeer');
// /*2*/ emojis.splice(0, 2);
// /*3*/ emojis = [...emojis, 'whiskey']; //...emojis -> spread comparator
// /*4*/ emojis.length = 0;
var ans = [...emojis, 'whiskey']; //spread operator
console.log(emojis);
console.log(ans);


// Question-7
const person = {
    name: 'Lydia Hallie',
    address: {
        street: '100 Main St',
        }
    }

//properties cnnot be added, deleted and modified
//only freezes array at level one
//shallow freeze
Object.freeze(person);

// person.name = "Evan Bacon"
// delete person.address
person.address.street = "101 Main St" //answer
// person.pet = { name: "Mara"}
console.log(person);



//Question-8
const person1 = { name: 'Lydia Hallie'};

//properties cnnot be added, deleted but can be modified
Object.seal(person1);

person1.name = "Evan Bacon"
// person1.age = 21
// delete person1.name
// Object.assign(person1, { age: 21})
console.log(person1);


//Object.assign() - (Issue)
// const info = {  //source object
//     age: 21,
//     fruits: ["Apple", "Orange"],
//     isMale: true,
// };
//             //target //source 
// Object.assign(source, info);
// console.log(source);


// Question-9
const fruits = ['Mango', ['Guava', 'Guava', ['Lichi', 'Lichi']]]; 

// concatinate -> means 2 chijo ko jodna-> mango+guava wala array bcoz humne ek parameter diya tha (1)
console.log(fruits.flat(Infinity)); //default value is one (1)
// [ 'Mango', 'Guava', 'Guava', [ 'Lichi', 'Lichi' ] ] ->fruits.flat(1)
// [ 'Mango', 'Guava', 'Guava', [ 'Lichi', 'Lichi' ] ] ->fruits.flat(2)
console.log(Infinity);
console.log(typeof Infinity);   //number 

/*
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
*/ 

// Question-10

function getInfo() {
    console.log(typeof randomValue);
    var randomValue = 'Lydia Hallie';
    // console.log(randomValue);
}

getInfo();


// Question-11
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


// Question-12
const groceries = ['banana', 'apple', 'peanuts'];

if(groceries.indexOf('banana')) {
    console.log('We have to buy bananas!');
} 
else {
    console.log(`We don't have to buy bananas!`);
}

// Question-13
const person3 = {
    firstName: 'Lydia',
    lastName: 'Hallie',
    pet: {
        name: 'Mara',
        breed: 'Dutch Tulip Hound',
    },
    // getFullName: function getFullName() -> ES6 m koi fncn likhte hai to usme uske key ka name dena jaruri nai h
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

console.log(person.pet?.name);
console.log(person.pet?.family?.name);
console.log(person.getFullName?.());
// console.log(member.getLastName?.());    //ReferenceError

// Question-14
let num = 1;
const list = ['Smile', 'Sad', 'Happy', 'Love'];

console.log(list[(num += 1)]);

// Question-15
function sumValues(x, y, z) {
    return x + y + z;
}

// sumValues([...1, 2, 3])         //TypeError: 1 is not iterable
// sumValues([...[1, 2, 3]])          //NaN
// sumValues(...[1, 2, 3])      //answer
// sumValues([1, 2, 3])
console.log(sumValues([1, 2, 3])); //D: 1,2,3undefinedundefined
console.log(sumValues(...[1, 2, 3])); //C: 6
console.log(sumValues([...[1, 2, 3]]));

// Example of console.log(sumValues([...[1, 2, 3]]));
let arr = [1,2,3];
console.log(arr);
console.log([...arr]); //replace arr -> 1,2,3
console.log([...[1,2,3]]);

// Question-16
const person4 = {
    name: 'Lyndia',
    age: 21,
};

const changeAge = function(x = {...person4}) {
    x.age += 1;
}

const changeAgeAndName = function(x = {...person4}) {
    x.age += 1;
    x.name = 'Sarah';
};

changeAge(person4);
changeAgeAndName();

console.log(person4);

// Question-17
const food = ['pizza', 'chocolate', 'mango', 'burger']
const info = { favouriteFood: food[0] };

info.favouriteFood = 'omlete'

console.log(food);
console.log(info);


// Question-18
const colorConfig = {
    red: true,
    blue: false,
    green: true,
    black: true,
    yellow: false
};

const colors = ['pink','red','blue'];

console.log(colorConfig.red);

// Question-19
function num1(a, b) {
    if (a > b) console.log("a is bigger");
    else console.log("b is bigger");
    return //different lines
    a+b;     //ye statement tk to kvi reach hi ni kr paega qki upr m return pdh k hi wo returnkr jaega
    // return a+b; // 6    3
}

console.log(num1(4, 2));
console.log(num1(1, 2));

// Question-20
const person5 = {
    name: 'Lydia',
    age: 21,
}

for(const [x, y] of Object.entries(person5)) {
    console.log(x, y);
}


// Question-21
// let newList = [1, 2, 3].push(4);    //[1, 2, 3, 4]
//push method returns arr.length
//newList will be equal to 4
// console.log(newList);    //
// console.log(newList.push(5));   //error dega


//Question-22
console.log('I want pizza'[0]);

// Question-23
// function checkAge(age) {
//     if(age < 18) {
//         const message = "Sorry, you're too young.";
//     } else {
//         const message = "Yay! You're old enough!";
//     }

//     return message;
// }

// console.log(checkAge(21));


// Question-24
const person6 = {
    name: 'Lydia',
    age: 21
};

let city = person.city;
city = 'Amsterdam';

console.log(person6);


// Question-25
const users = { name: 'Lydia', age: 21};
const admin = { admin: true, ...users };

console.log(admin);

// Question-26
console.log(3 + 4 + '5');

// Question-28
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);