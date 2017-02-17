// Create a function that counts the cars by colors
// With an output like: {red: 3, yellow: 2, white: 1, green: 1}


const cars = [{
    color: 'red',
    type: 'Volvo'
  }, {
    color: 'yellow',
    type: 'VW'
  }, {
    color: 'red',
    type: 'Ferrari'
  }, {
    color: 'white',
    type: 'Tesla'
  }, {
    color: 'yellow',
    type: 'Toyota'
  }, {
    color: 'red',
    type: 'Lada'
  }, {
    color: 'green',
    type: 'Trabant'
}];

function colorCounter(arr){
   const carsByColors = {};
   const x = arr.map(function(item) {
       return item.color;
   });
   x.forEach(function(item) {
       if (carsByColors[item]) {
           carsByColors[item] += 1;
       } else {
           carsByColors[item] = 1;
       }
       return carsByColors;
   });
   return carsByColors;
}
console.log(colorCounter(cars));
