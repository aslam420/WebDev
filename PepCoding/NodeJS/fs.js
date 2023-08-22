//fs-> file system module -> it helps us to make file/folders append data in them, delete data, read data etc...
//require is module bulaane ka tarika and fs(in-built module) is the path jisko bulana h
const fs = require("fs");
/*require keyword -> jb hm node install krte hai to bahut space leta hai 
to uske andar bahut saare predefined codes likhe hote h, and one of the 
module is 'fs' module jiske andar code likha gya h ki jb koi banda bole ki
fs.appendFileSync to hume kya kya krna pdega.
fs -> object, appendFileSync() -> method defn written inside 'fs'

-> require se 2 kaam hote h.
1) Kuch v chij ko apni iss fs.js jo file h uske andar bulaane ka tarika
Ab iss file k andar mujhe fs module ko bulana hai jiske through hm uske
functions access kr pae like appendFileSync.
const fs = require("fs");
aur aise inko require krte hai. //require("path_in_strings")
But agar hum aise kre (temp.js file chaiye jisme add and sub methods h) -
*/
// const f1 = require("./f1.txt");
const abc = require("../JavaScript/Day-19/temp"); //iss tarike se kisi file se kuch mangwa skte hai aur jaha se chaiye uski path deni rehti h
//require method goes to the file that is needed to be required. Executes that file 
// and if there is something that is returned/exported we get that in variable 'abc'
console.log("printed in fs.js : "+abc);    //copying data from temp bcoz of export
let ans = abc.add(26, 48);    //temp se copy ho k abc m aai due to export then uss function ko abc m chalae input de k
console.log(ans);

//let's see 'fs module' kaisa dikhta hai and uske andr kitne methods h -
// console.log(fs);


//appendFileSync appends data into a file, if file is present, it creates the file and then appends the data
// Synchronously append data to a file, creating the file if it doesn't yet exists. 'data' can be string or a <buffer>
                            //fileName  //message inside that file
let res = fs.appendFileSync("f1.txt","\nHello i am f2 file\n");
fs.appendFileSync("f1.txt","You guys are smart")
console.log(res);

//ye file to read krega -> means mai jo file path provide krunga String m uske contents mujhe dega
// let data = fs.readFileSync("f1.txt");
// console.log(typeof data);   //object
// data is an object type, data is in buffer format.
//For it to be readable, we convert it from buffer to string
// console.log(data+"");       //automatic type conversion(1st way)
//automatic type conversion se automatic string m convert ho gyi h

//utf-8 means insaani bahasa m pdhna taaki hmko v samajh aae
let data = fs.readFileSync("f1.txt","utf-8"); //(2nd way to print)
console.log(data);


/*
<Buffer 48 65 6c 6c 6f 20 69 20 61 6d 20 66 32 20 66 69 6c 65 48 65 6c 6c 6f 20 69 20 61 6d 20 66 32 20 66 69 6c 65 0a 48 65 6c 6c 6f 20 69 20 61 6d 20 66 32 ... 79 more bytes>
Ye kuch buffer jaisa print ho gya. ye Kya h?
-> Jaise hmare file se data pada aata h na to buffer ek object type hai
aur wo buffer m isliye aata h qki ye encoding & decoding hoti hai. To jb 
v data write krte hai file m to humein string m dikhta hai but actually
andar hi andar ye buffer m store hota hai aur ye jb pdhne lgta h na to 
buffer ko hi padhta hai aur buffer utha k le aata hai. Buffer means
encoding -> koi code h jisse wo input-output fast karta hai. Qki computer
ki language english nai h, aur wo humare liye decode kr k laata h but ye
encoded h, decoded nai h. Aur ye iss tarah se isliye krta h ki buffer se 
read and write fast hota h aur baad m wo encode and decode krna hota h.
To iss buffer ko string m convert krna pdega qki buffer computer ko
samajh m aati hai, humein nahi*/

// fs.existsSync(path)-> Returns true of the path exists, false otherwise
//means hmne diya agar wo file exist krti h to wo true print krega otherwise false

// Note : Hum avi sirf sync wale functions use kr rhe h. Async wale baad m krnge
