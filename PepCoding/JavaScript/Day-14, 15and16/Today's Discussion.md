Today's Session -

Agenda -
1) JS -> Execution
2) JS -> let, var, const
3) Node

How does code executes in JS?
1) var num = 5;
2) function cube (num) {
3) var res = num*num*num;
4) return res;
5) }
6) var cube1 = cube(num);
7) var cube2 = cibe(10);

JS m ek chij hoti hai -> Execution Context.
Execution Context k andr two phases hote hai -
(a) Memory Creation phase              (b) Code execution phase
-> num = undefined


Phase-1 -> Memory Creation
JS mainly 2 parts m chalti hai. First part m hota ye h ki, humein memory jo chaiye hoti hai variables ko, ye wo leta hai. So isko basically 'MEMORY CREATION' phase bolte hai.
Ye jo 6 line ki code h JS phle aa k isko scan kr k pdhega aur isme dekhega yha kaha kaha variable ki jarurat hui hai, to humein unki memory allot krni hai.

MEMORY CREATION PHASE -> skims(fatafat pdh lena) through the code and allocates memory to all variables and functions. 

Ye pehle line-1 pe aaya, yaha usne value set kr diye 'undefined' ( a type of value in JS -> means yha pe ek value aaegi lekin avi ni malum ki kn si value aaegi so avi wo decided ni h to wo 'undefined' hai). Fir ye code aur pdhega aur line-2 pe jaega aur dkhega cube() naam ka ek function hai. To cube k liye mjhe kya krni pdegi? Thodi jgha save krni pdegi, to variable banaunga cube naam se aur iske andar entire function uth k allot ho jaega -
    function cube (num) {
        var res =  num*num*num;
        return res;
    }
Basically in do curly braces k bich m jitne v code hai na wo sb uth k ek variable m allot ho jaega.
    cube = {......
        entire funtion 
    }
Ab fir ye niche aaega aur next line pdhega jaha ek variable bana hua hai 'cube1'  aur iski value 'undefined' hai qki avi humne decide ni kiya ki iski value kya aaegi because memory creation phase m h jisme hum sirf variable dkhte h ki isme humein memory kitni lagegi. Fir humare paas ek aur variable h cube2 aur uski value humein ni pta qki isne avi wo janne ki koshish v ni kri to we will set it as 'undefined'. (Isme variable ko kuch specific memory allocate hoti h like 4 byte so ye sbko utni allot krte jaega creation phase, ab value aate rhegi apne aap)

Phase-2 -> Code Execution Phase
2) Code Execution Phase 
   -> JS runs the code line-by-line.
   -> This is the point where all the functions and calculations (like variables m value daalna) are executed. 
   -> Whenever there is a function call, a new execution context is created.
(JS saari code ko line by line run krega to har point pe wo calculate krega aur har variable ko value allocate krega, function ko jo value chaiye wo usko value allocate krega)

