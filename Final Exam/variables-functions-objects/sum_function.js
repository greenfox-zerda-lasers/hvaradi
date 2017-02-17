'use strict';

var numbers = [4, 5, 6, 7, 8, 9, 10]
// write your own sum function

function sum(arr) {
  var result = 0;
  for (var i=0; i<arr.length; i++) {
    result = result + arr[i];
  }
  return result
}
console.log(sum(numbers));
