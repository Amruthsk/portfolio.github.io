// "use strict" ;

// //this in global space 

// console.log(this); // value - window object in browser, global object in Node.js

//this inside a function ----> global(window(browser),global(node))

function x(){
// the value depends on strict-undefined/non strict mode window
    console.log(this);
}

x(); // value undefined


// the value of this kw depends on how the function is called

 window.x(); // value - window objed 

 // this inside a object's method
 //f() inside the object - method --> this references object
 const obj = {
    a:10,
    x:function(){
         console.log(this);

    }

 }

 obj.x();// value of this whole object

 const obj1 = {
   a: 10,
   x: function () {
     console.log(this.a);
   },
 };

 obj1.x();//this value property a


//f() inside the object - method --> this references object itself
 const video = {
   title: 10,
   play () {
     console.log(this);
   },
 };

 // new method into the video object
 video.stop = function(){
  console.log(this);
 };


 video.play();

 video.stop();

//this inside a function ----> global(window(browser),global(node))
function playVideo(){
  console.log(this);
}

playVideo(); // undefined strict mode/ window non strict mode


// constructor function
function Video(title){
  this.title = title;
  console.log(this);

}
const v  = new Video('c'); // new empty object ---->Video object

// callback ---> references global
const pbcd = {
  title:'a',
  tags: ['a','b','c'],
  showTags(){
    this.tags.forEach(function(tag){
      console.log(this,tag); // cb refers to global object
    })
  }
}

pbcd.showTags(); 

console.log("this approach to give the value of this");
const pbdd = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag); // cb refers to this inside ()
    }, this); //this refers to pbdd object
  },
};

pbdd.showTags(); 

console.log('dont use self approach to give the value of this')
// changing this without this and using self - declare-intialize-self
const pbsd = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    const self = this; // this video object
    this.tags.forEach(function (tag) {
      console.log(self.title, tag); // cb refers to this inside ()
    }, this); //this refers to pbsd object
  },
};

pbsd.showTags(); 



 //3 important topics - call,apply,bind 
 function playRace(a,b){
  console.log(this);
 }

 playRace();

 // call,apply ,bind -can change the value of this or this function
// call method simplest
playRace.call({name:'AK'},1,2) // new object added
playRace.apply({name:'ASK'},[1,2]) // new object added difference argument i/p
playRace.bind({name:'vikram'});// wont call function returns to new funand playrace points to new object which we pass

const fn = playRace.bind({ name: "vikram" });
fn();

playRace.bind({ name: "VSK" })();// () calls f() that immedietly returned from the bind method

playRace();



console.log("use  arrow f() modern approach to give the value of this best way");

const pbafd = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    const self = this; // this video object
    this.tags.forEach(tag => {
      console.log(this.title, tag); // this refers to pbafd
    }); 
  },
};

pbafd.showTags(); 


console.log("use bind approach to give the value of this");

const pbtd = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    const self = this; // this video object
    this.tags.forEach(function (tag) {
      console.log(self.title, tag); // cb refers to this inside ()
    }.bind(this)) //this refers to pbtd object
  },
};

pbtd.showTags(); 



