'use strict';

const now = new Date().getFullYear();

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  return now - this.birthYear;
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  return `My name is ${this.firstName} and I study ${this.course}.`;
};

Student.prototype.constructor = Student;

const mike = new Student('Mike', 2002, 'Computer Science');
console.log(mike);
console.log(mike.introduce());
console.log(mike.calcAge());

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
console.log(mike.__proto__.__proto__.__proto__);

console.dir(Student.prototype.constructor);
console.log();

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);
