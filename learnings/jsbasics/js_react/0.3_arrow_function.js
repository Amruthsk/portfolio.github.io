const square =  function(number){
    return number * number;

}


const squares = (number) =>{
return number * number
}

const squares1 = number =>  number * number;


//where arrow functions usefull
// cleaner and easier to read


const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: false },
  { id: 3, isActive: true },
  { id: 4, isActive: false },
];

const activeJobs = jobs.filter(function(job){return job.isActive;})
const activeJobse = jobs.filter( job => job.isActive);


//Arrow functions & this
//dont rebind this

const person = {
    talk(){
        console.log("this",this)
    }
};
//context preson
person.talk();// reference to function/person object



const persond = {
    talk(){
        setTimeout(function() { 
            console.log("this",this);
        },1000);
       
    }
};

//context global
persond.talk();// reference to window object


//solution for making it person object

const persons = {
    talk(){
        var self = this;
        setTimeout(function() { 
            console.log("self",self);
        },1000);
       
    }
};

//lossing this
//context global
persons.talk();// reference to person object


//arrow function with callback dont rebind with this keyword meaning?
//describe
const persong = {
    talk(){
        setTimeout(() =>  { 
            console.log("this",this);
        },1000);
       
    }
};

//perserving this to its lexical paren
//context global
persong.talk();// reference to person object

