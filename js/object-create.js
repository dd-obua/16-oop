'use strict';

// Use object.create to implement prototypal inheritance
const now = new Date().getFullYear();

const PersonProto = {
  calcAge() {
    return now - this.birthYear;
  },
};
