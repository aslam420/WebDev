// class, constructor
// class Penguin{
//     constructor() {
//         this.habitat = "Antartica"
//     }
//     printPlaceOfOrigin() {
//         console.log(this.habitat);
//     }
// }

// const myPenguin = new Penguin();
// myPenguin.printPlaceOfOrigin(); //Antartica
// console.log(myPenguin);
/*
Output : Inspect > Console
Antartica
Penguin {habitat: 'Antartica'}
habitat : "Antartica"
[[Prototype]] : Object
*/


// Inheritance (extends keyword)
// class Bird {
//     constructor() {
//         this.eats = true;
//     }

//     printHabits() {
//         console.log(this.eats);
//     }
// }

// class Penguin extends Bird{
//     constructor() {
//         super();    //used to run the constructor of the parent
//         this.habitat = "Antartica"
//     }
//     printPlaceOfOrigin() {
//         console.log(this.habitat);
//     }
// }

// const myPenguin = new Penguin();
// console.log(myPenguin);
// myPenguin.printPlaceOfOrigin();
// myPenguin.printHabits();

// Must call super constructor in derived class before accessing 'this' or returning from derived constructor


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