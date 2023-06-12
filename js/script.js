'use strict';

const now = new Date().getFullYear();

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const joe = new Person('Joe', 1990);
const stel = new Person('Stel', 1992);
const dan = new Person('Dan', 1993);

console.log(joe);
console.log(stel);
console.log(dan);

const denis = '';
console.log(dan instanceof Person);
console.log(denis instanceof Person);
