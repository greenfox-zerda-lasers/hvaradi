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

function color(car) {
  var red = 0;
  var yellow = 0;
  var white = 0;
  var green = 0;
  car.forEach(function(item){
    if (item.color == 'red') {
      red = red + 1;
    } else if (item.color == 'yellow') {
      yellow = yellow + 1;
    } else if (item.color == 'white') {
      white = white + 1;
    } else if (item.color == 'green') {
      green = green + 1;
    }
  });
  console.log('red: ' + red, 'yellow: ' + yellow, 'white: ' + white, 'green: ' + green)
};

console.log(color(cars))
