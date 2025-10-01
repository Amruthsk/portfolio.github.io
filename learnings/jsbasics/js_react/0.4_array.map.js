//render list of items

//string concatination + fucntion expression
const colors = ["red", "green","blue"];
colors.map(function(colors){
    return "<li>" + colors + "</li>";
})


//string concatinatio + callback
const color = ["red", "green","blue"];
color.map(color =>"<li>" + color + "</li>";
)

//template literals
const colos = ["red", "green","blue"];
colos.map(colos =>`<li> ${colos}</li>`;
)
