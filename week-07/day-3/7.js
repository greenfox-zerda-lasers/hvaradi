'use strict';

var numbers = [2, 5, 11, 22];

// create a function that takes an array of numbers and returns a boolean
// it should return true if all the elements are prime, false otherwise

function prime(list_of_numbers) {
  return list_of_numbers.every(function(item) {
      for (var j=2; j<item; j++) {
        if (item % j === 0) {
          return false;
        }
      }
      return true;
  });
}
console.log(prime(numbers))
