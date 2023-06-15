'use strict';

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

const carl = Object.create(PersonProto);
console.log(carl);
carl.name = 'Carlos';
carl.birthYear = 1988;
const ageCarl = carl.calcAge();
console.log(ageCarl);

console.log(carl.__proto__);
console.log(PersonProto);
console.log(carl.__proto__ === PersonProto);

const leo = Object.create(PersonProto);
leo.init('Leonard', 2002);
console.log(leo);
console.log(leo.calcAge());
