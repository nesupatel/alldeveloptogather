

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDIV").classList.toggle("show");
}




/* add and remove factories starts */

/* Item1 */
function addItem1(){
   var myDIV1 = document.getElementById("dynamic-list1");
   var candidate1 = document.getElementById("candidate1");
   var div = document.createElement("div");
   div.setAttribute('id',candidate1.value);
   div.appendChild(document.createTextNode(candidate1.value));
   myDIV1.appendChild(div);
}

function removeItem1(){
   var myDIV1 = document.getElementById("dynamic-list1");
   var candidate1 = document.getElementById("candidate1");
   var div = document.getElementById(candidate1.value);
   myDIV1.removeChild(div);
}


/* Item2 */
function addItem2(){
   var myDIV2 = document.getElementById("dynamic-list2");
   var candidate2 = document.getElementById("candidate2");
   var div = document.createElement("div");
   div.setAttribute('id',candidate2.value);
   div.appendChild(document.createTextNode(candidate2.value));
   myDIV2.appendChild(div);
}

function removeItem2(){
   var myDIV2 = document.getElementById("dynamic-list2");
   var candidate2 = document.getElementById("candidate2");
   var div = document.getElementById(candidate2.value);
   myDIV2.removeChild(div);
}

/* Item3 */

function addItem3(){
   var myDIV3 = document.getElementById("dynamic-list3");
   var candidate3 = document.getElementById("candidate3");
   var div = document.createElement("div");
   div.setAttribute('id',candidate3.value);
   div.appendChild(document.createTextNode(candidate3.value));
   myDIV3.appendChild(div);
}

function removeItem3(){
   var myDIV3 = document.getElementById("dynamic-list3");
   var candidate3 = document.getElementById("candidate3");
   var div = document.getElementById(candidate3.value);
   myDIV3.removeChild(div);
}


/* add and remove factories ends */




/*random number generation starts*/

/**
* Returns a random integer between min (inclusive) and max (inclusive)
* Using Math.round() will give you a non-uniform distribution!
*/
function getRandomInt(min, max)
{

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addmethod1()
{
      var m = parseInt( document.getElementById("rnum1").value);
   var n = parseInt(document.getElementById("rnum2").value);
  var c = parseInt(document.getElementById("count1").value);
    var text = " ";

  
   
   for(var k=0;k<c;k++)
   {
    
   var x = getRandomInt(n, m);
    
    
    
    
    for(var i=0; i<1;i++)
    {
       text += x+"<br>";
    }

   document.getElementById("demo1").innerHTML = text;
   }
}

function addmethod2()
{
      var m = parseInt( document.getElementById("rnum3").value);
   var n = parseInt(document.getElementById("rnum4").value);
  var c = parseInt(document.getElementById("count2").value);
    var text = " ";

  
   
   for(var k=0;k<c;k++)
   {
    
   var x = getRandomInt(n, m);
    
    
    
    
    for(var i=0; i<1;i++)
    {
       text += x+"<br>";
    }

   document.getElementById("demo2").innerHTML = text;
   }
}

 function addmethod3()
{
      var m = parseInt( document.getElementById("rnum3").value);
   var n = parseInt(document.getElementById("rnum4").value);
  var c = parseInt(document.getElementById("count3").value);
    var text = " ";

  
   
   for(var k=0;k<c;k++)
   {
    
   var x = getRandomInt(n, m);
    
    
    
    
    for(var i=0; i<1;i++)
    {
       text += x+"<br>";
    }

   document.getElementById("demo3").innerHTML = text;
   }
}




/*random number generation ends*/


