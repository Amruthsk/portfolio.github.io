//to print hello world -20 times
for (let i = 1; i < 21; i++){
    console.log("Hello World")
}

for (let i = 3; i < 5; i = i + 1) {
  console.log("Hello World" + " " + i);
}

let arr = [10, 12, 3, 4, 5, 34, 9];

console.log(arr);

let length = arr.length;
console.log(length);

for (let i = 0; i < length; i++) {
  console.log(arr[i]);
}

//print all the even number in the console
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) console.log(arr[i]);
}

//print all the odd number in the console
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 1) console.log(arr[i]);
}

//while loop
let i = 0;

while (i < 5) {
  console.log("Easy");

  i++;
}