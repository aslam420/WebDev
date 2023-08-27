let num = 16;

if(num % 2 == 0){
    console.log("Number is even");

    if(num % 3 == 0){
        console.log("And Yes! it is divisible by 3 also");
    } else {
        console.log("But it is not divisible by 3");
    } 
} 
else{
    console.log("Number is odd number");
}

// we can also put if-else inside "else" part.