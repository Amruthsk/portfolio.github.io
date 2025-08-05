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
//Pattern problem -1
// ****
// problem  0 print n stars in a line
// approach
// loop to repeate task for n rows- for each row
// inside row do Loop column repeate task for n columns  concatenate string of * stars n times
function oneLine(n) {
  //loop each row
  // n=4,row = single row =1 ->  ****
  for (let row = 1; row <= 1; row++) {
    //loop to concatenate n star in each row
    let star = "";
    for (let col = 1; col <= n; col++) {
      star += "*";
    }
    //after loop  we will have ****
    console.log(star);
  }
}

let star = oneLine(4);
console.log(star);

console.log("pattern2");
// Problem - 2 Given a value n - print the Square pattern
// ***
// ***
// ***
// approach
//i/p - 2 op- 2 X 2 stars
//i/p - 4 op- 4 X 4 stars
//Loop row repeat task for n rows - for each row
//inside row Loop column repeate task for n columns & concatenate

//Loop column

function printSquareStar(n) {
  //loop each row n=3 row =3
  for (let row = 1; row <= n; row++) {
    //inside row loop to concatenate star
    let star = "";
    for (let j = 1; j <= n; j++) {
      star += "*";
    }
    //after loop  we will have ***
    console.log(star);
  }
}
//return - undefined
let Squarestar = printSquareStar(3);
console.log(Squarestar);

console.log("pattern3");
//Triangle pattern

// Problem - 3 Given a value n - print the Triangle pattern
// *
// **
// ***
// approach
//i/p - 2 op- 1,2  stars
//i/p - 4 op- 1,2,3,4 stars
//Loop row to repeate task for n rows
//Loop column repeate task for n columns- condition< = row & concatenate

function righttrianglepattern(n) {
  //loop row n = row =3
  for (let row = 1; row <= n; row++) {
    //inside row loop to concatenate star
    let star = "";
    for (let j = 1; j <= row; j++) {
      star += "*";
    }
    //after the loop we will have star // to no. rows in each row
    console.log(star);
  }
}
// return- undefined
let Trianglestar = righttrianglepattern(3);
console.log(Trianglestar);

console.log("pattern4");
//mirror Triangle pattern

// Problem - 4 Given a value n - print the mirror Triangle pattern(space & star)
//  *
// approach
//i/p - 2 op- 1,2  stars - n-1 space
//i/p - 4 op- 1,2,3,4 stars-
//Loop row to repeate task for n rows - for each row for ith row 1)print n-1 space 2) print i star
//inside row Loop column repeate task for n columns- condition< = row & concatenate

function invertedtrianglepatternone(n) {
  //loop n= 4-> <3 space><1 space> row = 1 single row
  for (let row = 1; row <= 1; row++) {
    //inside row 1st loop to concatenate space
    let spacestar = "";
    for (let cspace = 1; cspace <= n - row; cspace++) {
      spacestar += " ";
    } // at the end of loop will have 3space  concatenated
    //inside row 2nd loop to concatenate star
    for (let col = 1; col <= row; col++) {
      spacestar += "*";
    } // at the end of loop will have 3 space 1star  concatenated
    console.log(spacestar);
  }
}
// return- undefined
let InvertedTrianglestarone = invertedtrianglepatternone(4);
console.log(InvertedTrianglestarone);

//     *
//    **
//   ***
//  ****
console.log("pattern4a");
function invertedtrianglepattern(n) {
  //loop row n = row =3
  for (let row = 1; row <= n; row++) {
    // inside row 1st loop to concatenate space n- row
    let spacestar = "";
    for (let cspace = 1; cspace <= n - row; cspace++) {
      spacestar += " ";
    } // at the end of loop will have 3space  concatenated
    // inside row 2nd loop to concatenate stars star = row
    for (let col = 1; col <= row; col++) {
      spacestar += "*";
    } // at the end of loop will have 3space 1star  concatenated
    console.log(spacestar);
  }
}
// return- undefined
let InvertedTrianglestar = invertedtrianglepattern(4);
console.log(InvertedTrianglestar);

console.log("pattern5");
//Problem - 5 Given a value n - print the  Triangle pattern(space & star)
//     *
//    ***
//   *****
//  *******
// *********
// approach
//i/p - 2 op- 1,3  stars - n-1 space
//i/p - 4 op- 1,3,5,7 stars- n-1 space
//Loop row to repeate task for n rows - for each row for ith row 1)print n-1 space 2) print 2*row -1 star
//inside row Loop column repeate task for n columns- condition< = 2*row -1  & concatenate
console.log("Triangle pattern");
function trianglepattern(n) {
  //loop row n = row =3
  for (let row = 1; row <= n; row++) {
    // inside row 1st loop to concatenate space n- row
    let spacestar = "";
    for (let cspace = 1; cspace <= n - row; cspace++) {
      spacestar += " ";
    } // at the end of loop will have 3space  concatenated
    // inside row 2nd loop to concatenate stars star = row
    for (let col = 1; col <= 2 * row - 1; col++) {
      spacestar += "*";
    } // at the end of loop will have 3space 1star  concatenated
    console.log(spacestar);
  }
}
// return- undefined
let Triangle = trianglepattern(5);
console.log(Triangle);

