const fs = require("fs");   //fs module
const path = require("path");   //path module

let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ["zip", "7z", "rar", "tar", "gz", "iso", "xz"],
    documents: ["docs","doc","pdf","xlsx","xls","odt","ods","odp","odg","odf","txt","ps","tex",],
    app: ["exe", "dmg", "pkg", "deb"],
    images: ["jpeg","png","jpg",]
}

function organize(srcPath) {
    if (srcPath == undefined) {
        // the process.cwd() method returns the current working directory of the Node.
        // console.log(srcPath);   //undefined
        //cwd: current working directory
        srcPath = process.cwd();    //means jis file se mai apan nodeJS prog run kr rha hu uss file tk ka path aa jaega
        // console.log("source path is : ",srcPath);
    }
    // else console.log(srcPath);

/*Ab mai folder banaunga organized files k naam se, filhaal source path se sirf join kiye h  */
    let organizedFiles = path.join(srcPath,"organized_files");//src file se jud jaega organizedFiles ka path
    // let organizedFiles = srcPath + "/" + "organized_path";
    console.log("organized file folder path is : ",organizedFiles);
    // mkdirSync-Synchronously ek folder bana leti h, ab isme path daalnge -> ye command folder banaega
    if(!fs.existsSync(organizedFiles) == false) { //organizedFiles naam ka folder exist nai krta to ek folder bana do warna rehne do
    fs.mkdirSync(organizedFiles);
      //mkdirSync -> means make directory i.e. folder -> organizedFolder ka maine jo path diya h iss path pe folder banana h
    }
    else console.log("Warning : Folder already exists");
}

let srcPath = "C:\Users\aslam\Downloads\Telegram Desktop\PepCoding\NodeJS\fileOrganizer\downloads";
//agar iske andar koi path de du to wo path print hoga
organize(srcPath);
// ye mai command de rha hu downloads folder k andar jao aur mere files sahi kr k aa jao.

/*
What are we planning to do?
---------------------------
-> Mene apne downloads folder ka path de diya i.e. 'srcPath'. Aur avi koi path pass nai kr rhe h isliye 'cwd' -> Current Working 
Directory wala path de rhe h, to filhaal usi folder k andar jo jo files h unko organize krna h.
1) download->path->srcPath->(cwd)

-> Ab download folder k andar ek folder banaenge i.e organizedFiles, aur iss organizedFiles Folder k andar saare folders honge 
like Media, Image, Documents, Archive, fir inn particular folder k andar files honge.

-> Mere downloads folder k andar bahut saare files padi hui hai, ab mujhe unn sb files ko organize krwana h. To mai chahta hu 
downloads folder k andar ek organizedFiles ka folder bann jae aur uske andar alag alag subfolders bann jae jisme ye files 
organized ho jae
*/