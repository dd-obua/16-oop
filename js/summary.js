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

class Student extends Person {
  university = 'Gulu University';
  #studyHours = 0;
  #course;
  static numSubjects = 10;

  constructor(fullName, birthYear, startYear, course) {
    super(fullName, birthYear);
    this.startYear = startYear;
    this.#course = course;
  }

  introduce() {
    return `I study ${this.#course} at ${this.university}`;
  }

  study(h) {
    this.#makeCoffee();
    this.#studyHours += h;
  }

  #makeCoffe() {
    return `Here is a coffee for you.`;
  }

  get testScore() {
    return _this.testScore;
  }

  set testScore(score) {
    this._testScore = score <= 20 ? score : 0;
  }

  static printCurriculum() {
    console.log(`There are ${this.numSubjects} subjects.`);
  }
}

const student = new Student('Dan', 1993, 2014, 'Computer Science');
