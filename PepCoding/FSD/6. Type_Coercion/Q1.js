let num1 = 5;
let num2 = "2";

// type coercion -- number to string
// Here num1 chnaged its type from number to string
const result1 = num1 + num2;
console.log(result1);  // 52

//type casting -- parseInt will change the type of data to number
// num2 was string, it got changed to number
const result2 = num1 + parseInt(num2);
console.log(result2);   // 7

// parseFloat()
const n1 = 3, n2 = 2;
console.log(n1/n2);     //decimal value  --> 1.5
console.log(parseInt(n1/n2));   //number --> 1

const n3 = "1.5";
//add n2 & n3
console.log(n2+n3); // 21.5 --> It just merged both of the values
console.log(n2 + parseFloat(n3));   // 3.5
console.log(n2 + parseInt(n3));     // 3