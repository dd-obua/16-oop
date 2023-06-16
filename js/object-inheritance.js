// Inhereitance among only objects

'use strict';

const now = new Date().getFullYear();

const Person = {
  calcAge() {
    return now - this.birthYear;
  },

  init(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  },
};

const wilber = Object.create(Person);
console.log(wilber);
wilber.init('Wilber Natamba', 1992);
console.log(wilber);

const Student = Object.create(Person);

Student.init = function (fullName, birthYear, course) {
  Person.init.call(this, fullName, birthYear);
  this.course = course;
};

Student.introduce = function () {
  return `I am ${this.fullName} and I study ${this.course}.`;
};

const james = Object.create(Student);
console.log(james);
console.log();

james.init('James Ocero', 1997, 'Education');
console.log(james);
console.log(james.introduce());
console.log(james.calcAge());
