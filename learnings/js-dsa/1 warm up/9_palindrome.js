//given a x return true if the number is palindrome
let number = 123;
let topBrick = number % 10; // The Pry Tool / Scanner/ last digit

console.log(topBrick); // Output: 3
console.log(number);   // Output: 123 (The original  is unchanged)



newnumber = Math.floor(number / 10); // The Discard Tool / Robotic Arm/ remove last digit

console.log(newnumber); // Output: 12 (The original D has been transformed)


function ispalindrome(n){
  let ncopy = n; //for comparing
  let rev = "";
  while (n > 0) {
    let lastdigit = n % 10;
    rev += lastdigit;
    n = Math.floor(n / 10);
  }
  if (rev == ncopy) return true;
  else return false;
}

console.log(ispalindrome(343));

//or


function ispalindrome2(x){
  if (x<0) return false;// edge case
  let xcopy = x//for comparing
  let rev = 0;
  while (x > 0) {
    let lastdigit = x % 10;
    rev = (10*rev) + lastdigit;
    x = Math.floor(x / 10);
  }
//   if (rev == xcopy) {return true};
//   else {return false};
return rev == xcopy;
}

console.log(ispalindrome2(2552));


