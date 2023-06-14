'use strict';
const now = new Date().getFullYear();

class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    return now - this.birthYear;
  }
}

const richard = new Person('Richard', 1963);
console.log(richard);
