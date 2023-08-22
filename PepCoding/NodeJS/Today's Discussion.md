NodeJS :
-> It is a JS runtime environment.
(JS Browser m chalane k liye banayi gyi thi. Aur JS ko iss liye chalane k liye banayi gyi thi ki humari websites ko dynamic krna tha isliye JS Scripting banayi gyi thi jo humare browser m kaam kre aur humare website ko dynamic banaye. Fir dekha gya ki JS aur v tarike se kaam kr skte hai, pehle JS sirf browser m chlti thi, fir kisi ko khyal aaya ki agar hm JS ko use kr k usko apne normal laptop m chala paye like apne compilers m chala paye to kya hoga? To fir Rohl Dahl ne NodeJs banayi (2009).
Humein pta hai Chrome m JS Engine h uska naam h V8, aur V8 n andr JS chlti hai. To iss insaan ne kya kiya, ek compiler h jiske andar V8 engine daala aur isko ek environmental package kr diya aur humari NodeJS born ho gyi.
V8 is written in C++, aur ye C++ m likhi hui h, isi wajah se JS itni fast hai. Qki C++ ko pta h ki sbse jldi execution C++ ka hota hai fir uske baad Java ka hota hai fir Python ka hota hai)

Note : JS pehle sirf Browser m run krwa skte the but NodeJS ka wajah se ab hum VS Code Editor m etc m run krwa skte hai.

Official Definition of NodeJS -
-> NodeJS is a non-blocking Input-Output model, event driven i.e. why it is efficient.
(Non-Blocking Input-Output Model -
-> JS jo h wo Chrome k V8 Engine pe bani hui hai means uska runtime environment V9 ka h to usi pe humari NodeJS bani hui h.
-> IO means Input-Output - means koi Input maangega humse aur hum usko output denge, wo kuch v ho skta hai like reading, writing, local files, koi server ko request maarna, database se kuch mangwana etc. NodeJS/mere code ne hmse kuch Input maangta hai to maine wo input dene m kuch time lagaya, fir wo jo output laane m kuch time lagaya, tbtk humara code ideal pada rehta hai aur aage ki line execute ni kr paata qki during processing codes block ho gye, aur usse Blocking Input-Output Model bolte hai. So, non-blocking input-output model is just opposite, to usme jb input dete h na to usme aisa ni hoga ki output jb aaega tabhi aage ki code chalegi, hm code chalate rhnge fir jb humne jo request ki thi uska result/output aa jaegi to wo hm show kr dnge.)
Note : Non-Blocking h so ye Asynchronous kaam krti hai -> means jo chij sync m ni hoti. Aur NodeJs isliye banayi gyi thi jiske help se hum server bana sake. Ab server m humare jaise hazaaro log hai jo website pe access krte hai. Agar humari server synchronous hogi to jbtk ek ki request process ni hogi tbtk agle ki request ni lega isliye Ascynchronous banayi gyi -> waiting time km ho gyi -> iss hm kehte hai 'event loop'.

Example of Non-Blocking :
Table-1 : 3 dish
Table-2 : 1 dish
Table-3 : 5 dish
Waiter ne table-1 ki order li, then chef ko diya. Fir table 2 ki order li then chef ko diya -> means asynch m kaam ho rha h. Aisa ni hua ki pehle Table-1 ki saari dish banegi fir Table-2, Table-3 ki order li jaegi. Chef sbki dish ek saath bana rha, Table-1 ki ek dish server hogi, then maybe table-3 ko ek dish serve ho, aur wo dinner continue krnge fir aise aise kr k dish aate jaenge. But chef agar ek baar m ek table ki dish banata ho 2 table k customer loose kr deta. That is non-blocking, ek ki kaam process m ho rhi, aur usi time agle ki order le rhe.

-> Event Driven - means kuch v humare app k andar ho aur uska hum respond kr pae. So, kuch kaam hoga aur usko hum respond krnge.
Events are of two types :-
(a) System Event 
(b) Custom Event : Custom Event wo hota hai jisme event hum khud likhte hai. 


Node Modules :
-> Node JS k saath kuch in-built modules/packages(function libraries) aate hai aur wo modules humari help krte hai day-to-day task perform kr ske. (Heavy File)
-> Aisa jaruri nai ki jo humein chaiye wo isme ho, aisa ho skte hai humein jisko jarurt h wo isme nai ho, tb humare paas aata h 'npm' -> Node Package Manager. Ye 'Node Package Manager' ye krta h ki jo v new functionalities humein chaiye node k andar wo saare module hote hai, ab wo bahar se v kuch module install krnge like 'lodas' module -> ye kuch kuch functionalities provide krte hai lekin ye functionalities Node Modules k andar nai hote hai aur jo npm k andar packages hote hai ye hum khud v likh skte hai for example humein lgta h ki aisa koi package nai hai jo mujhe random number de de, wo basically ye packages open source h, qki ek developer ne functionalities likh k package banayi aur usse koi v use kr skte hai.




Day-21 : Today's Agenda
1. Project - File Organizer (Command Line Project)
   -> Better understanding of 'fs module'
   -> new module - 'path module'
2. Recursion (we will use recursion in this project)
   -> Qualify as DEV + DSA Project

