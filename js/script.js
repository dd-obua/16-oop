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

// Prototypes
Person.prototype.calcAge = function (age) {
  console.log(now - this.birthYear);
};
Person.prototype.species = 'Homo sapiens';

console.log(Person.prototype);
joe.calcAge();
stel.calcAge();
dan.calcAge();

console.log(dan.__proto__);
console.log(dan.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(dan));
console.log(Person.prototype.isPrototypeOf(Person));
