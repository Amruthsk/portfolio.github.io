//var vs let vs const

//var -> function scope
//let -> block scope
//const -> block scope cannot changed


//[function] => 
//[[Loop]] ⊃ *for loop* ⇔ {Iteration, Indexed, Range-bound} @ [i] → [Start i=1] --- {Condition i<5} → (Execute: console.log @ "i) → (Modify i++)


function sayHello(){
    for (var i = 0; i < 5; i++){
        console.log(i);
    }
    console.log(i);
}

//(call)@[function]
sayHello();