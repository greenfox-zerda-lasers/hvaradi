'use strict';

var students = [
  {name: 'Rezso', age: 9.5, candies: 2},
  {name: 'Gerzson', age: 10, candies: 1},
  {name: 'Aurel', age: 7, candies: 3},
  {name: 'Zsombor', age: 12, candies: 5},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'Teodor', age: 3, candies: 2}
];

// create a function that counts the students that
// has more than 4 candies

var i = 0;

students.forEach(function(item) {
    if (item.candies > 4) {
      i += 1;
    }
});

console.log(i)
