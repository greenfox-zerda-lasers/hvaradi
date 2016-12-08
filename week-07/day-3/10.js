'use strict';

// create a student object
// that has a method `addgrade`, that takes a grade from 1 to 5
// an other method `getAverage`, that returns the average of the grades

var student = {
grade_list : [],

  addgrade: function(grade) {
    if (grade >= 1 && grade <= 5) {
      this.grade_list.push(grade);
    }
  },
  getAverage: function() {
    var b = this.grade_list.reduce(function(acc, elem) {
    return acc + elem
    });
  return b / student.grade_list.length
  }
}
student.addgrade(3);
student.addgrade(5);
student.addgrade(4);
console.log(student.getAverage());
