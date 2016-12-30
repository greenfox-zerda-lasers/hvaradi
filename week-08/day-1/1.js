'use strict';

// Create a constructor for creating Animals.
// it should take one parameter: what the animal says
// Every animal should have a method called say() that prints what the animal says


function Animal(what_does_he_says) {
  this.sound = what_does_he_says;
}

Animal.prototype.say = function() {
  console.log(this.sound);
}

var dog = new Animal('Vau');
dog.say()
