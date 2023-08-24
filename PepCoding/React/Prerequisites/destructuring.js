//Type-1 of array destructuring
[a, b] = ["FJP", 5];
console.log(a); //FJP
console.log(b); //5

// Type-2 of array destructuring
[n1, ,n3] = [1, 2, 3];
console.log(n1);    //1
console.log(n3);    //3


//Object destructuring
let obj = {
    name: "Suhana",
    age: 23
  }

// let { age } = obj; 
// console.log(age);   //23

let { age : bbb } = obj; 
console.log(bbb);   //23