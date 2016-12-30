'use strict';

var numbers = [4, 5, 6, 7, 8, 9, 10]
// write your own sum function

var test = require('tape');

var sum = function (input_list) {
  var result = 0;
  for (var i=0; i<input_list.length; i++) {
    result = result + input_list[i];
  }
  return result
}

test('sum array elemenets', function (t) {
    var actual = sum(numbers);
    var expected = 49;

    t.equal(actual, expected);
    t.end();
});
