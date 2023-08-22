HTML+CSS+JAVASCRIPT => margin-left: 2rem;

-> div k andr jitni chije h unko centre krni h to uske liye property hoti h - text-align
-> Ab footer ko side se kr k bich m krnge - text-align

Ab HTML+CSS+JAVASCRIPT ko link banana hai -
Uske liye <li> tags ko <a> tags m wrap kr dnge
    <a href=""><li>HTML</li></a>
    <a href=""><li>CSS</li></a>
    <a href=""><li>JAVASCRIPT</li></a>

I want to remove the links underline -
a{
    text-decoration: none;
}
This text-decoration removes the underline on the link.

Now I want to change the links blue color to black -
a:link, a:visited{
    color: black;
}

<a> link ko black kr ko aur visit kr le tb v visit kr decoration

a:hover{
    color: lightpink;
}
-> Isse ye hoga ki jb hm cursor uspe le k jaenge na tb pink hoga.

Ab hum apne html+css+js m link daalnge -
 <div class="navbar">
        <nav>
            <h1>DEV 101</h1>
        <ul>
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><li>HTML</li></a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><li>CSS</li></a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><li>JAVASCRIPT</li></a>           
        </ul>
        </nav>
    </div>

Aur content m diye html,css,js m v link daal skte h -

Note : font-weight is used for boldness.


Q) Kisi page k particular element m pahuche ka tarika -
-> Phle ek id bna k naam dnge fir dusre jgha href m uss id ko call krnge -

Step-2
<div class="navbar">
        <nav>
            <h1>DEV 101</h1>
        <ul>
            <a href="#scroll"><li>HTML</li></a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><li>CSS</li></a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><li>JAVASCRIPT</li></a>           
        </ul>
        </nav>
    </div>

Step-1
 <div class="skills" id="scroll">
        <div>
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                <img src="html.png" alt="html_logo">
                <h2>HTML5</h2>
            </a>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia ipsum nobis reprehenderit possimus veniam a voluptates quidem vero perferendis exercitationem? Similique, nesciunt! Vitae nisi qui soluta necessitatibus laudantium inventore vero.
            </p>
        </div>
        <div>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                <img src="css.png" alt="css_logo">
                <h2>CSS3</h2>
            </a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, illo expedita? Sed, neque quasi consectetur sunt eligendi magnam quas, velit debitis itaque fuga cupiditate atque tempora voluptate saepe, magni totam?
            </p>
        </div>
        <div>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                <img src="js.png" alt="javascript_logo">
                <h2>JAVASCRIPT</h2>
            </a>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus aspernatur, minima quis error alias aliquam, excepturi non nemo corrupti eaque ab eligendi, cum voluptas a sint id. Nisi, reprehenderit? Quos.
            </p>
        </div>
    </div>

Then content k andr wale html, css, js m href link daal dnge then new page m move krnge.

