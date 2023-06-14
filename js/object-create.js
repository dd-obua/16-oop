'use strict';

// Use object.create to implement prototypal inheritance
const now = new Date().getFullYear();

const PersonProto = {
  calcAge() {
    return now - this.birthYear;
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const leo = Object.create(PersonProto);

console.log(leo);
leo.name = 'Leo Ogwang';
leo.birthYear = 1985;
const ageLeo = leo.calcAge();

console.log(leo.name);
console.log(ageLeo);
console.log(leo.__proto__);
console.log();

const sharon = Object.create(PersonProto);
sharon.init('Sharon', 1991);
console.log(sharon);
console.log(sharon.calcAge());
