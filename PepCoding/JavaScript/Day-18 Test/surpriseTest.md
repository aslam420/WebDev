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