To ye first line pe aaega aur dkha num=5;, to ye undefined to hata k value 5 kr dega. Fir wo niche aaya aur dkha ye to function hai, aur function kuch krega nai jbtk usko koi call naa kre, isliye ye poora part skip ho gya. Jbtk function call nai hoga ye part execute hi ni ho skta.
To fir wo line-6 m aata hai aur waha dekhta hai -
var cube1 = cube(num);
iske andar ek function call hua hai that is line-6 jisme humne dekha cube1 ek variable bn rha hai aur uske andr cube function husko call kiya jaa rha hai, aur humein pta h ki  jb v koi function call hota h na tb function call pe uss function ka execution context banta hai means wapas se memory creation phase & code creation phase banega -> 'new execution context'. Ab jb 2 new execution context create hua to wahi 2 procedure honge -
(i) Memory Creation
(ii) Code Execution 
To memory creation phase m wo line number 2 se chalna shuru karega, fir dekhega cube naam ka koi variable nahi h but usse koi fark ni padega. Basically iske baad se jo v variable aaenge like 'num', 'res', memory creation unka variable bna dega aur usme undefined likh dega. Fir niche aaega aur dekhega 'res' naam ka variable h to usko v undefined kr dega. Hum pehle dekhte h ki kn kn se variable k liye jagha allot krni h wo hmne kr diya. Ab agla phase chala i.e. Code Execution Phase, to ab ye execute hoga. Ab ye aaega aur dekhega 'num', iske aas paas num ki koi value h ni t ye bahar wale se puchega koi num variable h jiski ye value le skta h, to ye bahar aata h aur dekhta h 5 hai, to ye num ka value change kr k undefined se 5 kr deta hai. Fir wo next line pe aata h aur dekhta hai 'res' = num*num*num;. Ab isko pta hai ki num variable ki value kya h, to ye phle apni memory wale phase m dekhega ki mere paas koi num variable hai, agar hai to ye usko use kr lega. Ab 'res'= num*num*num; ye ek tarah ka calculation ho gya and we have learnt that calculations and functions are executed, to 5*5*5 = 125 ho gya. Then res = 125.
Ab agla likha hua h return res;. To jb v hm return krte hai na to jo execution context hai na particular function ka wo destroy ho jaata h. To Memory Creation & Code Execution destroy ho jaega aur iss result ko return kr dega.
Ab ye result kisko return krega?
cube1 ko, to ye answer h na  125, ye cube(num) m aa jaega aur cube1 = 125 aa jaega.
Ab hum next line pe jaenge - var cube2 = cube(10);
Isme humne dobara se function call kr diya, aur function ko call kiye to new Execution Context. To memory creation hoga aur num = undefined, and res =  undefined banega then code execution hoga to isme function ko num ki value chaiye, aur isne jb yha se 10 pass kr diya na to function ko value mil jaegi to ye variable num = 10 kr dega, aur ye upar dhundne ni jaega (5 ni uthaega) qki iske saath value 10 pass hui hai. Fir res = num * num*num; to res bolega mere paas num hai to ye bolega usko calculate kr lo -> 10*10*10=1000. Fir humari next line thi ki jo result hai usko hum return kr do uske paas jisne bulaya tha., to cube2 m value aaegi qki cube2 ne function invoke/call/bulaya kiya tha. To cube2 = 1000;, aur jaise hi ye aayi humari function destroy/khtm ho jaegi means wo wali 'LOCAL EXECUTION CONTEXT' khtm ho jaega. Program k saare code khtm ho jaegi to 'GLOBAL EXECUTION CONTEXT' khtm ho jaega aur isi tarah JS ki saari memory destroy ho jaegi.
-> Execution Content is destroyed after function ends.
Note : Function k andar variable ki execution context ko 'LOCAL EXECUTION CONTEXT' bolte hai aur jo function k bahar hota hai usko 'GLOBAL EXECUTION CONTEXT' (iske andr chote chote local hote hai).
-> Console.log(cube1); -> Ye wali part baaki hai dekhna (we skipped)
-> console.log(cube2); 

Note : Agar hum var cube2 = cube(), jisme parameter khali rkhnge to kya print hoga?
Agar hum parameter khali rkhte h to wo 'undefined' hoga memory creation k time aur during code execution waha kuch bhjnge hi nahi to value dobara undefined ho jaega.
res = undefined*undefined*undefined
To fir res k andr ek special value ban jaati hai i.e. NaN (Not a number)
aur ye uss chij ko denote krta hai jb v hm koi non-sensical calculation krte hai. (means jiske krne se koi sense hi ni bnta)



NOTE : JS BOOK -> JavaScript (2 books) -> O'REILLY
(a) JavaScript : The Good Parts
(b) JavaScript : The Definitive Guide
(Isko avi nhi pdhna hai)



New Concept : Call Stack
-> It is used to manage execution context in JS.
-> Global Execution Context is pushed inside call stack (box inside which having multiple cells), local execution. After a return statement is occurs. Local Execution Context get destroyed. 
-> After all the lines of code (LOC) are executed Global Execution Context is destroyed.

(Pehle GEC push hua fir jb maine cube ko num variable k saath call kiya tb ek LEC ban gya fir jb LEC ka kaam ho gya aur uske andr return statement aa gyi to 125 return krne lga, return k just baad hi ye LEC destroy ho gya aur wo 125 wla ans GEC ko bhj diya. Fir wapas se humara function call hua aur iss baar humne 10 pass kiya wo fir wo apna kaam kiya aur fir LEC ne wapas se GEC ko 1000 ans bhj diya aur fir jb return statement execute hui to ye LEC v destroy ho gya). Aur jaise jaise aur aage gye to aur kuch code ni lilkha to automatically ye GEC v destroy/POP(use this term for interview) ho jaegi. So, ultimately STACK emplty ho jaegi and iss tarah humari call stack kaam karti hai.)

Note : Call Stacks k different different names hote hai -
(a) Call Stack
(b) Program Stack
(c) Control Stack

New Concept : Automatic Type Conversion
Jaise humara datatype hai like Integer, String, Boolean, Undefined (ye 4 chije pdh chuke hai). To hum aise kuch combinations banaenge ki kvi String Integer m convert ho jaega to kvi String Integer m ho jaega, boolean kisi m v ho jaega, automatic type convert ho jaega inska.
