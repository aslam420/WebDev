const request = require("request");
const cheerio = require("cheerio");
console.log("Before"); //Step-1 ye chlega

request("https://www.worldometers.info/coronavirus/", cb); //Syep-2 fir ye chlega, then callback function call hoga
/*Maine iss link pe request maari aur maine kaha iss link pe jo data h mujhe wo chaiye, isliye ab iss link pe jo data h wo
print ho rha h. Ye ek callback function leta hai aur usse niche likh denge*/

//error, response, body -> 3 chhej aaegi
function cb(err, res, body) { //Step-2 complete hone k badd waha callback function call hoga then step-3 execute hoga
    //agar koi error aaega
    if(err) {
        console.error("error", err);
    }
        //agar koi response aaega
    // console.log(res);
    else{
        handleHtml(body) 
    }
    // console.log(body);
    //lekin yaha html chura sakte hai through webscraping...CSS khud se design krni hogi
    //Mujhe covid data extract karna hai aur btana h total cases, death, recovered

    // console.log("After");
}

function handleHtml(html) {

    let selectTool = cheerio.load(html);

    let coronaStatsArr = selectTool(".maincounter-number");

    // console.log(coronaStats.text());

    let totalCases = selectTool(coronaStatsArr[0]).text();
    console.log("Total Cases -> " + totalCases);

    let totalDeaths = selectTool(coronaStatsArr[1]).text();
    console.log("Total Deaths -> " + totalDeaths);

    let totalRecovered = selectTool(coronaStatsArr[2]).text();
    console.log("Total Patients Recovered -> " + totalRecovered);
//Note : Live agar data change hoga to yha se v hoga
    
}
