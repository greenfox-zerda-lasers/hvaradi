function XO(str) {
  var x = [];
  var o = [];
  var string = str.toLowerCase();

  for (var i=0; i<=string.length;i++) {
    if (string[i] == 'x') {
      x.push(string[i]);
    } else if (string[i] == 'o') {
      o.push(string[i]);
    }
  }

  console.log(x);
  console.log(o);

  //
  // str.forEach(function(element){
  //  if (element == x) {
  //    x.push(element);
  //  } else if (element == o) {
  //    o.push(element);
  //  }
  // });

  if (x.length == o.length) {
    return true;
  } else {
    return false;
  }
}

console.log(XO("xoxBOOo"))
