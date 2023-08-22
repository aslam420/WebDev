function outer() {
    inner();
    function inner() {
        console.log(b);
    }
}
var b = 10;
outer();
console.log(b);

//Scope : where can this variable/function to accessed in the code
// or
// is a variable/function inside the scope of code/functions

//Lexical Env : local memory + lexicall env of parent
// Scope chain : chain of Lexical Environment and the parent references