'use strict';
var x = 3;
// create a function that returns it's input factorial


var test = require('tape');

var factorial = function (input_num) {
  var result = 1;
  for (var i=input_num; i>0; i-=1) {
    result = result * i;
  }
  return result;
}

test('factorial of an element', function (t) {
    var actual = factorial(x);
    var expected = 6;

    t.equal(actual, expected);
    t.end();
});
