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
-> Prmoises are syntactical sugar of callbacks.

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