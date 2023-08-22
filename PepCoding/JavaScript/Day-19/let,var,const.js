// TDZ
console.log(x);
// console.log(y); //TDZ -> ReferenceError: Cannot access 'y' before initialization
var x = 10;
let y = 100;
console.log(y);


// Block Scope  
{
    var a = 10;
    let b = 20;
    const c = 30;

    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(a);
// console.log(b);
