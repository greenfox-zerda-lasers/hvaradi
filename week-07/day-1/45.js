'use strict';

var names = ['Zakarias', 'Hans', 'Otto', 'Ole'];
// create a function that returns the shortest string
// from an array

function shortestName(list) {
  var shortest = list[0]
  for ( var i = 0; i < list.length; i++){
    if (list[i].length < shortest.length) {
      shortest = list[i]
    }
  }
  return shortest
}

console.log(shortestName(names))
