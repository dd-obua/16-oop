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

// Link prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  return `My name is ${this.firstName} and I study ${this.course}.`;
};

const max = new Student('Max', 2002, 'Business Administration');
console.log(max);
console.log(max.introduce());
console.log(max.calcAge());

Student.prototype.constructor = Student;

console.log(max.__proto__);
console.log(max.__proto__.__proto__);
console.log(max.__proto__.__proto__.__proto__);

console.log(max instanceof Student);
console.log(max instanceof Person);
console.log(max instanceof Object);  
