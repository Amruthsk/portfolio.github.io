const arr = [5,1,2,3,4];

//map - double,triple,finding binary---> transform the whole array maps one to one value

// function double(x){
//     return x*2;
// }

// const output = arr.map(double)

// console.log(output)


//triple
// function triple(x) {
//   return x * 3;
// }

// const output = arr.map(triple);

// console.log(output);


//binary
// function binary(x) {
//   return x.toString(2);
// }

// const output = arr.map(binary);

// console.log(output);


//function as argument
// const output = arr.map(function binary(x) {
//   return x.toString(2);
// });
// console.log(output);

//arrowfunction

// const output = arr.map( (x) =>{ x.toString(2);});
// console.log(output);

//filter- used to filter


// function isOdd(x){
//     return x%2
// }
// const output = arr.filter(isOdd);

// console.log(output);


// function isEven(x) {
//   return x % 2 == 0;
// }
// const output = arr.filter(isEven);

// console.log(output);



// function g4(x) {
//   return x >= 4;
// }
// const output = arr.filter(g4);

// console.log(output);



// const output = arr.filter(function isEven(x) {
//   return x % 2 == 0;
// });

// console.log(output);


// const output = arr.filter( (x) =>  { return x % 2 == 0});

// console.log(output);


// reduce - take array and come out as single value

// sum or max
// non functional way of programming

// function findSum(arr){
//     let sum = 0;
//     for(let i = 0; i< arr.length; i++){
//         sum = sum + arr[i];
//     }
//     return sum;
// }

// console.log(findSum(arr));

// // acc=sum,curr=arr[i]

// const  output =  arr.reduce(function(acc,curr){
//     acc = acc + curr;
//     return acc;
// },0)

// console.log(output)


// //max
// function findMax(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i] > max){
//         max = arr[i]
//     }
//   }
//   return max;
// }

// console.log(findMax(arr));


// const output = arr.reduce(function(max,curr){
//     if(curr > max){
//         max = curr;
//     }
//     return max;
// },0);

// console.log(output);


// array of object list of users
const users = [
    {firstName:"Amruth", lastName:"S K", age: 27 },
    {firstName:"Vikram", lastName:"S K", age: 23 },
    {firstName:"Donald", lastName:"Trump", age:75 },
    {firstName:"Narendra", lastName:"Modi", age: 74 },
];


// // list of fullnames - use map x- object
// const output = users.map((x) => x.firstName +" "+x.lastName);
// console.log(output);


// //find out age ,how many people are there frequency with reduce
// const output = users.reduce(function(acc, curr){
//     if(acc[curr.age]){// already present
//         acc[curr.age] = ++acc[curr.age];
//     }
//     else{ // not present create 27:1,75:1,74:1
//         acc[curr.age]=1;
//     }

//     return acc;

// },{});
// console.log(output);

// firstname of all the people whose age is less than 30

// const output = users.filter( (users) =>  { return users.age < 30});

// console.log(output);


// const output = users.filter(function less(users) {
//   return users.age <30;
// });

// console.log(output);


// chaining
const output =
 users.filter((x) => x.age < 30) //1st filter
 .map(x => x.firstName);

console.log(output);

// chaining
const outpute = 
users.filter((x) => x.age < 30)
.map(x => x.lastName);

console.log(outpute);


// same with reduce
const reoutput = users.reduce(function(acc, curr)
{
    if(curr.age < 30){// already present
        acc.push(curr.firstName);
    }
    return acc;
},[]);
console.log(reoutput);


const output1= users.reduce((acc,curr) => 
{ 
    if(curr.age <30)
        {
            acc.push(curr.firstName);
        }
        return acc;

}, [])

console.log(output1); 
