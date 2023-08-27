Tags : Web Page ko structure karne k liye we use "tags".
< opening tag > content </closing tag>

Heading tag : ye webpage ki heading banane k kaam aati h
<h1> content </h1> -> ye sb ko jod de to hm bolnge "Element".
So, we can say HTML is series of Elements.
    Tags + Content = Element

Heading k 6 types k hote h -
h1 to h6 -> based on font size

Paragraph Tag : Agr humein apna content paragraph m likhna h to <p>content</p> tag use krnge

Div tag : <div> Content </div>
Div tag is like a bucket/container inside which we store some content separately
Division-1 container k andar hmne ek heading and paragraoh rkha
Division-2 container k andr hmne ek heading and paragraph rkha
So, hum group of elements ko group krne k liye div tag use krte h.
<div>
        <h1>Div 1</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni corrupti magnam tenetur, nobis obcaecati fugit error iste tempore unde quas officia voluptatibus voluptate quo consequatur, praesentium deserunt, accusantium incidunt sed.</p>
    </div>

    <div>
        <h1>Div 2</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni corrupti magnam tenetur, nobis obcaecati fugit error iste tempore unde quas officia voluptatibus voluptate quo consequatur, praesentium deserunt, accusantium incidunt sed.</p>
    </div>

List Tag : List banane k liye we use - <li> content </li>
Humko samaan kharidna h to shopping k liye hm ek list banate h
C0ntent ko list k form m represent krne k liye List Tag use krte h
    a
    b
    c
Ye teeno ek line m aa rhe to aur hum isse alag alag line m dikhana chahte h to iske liye hum list tag use krnge aur list k form m show krnge

List tag : Two types -
(a) Unordered List : <ul> content </ul>
It means iske andr koi order nhi hota like numbers for counting.
(b) Ordered List : <ol> content </ol>
It means iske andr order hota like numbers for counting.

Span Tag : 
Ye tag tb kaam aata h jb hm specifically kisi word ko highlight krna ho ya fir kisi word ko ya group of words ko alag se style krna ho

Anchor Tag : <a href="url where we want to jump"> </a>
Anchor tag k help se ek page se dusre page ya khud k page se redirect krte h
Agar apne hi page ka naam de to starting m aa jaenge

Image Tag : <img src="path">
It is used to attach image in webpage
It is also self closing tag
Iss image k andr ek source likhnge jaha humein browser ko batana pdega ki jo image humein webpage m display krni hai wo ye hm jaha se laenge usko link humein source k andr likhni pdti h

Attribute : means properties of tags 
Jaise meri ek image hai <img src ="path">. To humein batana hai ki ye to image hai wo kaha se load krni hai aur uski path to uska path likhn hai.
That means src="path" is an attribute of image tag.
Similarly Anchor tag <a> k andr href attribute likhte hai
<a href="url"> </a>
So, href is an attribute of <a></a> tag.
Similarly, in span tag, style is an attribute.
Note : Har tag k andr different different attribute hote h jo tag ko help krte hai apni content ko acche se define krne k liye

Alt Attribute :
Alt/alternate tag m image k baare m likha hota hai ki agr by chance humari image load nai hoti hai to alt attribute se hm hint dete hai ki ye kaisi image hai.

target attribute :
Target is an attribute of <a> </a> tag jiske andr maine "_blank" likha jisse ye hota h ki jb hum wo link pe click krte hai to new tab khulta hai.


Table : Hum HTML k andr table banaenge, table row, table column (table description)
Step-1 : <table> tag - iss tag k use se hm HTML ko ye btate h ki ab hum table bana rhe
Step-2 : <thead> </thead>
Step-2 : Inside table jo heading/description (table head) hai aur uske niche data (table body) hai
         To table ki head(row) banane k liye hum <th> </th> tag use krte hai aur description likhne k liye <td> </td> tag use krte hai

Today's Session :-
1) Cell : Har table ko box ko cell bolte hai
2) Column : Up to down
3) Rows : Left to right
Note : Table - Combination of cell
Ab humein cell, row and column ka tag dekhna hai.

1) Table Tag : <table>
Isse humare browser ko pta chalta h ki iss <table> tag k andr jo v tags honge use hum table banane ki koshish kr rhe hai.

