'use strict';

// Create a function that takes a number and returns it as string in english
// like 0 -> "zero", it should work with the first 5 numbers, after it should
// return "many"

function numbers_with_string(input_num) {

  switch (input_num) {
    case 0:
      console.log('zero');
      break;
    case 1:
      console.log('one');
      break;
    case 2:
      console.log('two');
      break;
    case 3:
      console.log('three');
      break;
    case 4:
      console.log('four');
      break;
    case 5:
      console.log('five');
      break;
    default:
      console.log('many');
      break;
  }
}

console.log(numbers_with_string(3))
