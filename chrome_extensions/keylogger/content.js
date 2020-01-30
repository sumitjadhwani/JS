var title=document.title;
console.log("Welcome to ",title);
var str="";
document.onkeypress=(e)=>{
    e = e || window.event;
    var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
    console.log("onkeypress"+charCode);
    if(charCode==13) 
        console.log(str),str="";
    else 
        str+=String.fromCharCode(charCode);
};

document.onkeydown=(e)=>{
    var charCode=e.keyCode;
    console.log("onkeydown"+charCode);
    if(charCode==9) 
        console.log(str),str="";
    else 
        str+=String.fromCharCode(charCode);
}