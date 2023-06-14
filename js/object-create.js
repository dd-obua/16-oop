'use strict';

// Use object.create to implement prototypal inheritance
const now = new Date().getFullYear();

const PersonProto = {
  calcAge() {
    return now - this.birthYear;
  },
};

const leo = Object.create(PersonProto);

console.log(leo);
leo.name = 'Leo Ogwang';
leo.birthYear = 1985;
const ageLeo = leo.calcAge();
