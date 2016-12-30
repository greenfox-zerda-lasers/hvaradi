'use strict'

var aj = 'kuty'
// write a function that gets a string as an input
// and appends an 'a' character to its end and returns a new string

var test = require('tape');

var append = function (a) {
  return a + "a";
}

test('append string', function (t) {
    var actual = append(aj);
    var expected = 'kutya';

    t.equal(actual, expected);
    t.end();
});