Humein ek table banana hai jisme column is name, age. Inside name - A, B, C and Age is 20, 25, 30.
Humein table row wise banani hai means pehle hum name, age row ko banaenge fir A, 20 then B, 25 afterthat C, 30.
Aur aise rowwise banane se humari puri table form ho jaegi

2) Row wise Tag : Top to bottom table creation
(a) <td> tag : means table data. Ek cell k andr jo data daalte hai usko hum <td> se denote krte hai.
    <td>Name</td>
    <td>Age</td>
    -> One row completed. Har row k liye aise hi karnge

    Ab humara next kaam h - A, 20
    Lekin next cell ko ye ni pta ki isse kaha place krna h isliye side by side place ho rhi hai
    Humari paas ek aur tag hota h <tr> ye ek row banaegi agar usse iss tag se wrap kr dnge.

(b) <tr> tag : Table Row 
    Jb v <td></td> <td></td> likh rhe hai to browser usko bagal m likh dete hai.
    Isliye hum <tr></tr> likhte hai, jisse humein pta chalta hai ki ye ek row hai.
    Ab hum agle content daalnge wo next row m aaega to uske liye fir ek <tr></tr> tag likhna hoga fir uske andr cell banane k liye <td></td> likhnge.

(c) <th> tag : Table heading
    Note : But hum kaise differentiate karnge ki name, age heading hai table ki?
    To humain name ko highlight krna h. Iske liye hm <td></td> k jagha likhnge <th></th>

3) Caption Tag : <caption></caption>
    Caption Tag k andr hum table name de skte hai. So, it tell us what this table is about.
    Note : Helpful for blind people.

4) Table Border : means how to border a table
<table border="8">row_content</table>

New Concept :

HTML is a series of Elements. (skeleton)
Elements - Opening tag + Content + Closing tag

Elements are of two types :

1) Block Elements : new line (new line pe result aata h)
    Wo element jiski wajah se ek block banta hai/ new line banti hai
    eg : div tag, p tag
    Jaise hum div ya p tag use krte h to wo new line m aati hai to waise elements ko block elements kehte hai.
    Example : Ek paragraph aur dusre paragraph k bich m ek line k diff rhega.
2) Inline Elements : side-by-side (same line pe result aata hai)
    Jo tags hm use krte hai new line m ni aati, usi line m saath saath aati hai
    e.g. : th tag, td tag, anchor tag, img tag, span tag, strong tag, em tag ekli line m side-dy-side aati hai

    Strong tag : text become Strong or bold
    em tag : Italic text/font

Note : We have barely scratched the surface of HTML. To be contibued...



CSS - Cascading Style Sheet : (Skin)
-> Beautification of webpages

Some of the properties/attribute of CSS :
1)Style Attribute : style="_____"
    (a) "color : color_name;"
    (b) "font-size : font_size_in_px;"
    Note : Website m pixel is one the dimension jisko use kr k hum font-size badi choti kr skte hai.
    Note : 
        (i) Agar puri paragraph styling krni h to - font-size attribute
        (ii) Agar paragraph k koi fix word krni h to <span> tag use karnge

    (c) "font-family : font_style;"
    It mean font ki kn si family se humari font belong krni chaiye
    Note : Jo bahut saari similar dikhne wali font hoti h wo ekhi family se belong karti hai isliye usse font-family bolte h.
    "font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;"
    Ye saare font ek family k h. To agar 'Gill Sans' font available ni h to next font select hoga agr wo ni h to family ki next font select hogi aur kuch ni h to 'sans-serif' by default set hogi.

    (d) "background-color: color_name;"
    Example : style="background-color: black; color: orange;"
    Isme humne background color black kar diya ha aur jo v font h wo orange kr diya

Summary :
1) Change size of font
2) Change text color
3) Change Font style
4) Change <p>content</p> tag background color


