//street,city,zipcode
//showAddress(adress,city,635)

console.log('object literal');
//different ways to create object in js// object literal
let address = {
    street: "139 street",
    city: "chennai city",                
    zipcode: "009",
};

function showAddress1(address) {
    for (let key in address) {
        console.log(key, address[key]);
    }
}
showAddress1(address);

console.log(address.street);


console.log("factory constructor");
//factory constructor-cammel notation
function createAddress(adress, city, pin) {
  return {
    street: adress,
    city,
    pin,
  };
}
const cir1 = createAddress('123 street', 'chennai', '097');
console.log(cir1);



console.log("constructor function");
//constructor function - pascal notation
function Showaddress(adress, city, pin) {
  this.street = adress;
  this.city = city;
  this.zipcode = pin;
}

console.log(new Showaddress("123 street", "chennai", "007"));

const address0 = new Showaddress("456  street", "Tnagar", "0028");
console.log(address0);


console.log('object equality');
//object equality
// -check all the properties are equal
// -check all reference are same 
//objects reference type 
//different location same details/ID

function Address(adress, city, pin) {
  this.street = adress;
  this.city = city;
  this.zipcode = pin;
}

let address1 = new Address('a','b','c');
let address2 = new Address("a", "b", "c");
let address3 = address1;  

function areEqual (address1,address2){
    //check individual properties
    return (
      address1.street === address2.street &&
      address1.city === address2.city &&
      address1.zipcode === address2.zipcode
    );

}

function areSame(address1, address2) {
//two variables referenceing same object
return address1 == address2;
} 


console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));//diff reference
console.log(areSame(address1, address3)); // same reference
console.log(areSame(address3, address2));//diff reference


//blog
console.log("object literal");
//different ways to create object in js// object literal
let post = {
  title: "a",
  body: "chennai b",
  author: "c",
  views: 10,
  comments:[
    {author:'a', body:'b'},
    {author:'a',body:'b'},
  ],
  isLive: true
};

console.log(post);


console.log("constructor function create post object"); 
//constructor function - pascal notation blogging engine
function Post(title,body,author,views) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0; //default
  this.comments = []; //default
  this.isLive = false; //default
}

let post1 = new Post('a','b','c');
console.log(post1);


let priceRanges = [
  { label: "$", tooltip: "Inexpensive", minPerPerson: 0, maxPerPerson: 10 },
  { label: "$$", tooltip: "Moderate", minPerPerson: 11, maxPerPerson: 20 },
  { label: "$$$", tooltip: "Expensive", minPerPerson: 21, maxPerPerson: 50 },
];

let restaurants = [
  {averagePerPerson: 5}
]