function help() {
    console.log(`
        These are some myCLI commands used in various situations:

            1. node main.js tree <path>
            2. node main.js organize <path>
            3. node main.js help
    `);
}

function abc () {
    console.log("in help.js");
}

module.exports = {
//key-value pair
    help:help
    // haathi:help,
    // ghoda:abc
}
//Export isliye qki hmne jo function likha hai ye fncn main.js ko accessible ho
//iska naam change kr k v export kr skte hai - help:help
//hum multiple chije v export kr skte hai
 /*
 module.exports = {
     haathi:help,
     ghoda:abc
}
-> ghoda:abc is key-value pair means mai apne function koi v naam de skta hu.
-> haathi:help means mai haathi k andar apne help() function daal rha hu
//ab hum main.js m import krnge
*/