// const request = require("request");
// //cheerio tool - Isko poori html de dnge
// request("https://www.worldometers.info/coronavirus/", cb);

// function cb(err, res, body) {
//     console.error("error", err);
//     // console.log(res);
//     console.log(body);
//     //extract krle data html se
// }

const request = require("request");

const cheerio = require("cheerio");

let html=`<ul id="fruit">
    <li class="apple">Apple</li>
    <li class="orange">Orange</li>
    <li class="pear">Pear</li>
</ul>`


//Types of CSS Selectors use krne wale h selector tool m
//Cheerio.load bolta hai ki hume jo html data diya h usko store kr k ek tree k strcture m load kr dnge
//fir unnloaded data se hum data selct kr skte hai by using CSS Selector properties
//Note : Cheerio stores data in form of object
let selectTool = cheerio.load(html);
//Example
let fruitNameArr = selectTool("#fruit");
console.log(fruitNameArr.text()); //fruit name

