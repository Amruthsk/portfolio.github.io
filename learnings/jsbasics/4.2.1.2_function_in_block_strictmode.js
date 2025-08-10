"use strict";
{
  function fun() {
    return "123";
  }
  console.log(fun); //accessible only inside
}

console.log(fun); // not accessible outside the { } -// error
