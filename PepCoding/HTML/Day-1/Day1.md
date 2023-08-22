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
Humein ko samaan kharidna h to shopping k liye hm ek list banate h
COntent ko list k form m represent krne k liye List Tag use krte h
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
