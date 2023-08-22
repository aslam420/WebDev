let url="https://www.espncricinfo.com/series/ipl-2020-21-1210595";

const request = require("request");
const cheerio = require("cheerio");

request(url, cb);

function cb(err, res, body){
    if(err) {
        console.error("error", err);
    }
    else {
        handleHtml(body);
    }
}


function handleHtml(html) {
    //yha hmne cheerio ko bola html load kr do 
    let selecTool = cheerio.load(html);
    //ab humara html aa gya ESPN Page ka
// Note : Ab humein uss page m "view all results" dekhna h to uske liye hum uss button pr cursor le jaenge aur inspect karnge
//Ab usme achor tag m data-hover="view all results" (key-value pair) ko copy lr liya
    let anchorElem = selecTool('a[data-hover="View All Results"]');
    console.log(anchorElem.html());
    //Isse view all results aa jaega
    let relative
}

//next page : https://espncricinfo.com/series/ipl-2020-21-1210595/match-results
23;52