Selector : Other way to add CSS in HTML
1. <style></style> : Style Tag inside <head></head>
Iske andr jo v style krni h apni poore html k body k andr jitne v elements likhe h usnko kuch styling krni h to wo mai yha se kr skta hu.
Example : Isse jitne v paragraph tags the wo sb green ho gye
    <style>
        body{
            background-color: rgb(160, 177, 160);
        }
        p{
            color: rgb(10, 101, 7);
        }
    Note : body tag likhe se puri body ki background color change hoga. Body k andr puri HTML samayi hui hai
    Aur aisa isliye hua qki HTML top to bottom aata h to pehle isne pdha body tag k andr background-color black kr dena h
    Fir wo niche aaya aur dekha ab paragraph k color ka text ko rgb color ka krna h. To isko bolte h overriding of your CSS Properties.
    Means last property override krta h previous property ko.

3 ways to add CSS in HTML :
1) Inline styling : style attribute
2) Internal CSS styling : Internally styling in HTML (<style></style> tag inside head tag)
3) External CSS styling : Maintain separate CSS File and connect it with html File

External CSS Styling :
Note : head tag k andr ek tag hota h link tag - link:CSS to 2 attributes aaenge

    <link rel="stylesheet" href="style.css">
    (a) rel : means relation    
    This attribute names a relationship of the current linked documents 
    Means relation between css and html i.e. Stylesheet (jitne andr HTML k style likhe hue hnge)
    (b) href : hyper reference
    So reference is file name

Concept : 3 ways of styling CSS in HTML
1) Inline   -> Mustard Yellow   (style attribute)
2) Internal -> blue             (head)
3) External -> pink             (link)
Note :Sabse phle (3) External Style Sheet padhi jaati hai, then (2) Internal Style Sheet pdhe jaate and last (1) Inline Style Sheet
So, sbse jyda valuable Inline CSS hoti h then head tag ki and last m linked CSS ki.
    Inline > Internal > External(best practice - maintainable, single point of contact)
    So, bacause of these two reasons we prefer External CSS styling.


Summary :
1) Table :
    -> 4 tags -
        (a) <table> tag
        (b) tr tag -> table row (iske andr th and td tag likhte h)
        (C) th tag -> table heading -> bold
        (d) td tag -> table data

2) strong(bold font), em(Italic font), block(new line), Inline(within same line)
3) Some CSS attributes -
    (a) font-family (Change font style)
    (b) font-size (Change font size)
    (c) color (Change font color)
    (d) background-color (Change font background color)
4) 3 ways to style our HTML File -
    (a) Inline - same line -> style attribute
    (b) Internal - head -> style Tag
    (c) External -> head -> link ---> Day2Style.css to HTML's head (inside <style> tag)


Today's class :
1) CSS Selectors
2) Interactive Exercise for Practice

1. colspan : column + span(failana) -> Columns ko failana (left to right)
    In a square, out of 12 cells agar humein 2 cells merge/jodna hai. To again 2 cell jodne se column chowra hota hai to iss phenomenon ki hm colspan bolte hai.
2. rowspan : row + span -> Rows ko failana (Top to Bottom)
    In a square, out of 12 cells agar humein 2 cells merge/jodna hai. To again 2 cell jodne se row lamba (top to bottom) hota hai to iss phenomenon ki hm rowspan bolte hai.
Note : Agar humne 2 cells add kr diye to likhnge -
        colspan = 2 or rowspan = 2
But kaha likhnge?
-> <tr> tag k andr   
Example : <tr rowspan=2>content<tr>


CSS Selectors :
Bahut saare selectors hote h jinko use kr skte h apne HTML element ko find krne k liye
Fir unko find kr k style kr skte hai.

Types of CSS Selectors :
1) Simple Selector (5 Types)
    (a) Element Selector
    (b) class Selector
    (c) id Selector
    (d) universal selector
    (e) grouping selector
2) Combinator Selector (2 types)
    (a) descendent selector
    (b) children/child Selector
    (c) Adjacent sibling
    (d) General Sibling Selector
3) Attribute Selector (1 type)

