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