'use strict';

// Create a constructor for creating Rectangles.
// it should take two parameters: the sides of the rectangle
// Every rectangle should have a method called getArea() that returns its area
// Every rectangle should have a method called getCircumference() that returns its circumference

function Rectangle(side_a, side_b) {
  this.side_a = side_a;
  this.side_b = side_b;
}

Rectangle.prototype.getArea = function() {
  console.log(this.side_a * this.side_b);
}

Rectangle.prototype.getCircumference = function() {
  console.log(2 * this.side_a + 2 * this.side_b);
}

var first_rectangle = new Rectangle(2, 5);
first_rectangle.getArea()
first_rectangle.getCircumference()
