'use strict';

const sum = function (a, b) {
  return a + b;
};

console.log(sum.__proto__);
console.log(sum.color);

const now = new Date().getFullYear();

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const joe = new Person('Joe', 1990);
const stel = new Person('Stella', 1992);
const dan = new Person('Dan', 1993);
console.log(joe);
console.log(stel);
console.log(dan);

const j = 'joe';
console.log(joe instanceof Person);

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  return now - this.birthYear;
};

joe.calcAge();
stel.calcAge();
dan.calcAge();

console.log();
console.log("Joe's prototype:", joe.__proto__);
console.log('Person.prototype:', Person.prototype);
console.log(joe.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(joe));
console.log(Person.prototype.isPrototypeOf(now));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo sapiens';

console.log(dan.hasOwnProperty('firstName'));
console.log(dan.hasOwnProperty('species'));
console.log(Person.prototype.constructor);

console.log();
console.log(Person.prototype.prototype);
