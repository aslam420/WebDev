const temp = 10;
const isRaining = true;

if((temp >= 20 && temp <= 25) && isRaining == false){
    console.log("Children can go outside and play in the park");
}
else if((temp >= 18 && temp <= 20) && isRaining == true){
    console.log("Children should stay in the play school");
}
else{
    console.log("Do not step out of the house");
}