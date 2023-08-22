function yolo(){
    var a = 10;
    function cb (err, res) {
        if(err){
            console.log(err);
        } else{
        console.log("Hello, how are you?");
        }
    }
    //function to be executes(callback function), time(ms) after which cb to be executed
    // 1 sec = 1000 milli seconds
    setTimeout(cb, 5000);
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