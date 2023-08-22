
Concept of Bottleneck -
 __________________________
 |                         \
 |                          \_______
 |                          (Bottleneck)
 |                           _______
 |                          /
 |_________________________/

 5 MAANG companies hai jisme ek lakh se v jyda log kaam krte hnge aur shuru
 mai sb bootle k ekdm niche hote hai but with experience wo upar jaate hai.
 But bahut saare log hai aur sb iss bottleneck se sb nahi nikal paate. Aur agar
 humein iss bottle neck ko cross krni hai to sincere rehna pdega.

-----------------------------
Objects - (bjects smjhne k liye humein 2 chije pdhna pdega isme)
(a) Properties - 
-> Agar hum koi string bnate h -
    var str = "Hello";
    str.length  //5
    Agar mai str.length krta hu to output 5 aaega qki string ki length 5 hai. 
-> String ki property hoti hai .length naam ki jo humain btata hi ki string ki length 5 hai.

    str.length         -> //5       (property)
    str.toUpperCase(); -> //HELLO   (method)

JS Values -
(a) Number
(b) String
(c) Boolean
(d) null
(e) undefined
(f) NAN
Note : Lagbhag har JS values ki property hoti hai, sirf null or undefined ko chor k.

Properties can be accessed in two ways -
1) dot notation
2) square bracket notation


(1) DOT NOTATION -> Maine str likha fir property access krne k liye humne dot laga k property name likha (.length).

(2) SQUARE BRACKET NOTATION -> str["length"] likhu to isse v answer aaega.

Note : Humari ye dono chij objects m use hoti hai.

What is object?
-> Object wo chij h jaha par hum apna data rakhte hai.
    Or,
-> Objects consists of properties and methods which are represented in key: values pairs. It is collection of data.
-> In JS, everything is Objects.


Objects ->
variable <------------------> property (means variable inside object)
function <------------------> method (means function inside object)

Jb mai variable ko aur function ko object k andr daalta hu na to variable ka naam property h jaata h aur function ka naam method ho jaata hai.

dot notation
bracket notation

let car = {
    key     value
    name  : Ferrari",  //properties
    model : 2022,      //properties
    hp    : 4000       //properties
};

(1) Dot Notation ->
Ab mujhe car k baare m janna h to (object name)cars fir ek dot lagate h (.) aur fir uss (object ki property)model ka name.
Syntax : obj_name.obj_ki_property_name
Ex : car.model  //car ka kn sa model h
Aur mai ye tbhi pta lga paa rha hu jb mujhe object ki property name pta hai.

(2) Bracket Notation ->
Hum aise v likh skte h -
car["model"] -> ye v humein 2022 print kr k dega
Humne model ko strings m daal diya q ki mujhe maalum h ki mere object ki property h uska naam kya h.

Iski jarurat kya hai? Aur isse kaise use kre? Kb use kre?
Humne ek array banaya -
let arr = ["Hello", "how", "are"]

Ab hum array ko kaise access krte hai?
arr[0];
arr[1];
arr[2]; //ye sb bracket notation hi to hai
Aur humein ye dkh k pta chl rha ki bracket notation kb use krte hai?
Jb bracket k andr dalne wali chij ek variable ho

or we can write it as -
let arr = {
    0: "Hello",
    1: "how",
    2: "are"
}

Hum arr.0 q ni likh skte?
-> Qki humne key value pair m jo key banayi hai wo ek numbers likhe hue  hai to isliye usme humein bracket notation use krni hoti hai.

Hum bracket notation kb use krte hai?
-> Hum bracket notation tb use krnge jb ek variable k andr humari property name padi ho. (means humein property ka naam direct ni pta chl rha ho).

for(let hathi in car) {
    console.log(hathi); //agar mujhe sirf object ki proprty name dega
    console.log(car[hathi]); // obj property ki value dega
}

Note : console.log(car[hathi]);
-> isme car khud dot mai convert ho jaata h like car.name -> Ferrari
-> Fir se for loop m agli baar hathi k jagha model aaega -> 2022


this keyword :
let car = {
    name: "Ferrari",
    startengine: function() {
        console.log("starting the car $(`this.name`);
    }
}

Yha pe this keyword means hum jis object k andar hai. 
Avi hum car keyword k andar h na to this means -> car hai, aur hum this keyword tabhi use kr skte hai jb hm uss object k andar ho. 
To this.name -> car.name -> "Ferrari" aa jaegi