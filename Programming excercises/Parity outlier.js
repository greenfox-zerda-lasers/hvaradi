function findOutlier(num) {
  var evens = [];
  var odds = [];

  num.forEach(element) {
    if (element % 2 == 0) {
      evens.push(element);
    } else {
      odds.push(element);
    }
  }

  return odds.length > 1 ? evens[0] : odds[0];
}


// function findOutlier(int){
//   var evens=[],odds=[];
//   int.forEach(function(num){num% 2 !=0? odds.push(num):evens.push(num) });
//   return odds.length>1? evens[0]: odds[0];
//   }
