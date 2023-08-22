var obj = {

    add: function add(a, b) {
        return a + b;
    },

    sub: function subtract(a, b) {
        return b - a;
    }, 
    hello: 123

}

console.log("printed in temp : "+obj);
//pehle ye file run hogi
//fir export krne pe fs.js m chala jaega aur isko abc copy kr k fir apne file se run krega
module.exports=obj;
//jo mann wo export kr skte h
// module.exports=obj.hello;   //123 sirf jaega
//without module.export hum add & subtract method access ni kr paate.