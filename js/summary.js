'use strict';

const now = new Date().getFullYear();

class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    return now - this.birthYear;
  }
}
