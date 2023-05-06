let hr=0;
let mint=0;
let sec=0;
let count=0;

let timer=false;

function start(){
timer=true;
stopwatch();
}

function stop(){
    timer=false;
}

function reset(){
    timer=false;
    hr=0;
    mint=0;
    sec=0;
    count=0;

    document.getElementById("hr").innerHTML="00"
    document.getElementById("min").innerHTML="00"
    document.getElementById("sec").innerHTML="00"
    document.getElementById("count").innerHTML="00"
}

function stopwatch(){
if(timer===true){
    setTimeout("stopwatch()",10);
    count=count+1;
    if(count===100){
        sec=sec+1;
        count=0
    }
    if(sec===60){
        mint=mint+1;
        sec=0
    }
    if(mint===60){
       hr=hr+1;
       mint=0;
       sec=0;
    }
   var hrstr=hr;
   var minstr=mint;
   var secstr=sec;
   var countstr=count;

  if(hr<10){
    hrstr="0"+hrstr;
  }
  if(mint<10){
    minstr="0"+minstr;
  }
  if(sec<10){
    secstr="0"+secstr;
  }
  if(count<10){
    countstr="0"+countstr;
  }

    document.getElementById("hr").innerHTML=hrstr;
    document.getElementById("min").innerHTML=minstr;
    document.getElementById("sec").innerHTML=secstr;
    document.getElementById("count").innerHTML=countstr;
    
}
}