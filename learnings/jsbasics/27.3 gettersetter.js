function Circle(radius) {
  this.radius = radius; //available

  let defaultLocation = { x: 0, y: 0 }; // not available //private members of circle object

  this.getDefaultLocation = function () {
    //available
    return defaultLocation;
  };
  // closure - function inside a function - access the outer function variable
  this.draw = function () {
    //available
    console.log("draw");
  };
}

const circle = new Circle(10);
console.log(circle);
circle.draw(); // draw
//circile.getDefaultLocation();  // reference error

//using getter access the private variable
function Circleg(radius) {
    this.radius = radius; // public

    let defaultLocation = { x: 0, y: 0 }; // private

    this.getDefaultLocation = function () {
        return defaultLocation;
    };

    this.draw = function () {
        console.log("draw");
    };

    Object.defineProperty(this, "defaultLocation", {
        get: function () {
            return defaultLocation;
        },
        set: function (value) {
            if (!value.x || !value.y)
                throw new Error("Invalid location.");
            defaultLocation = value;
        }
    });
}

const circleg = new Circleg(10);
console.log(circleg);
circleg.draw(); // draw
console.log(circleg.getDefaultLocation()); // { x: 0, y: 0 }
console.log(circleg.defaultLocation); // { x: 0, y: 0 }

// Test setting the defaultLocation
circleg.defaultLocation = { x: 10, y: 20 };
console.log(circleg.defaultLocation); // { x: 10, y: 20 }

// Test error case
// circleg.defaultLocation = { x: 10 }; // Throws: Invalid location.
