// Create a function that takes two arrays and mixes them like this:
// `[1, 2, 3]` and `[6, 7, 8]` becomes `[1, 6, 2, 7, 3, 8]`

var first = [1, 2, 3];
var second = [6, 7, 8];

function mixer(arr1, arr2) {
  var newarr = [];
  var long = arr1.length;
  for (var i = 0; i<long; i++) {
    newarr.push(arr1[i], arr2[i])
  }
  return newarr
}
console.log(mixer(first,second))

module.exports = mixer;


///////////////////////////////////////////////////////
// function proba(egy, ketto) {
//   var egy = egy.concat(ketto);
//   return egy
// }
// console.log(proba(first, second))
///////////////////////////////////////////////////////

// function mixer(arr1, arr2) {
//   var newarr = [];
//   for (var i = 0; i < arr2.length; i++) {
//     if (i % 2 == 0) {
//       newarr.push(arr1[i]);
//     } else {
//       newarr.push(arr2[i]);
//     }
//   }
//   return newarr
// };
//
// console.log(mixer(first, second));
