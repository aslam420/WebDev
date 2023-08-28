const num = -4;

switch(true){
    case(num > 0) :
        console.log("Positive");
        break;
    case(num == 0) :
        console.log("Zero");
        break;
    case(num < 0) :
        console.log("Negative");
        break;
    default :
        console.log("invalid input");
        break;
}