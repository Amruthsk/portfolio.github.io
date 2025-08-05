//prototypical inheritance - inherit,fix constructor,super constructor call
// Parent object
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    return this.name + " makes a noise.";
};

// Child constructor
function Dog(name) {
  Animal.call(this, name); // Super constructor call //this refers to dog  call invoke animal
  //ensures that Dog gets the name property from Animal.
}

// Inherit from Animal
Dog.prototype = Object.create(Animal.prototype);

// Fix constructor pointer
Dog.prototype.constructor = Dog;

// Add Dog-specific method
Dog.prototype.bark = function() {
    return this.name + " barks!";
};




