//.......create auto logout part.............

let timer=document.getElementById("timer");
let count=60;

setInterval(timeReaming,1000);

function timeReaming(){

    count--;
    if(count<1){
        window.location="login.html";
        alert("You are logout, this action was done for security purpose.");
    }else{
         timer.innerText= count;
    }
}

window.addEventListener("mousemove",resetTime);

function resetTime(){
    count=60;
}