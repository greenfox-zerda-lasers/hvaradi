'use strict';

// create a function that takes a string and a letter and returns a boolean
// it should return true if the string consits the given letter, false otherwise

function contain_letter(word, letter) {
  var letters = word.split('');
  var true_or_false = letters.map(function(item) {
    if (item == letter) {
      return true;
    } else {
      return false;
    }
  });
  var result = true_or_false.some(function(item) {
    if (item == true) {
      return true;
    } else {
      return false;
    }
  });
  return result
}
console.log(contain_letter('apple','a'));

//
// function letterInspector(string, letter) {
//   return string.split("").some(function(char){
//     return char === letter;
//   });
// }
// console.log(letterInspector('apple', 'a'))
