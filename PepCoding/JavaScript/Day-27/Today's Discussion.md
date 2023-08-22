Scrapping is used in -
1) Testin Industry
2) Data Collection Industry (Data Analyst/Data Scientist)

Automation -
Automation k andar hum aisa code likhnge ki koi v browser m koi v website khol skte hai, uss site pe login kr skte hai agar option hai to aur fir jo kaam chahe wo krwa skte hai automatically.

Automation is used for -
1) Testing Industry
2) Instagram like and comment bot.

After HackerRank and Automation Project, we will study -
1) Asynchronous JS - Concept completed in espn_webscraping
2) Promises
3) Async/Await
4) Event Loop

Introduction to Promises :
--------------------------
Means hum Burger King ko paise de rhe hai badle m cheeze burger k. So, basically it's a promise ki hm paise denge wo badle m burger dega 10 min m.

So, Promise k 2 states aate hai -
1) Either fulfill hoga (burger delivered)
2) Promise Reject (means bruger khatam)

Hum criteria rakhte hai ki agar humara prmoise fulfill ho jaega then what will you do? Uske liye kuch function h like .then(eat). Aur agar promise reject ho gya then .catch(money) means paise lenge aur chalte banenge.
Note : Kind of if-else.

Callback function/request function ye yhi kr rha tha -
request(url, callback)
Means jb koi kaam ho jaega (response aaega) tb callback function chalega. In short, jb pehla kaam khtm hoga tb callback execute hoga.

Then what is the difference between 'callback' function and 'promises'?
-> Promises are syntactical sugar of callbacks.

Then why promises are better?
-> When we wakeup, ek brush function chalaenge, aur agar bursh ho jaega to ek 'callback' hoga ki 'breakfast' kr k aa janege. Aur hum breakfast tabhi kr k aa paenge jb humne brush kr liya.
    function wakeup(brush, breakfast)
-> Ab breakfast() function aaya humare paas. Ye 'breakfast( )' bolta hai ki breakfast krne k baad hum apna office jaenge then office jaane k baad hi hum apne laptop on kr skte hai
    function breakfast(office, laptop)
So, ye callback hai aur inke andar aur saare callbacks hai.
There is one thing 'callback hell', so avi bass itna samajh le callback bekar chij hai aur promises isse better chij hai.
Note : In future, callback hell banaenge then usko promises se thik karnge and promises k upar async/await lga k dekhnge.
Note : Promises (Better Version) > Callback

Q) Hum if-else q ni use kr skte hai?
-> Agar koi kaam 'Asynchronous' ho rha hai to 'request' ka wait krta rahega aur niche jo code h wo chal jaega, to if-else concept kaise kaam krega.





















Agenda :
1) Callbacks
2) Promises
3) How Asynchronous code works
4) setTimeout, setInterval
5) Async/await -> Intro
6) HW -> Automation
Note : POC means Proof Of Concept (Theory of Projects)

Ab hum setTimeout dekhnge -
-> Ye ek callback function ko leta h aur isko jo bolte h wo kaam krta h -
function yolo(){
    var a = 10;
    setTimeout(function() {
        console.log("Hello, how are you?");
    })
}
-> Ye string ye print krega lekin ye ek aur argument leta h ki kitne microseconds baad mujhe iss function ko execute krna h.
-> For example, if we say 5000 ms, so, after 5 sec ye console pe string print kr dega.
function yolo(){
    var a = 10;
    setTimeout(function() {
        console.log("Hello, how are you?");
    }, 5000);
}
-> So basically 2 arguments h -
(a) callback function
(b) kitne ms baad humara callback function execute hoga

function yolo(){
    var a = 10;
    function cb () {
        console.log("Hello, how are you?");
    }
    setTimeout(cb, 5000);
    console.log(a);
}

yolo();

Output :
10
Hello, how are you?

-> Pehle mere paas 'a' = 10 variable thi. Agar synchronous kaam kiye hote to setTimeout chalta to 5 sec tak ye wait krta - " Hello how are you?" print hota. Fir wo next line pe jaata. Lekin ye synchronous kaam nai kiya, asynchronous kaam kiya q ki setTimeout ek asynchronous function h.

-> setTimeout(cb, 5000); takes a callback function and number of milliseconds after which the function should be executed. 
-> Ek clock h jo note krti h 5000 ms tk honge aur jaise hi humare 5000 ms ho jaenge to ye function 'cb' ko execute kr dega. So, basically mere 'cb' function k saath ek clock attach ho gyi h. To jb mere 5000 ms ho jaenge tb ye bolega ki 'cb' function ab tumhara time aa gya h, tm jaa k execute ho jao.
-> JavaScript synchronous hoti h by nature but kuch asynchronous functions h jo help krte h humein JS m asynchronous kaam krne ka. (Synchronous means line-by-line execution)

Q) How asynchronous code works? (Important)
-> Humare paas JS Engine hota h. To JS Engine ka kaam h humara JavaScript ka code run krna.
-> Humare browser k andr kuch built-in methods hote h usko hum bolte h 'web APIs' but agar hum node use krne rhe h to usse 'node APIs' bolte h.
-> JavaScript k andr sirf synchronous code kaam krte h. Jo v asynchronous + other functions h, ye sb hum JavaScript k andr access kr paate h kyuki humare browser k andr kuch APIs hote h (web APIs) 
-> For example, Chrome k V8 Engine k andr -
    1) Call Stack 
    2) Ek jagha ho gyi jiske andr bahut saare functions likhe hue h (web APIs)
    3) etc...
