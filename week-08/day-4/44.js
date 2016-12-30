'use sttict';

var numbers = [7, 5, 8, -1, 2];
// Write a function that returns the minimal element
// in an array (your own min function)

var test = require('tape');

var minimum = function (list) {
  var min = list[0]
  for (var i = 0; i < list.length; i++) {
    if (list[i] < min) {
      min = list[i]
    }
  }
  return min
}

test('minimum of a list', function (t) {
    var actual = minimum(numbers);
    var expected = -1;

    t.equal(actual, expected);
    t.end();
});