(1)Simple Selector :
    (a) Element Selector : 
        Kisi element ko select krne k liye use krte h.
        Ex : <p> tag, <div> tag etc. elements

    (b) class Selector :
        -> Humein apni elements categorize krni h, to categorize krne k liye humne 3 <p> paragrapgh likha hai
        Aur mai chahta hu out of 3, 2 paragraphs ka text mai red color ka karu aur ek ko normal chor du.To mai chahunga inka koi special term hu jisko use kr k sirf uss particular paragraph ko red kr saku
        Tb humein help krne aae classes jisme hm har tag ko ek special name de dnge.
        -> class selector use krne k liye -> .classname{ attribute } likhte h aur space de k ek aur classname likh skte hai -> .largetext

    (c) id selector :
        Id means unique identification 
        (Humare Unique id html code m hoti h -> kisi element ko uniquely identify krne k liye)
        => HTML --> element uniquely identify
        => unique identify
        -> ID Selector use krne k liye -> #IDName (Attribute) likhte h

    (d) Universal Selector : 
        ->Poori HTML k andr agr humein koi common styling krni hai to hm universal Selector use krnge
        -> Universal Selector use krne k liye -> * se denote krte hai
        Note : Generally isko hm top pe likhte hai

    (e) Grouping Selector :


(2) Combinator Selector : They are majorly used in automation and web scraping

    (a) Descendent Selector : 
    -> Hm apne parents k descendants h aur apne grandparents k v descendants hai
    Note : Spaces

    Example : <div>
                <span>
                    <p>I am a Child</p>
                </span>
            </div>

    (b) Children/Child Selector : Jb humein continuous chaiye hote h tb use krte h
    -> Lekin hm child sirf apne parents k hai
    Note : Angular bracket


    Example : <div>
                <span>
                    <p>
                        <span>I am a Descendant</span>
                    </p>
                </span>
            </div>


Note : means div k andr p ko dhundo fir p k andr jaa k span ko dhundo aur uski(child ki) color change kr do 
Example :    div p span{
                color: rgb(202, 131, 145);
            }
But yha child aur descendant, dono ki color change ho jaa rhi. 
Note : div aur span k bich m ek space diye uss space ko hum bolte h descendant selector.
Aur jaise hum apne grandparents k descendent h usi tarah ye pehle div ko dhundta hai 
fir div k andr wo p ko dhundta hai fir next level pe span dhundta hai.
Note : div k related span tha aur span se related p that isliye descendant wale tag m v color Hu
So, if div k baad p nahi h to rukega ni but poore deep tk dhundta rhega aur fir
jb isko p mil jaega fir aage ye span dhundega.

But agar hum chahte hai div k immediate baad p ho aur uske immediate baad span to kuch aisa likhna pdega -
Example : div>p>span {
                color : aquamarine
           }

(3) Attribute Selector : Next Class

Today's Class :
1) Homework Discuss
2) Attribute Selector
3) Table Border
4) Web Page

Attribute Selector : 
Attribute means tag k andr jo key-value pair hote h usko attribute bolte h
(properties that we can add inside tags).
Example : <a href="-----" target="blank">content</a>
            (href=key, "-----"=value) (target=key, "blank"=value)

What is Attribute Selector?
<a href="Nados.io" target="blank">NADOS</a>
To jb mai NADOS pe click karunga to new tab open hoga aur NADOS khul jaega
(Ye hote h <a> tag). Ab aise <a> tag ko select krne k liye hm attribute Selector use krnge

How to write Attribute Selector?
    tag_name[href="https://Nados.io"(sqr brackt k andr attribute)]
    {
        We can write Style here -
        color: blue;
    }

Example :   a[href="https://Nados.io"(sqr brackt k andr attribute)]
            {
                We can write Style here -
                color: blue;
            }
    <!--Attribute Selector-->
    <style>
             a[target="_blank"]{
            color: lightcoral;
        }

        a[href="https://nados.io"]{
            color: blueviolet;
        }
    </style>
Note : Ye selectors saare key value pair attribute wale tags pe lagte hai


Table Border :




Web Page Creation :
Note : If we have any problem then we will break it into smaller parts.
We are dividing our web page into 4 parts -
1) (a) DEV101, (b) HTML CSS JAVASCRIPT  (2 parts)
2) Photo                                (1 part)
3) (a) HTML+ (b) CSS+ (c) JAVASCRIPT    (3 parts)
4) Pepcoding                            (1 part)
Isse ek time pe ek problem pe focus kr paate h.

Assignments :
Assignment-1 -
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /* Write code here */
    </style>
