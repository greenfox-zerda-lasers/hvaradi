'use strict';

var numbers = [3, 4, 5, 6, 7];
// write a function that filters the odd numbers
// from an array and returns a new array consisting
// only the evens

var test = require('tape');

var oddNums = function (numList) {
  var new_list = []
  for (var i = 0; i < numList.length; i++) {
    if (numList[i] % 2 == 0) {
      new_list.push(numList[i])
    }
  }
  return new_list
}

test('even elements of a list', function (t) {
    var actual = oddNums(numbers);
    var expected = [4, 6];

    t.deepEqual(actual, expected);
    t.end();
});
