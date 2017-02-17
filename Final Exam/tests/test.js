'use strict';

var test = require('tape');
var mixer = require('./Helga_8.js');

test("items are in one array", function (t) {
  t.deepEqual(mixer([1,2], [3,4]), ([1,3,2,4]));
  t.end();
});


// test("addition", function (t) {
//   t.equal(1, 1);
//   t.end();
// });
