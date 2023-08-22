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