//object - keyvalue

const person = {
    //3 members
    //property
    name: "ASK",
    //method1
    walk(){
        //this refers to the object person
        console.log(this);
    },
    talk(){}
};

//access members
//dot - know ahead
//bracket - dont know ahead 
console.log("-------Access------------");
person.name;
console.log("-------Access------------");
// person[walk]
console.log("-----------------------")
person.walk();//object
console.log("-----------------------");
const walk  = person.walk;
console.log(walk)//function()
console.log("-----------------------");
walk()//global object/window object - undefined
console.log("-----------------------");

console.log("binding this");
//(bind)@[object]/bind method [this]<->[object]=> set value of [this]
const wak = person.walk.bind(person);
wak();



//sofar-summarize into single line visual model
//access to property
//this keyword