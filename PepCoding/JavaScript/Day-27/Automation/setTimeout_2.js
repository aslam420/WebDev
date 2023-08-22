// single asynchronous function
const request = require('request');
let url = "https://www.worldometers.info/coronavirus/"
function yolo(){
    var a = 10;
    function cb (err, res, body) {
        if(err){
            console.log(err);
        } else{
            console.log("Hello, how are you?");
            console.log("Status Code is : ", res.statusCode);
        }
    }
    //function to be executes(callback function), time(ms) after which cb to be executed
    // 1 sec = 1000 milli seconds
    request(url, cb);
    console.log(a);
}

yolo();
let b = 100;
console.log(b);

/*
setTimeout() -> wait for a specified no.of time and then execute. It is used for delaying 
but why delay our code to execute it should be fast for Performance na?
console.log("before");
request(url) -> async -> time
console.log("after");
*/