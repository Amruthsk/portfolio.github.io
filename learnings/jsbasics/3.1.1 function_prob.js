//problem - Given a number write a function to determine whether the no. is prime or not

//approach

//input - 2 output -prime
//input - 4 not prime

// check if divisible by any no less than given number not prime /prime
//Loop

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return "Not Prime";
    }
  }
  return "Prime";
}

let ans = isPrime(11);
console.log(ans);

console.log("Star pattern");
console.log("pattern1");

