/*
string is a sequence of characters
-> String m bahut characters hote hai like - 'h' is one character, blank space
    is also one character.

-> slice method - Isme ek start index dete h aur ek end index aur uske bich
                    ki jo string hote h isse wo kaat deti hai.
*/ 

var str = "Hello future coder";
// H  e  l  l  o  <space>  f  u  t  u  r  e  <space>  c  o  d  e  r 
// 0, 1, 2, 3, 4,    5,    6, 7, 8, 9, 10,11,   12,   13,14,15,16,17
console.log(str);
console.log(str[4]);
console.log(str.length);

//String methods -

// (1) Extraction method
// (a) slice method -
//  -> slice(start, end+1); -> start index is inclusive(shuru hoti h) and end index is exclusive(Isko exclude kr deti h)
//jo string kt rhi wo slicedStr k andr store ho rhi aur original string (str) change ni hoti(usko harm ni pahuchata)
//so it means agr mujhe kisi string ki koi part chaiye to without hamper kiye mai uska part kaat k le aaunga

let slicedStr = str.slice(6, 12); //6th index se shuru hoga aur 12th index se ek phle string tk kategi
console.log(slicedStr); //without hampering original string we can use their part of string
console.log(str);   //original source of information will not changed


let slicedStr1 = str.slice(6); //6th index se shuru hoga jo last index tk jaega
console.log(slicedStr1);

let slicedStr2 = str.slice(6, -2); //6th index se shuru krni h lekin last k 2 index chorni h
console.log("minus "+slicedStr2);

// (b) substring method - 
// substr(start, length); start index se shuru hoga fir btaenge aage k kitne characters capture krna h (6 characters)
let slicedStr3 = str.substr(2, 6);
console.log(slicedStr3);
console.log(str);
//Note : Ye method aisa isliye aa rha bcoz this method is no longer in use

//changing to lowercase
let slicedStr4 = "YOLO";
console.log(slicedStr4);
console.log(slicedStr4.toLowerCase()); //yolo

//changing to uppercase
let slicedStr5 = "fomo";
console.log(slicedStr5) //information is intact and has not been tampered with
console.log(slicedStr5.toUpperCase()); //FOMO

//(c) concatenation method -> concatenation means kisi do chijo ko jodna
let firstStr = "Believe in ";
let secondStr = "yourself";

let concatenationedStr = firstStr+secondStr;
console.log(concatenationedStr);

let concatStr = firstStr.concat(secondStr, " and me");
console.log(concatStr);


//(d) trim method -> removes all the whitespaces of starting and ending of a string

let trimStr = "        Hello    World       ";
console.log("Before triming, count of characters are -")
console.log(trimStr.length);
console.log(trimStr); //space aa gya isme

console.log("After triming, count of characters are -")
console.log(trimStr.trim().length);
console.log(trimStr.trim()); //string k andr k shuru and last k jitne spaces h sb nikal dnge


//Note : String is Immutable -> 
var immutableStr = "Hi String";
console.log(immutableStr);    //Hi String
console.log(immutableStr.length); //9

immutableStr[9] = "s"; //strings are immutable
console.log(immutableStr);    //Hi String
console.log(immutableStr.length); //9