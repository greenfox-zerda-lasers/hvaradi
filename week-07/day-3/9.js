'use strict';

// create a function that takes a string and counts its letters
// it should return an object thats keys are the letters and the values are
// the counts.
// example: "apple" -> {a: 1, p: 2, l: 1, e: 1}

function letterCounter(word) {
  var splitted_word = word.split('');
  var a = splitted_word.reduce(function(acc, elem) {
    if (elem in acc) {
      acc[elem] += 1;
    } else {
      acc[elem] = 1;
    }
    return acc
  },{});
  return a
}

console.log(letterCounter('alma'));
