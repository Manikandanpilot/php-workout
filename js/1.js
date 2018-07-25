function h()
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

function what()
{
var a;

a=document.getElementById("tt1").value;
b=document.getElementById("tt2").value;


if(a.match(b))
{
    document.getElementById("hi").style="color:green; font-size:80px;";
}
else{
    document.getElementById("hi").style="color:red;";
}
}
function what()
{
var a;
var b = /[a-z]/g;
var d = /[0-9]/g;
var c= /[A-Z]/g;
a=document.getElementById("tt1").value;

if(a.match(b) && a.match(c) && a.match(d) && (a.length>4))
{
    alert("success")
}
else 
{
    if(a.match(b))
    {
         var l=lower;
    }
    if(a.match(c))
    {
         var u=upper;
    }
    if(a.match(d))
    {
         var n=number;
    }
    if(a.length>4)
    {
         var m=max;
    }
       
}
}


// Output: Absolute values are the same.
/*<div class="container">
  <div class="form-group>"
<div class="mani2">
 <p>Name<input type="textbox"  class="form-control" value"" id="name" ></p>
 <p>Phone number<input type="textbox"   class="form-control"  value"" id="phone" ></p>
 <p>Gender</p>
 <select id="s">
   <option  class="form-control" id="male">
    <p  class="form-control"> male</p>
   </option>
   <option   class="form-control" id="female">
    <p  class="form-control">female</p>
  </option>

 </select>
 <div class="rates">
 like<input type="radio"  name="rates"  value"like" id="like">
dislike<input type="radio"  name="rates"  value"Dislike" id="dislike">
</div>
  <button class="button btn-primary  form-control" onclick="wha();"  >click me</button>
  <br><br>
  <table class="table table-striped">
    <thead>
      <tr>
      <th>Name</th>
      <th>Phone Number</th>
      <th>Gender</th>
      <th>Option</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td id="n1"></td>
        <td  id="n2"></td>
        <td  id="n3"></td>
        <td  id="n4"></td>
        <td  id="n5"></td>
        <td  id="n6"></td>
        <td  id="n7"></td>
        <td  id="n8"></td>
        <td  id="n9"></td>
      </tr>

    </tbody>
  </table>
 
  <p id="example" ></p>
</div>
<div id="hi"></div>
<div id="he"></div>
<div id="hg"></div>


</div>
</div>
</div>


<p>Name<input type="textbox"  class="form-control" value"" id="name" ></p>*/