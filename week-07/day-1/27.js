'use strict';

var z = 13;
// if z is between 10 and 20 print 'Sweet!'
// if less than 10 print 'More!',
// if more than 20 print 'Less!'

if (z < 20 && z > 10) {
  console.log('Sweet!');
} else if (z < 10) {
  console.log('More!');
} else if (z > 20) {
  console.log('Less!');
}
