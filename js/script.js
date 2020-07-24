var i=0;
function read(){
    if(!i){
        document.getElementById("more").style.display="inline";
        document.getElementById("blank").style.display="none";
        document.getElementById("read").innerHTML="Read Less";
        i=1;
    }
    else{
        document.getElementById("more").style.display="none";
        document.getElementById("blank").style.display="inline";
        document.getElementById("read").innerHTML="Read More";
        i=0;
    }
}

var j=0;
function read2(){
    if(!j){
        document.getElementById("more2").style.display="inline";
        document.getElementById("blank2").style.display="none";
        document.getElementById("read2").innerHTML="Read Less";
        j=1;
    }
    else{
        document.getElementById("more2").style.display="none";
        document.getElementById("blank2").style.display="inline";
        document.getElementById("read2").innerHTML="Read More";
        j=0;
    }
}