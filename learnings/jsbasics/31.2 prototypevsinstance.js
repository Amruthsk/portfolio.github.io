
//draw method in object instance

function Circle(radius){
    //Instance members
    this.radius = radius;

    this.draw = function(){
        console.log('draw');
    }
}

const c1 = new Circle(1);
const c2 = new Circle(3);

console.log(Circle.prototype === c1.__proto__); // reference circlebase


function Semicircle(radius){
  //Instance members
  this.radius = radius;
  this.move = function(){
    console.log('move');
  }
}

//moving methods from obj to prototype is an optimization technique
//Prototype members easy to modify the prototype of the object 
//important not to modify objects/ methods bulit in objects in js
//dont add-remove-overwrite built in objects becox it causes issues
Semicircle.prototype.draw = function () {
  console.log("draw");
}


Semicircle.prototype.tostring = function () {
  return "Circle with radius"+ this.radius;
};

//reference m in prototypes
Semicircle.prototype.place = function () {
  this.move();
  console.log("place");
};

const s1 = new Semicircle(1);  //semicircle obj
const s2 = new Semicircle(3);

console.log(Semicircle.prototype === s1.__proto__);// semicircle base

//Iterating instance members

// returns instance members
console.log(Object.keys(s1));

// returns all members
for (let key in s1) console.log(key);

// other name for instance is own property
console.log(s1.hasOwnProperty("move"));

console.log(s1.hasOwnProperty("draw"));