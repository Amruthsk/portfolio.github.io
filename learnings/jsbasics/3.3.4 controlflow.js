//break - hit break - go out  of the loop
console.log("break");
let i = 1;

while (i <= 10) {
  if (i % 7 === 0) {
    break;
  }
  console.log(i);
  i++;
}

console.log("continue");

let j = 1;
while (j <= 10) {
  if (j % 7 === 0) {
    j++;
    continue;
  }
  console.log(j);
  j++;
}
