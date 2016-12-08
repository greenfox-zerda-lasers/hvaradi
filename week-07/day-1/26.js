
'use strict';

var y = 'seasons';
var out = 6;
// if the last and the first letter of the string
// are the same double the variable
// called out, if not half it

if (y.slice(0,1) == y.slice(-1)) {
  console.log(out * 2);
} else {
  console.log(out / 2);
}
