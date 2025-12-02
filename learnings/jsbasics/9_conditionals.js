let result = "Initial";
let x = 10;
if (x > 5) {
  result = "Path A"; // This executes
} else if (x > 8) {
  result = "Path B"; // This is entirely skipped
} else {
  result = "Path C";
}


console.log(result);