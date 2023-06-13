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

console.log(dan.species, joe.species);
console.log(dan.hasOwnProperty('firstName'));
console.log(dan.hasOwnProperty('species'));

console.log(dan.__proto__);
console.log(dan.__proto__.__proto__);
console.log(dan.__proto__.__proto__.__proto__);

const arr = [1, 2, 4, 5, 6, 3, 4, 5, 6];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function (arr) {
  return [...new Set(this)];
};

console.log('Unique:', arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);
console.dir(x => x + 1);