</head>
<body>
    <!--add CSS Styles to all p tags making it blue-->
    <p>I'm a paragraph. Help me to become h1.</p>
    <p>I'm a paragraph. Help me to become h1.</p>
    <p>I'm a paragraph. Help me to become h1.</p>
    <p>I'm a paragraph. Help me to become h1.</p>
</body>
</html>

Assignment-2 :
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /* Write code here */
    </style>
</head>

<body>
    <!-- Write CSS Selector to select the obvious list items to make them blue -->
    <ol>
        <li>I</li>
        <li>Am</li>
        <li>A</li>
        <li>List</li>
    </ol>

    <div>
        <ol>
            <li>Select</li>
            <li>Me</li>
        </ol>
    </div>

    <div>
        <li>Random</li>
    </div>

</body>
</html>

Assignment-3 :
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /* Write code here */
    </style>
</head>

<body>

    <!-- select "I'm the direct son" and make it blue -->

    <div>
        <h1>
            <span>I'm the direct son</span>
        </h1>
    </div>

    <div>
        <span> 
            <h1>
                <span>I'm the indirect son</span>
            </h1>
        </span>
    </div>
    
</body>
</html>

Assignment-4 :
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /* Write code here */
    </style>
</head>
<body>
    <!-- Select the obvious p tags and make them blue -->
    <p>Random</p>
    <p>Random</p>
    <p>Random</p>
    <p>Random</p>
    <p>Random</p>
    <p>Random</p>
    <p>Random</p>

    <p class="class1">Select me and next guy</p>
    <p class="class2">Yes! me</p>
</body>
</html>

Assignment-5 :
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /* Write code here */
    </style>
</head>
<body>
    <!-- Select the element with multiple classes (m1&m2) and make them blue -->
    <div class="m1 m2">
        Select me
    </div>

    <div class="m1">Not me</div>
    <div class="m2">Not me either</div>
</body>
</html>

Assignment-6 :
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /* class selector + class descendent */
    </style>
</head>
<body>
    <!-- Select "I'm here, find me" and make it blue -->

    <div class="c1">
        <div> 
            <div>
                <span>
                    <div>I'm here, find me</div>
                </span>
            </div>
        </div>
    </div>

        <span>
            <div class="c1">Don't select me</div>
        </span>
</body>
</html>

Assignment-7 :
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /* Write code here */
    </style>
</head>
<body>
    
    <!-- select "I'm the direct son" and make it blue -->
    <div class="c1">
        <p>
            I'm the direct son
        </p>
    </div>

    <div class="c2">
        <span>
            <p>I'm the indirect son</p>
        </span>
    </div>
    
</body>
</html>

Assignment-8 :
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /* Write your code here */
    </style>
</head>
<body>
    
    <!-- Select s2 with id=the-one and make it blue -->
    <p class="s1">Random</p>
    <p class="s1">Random</p>
    <p class="s1">Random</p>
    <p class="s1" id="the-two">Random</p>
    <p class="s2">Random</p>
    <p class="s2">Random</p>
    <p class="s2" id="the-one">Select me</p>
    <p class="s2">Random</p>
    <p class="s2">Random</p>
</body>
</html>

Assignment-9 :
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /* Write code here */
    </style>
</head>
<body>
    
    <!-- Select the element with "Select me" and make it blue -->
    <div class="some-class">
        <div id="the-one">
            <p>Random</p>
            <div>
                <p class="c1 c2">Random</p>
            </div>
            <p class="c1 c2">Select me</p>
            <div class="c1 c2">Select me</div>
        </div>
    </div>
    <div class="some-class">
        <p class="c1">Random</p>
        <p class="c2">Random</p>
        <p class="c1 c2">Random</p>
    </div>
</body>
</html>

Mini Project-1 :
Design Skeletion of Website :
1) DEV 101 -> We will consider this as heading
2) HTML + CSS + JAVASCRIPT -> Nav Bar
Top Part is called as Nav Bar. Isko click kr k hm poori website pe navigate krte hai
Fir aati h CONTENT AREA/DISPLAY AREA jiske andr website ki information display hoti hai
At last aati h FOOTER -> Footer pe humari website k jo v links hote hai wo hote h. Iske andr kuch extra information likhi hoti hai
like copyright logo, extra information, terms and condition & Privacy Policy.