WHat is File Organizer Project?
--------------
Introduction :
--------------
Hum isme 3 commands banaenge -
1. node main.js - 'help' command
   -> help humein list of commands dega ki humare CLI m kya kya commands hai
2. node main.js - 'organize' command 
   -> yha par ek folder ka path dnge aur uske andar jitne v files honge like .mp4, .mp3, .pdf, .doc, .xlsx files, ye uss directory m jaenge aur jitne v tarike ki files honge na ye uss directory pe folder banaenge -
   (a) Video Folder
   (b) Image Folder
   (c) Document Folder
   Aur uss folder k andar jitne v files honge to videos wale files Video Folder m chle jaenge, Image files Image Folder m chale jaenge, Music files Music Folder m chale jaenge, Documents Files Document Folder m chale jaenge.
   -> 'organize' command ek folder ki path legi aur iss folder k path m ek folder hoga i.e. Download. Ab download folder m tarah tarah ki chije hoti h, uss folder m videos v ho skti h jinki extension .mp4 ho skti hai, Images ho skti hai jinki extension .jpeg, .jpg, .png etc ho skti h. To Downloads wale folder m andar ye saare files mix rakhi hui hai, to mai jb bolunga ki node main.js organize aur mai apne downloads folder ka path dunga to ye command ye krega ki wo downloads folder m jaega aur uss Download folder k andar ye 4 folder bana denge -
   (a) Video Folder
   (b) Music Folder
   (c) Document Folder
   (d) Image Folder
   Aur jo file jis folder ko belong krta hai ye uske andar daal dega. Isse ye hoga ki mere downloads ka folder wo organize ho gya.
3. (We will see later)

main.js :
---------
-> AVi organize command kr rhe to usme hm pehle node main.js fir bolnge organize kr k lao. Fir hum ek <folder-path> denge. To humne jo process.argv.slice() kiya, usse ye hota hai ki mera ye poora input aata h -
    'node main.js organize <folder-path>'
-> Jb hum slice krte h to ye dono - 'node main.js' gayab ho jaate h to 'organize command' & '<folder-path>' bachta hai. To maine inputArr[0] kiye to ye kya dega? [0] - Command Name, [1] - Folder-path. 

inputArr[0] : Isme 3 commands ho skti hai -
(a) help
(b) organize
(c) tree

Mujhe pta kaise lgega ki humne kn si command daali hai?
-> Uske liye we use switch cases.

-> Ab hum switch statement use krnge  -
    Switch Case k andar humne (command) pass kr di -> ab iss (command) k andar kuch v ho skte h like - 'tree', 'organize', 'help'. To hum bole h in Case-1: agr "tree" ka h to kuch krna h, similarly agar case-2: "organize" ka h to kuch fix task krna hai aur "help" ka ho to kuch krna hai. To ye kind of aisa hua -
        if (command == tree){
            //then do this task
        }
        else if (command == organize) {
            //then do this task
        }
        else if (command == help) {
            //then do this task
        }
        else (command == )

-> So, in switch agar wo ek case m atkega to kisi aur case m nai jaega that's why we use 'break' -> 'break' lagane k baad ye else-if k tarah kaam krta hai. Agar hum break ni lagate to internally switch statement aisi hoti -
        if (command == tree){
            //then do this task
        }
        if (command == organize) {
            //then do this task
        }
        if (command == help) {
            //then do this task
        }
        if (command == )
-> Agar humne likha hai 'node main.js organize' to -> if (command == organize) wala command chalne k baad wo niche kahi par v check naa kre aur waha se break kr jae aur uss switch case se bahar aa jae, that's why hum waha break statement lga diye.


















































Innovacor - Company
-> Iska programme aata hai -> Summer Geeks
   Ye hmko ek project banane ko bolta hai aur uss project k base pe hmko internship dete hai (60k)
-> Iska hackathon v hota hai (Explore this website)

D2C -> DareToComplete
(Website)

(For 3rd year)
LinkedIn -> Send Request + Message (MAANG Employees)
Hi, I am Mohammad Aslam
I am interested in learning more about your organization and I am looking for the role of Software Engineering. Below attached is my resume.

If you could take out your precious time and review my resume and tell me if I have any shortcoming and how I can improve on that.

Thanks & Regards,
Mohammad Aslam

Note : Resume k andr mention karna hai ki hum codechef + leetcode pe itne questions solve kr liye hai aur humari ye rating hai.

Note : Never say pass out, say graduate or batch of 2020

(Working Professional)
1) DSA Level-1 + Web Dev (8-28 LPA StartUp Package)
2) DSA Level-2 + Web Dev Basic (FAANG + StartUp) -> 15-55 LPA
Note : If you have descent number of questions on CodeChef(4 star for level-2) + Leetcode (500+ for level-2)

Note : Job sites for working professional
1) Instahire
2) Hirect
3) LinkedIn
4) Twitter
5) Hirist
6) Angelist
7) Unacademy -> Relevel Test (Companies Interview leti h - Check Syllabus)
In sites se bahut fast reply aati hai.

Note : For Resume - 
1) Internship
2) Projects (Pepcoding)
3) Fellowship/mentoring programs/Scholarships/Open Source
Fellowship - MLH (Example)

