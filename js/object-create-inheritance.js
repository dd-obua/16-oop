'use strict';

const now = new Date().getFullYear();

const PersonProto = {
  calcAge() {
    return now - this.birthYear();
  },

  init(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  },
};

const peter = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (fullName, birthYear, course) {
  PersonProto.init.call(this, fullName, birthYear);
  this.course = course;
  this.course = course;
};

StudentProto.introduce = function () {
  return `My name is ${this.fullName} and I study ${this.course}`;
};

const pius = Object.create(StudentProto);

pius.init('Pius Omoding', 1996, 'Quantitative Economics');
console.log(pius);
console.log(pius.introduce());