3) Attach Image


Note : Link = flukeout.github.io
Here we can practice CSS selectors

Day-5 :
CSS : New concepts use kr k styling apply krnge -
1) px, rem, em, % ?
2) box model
3) flexbox
Itna krne k baad aaram se bna paenge

Note : Itna acche se kr liye to Website as a Homework milega

HTML+CSS+JAVASCRIPT ko DEV101 k parallel m laana h to use liye kya krna h?
Isko nav bar banaenge aur styling krnge -
<nav>
        <h1>DEV 101</h1>
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JAVASCRIPT</li>
    </ul>
</nav>
Nav bar banane k baad inko ek container/line m lani h. To isko ek line m krne k liye class use krnge -
<div class="navbar">
        <nav>
            <h1>DEV 101</h1>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
        </ul>
    </nav>
</div>

Ab styling krnge -
.navbar{
    display: flex;
}
Ye flex property in dono ko side by side put kr degi
.navbar>nav{
    display: flex;
}

Ab DEV101 and HTML+CSS+JAVASCRIPT ko ek ek kone m daalnge -
.navbar>nav{
    display: flex;
    justify-content: space-between;
}

Ab mujhe HTML+CSS+JAVASCRIPT ko side by side krni h to uske liye hm kya krnge?
<ul> k andr wali chijo ko mjhe side by side krni h


Phle kuch concepts pdh lnge fir continue krnge -
1) 1) px, rem, em, %, vw, vh
Hum CSS likhte h to CSS m humein kuch units chaiye hote hai jaise image h aur usse
badi/choti krni h to humein kuch units chaiye honge to hm kis measurement
m bolnge ki badi/choti ho jao? To uske liye hm ye units use krte hai.

CSS k units 2 types k hote hai -
1) absolute -> px, cm, mm, in 
2) relative -> jo kisi k respect m differ krte ho.
                Ex : rem, em, vw, vh -> relative to viewport
What is ViewPort?
Jo humari laptop ki screen h usko hm viewport bolte hai aur ye differ isliye
karte hai qki screen ka jo resolution hota hai usse fark pdta hai (resolution
+ ScreenSize different different hota hai) 
Note : Ab screen kitni v bdi aur choti ho 8 inch means 8 inch hi hoga ya pixel to pixel hi rhega.
But agar hm relative units to ye relative hote h humare screen size se.

(a)Pixel : px -> It was 1/96th of an inch.
(b)rem -> relative to root element 
(c)em-> relative to parent element (parent element ka fontsize ko base unit maana jaega(<html></html>))
(d & e) vw & vh-> Agar mai koi v image  ki height and width likhtu hu aur mai likhta hu
jo height hogi wo -> img{height: 10vh and width: 10vw} to height: 10vh means
10% of your screen (view height) and width: 10vw means 10% of our screen width
(view width) 

Difference between these relative units -

1) em ->
<div class="main">
        <div class="box px">I am 200 px wide</div>
        <div class="box vw">I am 10vw wide</div>
        <div class="box em">I am 10em wide</div>
</div>

em means class="em" wale k div ka jo parent element h i.e. class="main", uska font-size
humne 30px set kr diya. To ab hm bolnge ki we are 10vm wide means 30px X 10 kr dega
Qki 1em = 30px, -> 10emX30px = 300px

Note : Development m koshish krnge ki hm pixel use naa kre. Qki kisi ki
screen badi hai aur kisi ki choti to wo humein relative website ni dikhti.
Ab meri screen 13.5 inch ki h aur agle ki 15 inch ki agr pixel 200px likhi h 
to dono k screen m difference aa jaega. Because screen size is but pixel is fixed so 
it will create difference.  

Note : div grows according to our content.
width= 100% (by default) but we can change by writing html{ width: 35px}
height= according to content 

2) rem -> root element se size pata lagta hai (root element by default = 16px)
3) em -> parent element se size pata lagta hai 
Note : font-size : 30px
1 em = 30px
width= 10em -> 10 x 30 px = 300px (parent element(<div class= name>) font-size)
width= 10 rem -> 35px x 10 rem = 350px (root element(html) font-size)

