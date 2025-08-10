//how to count digits in a number using loops and mathematical operations.
//It enhances your understanding of basic number manipulation.
//write a function that returns the count if digits in number

function countdigit(num) {
  if (num == 0) return 1; //ed1

  num = Math.abs(num)//ed2
  let counter = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    counter += 1;
  }
  return counter;
}

let num = 0;
let result = countdigit(num);

console.log(Math.floor(10.9));
console.log(Math.round(10.9));
console.log(Math.ceil(10.9));
console.log(Math.abs(-10.9));

console.log("count the number")
console.log(result);
//edge case
//0 if case
//negative number  -> math.abs (-ve to +ve)
