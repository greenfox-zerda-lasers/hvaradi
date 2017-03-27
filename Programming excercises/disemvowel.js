// function disemvowel(str) {
//
//   var vowel = ['a','e','i','o','u'];
//
//   for (var i=0; i<str.length; i++) {
//     if (str[i].indexOf(vowel) != -1) {
//       str[i].remove
//     }
//   }
//   return str;
// }
//
// console.log(disemvowel('masik'))


function disemvowel(str) {
  var result = "";
  for (var i=0; i<str.length; i++) {
    var newWord = str[i];
    if ("aeiou".match(newWord) == null) {
      result += newWord;
    }
  }
  return result
}
console.log(disemvowel('almafa'))
