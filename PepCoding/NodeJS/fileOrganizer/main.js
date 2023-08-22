//entry point of our command line

let helpFunc=require("./commands/help");
console.log(helpFunc.help());    //ab helpFunc ek object h
//argv is Argument Vector - standard way to pass arguments to a command line process
//Pehle i/p lete h and first 2 chije ignore krni hoti to slice(2) lete h.
//aur 2nd index se jo aae usko uthana - inputArray m aaegi [0]-> help, [1]-> path
let inputArr = process.argv.slice(2);
//Ab humein command chaiye
let command = inputArr[0];
// path 
let path = inputArr[1];
// node main.js help NodeJS\fileOrganizer\wcat.js

switch(command) {
    case "tree":
        //call tree function
        console.log("tree function called and executed successfully : "+path);
        break;
    case "organize":
        //call organize function
        console.log("organize function called and executed successfully : "+path);
        break;
    case "help":
        //call help function
        // console.log("help function called and executed successfully : "+path);
        helpFunc.help();
        break;
    default:
        console.log("command not recognized :/")
        break;
}