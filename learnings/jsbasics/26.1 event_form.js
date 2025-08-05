//Events
//mostused
//onclick() - just click - trigger
//onchange()-
//onmouseover()-  just keep the cursor
//onmouseout()- remove the cursor out of that

//n: on clicking button --> some action has to be performed
//button-structure - in 

{/* <body>
    <p>Javascript is easy</p>
    <button id="clickMe">Click Me </button>
    <script src="32.1prototypicalinheri.js"></script>
</body> */}

// inside head- script src event_form.js

// function display(){
//     alert ("This is onclick event")
// }

//n:call only after the event occur
//include the onclick event inside the button and call that function

//<button  onclick="display()" id="clickMe">Click Me </button>
//<button  onclick="display()" id="clickMe">Click Me </button>
//<button  onMouseOver="display()" id="clickMe">Click Me </button>
//<button  onmouseout="display()" id="clickMe">Click Me </button>

// on changing content - event trigger 
//n:one value -> change the value - trigger event-function
//take content from html ---use it in js


//on changing value perform action - fun(your requirement)
//this.=> particual/specific
// function display(inpt){
//     confirm ("This is onchange event text is modified"+" "+ inpt)
//  }

//n:take content from js and display the content inside the body example messages form db

//document-gets the element-penetrate(.)
// getelementbyID into the particualr element
//.innerHTML -property to pass the content from js to html file
document.getElementById("msg").innerHTML = "This is H1 tag";

//based on n know execute