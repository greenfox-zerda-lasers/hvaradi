'use strict';

var names = ['Zakarias', 'Hans', 'Otto', 'Ole'];
// create a function that returns the shortest string
// from an array

var test = require('tape');

var shortestName = function (list) {
  var shortest = list[0]
  for ( var i = 0; i < list.length; i++){
    if (list[i].length < shortest.length) {
      shortest = list[i]
    }
  }
  return shortest
}

test('shortest name of the list', function (t) {
    var actual = shortestName(names);
    var expected = 'Ole';

    t.equal(actual, expected);
    t.end();
});
