'use strict';

const now = new Date().getFullYear();

class PersonProto {
  calcAge() {
    return now - this.birthYear();
  }

  init(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
}