console.log("pattern6");
//pattern 6 problem- Given a value n - print the  Triangle pattern(space & star) n =5
// *****
// ****
// ***
// **
// *

//
// approach
// loop to repeate task for n rows- for each row
// inside row do Loop column repeate task for n columns  concatenate string of * stars n-row+1 times
function pattern_6(n) {
  //loop each row
  // n=4,row = n row =1
  for (let row = 1; row <= n; row++) {
    //loop to concatenate n star in each row
    let star = "";
    for (let col = 1; col <= n - row + 1; col++) {
      star += "*";
    }
    //after loop  we will have ****
    console.log(star);
  }
}

let pattern6 = pattern_6(5);
console.log(pattern6);

//pattern 7 problem- Given a value n n odd only- print the  Diamond pattern(space & star) n =3
//   *
//  ***
// *****
//  ***
//   *

//Approach
//bd 2 parts
//upper
//loop for each row
//inside row loop for n-row space  & loop for (2*row)-1 concatenate space & star
//lower
//loop for each row  (n-1)
//inside row loop for n-1 space  & loop for 2*(n-row)-1 concatenate space & star

console.log("Diamond pattern7");

function upperTriangle(n) {
  for (let row = 1; row <= n; row++) {
    let star = "";
    for (space = 1; space <= n - row; space++) {
      star += " ";
    }
    for (col = 1; col <= 2 * row - 1; col++) {
      star += "*";
    }
    console.log(star);
  }
}

function lowerTriangle(n) {
  //lower triangl has n-1 row
  for (let row = 1; row <= n - 1; row++) {
    let star = "";
    //in a row spaces = row
    for (space = 1; space <= row; space++) {
      star += " ";
    }
    for (col = 1; col <= 2 * (n - row) - 1; col++) {
      star += "*";
    }
    console.log(star);
  }
}

//combine the pattern
function Diamondpattern(n) {
  upperTriangle(n);
  lowerTriangle(n);
}

let pattern7 = Diamondpattern(5);
console.log(pattern7);

console.log("hourglass");
//hour glass
function invertedDiamondpattern(n) {
  lowerTriangle(n);
  upperTriangle(n);
}

let pattern8 = invertedDiamondpattern(5);
console.log(pattern8);

console.log("Butterfly");
//pattern - 9
//problem- Given a value n n-odd only- print the  butterfly pattern(space & star) n =3

//Approach
//bd 3 parts
//upper
//loop for each row (n-1)/2
//inside row loop for row leftspace  & loop for n-2(row)  star & loop for row  right space concatenate left space & star & right star
//middle
//loop inside single row concatenate n stars
//lower
//loop for each row  (n-1)
//inside row loop for n-1 space  & loop for 2*(n-row)-1 concatenate space & star

function upper(n) {
  for (let row = 1; row <= (n - 1) / 2; row++) {
    let star = "";
    for (let lstar = 1; lstar <= row; lstar++) {
      star += "*";
    }
    for (let space = 1; space <= n - 2 * row; space++) {
      star += " ";
    }
    for (let rstar = 1; rstar <= row; rstar++) {
      star += "*";
    }
    console.log(star);
  }
}

// function middle(n){
//   for(let row = 1; row <=1; row++){
//     let str = " ";
//   for(let star = 1; star <= n; star++){
//     str += "*";
//   }
//   console.log(str);
//   }

// }

//no need of loop for 1 row
function middle(n) {
  let str = "";
  for (let star = 1; star <= n; star++) {
    str += "*";
  }
  console.log(str);
}

function lower(n) {
  for (let row = 1; row <= (n - 1) / 2; row++) {
    let star = "";
    for (let lstar = 1; lstar <= (n - 1) / 2 - row + 1; lstar++) {
      star += "*";
    }
    for (let space = 1; space <= 2 * row - 1; space++) {
      star += " ";
    }
    for (let rstar = 1; rstar <= (n - 1) / 2 - row + 1; rstar++) {
      star += "*";
    }
    console.log(star);
  }
}

function valley(n) {
  upper(n);
  middle(n);
}
let pattern9 = valley(5);
console.log(pattern9);

function spacetriangledown(n) {
  middle(n);
  upper(n);
}
let pattern10 = spacetriangledown(5);
console.log(pattern10);

function butterfly(n) {
  upper(n);
  middle(n);
  lower(n);
}
let pattern11 = butterfly(5);
console.log(pattern11);

