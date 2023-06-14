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
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // create instance methods
  get age() {
    return now - this.birthYear;
  }

  // Validate name (set a property that already exists)
  set fullName(nm) {
    if (nm.includes(' ')) this._fullName = nm;
    else console.log(`${this._fullName} is not a full name.`);
  }

  get fullName() {
    return this._fullName;
  }

  // create static method
  static hey() {
    console.log('Hey there! 🖐️');
    console.log(this);
  }
}

const jasinta = new Memeber('Jasinta Ongom', 1963);
console.log(jasinta.age);

const dan = new Memeber('Dan', 1993);
console.log(dan.fullName);

const denis = new Memeber('Denis Obua', 1993);
console.log(denis.fullName);

// Create static method on Member constructor 
Memeber.hey = function () {
  console.log('Hey there! 🖐️');
  console.log(this);
};
Memeber.hey();
