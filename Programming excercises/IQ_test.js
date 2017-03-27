function iqTest(number){
  var evens = [];
  var odds = [];
  var num = number.split(" ")

console.log(num)

  for (var j=0; j<num.length; j++) {
    if (num[j] % 2 == 0) {
      evens.push(num[j]);
    } else if (num[j] % 2 != 0) {
      odds.push(num[j]);
    }
  }
  
  console.log(odds)
  console.log(evens)

  if (odds.length > 1) {
    for (var i=0; i<num.length; i++) {
      if (num[i] % 2 == 0) {
        return i+1;
      }
    }
  } else if (evens.length > 1) {
      for (var i=0; i<num.length; i++) {
        if (num[i] % 2 != 0) {
        return i+1;
      }
    }
  }
}

console.log(iqTest("4 5 8 2 2"))
