'use strict';

const acct = {
  owner: 'Dan',
  txns: [200, 300, 450, 320],

  get latestTxn() {
    return this.txns.pop();
  },

  set latestTxn(val) {
    return this.txns.push(val);
  },
};

console.log(acct.latestTxn);
acct.latestTxn = 500;
console.log(acct.latestTxn);
console.log(acct.txns);

// Use getters and setters on a class
const now = new Date().getFullYear();

class Memeber {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  get age() {
    return now - this.birthYear;
  }
}

const jasinta = new Memeber('Jasinta', 1963);
console.log(jasinta.age);
