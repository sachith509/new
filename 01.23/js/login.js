// ...........................try 01........................



// document.getElementById("btnlog").onclick= function(){
 //
 //     validateData();
 // }




//.............................try 02..........................





// let click= document.getElementById("btnlog");
// click.addEventListener("click",function (){
//     let UN= document.getElementById("username").value;
//     let pw=document.getElementById("password").value;
//
//     if(UN==="sachith" && pw==="123"){
//
//         alert("login successfully!!");
//         window.location="home page.html";
//
//     }else {
//         alert("incorrect username or password!!")
//     }
// })





//..............................try 03.................................




 let click= document.getElementById("btnlog");
 click.addEventListener("click",newclck);

 function newclck (){
     let UN= document.getElementById("username").value;
     let pw=document.getElementById("password").value;

     if(UN==="sachith" && pw==="123"){

         window.location="home page.html";
         alert("login successfully!!");

     }else {
         alert("incorrect username or password!!");
     }
 }






