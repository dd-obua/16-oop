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

  greet() {
    return `Hey ${this.fullName}.`;
  }

  getAge() {
    return now - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else console.log(`${this.fullName} is not a full name.`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    return `Hey there :raised_hand_with_fingers_splayed:`;
  }
}

class Student extends Person {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    return `My name is ${this.fullName} and I study ${this.course}`;
  }
}

const willy = new Student('Willy Oneka', 2000, 'Computer Science');
console.log(willy);
