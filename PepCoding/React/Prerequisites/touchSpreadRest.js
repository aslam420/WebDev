// spread operator : It is used to split up array element or object properties

const nums = [1, 2, 3];
const newNums = [...nums, 4];   //[[1,2,3],4]
console.log(newNums);

const oObj = {
    name: "Mohammad Aslam",
    age: 26
  }

const nobj = {...oObj, age:32}  //name : Mohammad Aslam, age: 32 //overidden the age

console.log(oObj); // //name : Mohammad Aslam, age: 26

// Rest Operator : It is used to merge a list of function arguments into an array
function fun(...args){
    console.log(args);
    console.log(typeof args);
    args.forEach(arg => {
        console.log(arg);
    })
}

fun("Hello", "how", 2 , true);