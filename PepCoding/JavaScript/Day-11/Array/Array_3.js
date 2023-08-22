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
//Note : Phle Mustang udega fir JLR udega then print hoga

// (5) find length of an array
console.log(cars.length);


// 2-D Array -
let array2d = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(array2d);
console.table(array2d); //it will print array in table format
console.log(array2d[1][2]);