'use strict';

// create a function that returns it's input factorial

function factorial(input_num) {
  var result = 1;
  for (var i=input_num; i>0; i-=1) {
    result = result * i;
  }
  return result;
}
console.log(factorial(3));
