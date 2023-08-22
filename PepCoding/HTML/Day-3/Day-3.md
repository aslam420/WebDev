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
