/*function h()
{
    var a;
  a=document.querySelector("#tt1").value;
  if (a < 20) {
   document.getElementById("example").innerHTML="your value is low"+a;
} else if (a< 50) {
    document.getElementById("example").innerHTML="your value is normal"+a;
} else if(a<100){
    document.getElementById("example").innerHTML="your value is high"+a;
}
else{
    document.getElementById("example").innerHTML="your value is overhigh"+a;
}
  


}

//function what()
//{
   // var a;
    //var b;
    //var c;
    //var e;
    //var f;
    
   //a= document.getElementById("name").value;
  // b= document.getElementById("phone").value;
  // c= document.getElementById("s").value;
  // e= document.getElementById("s").value;
   
  
   //document.getElementById("n1").innerHTML=a;
   //document.getElementById("n2").innerHTML=b;
//document.getElementById("n3").innerHTML=c;
   
   
  


//}
function wha()
{
var rates = document.getElementById('rates').value;
var rate_value;
if(rates =='like'){
    rate_value = document.getElementById('like').value;

}else if(rates =='dislike'){
    rate_value = document.getElementById('dislike').value;

}

document.getElementById('n4/**').innerHTML = rate_value;
}
function wha()
{
    const A;
    const B;
    return(A,B)
  
}
function f()
{
wha(10+20);
c=A+B;
console.log("value is"+c);
}*/



/*
// Set the date we're counting down to
var countDownDate = new Date().getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);
*/
var myVar;

function myStartFunction() {
    myVar = setInterval(function(){ alertFunc("First parameter", "Second parameter"); }, 1000);
}

function alertFunc(param1, param2) {
    document.getElementById("demo").innerHTML += "Hello ";

    document.getElementById("demo2").innerHTML = "Parameters passed to alertFunc(): <br>" 
    + param1 + "<br>" + param2 + "<br>";
}

function myStopFunction() {
    clearInterval(myVar);
}


