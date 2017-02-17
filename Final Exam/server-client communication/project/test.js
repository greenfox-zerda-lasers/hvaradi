'use strict';

var test = require('tape');
var sum = require('./sum.js');

test("function can sum 2 numbers", function (t) {
  t.ok(sum(2, 3, 5));
  t.end();
});
