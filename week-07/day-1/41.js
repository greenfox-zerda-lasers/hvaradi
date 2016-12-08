'use strict';

var numbers = [4, 5, 6, 7, 8, 9, 10]
// write your own sum function

function sum(input_list) {
  var result = 0;
  for (var i=0; i<input_list.length; i++) {
    result = result + input_list[i];
  }
  return result
}
console.log(sum(numbers));
