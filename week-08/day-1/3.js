'use strict';

// Create a constructor for creating Rockets.
// it should take one parameter: the consumption of the rocket
// (amount of fuel needed for launch)
// Every rocket should have a method called fill(amount) that fills the tank of
// the rocket with the amount of fuel given as a parameter
// Every rocket should have a method called launch() that launches the rocket
// if it has enough fuel (more than its consumption)

function Rockets(consumption) {
  this.consumption = consumption;
  this.amount = 0;
}

Rockets.prototype.fill = function(amount) {
  this.amount += amount;
}

Rockets.prototype.launch = function() {
  if (this.consumption < this.amount) {
    console.log('It has been launched!');
  } else {
    console.log('Fuel needed!')
  }
}


var first_rocket = new Rockets(6000);
first_rocket.fill(7000);
console.log(first_rocket.amount);
first_rocket.launch();
first_rocket.fill(3000);
console.log(first_rocket.amount);
first_rocket.launch();
