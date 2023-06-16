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

  greet() {
    return `Hey ${this.firstName}.`;
  }

  getAge() {
    return now - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else console.log(`${this.fullName} is not a full name.`);
  }

  set fullName(name) {
    return this._fullName;
  }

  static hey() {
    return `Hey there :raised_hand_with_fingers_splayed:`;
  }
}
