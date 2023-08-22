// 2nd problem with var keyword -
var num = 10;

for(var j=0; j < num; j++){
    if(j % 2 == 0){
        console.log(j);
    }
}
console.log("value of j is "+j);
/*
Maine jo i banaya wo iss for loop k andr banaya fir v mujhe iss for loop
k bahar accessible h. Why?
-> Qki jo var keyword h na wo function scoped hota hai. Function Scoped
    means wo apne curly braces { ---- } k bahar accessible h.

Example ->
            {
                this space between opening and closing of curly braces is a block
            }

*/

for(let i=0; i < num; i++){ //Iss block k bich m i milega, iske bahar non-accessible h
    if(i % 2 == 0){
        console.log(i);
    }
}
// console.log("value of i is "+i); //ReferenceError: i is not defined


/*
for loop k andr m block h uske bich m sirf i accessible h, uske bahar accessible nai h
Agar hm 'i' ko access krna chahte h to 'i' ko bahar laana pdega
*/

let i;  //'i' ko access krne k liye bahar declare krna pdega
for(i=0; i < num; i++){ //Iss block k bich m 'i' milega, iske bahar non-accessible h
    if(i % 2 == 0){
        console.log(i);
    }
}
console.log("value of i is "+i); 

// Example of Global Scoped -> we can access outside for loop also
for(var k=0; k < num; k++){ //Iss block k bich m 'i' milega, iske bahar non-accessible h
    if(k % 2 == 0){
        console.log(num); //var num ko if loop k andr v print kra skte h bcoz it is global variable
        console.log(k);
        var hello = 1000;
        console.log(k);
    }
}
console.log("value of k is "+k); 
console.log(hello);


/* 
(a) var keyword is a function scoped
-> Agar maine koi function likha aur uske andr {curly braces ko 
    block kehte h} mere blocks h. To agar mai var keyword iss function 
    k andr bana rha hu to wo uss function k andr har jagha available hoga
-> Jb hum function nahi likh rhe hote h to var keyword global scoped hote hai
    aur jb function likh rhe hote hai to function scoped
-> var num ko if loop k andr v print kra skte h bcoz it is global variable
    So agar hum var keyword ko loop k andr initialize krte h to usko loop k
    bahar se v print kra skte h.

Note : index.js file k andr jo v code likhe h usko hm bolnge global scoped
    like mai koi v variable kahi v likhu to usko kahi se v access kr skta hu
    because jb hum var keyword ko initialize krta hu kisi value se to wo 
    globally banta hai, ye ni ki if k andr bn rha h.  Isliye ye if k
    bahar m print ho paa rha h

 (b) let keyword is blocked scoped -
-> Agar mai let keyword banata hu ek function k andr {let a = 10;}. To jo
    let kryword hoga na wo sirf iss block m available hoga
-> But agar 'i' ko access krne k liye bahar declare krna pdega.
-> Cruly braces {-------} jo v chijo ko wrap kr leta h wo area block scoped 
    kehlata hai.
    Example -
            if(k % 2 == 0){
                var hello = 1000;
                console.log(k);
            }
    Aur ye for loop k andr jo braces h usme sama rha h isliye isko block bolte h.
-> let keyword is block scoped to hm bolte h let jis block k andr defined hua h
    wo sirf usi braces k andr accessible hoga.
    */

let m = 20;
for(var k=0; k < num; k++){
    let m = 200;
    if(k % 2 == 0){
        var hello = 1000;
        // let bye = 2000;     //ReferenceError: bye is not defined
        console.log(k);
    }
    console.log("inner "+m);
    console.log("inner "+hello);
    // console.log(bye);   //ReferenceError: bye is not defined
}
console.log("value of k is "+k); 
console.log(hello);    
console.log("Outer "+m);

/* Two different 'let' keywords with one name -

Humne pdha tha 'let' keyword reinitialize nhi hota fir v let m = 20;
fir for loop k andr let m = 200; kaise ho gya?
-> Yaha 'm' redeclare nhi hua h. Jo for ka block hai iske andr declare hua h
let m = 200; aur isko andr use hua aur isi k andr khtm v ho jaega. Ye bahar
nhi aata. 
Agar mai bahar console.log(m) krwa rha hua to 200 thode print ho rha h.
Output : 20 aa rha.
Aur agar m andr k console.log(m); likhta hu to 
Output : 200
It means let m = 20; and let m = 200; dono different different container h.
*/
