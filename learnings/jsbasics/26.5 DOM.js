//Document Object Model -entier layout - Document
//n: know tree structure - important
// modify data in element through js

// //content - modify
// document.getElementById("msg").innerHTML = "Javascript is easy"

// //styling - modify
// document.getElementById("h2").style.color = "red"

// //overwrite already present content (changing src)
// document.getElementById("img").src = "img1.png"

// //reacting to the user - events on click content change- event ,f(),use capture here 2
// document.getElementById("h3").addEventListener("click",function(){
//     document.write("Code Executed")
// })

// n: multiple event listeners
//use variable, declar function separately
var a = document.getElementById("h3");
a.addEventListener("click",msg1)
a.addEventListener("mouseout",msg2);

function msg1()
{
    document.getElementById("h3").innerHTML="Code Executed"
}

function msg2() {
  document.getElementById("h3").innerHTML = "Success";
}