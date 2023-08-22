// Array-> is a collection of elements
// In JS, we can store anything in an array

let cars = ["BMW", "AUDI", "MG", 1, 2, 3, true];
console.log(cars);
/*
In JS, we can store different values of different types in an Array
*/

//Accessing the elements of an array
console.log(cars[0]);
console.log(cars[3]);


//replacing elements in arrays
cars[3] = "Mahindra";
console.log(cars[3]);

//adding elements in an array
cars[7] = "Tata";
console.log(cars);


//Methods/Properties of an Array -

// (1) pop method -> This method removes the element from the last of an array

cars.pop();
console.log("after poping the element-\n"+cars);

// (2) push method -> It pushes a new element at the end of an array

cars.push("Honda");
console.log("after pushing an element -\n"+cars);

// (3) unshift method -> This adds element at the starting of an array

cars.unshift("JLR");
cars.unshift("Mustang");
console.log(cars);

// (4) shift method -> It removes element from 0th index of an array

cars.shift();
cars.shift();
console.log(cars);
console.table(cars);
//Note : Phle Mustang udega fir JLR udega then print hoga

// (5) find length of an array
console.log(cars.length);


// 2-D Array -
let array2d = [
    ['BMW', 2, null, 45],
    [4, true, 6],
    [7, '8', 9]

];  //array of arrays

["a", "b", "c"]     //array of string
[1, 2, 3]           //array of numbers

console.log("Printing 2d array");
console.log(array2d);   //it prints 2d array

console.log("Printing 2d arrayin table format"); 
console.table(array2d);//it will print array in table format

console.log("Printing elements of 2d array");
console.log(array2d[1][2]); //means 1st index pe jaa k 2nd cmma k baad wali value select krni hai

let res = array2d[2];
console.log("printing of res array");
console.log(res);

console.log("res of 2nd index");
console.log(res[2]);
console.log(array2d[1][2]);
console.log(array2d[1][3]);   //undefined -> means waha pe koi value ni hai
console.log(array2d);
console.log(array2d[0]);
console.log(array2d.length); //number of rows in a 2d array
console.log(array2d[0].length);    //numbers of columns in a 2d array


//Note : JS m koi v chij jiski koi value ni hai wo undefined print hoti hai

//Memory Allocation in 2dArray - (done)


//2d mai value kaise daale?
array2d[1][1] = false;  //true -> false
console.table(array2d);

//How to change directory?
//cd -> change directory(folder)
//ls -> listing of project files
// .. -> double dot means go back
// command -> cd folder_name 1:19:15



