'use strict';

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.txns = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account ${owner}`);
  }

  // Public interface of Account object
  transact(val) {
    this.txns.push(val);
  }

  deposit(val) {
    this.transact(val);
  }

  withdraw(val) {
    this.transact(-val);
  }
}

const acct1 = new Account('Dan', 'UGX', 1111);
console.log(acct1);

acct1.deposit(450);
acct1.withdraw(300);
