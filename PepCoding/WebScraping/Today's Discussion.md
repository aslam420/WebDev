Agenda :
1. H.w.
2. Web Scrapping 
   -> Intro 
   -> Mini Project (1 CW + 1 HW)


Web Scraping :

What is Web Scraping?
-> It is a process by which we can extract data from websites.

Why web scraping?
-> Price Compare website m agar hum kuch search karte hai to ye batati hai flipkart pe ye product kitne ka hai and wahi product amazon pe kitne ka hai. Aur kon se site pe sabse sasta mil rha hai. 
-> Jb hum kisi chij ko search karne jate hai aur iske toolbar pe like iPhone to ye flipkart k andr se data extract kar k le aaega, amazon se data extract kr k le aaega fir inn sb ko apni website pe display kr dega.
-> 2nd Reason : Researchers k kaam aata hai. For example koi Cricket match hua, aur 50 years ka match ka data analyze karna hai ki jaise jaise time badh rha hai waise waise humare players kitne efficient h ki new new technological improvement k wajah se kya wo pehle se accha score kr paa rhe hai. To wo saare match ka data ESPN k website se saara data ke aaega aur iske upar Data Analyst research kr k ek conclusion pe reach krnge.
-> MLP/ML/AI
So, ye saara data internet pe pada hai aur Internet se scrap krne k liye WebScraping aani chaiye.

How to do web scraping?
-> Browser ko use krnge aur kisi website k url ko request marnge aur wo humko response dega
-> Request marne k liye hum npm ka ek package use krnge jiska naam hai 'request' jisko hum npm se install krnge. Ye 'request' module m hum URL pass karte hai aur ye URL humein uss website ki HTML File return karta hai.

Jb v humein npm se koi package chaiye hota h to usee pehle ye karna pdta hai -
step-1 : npm init -y (package.json file ban jaegi)
step-2 : npm install request (package-lock.json + node_modules)

Things to know -
----------------
1. npm
2. package.json


const request = require("request");
request("https://www.worldometers.info/coronavirus/", cb);

//error, response, body -> 3 chhej aaegi
function cb(err, res, body) {
    //agar koi error aaega
    console.error("error", err);
    //agar koi response aaega
    // console.log(res);
    console.log(body);
}

Ye line kaise kaam krti hai?


Topics to discuss -
-------------------
1) npm -> Node Package Manager
   -> Kuch packages hote hai jo node in-build hota hai aur kuch aise hote hai jiski humein jarurat hoti hai lekin Node humein provide ni karta qki time k saath kuch chijo ki jarurat padni aur wo humein ni mili to 'npm' banaya gya.
   -> Just like Playstore jisme hum jarurat k hisaab se app download karte hai, similarly hum npm se modules download karte hai
   Example : We have downloaded 'request' module. 'request' module m hum jiss website ka link dete hai uss website ka data le k aata hai in html format and response (means response m kuch data hota hai jo saamne wala humko bhejta hai -> will see later).
   Note : 'request' module 2 chije deta hai 
   (a) response - iske andr jo aati h we will see later
   (b) body - website ki html format aati hai
   (b) error
2) package.json, package-lock.json -> article
   -> node_modules - Jo v node ki modules hoti hai wo iske andr hoti hai + jo v modules download krnege npm se wo v iske andr add hoti rhegi (like 'request' module)
   -> package.json - Jb hum application banane jaa rhe hote hai. Isme ye bta rha hoti hai -
   "name": "webscrapping",
   "version": "1.0.0",
   "description": "Description humne add ni kiya h",
   "main": "project entry point - request.js".....etc (means yha se code chlega),
   "scripts": "we will se later",
   "keywords": [],
   "author": "iske andr apna naam likh skte hai"
   "license": "ISC", (license h wo allow krta hai ki ye software koi v copy/use kr skta hai jb isko net m publish kr diya jaega like GitHub)
   "dependencies" :  {
         "request": "^2.88.2"
         (means in-built node k modules hai like fs, path, etc, unko chor kr bahar k jo modules download kiye hai unke baare m batata hai. So, ye bta rhe humne request module use kiya hai aur uska version-2.88.2)
   }
   
   Q) Iska kaam kya hai?
   -> Project biodata

-> package-lock.json - package.json k andr dependencies version like hue hote h aur ye har baar update hote rehte hai like "request": "2.88.2" to "^2.88.3"
To package.json ki versions ko lock kr k rkh leta h
(We will see later)

3) callback function -
-> Function mai baap hai JS ka means "first class citizens". So, sbse highest priority inki hoti hai aur inko jo marzi hoti hai ye kar skte hai.
-> Jo marzi aae means function k andar function as an argument hum pass kar skte hai -
   func abc(cb) {

   }
-> If Function is passed on another function is called callback function.

const request = require("request");
request("https://www.worldometers.info/coronavirus/", cb);

//error, response, body -> 3 chhej aaegi
function cb(err, res, body) {
    //agar koi error aaega
    console.error("error", err);
    //agar koi response aaega
    // console.log(res);
    console.log(body);
}

Yaha maine ek link beheja aur aur callback function "cb" behja. To iss callback function ka kaam kya hai?
-> Means jb given link se koi jawab aae whether error/response lekin jawab aana chaiye aur jb jawab aaega to "cb" call hoga/ wapas bulaya jaega i.e. callback. So, jb kisi function ko bulaya jae kuch kaam hone k baad uss function ko bolte hai callback function.

request format - (npmjs.com/package/request)
const request = require("request");
request('https://www.google.com', function(error, response, body) {
   console.error('error:', error); //print the error if one occured
   console.log('statusCode:', response && response.statusCode);
   console.log('body:', body); //Print the HTML for the Google Homepage
})

cheerio npm - npm install cheerio
-> Cheerio in not a web browser. Cheerio parses HTML and it traverses the html sp that data can be manipulated according to user's needs.
Read : npmjs.com/package/cheerio

Project : ESPN Scrapper
1) Link - 2020-2021 IPL Data
   -> Saare match m dono team ki innings (Team-1 + Team-2) ko print kr k laani hai aur uski outcome ko v. Har inning m each player ki info hogi
   -> Saari information ko excel sheet m daalna sikhnge