-> To iss web APIs k andr kuch kuch functions h jo hum apne JavaScript k andr use kr skte h
-> For example, jaise console.log() krte h na -> Ye ek in-built method h, agar hum setTimeout() likhte h to ye v ek in-built function h jo browser m run krta h lekin hum likh rhe node fileName, to hum node m file run kr rhe browser m nhi. To jo humein browser k andr functions milte h na wo more or less wahi same functions humein node k andr milte h.
-> Ek C++ k code k andr poora JS k engine ghusa diya to uske andr uske 'web APIs' v aaengi saath m. To ab uss web APIs ko 'node APIs' v keh skte h.

Q) What is an API?
-> Application Programming Interface
-> API ek tarika h jisse 2 log aapas m baat kr pae.
-> Jaise hum browser m likhte h console.log(); aur kuch iske andr likhte h. Ab console.log(); browser k ek function h aur mai usse baat krna chah rha hu. To chrome(browser) k paas ek API(function) h jisse hum baat kr paate h. To usse access krne k liye maine likh diya console.log();. So, it means ye console ek object rha hoga aur log uske andr ek method rha hoga.
-> To mujhe ye sb functions (.log(), .table()) jb access/baat krni hota h to mujhe console k through baat krni hoti h to isi chij ko mai API kehta hu.

Note : Iss definition ko aur extend krnge jb hum backend pe jaenge.
-> Agar kisi ne bola maine API implement kri. To it means jaise maine koi function likha h aur uski definition sirf mujhe hi maloom h ki uske andr kaam kya ho rha h like 'fs' module. Ab 'fs' module k andr ek function use krte the 'readFile()', ab readFile() m hum path de diya krte the ki kn si file h jisse read kr k le k aani h aur wo file read kr k le aaya but readFile() k internally kya kaam ho rha h ye hmko nai malum but jisne likhe h usko maloom h. Humne bss apna kaam kiya aur kaam krne k liye 'fs' module se baat kri to ye ek tarike ka API ho gya. Ab q ki ye node k andr in-built hota h to inko API bola ni jaata, but actually m ye ek tarike k API hi h.



1) function yolo(){
2)     var a = 10;
3)     function cb () {
4)         console.log("Hello, how are you?");
5)     }
6)     setTimeout(cb, 5000);
7)     console.log(a);
8) }
9)  yolo();

call stack :        web API :
-------------       ______________
|           |      |              |
|           |      |              |
|   cb      |      |              |
|-----------|      |              |
|   yolo    |      |              |
|-----------|      |--------------|
|   GEC     |      |  (cb, 5000)  |
-------------      ----------------
    ^                           |--> 0 ms // it will move to callback queue
    |            _______________________
Event Loop      |   cb   |              |
                |________|______________|
                    callback queue  //Event loop will move 'cb' function to call stack

Console :
_____________________
|10                  |
|hello how are you?  |
----------------------

-> 9th line pe yolo() h Global Execution Context k dal gya wo Call Stack k andr. GEC saare global variables, functions h wo sb iske andr memory m daalta h. Ab 9th m maine yolo() function call kiya, jb function call hota h tb uska khud ka ek execution contect banta h (yolo). Ab main yolo() k andr aaya to maine dekha variable a=10 h, fir function h 'cb' jiske andr kuch kuch likha hua h, fir aata h setTimeout(cb, 5000); jo ki ek traike ki function call h jo ek timer k saath attached h 5000 ms ka, aur ye synchronous nhi balki asynchronous function h qki ye JS ka part nhi h balki web APIs ka part h. To ye call back function 'cb' web API wale memory m chala jaega aur saath m 5000 ka timer attached ho jaega, aur ye 5000 ms bss gin rha h, iske baad 7th line pe code aa gya to isme console.log(a); likha h to maine 10 console m print kr diya aur 8th line pe function mera khtm ho gya aur mera yolo() callstack se udd gya. Ab 5sec thi but JS kisi k liye wait ni krti aur mera yolo() udd chuka h aur sb kuch ho gya to GEC v udd jaega, to 5 sec baad mera setTimeout() function aaya aur web API m ye 0 ho gya to ye function 'callback queue' k andr aa jaega (cb) aur bolega ki bhai mai ready hu. To 'Event Loop' check krta h ki 'callstack' m kuch chal to ni rha/ kuch function to ni pda jo execute ho rha h, to ye dekha callstack m aisa koi kaam to nhi ho rha h (means callback khali h) to wo 'cb' ko 'callback queue' se utha k 'callstack' m daal dega aur callback queue se 'cb' gyb ho jaega. To ab function 'cb' callstack m chlega aur 'cb' -> console.log("hello how are you?"); to console m print ho jaega fir 'cb' v call stack se udd jaega.
Note : Agar callstack khali h tabhi event loop chlega, wrna ye wait krega 5 sec. But agar hum setTimeout() 0 sec set kre to? 0th sec m callback queue event loop ko bolega ki 'cb' function ko daal do lekin event loop bolega you have to jbtk callstack khali ni ho jaata.

Event Loop -> keeps checking for callback functions in callback queue, if callstack is empty them pushes callback function from callback queue to callstack.