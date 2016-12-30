'use strict';

var ai = 123;
// create a function that doubles it's input
// double ai with it

var test = require('tape');

var double = function (a) {
  return a * 2;
}

test('double a number', function (t) {
    var actual = double(5);
    var expected = 10;

    t.equal(actual, expected);
    t.end();
});
