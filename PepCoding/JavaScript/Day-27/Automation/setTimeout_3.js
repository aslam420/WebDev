// two asynchronous functions
const request = require('request');

console.log("Before");

request("https://www.worldometers.info/coronavirus/", cb);



    function cb (err, res, body) {
            console.log("error", err);
            // console.log(res);
            // console.log(body);
            console.log(typeof body);
    }

    console.log("After");


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