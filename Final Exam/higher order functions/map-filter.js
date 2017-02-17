'use strict';

var numbers = [2.4, 3.5, 1.7, 3.3, 1.2];

// create a function that takes an array of numbers,
// it should return a new array that consists only the numbers that are
// bigger than 2 and all of it's elements should be rounded

function round_if_bigger(list) {
  var i = list.filter(function(item) {
    return item > 2.0;
  });
  var p = i.map(function(item){
    return Math.round(item);
  });
  return p
}

console.log(round_if_bigger(numbers));
