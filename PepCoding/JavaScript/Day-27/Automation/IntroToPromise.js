const fs = require('fs');

//readFile( ) method ko bolnge 'f1.txt' usko pdh k le aao aur saath m callback dete h
fs.readFile("f1.txt", callback);

function callback() {
    //isme data ko log krwa denge
    console.log(data);
}