function spacetriangleup(n) {
  lower(n);
  middle(n);
}
let pattern12 = spacetriangleup(5);
console.log(pattern12);

function spacetriangle(n) {
  lower(n);
  upper(n);
}
let pattern13 = spacetriangle(5);
console.log(pattern13);

function spac(n) {
  upper(n);
  lower(n);
}
let pattern14 = spac(5);
console.log(pattern14);

console.log("2 Number pattern");

//problem - given a value n print the following pattern (space & number)

//Approach 
//2 parts
//1st part - 
//     1
//    12
//   123
//  1234
// 12345
//for every row we have space & number - for every row -loop
//inside row we have spaces -loop
//inside row we print number until number

function numtrialpattern15(n)
{
  for(let row = 1; row <= n; row ++){
    let spacenum = "";
    for (let spacecol = 1; spacecol <= n-row; spacecol++) {
      spacenum += " ";}
    for (let numcol = 1; numcol <= row; numcol++) {
      spacenum += console.log(numcol)}
    console.log(spacenum);
  }
}
let failedpattern15 = numtrialpattern15(5);
console.log(failedpattern15);

//note use counter variable to add number 
//attach number to str & increment
// string += number -> concatenates number to string changes its type
//1st part
function numpattern15_1(n) {
  for (let row = 1; row <= n; row++) {
    let str = "";
    for (let spacecol = 1; spacecol <= n - row; spacecol++) {str += " ";}
    let counter = 1;
    for (let numcol = 1; numcol <= row; numcol++) {
      str += counter;
      counter ++;
    }
    console.log(str);
  }
}
let pattern15_1 = numpattern15_1(5); 
console.log(pattern15_1);

//2nd part  for loop decreasing number
function numpattern15_2(n) {
  for (let row = 1; row <= n; row++) {
    let str = "";
    let counter = row-1;
    for (let numcol = 1; numcol <= row- 1; numcol++) {
      str += counter;
      counter--;
    }
    console.log(str);
  }
}
let pattern15_2 = numpattern15_2(5);
console.log(pattern15_2);
 
//     1
//    12
//   123
//  1234
// 12345

// 1
// 21
// 321
// 4321
function combinedTriangle(n) {
  numpattern15_1(n);
  numpattern15_2(n);
}

let pattern15 = combinedTriangle(5);
console.log(pattern15);

// inorder to combine the triangle combine both part in same loop
//     1
//    121
//   12321
//  1234321
// 123454321

function numpattern15(n) {
  for (let row = 1; row <= n; row++) {
    let str = "";
    for (let spacecol = 1; spacecol <= n - row; spacecol++) {
      str += " ";
    }
    let counter = 1;
    for (let numcol = 1; numcol <= row; numcol++) {
      str += counter;
      counter++;
    }
    let counter2 = row - 1;
    for (let numcol = 1; numcol <= row - 1; numcol++) {
      str += counter2;
      counter2--;
    }
    console.log(str);
  }
}
let pattern_15 = numpattern15(5);
console.log(pattern_15);

//GCD problem
//16- Given 2 number a & b find the greatest common factor of a,b

//Approach
//ip- 24,28 op-4
//for d starting from 2 to min (a,b) - loop
//check given a,b divisible by d - if else
//return gcd at the end

function greatestCommonDivisor(a,b){
  let gcd = 1;
  for(let d = 2; d <= Math.min(a,b);d++){
    if (a % d == 0 && b % d == 0) {
       gcd = d;
    }
  }
  return gcd;
}
let p_16 = greatestCommonDivisor(24,28);
console.log("gcd:",p_16);

//sum of numbers problem
//15- Given  number x calculate the sum of digits of x

//Approach
//ip- 4136 op-14
//number -loop
//extract no -  divide num by 10 - reminder - sum
//eliminate the extracted number

function sumOfNumbers(x){
  let sum = 0;
  while(x){
    lastdigit = x%10 ;
    sum += lastdigit;
    x = Math.floor(x/10);

  }
  return sum

}
let x = 4136;
let p_17 = sumOfNumbers(x);
console.log(`sum of numbers of ${x} is : ${p_17}`);

//Palindrome
//Given the number x check if the number is a palindrome or not

//Quadratic problem
//Given 3 number a,b,c which represent coefficient of quadratic equation
//ax^2 + bx + c
//fint the root of quadratic equation

//approach
//ip-a,b,c op-real roots
//real roots (-b+srt(b^2 -4ac))/2a, (-b-srt(b^2 -4ac))/2a

function solveroot(a, b, c) {
  let sqrValue = Math.sqrt(b * b - 4 * a * c);
  let root1 = (-b + sqrValue) / (2 * a);
  let root2 = (-b - sqrValue) / (2 * a);

  console.log(root1, root2);
}

solveroot(2, 5, 3);
