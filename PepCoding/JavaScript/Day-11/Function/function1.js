/*
(3) IIFE - Immediately Invoked Function Expression (3rd Function) -
-> Wo function jisse jaise hi humne define kiye wo tabhi k tabhi call ho jae
aur humein unko alag se call na krna pde*/

function add(a, b) {
    return a + b;
}
add(2, 3);

// Instead of this we can write it as (immediate invoke) -
let additionIIFE = (function add(a, b) {
    return a + b;
})(20, 30);
console.log(""+additionIIFE);
/* Inko maine brackets m enclosed kr diya fir main ek variable banaya 
i.e additionIIFE 
-> (function add(a, b) {
    return a + b;
    })(20, 30);
-> Iss bracket k andr puri function ko wrap kr dene se ekhi baar m poori
function ekhi baar m call ho jaati h declare hote hi
-> Less code*/