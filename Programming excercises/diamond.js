// function diamond(n){
//   var elem = '*'
//   for (var i=n; i<=1; i--) {
//     console.log(elem.repeat(i));
//   }
//   return console.log("whaaaat?")
//   // return diam;
// }
//
// diamond(5)

function diamond(n) {
  var n = 10;
  for (var i = 1 ; i < n ; i += 2) {
      for (var j = 0 ; j < n - 1 - i / 2 ; j++)
          console.log(" ");

      for (var j = 0 ; j < i ; j++)
          console.log("*");

      console.log("\n");
  }

  for (var i = 7 ; i > 0 ; i -= 2) {
      for (var j = 0 ; j < 9 - i / 2 ; j++)
          console.log(" ");

      for (var j = 0 ; j < i ; j++)
          console.log("*");

      console.log("\n");
  }
}
