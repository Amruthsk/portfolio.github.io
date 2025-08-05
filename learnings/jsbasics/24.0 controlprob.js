//speed limint = 70
//5km -> 1 point
//Math.floor(1.3)
// 12 points -> suspended

// Demerit points

function checkSpeed(speed)
{
    const sl = 70;
    let s = Math.floor(speed);
    const kmpp = 5;
    const point = (s - sl) / kmpp;

    if (s < sl + kmpp) {
        console.log("ok");
        return; //exit function
    }
    if (point > 12) console.log("license suspended");
    else console.log(`points`, point);
    
        

}

//ok
checkSpeed(70);
checkSpeed(72);
//1
checkSpeed(75); 
//
checkSpeed(90);
checkSpeed(100);
checkSpeed(120);
checkSpeed(130);
checkSpeed(140);

//even odd number

// function showNumbers(limit){
//     for (let i = 0; i <= limit; i++) 
//     {
//         if(i%2 == 0) console.log(i,"Even");
//         else console.log(i,'Odd');
//     }
    
    

// }

// showNumbers(10);

//cleaner version

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    const message = (i % 2 == 0)? 'Even':'Odd'
     console.log(i, message);
  }
}

showNumbers(13);


// counttruthy

function countTruthy(array){
    let count = 0;
    for (let value of array)
        if (value) count++;
    return count; //outside loop
}

let arr = [null, "jhon", "wick", 2, 3];
console.log(countTruthy(arr));


//show properties of string

function showProperties(obj){
     for (let key in obj)
        if (typeof obj[key] == 'string')
             console.log(key,obj[key]);

}

const movie = {
    title:'a',
    releaseYear: 2018,
    rating:4.5,
    director:'b'
}
showProperties(movie);

// sum of multiples 3 and 5


console.log(sum(9));

function sum(limit){
    let sum = 0;

    for(let i=1; i<=limit; i++){
        if (i % 3 == 0 || i % 5 == 0)
            sum += i;
    }
    return sum; //outside loop
} 


// calculateGrade
const marks = [80, 80, 97, 50];

console.log(calculateGrade(marks));

// function calculateGrade(marks) {
// //calculate sum
//   let sum = 0;

//   for (let i = 0; i < marks.length; i++) {//sum
//     sum += marks[i];
//   }

//   let avg = sum / marks.length;

//   // map average with grade
//   const grade = //grade condition
//     avg >= 0 && avg <= 59 ? "F"
//       : avg >= 60 && avg <= 69 ? "D"
//       : avg >= 70 && avg <= 79 ? "C"
//       : avg >= 80 && avg <= 89 ? "B"
//       : "A";

//   console.log(avg, grade);
//   return grade;
// }

// // function do one thing at one time make it reusable

// function calculateGrade(marks){
//     const avg = calculateAverage(marks);
//     if (avg < 60) return 'F';
//     if (avg < 70) return "D";
//     if (avg < 80) return "C";
//     if (avg < 90) return "B";
//     console.log(avg);
//     return "A";
// }


// // function to calculate average
// function calculateAverage(array){
//     let sum = 0;
//     for (let value of array)
//         sum += value;
//     return sum / array.length;

// }




// function calculateGrade(marks) {
//   const avg = calculateAverage(marks);
//   return avg < 60 ? "F"
//     : avg < 70 ? "D"
//     : avg < 80 ? "C"
//     : avg < 90 ? "B"
//     : "A";
// }

//single responsibility priniciple- function small and focused on only one thing


function calculateAverage(array) {
  const sum = array.reduce((accumulator, current) => accumulator + current, 0);
  return sum / array.length;
}

function calculateGrade(marks) {
  const avg = calculateAverage(marks);
  const grade =avg < 60 ? "F"
               : avg < 70 ? "D"
               : avg < 80 ? "C"
               : avg < 90 ? "B"
               : "A";
    
  return { grade, average: avg };
}

//stars - pattern

showStars(4);

// function showStars(rows){
//     for (let i=0; i<= rows; i++){
//         let pattern = '';
//         for (let j=0; j < i;j++){
//              pattern += '*';
//             }
//          console.log(pattern);
//         }
            
// }

function showStars(rows) {
  for (let i = 1; i <= rows; i++) {
    console.log("*".repeat(i));
  }
}

showStars(6);


console.log('*'.repeat(1)); // prints *
console.log('*'.repeat(2)); // prints **
console.log('*'.repeat(3)); // prints ***
console.log('*'.repeat(4)); // prints ****




showPrimes(10);

// function showPrimes(limit){
//     for(let i = 2; i<= limit; i ++){
//         if(checkPrime(i) == 'prime')
//             return console.log(i);
//     }

// }

// function checkPrime(limit){
//     for(let d = 2; d < limit; d++){
//         const prime = limit%d == 0 ? 'not prime':'prime';
//         return prime
    
//     }
// }

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++) {
    if (checkPrime(number)) console.log(number,'Prime');
  }
}

function checkPrime(number) {
  for (let factor = 2; factor < number; factor++) {
    if (number % factor === 0) return false; // Not a prime
  }
  return true; // Prime
}



// checkPrime(number) loops from 2 to number-1.

// If number is divisible by d, it's not prime, return false.

// If no divisors are found, it's prime, return true.

// showPrimes(limit) loops from 2 to limit.

// If checkPrime(i) returns true, print i.

showPrimes(16);

//faster version of checkPrime

// function checkPrime(number) {
//   for (let d = 2; d <= Math.sqrt(number); d++) {
//     if (number % d === 0) return false; // Not prime
//   }
//   return true; // Prime
// }
