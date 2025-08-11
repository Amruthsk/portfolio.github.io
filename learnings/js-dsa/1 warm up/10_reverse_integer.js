//Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

var reverse = function (x) {
  let rev = 0;
  let max = (Math.pow(2, 31)) -1 ;
  let min = -Math.pow(2, 31);

  let tempnum = Math.abs(x);

  while (tempnum) {
    lastdigit = tempnum % 10;
    rev = 10 * rev + lastdigit;
    tempnum = Math.floor(tempnum / 10);
  }

  if (x < 0) {
    return (rev = -rev);
  }

  if (rev < min || rev > max) {
    return 0;
  }

  return rev;
};

let rev = -8463847412;
let min = -Math.pow(2, 31);
console.log(reverse(-2147483648));
console.log(rev);
console.log(min)
console.log(rev < min)