Note : root element = the element which is the root of our html page
like the highest element in hierarchy (html)
parent element : enclosed  <div class="name"> (parent)
                                <div>content</div>  (child)
                            </div>

4) vw, vh -> Screen is measured in pixels
If my screen is 800px(width) X 900px(height). So, when we write -
    <div class="viewport">Hello</div>
So, when we apply CSS on this -
    .viewport{
        width: 20vw;    -> 20% of my height
        height: 30vh;   -> 30% of my width
    }
This means that 20% of my width and 30% of my height.
So, if my width and height is -
width -> 800    -> 20% -> 160px
height -> 900   -> 30% -> 270px


Difference between rem and em?

rem -> all are descendent of this so all are 24px
em -> child follows font-size of their parent so as the size of parent multiplies automatically child font-size increases.

5) % -> jaise hmne em, rem pdhe to inka ek major chij thi ki font-size 
Lekin % m agr hm likhnge -
(parent) <div> (height, width : 400px)
            <img>
         </div>      

    img{
        height: 50%
        width: 50%
    }
To ye apni parent ki lega like div ki height, width: 400 px h to 
height: 400px ki 50% = 200px
width : 400px ki 50% = 200px
So, % apne parent container ki height width dekhta hai.


New Topics in CSS -
1) Margin
2) Padding
3) Border (already studied)
We call all these concepts as 'CSS BOX MODEL'.

    ----------------------------------------------
    |           Margin                           |
    |                                            |
    |   ------------------Border---------------  |
    |   |           Padding                   |  |
    |   |       ------------------------      |  |
    |   |       |        content       |      |  |
    |   |       |                      |      |  |
    |   |       ------------------------      |  |
    |   |                                     |  |
    |   ---------------------------------------  |
    |                                            |
    ----------------------------------------------

CSS BOX MODEL m pehle hmari 'MARGIN' hoti hai fir 'BORDER' hoti h fir 'PADDING' hoti hai aur fir uske andr hmari 'CONTENT' hota h.
Aur ye sb mil k ek CSS ka box banta hai.

Jb hmne 50px margin daalan na to mera content h according to diagram hmare content k upr padding, border then margin aata h.
To jo browser m jo box ban k aa rha h wo sirf bich wala content box h. Ab jb humne margin daala to usse ye hua ki
50px ye content box ko push kr deta hai iske aas paas wale content se.

Agr hm margin-top=50px; krte hai to ye sirf top se 50 px push hoga aur baaki sb same h.
margin-left: 50px; krne pe sirf left se 50px push hoga
margin-bottom: 50px; krne se niche se 50px push hoga

border: (50px) (solid/dotted/groove) color(red, green)

padding : content box k upar jagha create krta hai
padding: 20px;  -> ye box k andr se content aur border k bich m 20px ki gap kr ki.


Difference between Margin and Padding?
Margin : It creates empty space without background-color.
Padding : It creates empty space with bachground-color.
Note : Margin creates space outside whereas Padding creates space inside.


New Concept :
1) Flexbox
<div> 1 </div>  -> 1
<div> 2 </div>  -> 2
<div> 3 </div>  -> 3
Ye render hone pe aisa dikhta h -
    1
    2
    3
Agar hum chahte h ki ye aisa dikhe -
1   2   3
Tb humare kaam m aati h flexbox. Iske kuch properties pdhnge like -
 
 display: flex; (ye flex container m daal k display krega)

(a) flex-direction -> Ye kehti h ki hm jo flex kr rhe wo kaise kre?
By default to column wise hota hi h
flex-direction: column/rowcolumn-reverse/row-reverse;
flex-wrap: wrap; -> ekline m content bhrne lgega to ye next line wrap kr k manage kr degi
felx-wrap: no wrap (default)
flex-wrap : wrap-reverse; (reverse of wrap)
justify-content: center;    -> ye content ko centre pe le aaega
justify-content: end;   -> Ye content ko end m shift kr dega
justify-content: space-around; (aas paas sb jgha space ho)
justify-content: space-between; (do k bich max space jitne kr paega kr dega)
justify-content: space-evenly; (even space distribute krega from left and right also)


Note : site : flexbox froggy

